// ═══════════════════════════════════════════
// EconLearn — Main Application Logic
// ═══════════════════════════════════════════

const STORAGE_PREFIX = 'econlearn';

// State
let done = new Set();
try { done = new Set(JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}-done`) || '[]')); } catch(e) {}
let total = 0;
units.forEach(u => total += u.nodes.length);
let qIdx = 0, qAns = false, qScore = 0, shuffled = [];
let lastScrollY = 0;
let ddOpen = false;
let quizUnit = 'all';
let customCards = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}-custom-cards`) || '[]');
let fcFilter = '';
const collapsed = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}-collapsed`) || '{}');

// ═══════════════════════════════════════════
// TAB NAVIGATION
// ═══════════════════════════════════════════

function showTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
  if (id === 'lessons') closeLesson();
  if (id === 'flashcards') initFlashcards();
}

// ═══════════════════════════════════════════
// LESSON LIST (DUO PATH)
// ═══════════════════════════════════════════

function toggleUnit(num) {
  collapsed[num] = !collapsed[num];
  localStorage.setItem(`${STORAGE_PREFIX}-collapsed`, JSON.stringify(collapsed));
  buildList();
}

function buildList() {
  let h = '<div class="duo-path">';
  units.forEach(u => {
    const doneCount = u.nodes.filter(n => done.has(u.unitNum + '-' + n.name)).length;
    const isCollapsed = collapsed[u.unitNum] !== false;
    const allDone = doneCount === u.nodes.length;
    h += `<div class="duo-unit"><div class="duo-unit-header" style="background:${u.gradient};box-shadow:0 4px 0 ${u.shadow}" onclick="toggleUnit(${u.unitNum})"><div class="unit-label">Unit ${u.unitNum} · ${doneCount}/${u.nodes.length} <span class="unit-toggle">${isCollapsed ? '▶' : '▼'}</span></div><div class="unit-name">${u.label}</div>${allDone ? '<div style="font-size:0.7rem;margin-top:4px;opacity:0.8">✓ Complete</div>' : ''}</div><div class="duo-nodes${isCollapsed ? ' collapsed' : ''}">`;
    u.nodes.forEach(n => {
      const id = u.unitNum + '-' + n.name, d = done.has(id), c = d ? 'done' : 'next';
      const checkSvg = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
      const checkBadge = `<div class="duo-checkmark"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>`;
      h += `<div class="duo-node ${c}" onclick="openLesson(${u.unitNum},'${n.name.replace(/'/g, "\\'")}','${n.sub.replace(/'/g, "\\'")}')"><button class="duo-btn ${c}">${d ? checkSvg : n.icon}${d ? checkBadge : ''}</button><div class="duo-node-label"><div class="node-name">${n.name}</div><div class="node-sub">${n.sub}</div></div></div>`;
    });
    h += '</div></div>';
  });
  h += '</div>';
  document.getElementById('lesson-list').innerHTML = h;
}

// ═══════════════════════════════════════════
// LESSON READER
// ═══════════════════════════════════════════

function openLesson(u, name, sub) {
  lastScrollY = window.scrollY;
  document.getElementById('lesson-list').style.display = 'none';
  document.getElementById('lesson-reader').style.display = 'block';
  let content = L[name] || simpleContent(name, sub);
  const safeName = name.replace(/'/g, "\\'");

  // Make vocab-pills clickable with glossary definitions
  const glossMap = {};
  glossaryData.forEach(g => {
    glossMap[g.term.toLowerCase()] = g.def;
    g.term.toLowerCase().split(/[\s(),\/]+/).forEach(w => { if (w.length > 3 && !glossMap[w]) glossMap[w] = g.def; });
  });

  content = content.replace(/<span class="vocab-pill">([^<]+)<\/span>/g, (match, term) => {
    const tl = term.toLowerCase().trim();
    let def = glossMap[tl] || glossMap[tl.replace(/s$/, '')] || glossMap[tl.replace(/ing$/, '')] || '';
    if (!def) {
      const words = tl.split(/[\s()]+/);
      for (const w of words) { if (w.length > 4 && glossMap[w]) { def = glossMap[w]; break; } }
    }
    if (!def) {
      const found = glossaryData.find(g => g.term.toLowerCase().includes(tl) || tl.includes(g.term.toLowerCase()));
      if (found) def = found.def;
    }
    if (!def) return match;
    const eDef = def.replace(/\\/g, '').replace(/'/g, "&#39;").replace(/"/g, "&quot;").replace(/\n/g, ' ');
    const eTerm = term.replace(/'/g, "&#39;");
    return `<span class="vocab-pill kw-clickable" data-term="${eTerm}" data-def="${eDef}">${term}</span>`;
  });

  const videoHTML = buildVideoSection(name);
  document.getElementById('lesson-content').innerHTML = `<div class="lesson-header"><h1>${name}</h1><p>Unit ${u} — ${sub}</p></div>${content}<button class="deep-dive-btn" id="dd-btn" onclick="toggleDeepDive('${safeName}','${sub.replace(/'/g, "\\'")}')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:4px"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg> Deep Dive — Go Deeper</button><div id="deep-dive-area"></div>${videoHTML}<button class="done-btn" onclick="markDone(${u},'${safeName}')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-4px;margin-right:4px"><polyline points="20 6 9 17 4 12"/></svg> Mark as Complete</button>`;

  // Attach click handlers to vocab pills
  document.querySelectorAll('.kw-clickable').forEach(el => {
    el.style.cursor = 'pointer';
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleKwPopup(this, this.dataset.term, this.dataset.def);
    });
  });
  window.scrollTo(0, 0);
}

function toggleKwPopup(el, term, def) {
  const existing = document.querySelector('.kw-popup');
  if (existing) { existing.remove(); if (existing.parentElement === el) return; }
  const popup = document.createElement('div');
  popup.className = 'kw-popup';
  popup.innerHTML = '<div class="kw-popup-term">' + term + '</div><div class="kw-popup-def">' + def + '</div>';
  el.style.position = 'relative';
  el.style.display = 'inline-block';
  el.appendChild(popup);
  setTimeout(function() {
    document.addEventListener('click', function handler(e) {
      if (!popup.contains(e.target)) { popup.remove(); document.removeEventListener('click', handler); }
    });
  }, 50);
}

// ═══════════════════════════════════════════
// DEEP DIVE
// ═══════════════════════════════════════════

function toggleDeepDive(name, sub) {
  const area = document.getElementById('deep-dive-area');
  const btn = document.getElementById('dd-btn');
  if (ddOpen) { area.innerHTML = ''; btn.classList.remove('active'); btn.innerHTML = '🔬 Deep Dive — Go Deeper'; ddOpen = false; return; }
  ddOpen = true; btn.classList.add('active'); btn.innerHTML = '🔬 Deep Dive — Close';
  area.innerHTML = '<div class="deep-dive-loading"><div class="spinner"></div>Loading deep dive content...</div>';
  generateDeepDive(name, sub);
}

async function generateDeepDive(name, sub) {
  const area = document.getElementById('deep-dive-area');
  // Try AI first
  const apiKey = localStorage.getItem(`${STORAGE_PREFIX}-api-key`);
  if (apiKey) {
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 2000,
          messages: [{ role: 'user', content: `You are a university economics professor. Write an advanced deep-dive lesson on "${name}" (${sub}) for a student who has already read the basics. Include: 1) Advanced theories and real debates among economists 2) Key empirical studies with details (researcher, year, findings) 3) Real-world policy examples and case studies 4) Critical evaluation and modern perspectives 5) Connections to other economics topics. Format as HTML using: <h3> for headers, <p> with <strong> for key terms, <div class="key-point"><span class="kp-icon">💡</span><span>...</span></div> for insights, <div class="example-box"><strong>🔗 Case study:</strong>...</div> for examples, <div class="warning-box"><strong>⚠️ Debate:</strong>...</div> for controversies. Write ~800 words. Start directly with <h3>.` }]
        })
      });
      const data = await res.json();
      if (data.content && data.content[0]) {
        area.innerHTML = '<div class="deep-dive-content">' + data.content[0].text + '</div>';
        return;
      }
    } catch(e) { console.log('AI unavailable, using fallback'); }
  }
  // Use pre-built deep dive
  const dd = DD[name];
  if (dd) {
    area.innerHTML = '<div class="deep-dive-content">' + dd + '</div>';
    return;
  }
  // Generic fallback
  area.innerHTML = `<div class="deep-dive-content">
<h3>Advanced Analysis: ${name}</h3>
<p>This deep dive goes beyond the basics of <strong>${name.toLowerCase()}</strong>. It covers advanced theories, landmark studies, policy debates, and real-world applications.</p>
<div class="key-point"><span class="kp-icon">💡</span><span><strong>University-level thinking:</strong> The best economics students don't just describe models — they <em>evaluate</em> them. For every theory, ask: What assumptions does it make? Do they hold in the real world? What does the empirical evidence say?</span></div>
<p>For the full textbook treatment, visit <strong>openstax.org/books/principles-economics-3e</strong> — a free, peer-reviewed university textbook.</p>
</div>`;
}

// ═══════════════════════════════════════════
// LESSON NAVIGATION
// ═══════════════════════════════════════════

function closeLesson() {
  document.getElementById('lesson-list').style.display = 'block';
  document.getElementById('lesson-reader').style.display = 'none';
  document.getElementById('reading-progress').style.width = '0';
  ddOpen = false;
  window.scrollTo(0, lastScrollY);
}

function markDone(u, name) {
  done.add(u + '-' + name);
  localStorage.setItem(`${STORAGE_PREFIX}-done`, JSON.stringify([...done]));
  updateProgress(); buildList(); closeLesson();
}

function updateProgress() {
  const p = (done.size / total) * 100;
  document.getElementById('course-progress').style.width = p + '%';
  document.getElementById('progress-label').textContent = `Course progress — ${done.size} of ${total} lessons`;
}

// ═══════════════════════════════════════════
// READING PROGRESS BAR
// ═══════════════════════════════════════════

window.addEventListener('scroll', () => {
  if (document.getElementById('lesson-reader').style.display === 'block') {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
    document.getElementById('reading-progress').style.width = pct + '%';
  }
});

// ═══════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════

function openSearch() {
  document.getElementById('search-overlay').style.display = 'flex';
  document.getElementById('search-input').value = '';
  document.getElementById('search-input').focus();
  document.getElementById('search-results').innerHTML = '<p style="color:var(--muted);padding:20px;text-align:center;font-size:0.88rem">Type to search across all content...</p>';
}

function closeSearch() {
  document.getElementById('search-overlay').style.display = 'none';
}

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') closeSearch();
});

function doSearch(q) {
  const r = document.getElementById('search-results');
  if (!q || q.length < 2) { r.innerHTML = '<p style="color:var(--muted);padding:20px;text-align:center;font-size:0.88rem">Type at least 2 characters...</p>'; return; }
  const ql = q.toLowerCase();
  const results = [];

  // Search lessons
  units.forEach(u => {
    u.nodes.forEach(n => {
      const content = L[n.name] || '';
      const textContent = content.replace(/<[^>]+>/g, ' ').toLowerCase();
      if (n.name.toLowerCase().includes(ql) || n.sub.toLowerCase().includes(ql) || textContent.includes(ql)) {
        let snippet = '';
        const idx = textContent.indexOf(ql);
        if (idx >= 0) snippet = '...' + textContent.substring(Math.max(0, idx - 40), idx + 60).trim() + '...';
        results.push({ type: 'Lesson', title: n.name, sub: 'Unit ' + u.unitNum + ' — ' + n.sub, snippet, action: `openLesson(${u.unitNum},'${n.name.replace(/'/g, "\\'")}','${n.sub.replace(/'/g, "\\'")}')` });
      }
    });
  });

  // Search glossary
  glossaryData.forEach(g => {
    if (g.term.toLowerCase().includes(ql) || g.def.toLowerCase().includes(ql)) {
      results.push({ type: 'Glossary', title: g.term, sub: g.def.substring(0, 80) + '...', snippet: '', action: "showTab('glossary',document.querySelectorAll('.tab-btn')[4]);document.getElementById('glossary-search').value='" + q.replace(/'/g, "\\'") + "';filterGlossary();" });
    }
  });

  // Search quiz
  quizData.forEach(q2 => {
    if (q2.q.toLowerCase().includes(ql) || q2.explain.toLowerCase().includes(ql)) {
      results.push({ type: 'Quiz', title: q2.q.substring(0, 60) + '...', sub: q2.explain.substring(0, 80), snippet: '', action: "showTab('quiz',document.querySelectorAll('.tab-btn')[2])" });
    }
  });

  if (results.length === 0) { r.innerHTML = '<div style="padding:30px;text-align:center"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:8px;opacity:0.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg><p style="color:var(--muted);font-size:0.88rem">No results found.</p></div>'; return; }
  r.innerHTML = results.slice(0, 15).map(x => `<div class="search-result" onclick="${x.action};closeSearch()"><div class="search-result-type">${x.type}</div><div class="search-result-title">${x.title}</div><div class="search-result-snippet">${x.sub}</div></div>`).join('');
}

// ═══════════════════════════════════════════
// QUIZ
// ═══════════════════════════════════════════

function shuffle(a) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

function buildQuizFilter() {
  const unitNames = ['All', ...units.map(u => 'Unit ' + u.unitNum)];
  document.getElementById('quiz-filter').innerHTML = unitNames.map((n, i) =>
    `<button class="quiz-filter-btn${i === 0 ? ' active' : ''}" onclick="setQuizUnit(${i === 0 ? "'all'" : i},this)">${n}</button>`
  ).join('');
}

function setQuizUnit(u, btn) {
  quizUnit = u;
  document.querySelectorAll('.quiz-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  startQuiz();
}

function getFilteredQuiz() {
  if (quizUnit === 'all') return quizData;
  const unitLabel = units[quizUnit - 1]?.label || '';
  const catMap = {
    1: ['Principles', 'Scarcity', 'Opportunity', 'Economist', 'Trade', 'Comparative', 'Advantage', 'PPF'],
    2: ['Supply', 'Demand', 'Equilibrium', 'Elasticity', 'Elastic', 'Inelastic', 'Price ceiling', 'Price floor', 'Tax'],
    3: ['Consumer surplus', 'Producer surplus', 'Deadweight', 'Taxation', 'International trade', 'Tariff'],
    4: ['Externality', 'Public good', 'Commons', 'Tax system'],
    5: ['Production', 'Cost', 'Competitive', 'Monopoly', 'Oligopoly', 'Monopolistic'],
    6: ['Labour', 'Labor', 'Wage', 'Earnings', 'Discrimination', 'Inequality', 'Poverty'],
    7: ['Consumer choice', 'Frontiers', 'Behavioural', 'Asymmetric'],
    8: ['GDP', 'Income', 'CPI', 'Cost of living', 'Price index'],
    9: ['Growth', 'Saving', 'Investment', 'Finance', 'Unemployment'],
    10: ['Money', 'Banking', 'Monetary system', 'Inflation', 'Quantity theory'],
    11: ['Open economy', 'Exchange rate', 'Capital flow', 'Trade balance'],
    12: ['Aggregate', 'Fiscal policy', 'Monetary policy', 'Phillips curve', 'Fluctuation'],
    13: ['Debate', 'Macroeconomic policy']
  };
  const cats = catMap[quizUnit] || [unitLabel];
  return quizData.filter(q => cats.some(c => q.q.toLowerCase().includes(c.toLowerCase()) || q.explain.toLowerCase().includes(c.toLowerCase())));
}

function startQuiz() {
  const filtered = getFilteredQuiz();
  shuffled = shuffle(filtered.length > 0 ? filtered : quizData);
  qIdx = 0; qScore = 0;
  renderQ();
}

function renderQ() {
  if (qIdx >= shuffled.length) {
    const pct = shuffled.length > 0 ? Math.round(qScore / shuffled.length * 100) : 0;
    const svgTrophy = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="${pct >= 70 ? '#4ade80' : '#e8893c'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom:12px"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`;
    document.getElementById('quiz-container').innerHTML = `<div class="quiz-score-display">${svgTrophy}<div class="score-big">${qScore}/${shuffled.length}</div><div class="score-label">questions correct (${pct}%)</div><p style="margin-top:16px;color:var(--muted);font-size:0.9rem">${pct >= 90 ? 'Outstanding!' : pct >= 70 ? 'Great work!' : pct >= 50 ? 'Good effort!' : 'Keep studying!'}</p><button class="next-q-btn show" style="margin-top:20px" onclick="startQuiz()">Try Again</button></div>`;
    return;
  }
  const q = shuffled[qIdx]; qAns = false;
  document.getElementById('quiz-container').innerHTML = `<div style="font-size:0.78rem;color:var(--muted);font-weight:700;margin-bottom:10px">Question ${qIdx + 1} of ${shuffled.length}</div><div class="quiz-question">${q.q}</div><div class="quiz-options">${q.options.map((o, i) => `<button class="quiz-option" onclick="ansQ(${i})">${o}</button>`).join('')}</div><div class="quiz-feedback" id="qfb"></div><button class="next-q-btn" id="nqb" onclick="nextQ()">Next →</button>`;
}

function ansQ(i) {
  if (qAns) return; qAns = true;
  const q = shuffled[qIdx], btns = document.querySelectorAll('.quiz-option');
  btns.forEach(b => b.disabled = true);
  btns[q.correct].classList.add('correct');
  const fb = document.getElementById('qfb');
  if (i === q.correct) { qScore++; fb.className = 'quiz-feedback show correct'; fb.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:4px"><polyline points="20 6 9 17 4 12"/></svg> ' + q.explain; }
  else { btns[i].classList.add('wrong'); fb.className = 'quiz-feedback show wrong'; fb.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e05a5a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px;margin-right:4px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> ' + q.explain; }
  document.getElementById('nqb').classList.add('show');
}

function nextQ() { qIdx++; renderQ(); }

// ═══════════════════════════════════════════
// FLASHCARDS
// ═══════════════════════════════════════════

function getAllCards() { return [...glossaryData, ...customCards]; }
function saveCustomCards() { localStorage.setItem(`${STORAGE_PREFIX}-custom-cards`, JSON.stringify(customCards)); }

function initFlashcards() {
  const all = getAllCards();
  const filtered = fcFilter ? all.filter(c => c.term.toLowerCase().includes(fcFilter) || c.def.toLowerCase().includes(fcFilter)) : all;

  document.getElementById('fc-toolbar').innerHTML = `
    <input class="fc-search" placeholder="Search ${all.length} cards..." value="${fcFilter}" oninput="fcFilter=this.value.toLowerCase();initFlashcards()">
    <button class="fc-toolbar-btn" onclick="showAddCard()">+ Add Card</button>
    <button class="fc-toolbar-btn" onclick="exportCards()">📤 Export</button>
    <button class="fc-toolbar-btn" onclick="document.getElementById('fc-import-file').click()">📥 Import</button>
    <input type="file" id="fc-import-file" accept=".json,.csv,.txt" style="display:none" onchange="importCards(this)">
  `;

  document.getElementById('fc-stats').innerHTML = `<span class="fc-stat">📚 ${all.length} total</span><span class="fc-stat">📖 ${glossaryData.length} built-in</span><span class="fc-stat">✏️ ${customCards.length} custom</span>`;

  const c = document.getElementById('fc-container');
  if (filtered.length === 0) { c.innerHTML = '<p style="text-align:center;color:var(--muted);padding:30px">No cards match your search.</p>'; return; }

  c.innerHTML = '<div class="fc-grid">' + filtered.map((card, i) => {
    const isCustom = customCards.includes(card);
    const idx = isCustom ? customCards.indexOf(card) : -1;
    return `<div class="fc-item" onclick="this.querySelector('.fc-item-def').style.display=this.querySelector('.fc-item-def').style.display==='none'?'block':'none'">
      <div class="fc-item-term">${card.term}</div>
      <div class="fc-item-def" style="display:none">${card.def}</div>
      ${isCustom ? `<div class="fc-item-actions"><button class="fc-item-btn" onclick="event.stopPropagation();editCard(${idx})" title="Edit">✏️</button><button class="fc-item-btn" onclick="event.stopPropagation();deleteCard(${idx})" title="Delete">🗑️</button></div>` : ''}
    </div>`;
  }).join('') + '</div>';
}

function showAddCard(term, def, editIdx) {
  const isEdit = editIdx !== undefined;
  const modal = document.createElement('div');
  modal.className = 'fc-modal';
  modal.id = 'fc-modal';
  modal.innerHTML = `<div class="fc-modal-box">
    <div class="fc-modal-title">${isEdit ? 'Edit' : 'Add'} Flashcard</div>
    <input class="fc-modal-input" id="fc-new-term" placeholder="Term / Question" value="${term || ''}">
    <textarea class="fc-modal-input" id="fc-new-def" placeholder="Definition / Answer" rows="3">${def || ''}</textarea>
    <div class="fc-modal-btns">
      <button class="fc-modal-btn secondary" onclick="document.getElementById('fc-modal').remove()">Cancel</button>
      <button class="fc-modal-btn primary" onclick="${isEdit ? `saveEditCard(${editIdx})` : 'addCard()'}">${isEdit ? 'Save' : 'Add'}</button>
    </div>
  </div>`;
  document.body.appendChild(modal);
  document.getElementById('fc-new-term').focus();
}

function addCard() {
  const term = document.getElementById('fc-new-term').value.trim();
  const def = document.getElementById('fc-new-def').value.trim();
  if (!term || !def) return;
  customCards.push({ term, def });
  saveCustomCards();
  document.getElementById('fc-modal').remove();
  initFlashcards();
}

function editCard(idx) {
  const card = customCards[idx];
  showAddCard(card.term, card.def, idx);
}

function saveEditCard(idx) {
  const term = document.getElementById('fc-new-term').value.trim();
  const def = document.getElementById('fc-new-def').value.trim();
  if (!term || !def) return;
  customCards[idx] = { term, def };
  saveCustomCards();
  document.getElementById('fc-modal').remove();
  initFlashcards();
}

function deleteCard(idx) {
  if (!confirm('Delete this card?')) return;
  customCards.splice(idx, 1);
  saveCustomCards();
  initFlashcards();
}

function exportCards() {
  const all = getAllCards();
  const data = JSON.stringify(all, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'econlearn-flashcards.json'; a.click();
  URL.revokeObjectURL(url);
}

function importCards(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const text = e.target.result;
      let cards;
      if (file.name.endsWith('.json')) {
        cards = JSON.parse(text);
      } else {
        cards = text.split('\n').filter(l => l.trim()).map(l => {
          const sep = l.includes('\t') ? '\t' : ',';
          const parts = l.split(sep);
          return { term: parts[0]?.trim() || '', def: parts.slice(1).join(sep).trim() || '' };
        }).filter(c => c.term && c.def);
      }
      if (!Array.isArray(cards) || cards.length === 0) { alert('No valid cards found.'); return; }
      const newCards = cards.filter(c => c.term && c.def);
      customCards.push(...newCards);
      saveCustomCards();
      alert('Imported ' + newCards.length + ' cards!');
      initFlashcards();
    } catch(err) { alert('Error reading file: ' + err.message); }
  };
  reader.readAsText(file);
  input.value = '';
}

// ═══════════════════════════════════════════
// GLOSSARY
// ═══════════════════════════════════════════

function renderGlossary(f = '') {
  const fl = glossaryData.filter(g => g.term.toLowerCase().includes(f.toLowerCase()) || g.def.toLowerCase().includes(f.toLowerCase()));
  document.getElementById('glossary-list').innerHTML = fl.map(g => `<div class="glossary-item"><div class="glossary-term">${g.term}</div><div class="glossary-def">${g.def}</div></div>`).join('');
}

function filterGlossary() { renderGlossary(document.getElementById('glossary-search').value); }

// ═══════════════════════════════════════════
// CHAT (AI TUTOR)
// ═══════════════════════════════════════════

async function sendChat() {
  const inp = document.getElementById('chat-input'), msg = inp.value.trim();
  if (!msg) return; inp.value = '';
  appendMsg(msg, 'user');
  document.getElementById('chat-send-btn').disabled = true;
  const t = appendMsg('Thinking...', 'bot thinking');
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: "You are a friendly economics tutor. Explain concepts in plain language with real-world examples and analogies. Keep answers to 3-5 short paragraphs. End with 💡 Key takeaway.",
        messages: buildHist(msg)
      })
    });
    const d = await r.json();
    t.remove();
    appendMsg(d.content?.[0]?.text || "Sorry, couldn't get a response.", 'bot');
  } catch(e) { t.remove(); appendMsg("AI chat requires an API connection.", 'bot'); }
  document.getElementById('chat-send-btn').disabled = false;
}

function buildHist(m) {
  const msgs = document.querySelectorAll('#chat-messages .msg'), h = [];
  msgs.forEach(x => { if (x.classList.contains('thinking')) return; h.push({ role: x.classList.contains('user') ? 'user' : 'assistant', content: x.textContent }); });
  h.push({ role: 'user', content: m });
  return h.slice(-10);
}

function appendMsg(t, c) {
  const b = document.getElementById('chat-messages'), d = document.createElement('div');
  d.className = 'msg ' + c; d.textContent = t; b.appendChild(d); b.scrollTop = b.scrollHeight;
  return d;
}

function sendSuggestion(el) { document.getElementById('chat-input').value = el.textContent; sendChat(); }

// ═══════════════════════════════════════════
// VIDEO SECTION
// ═══════════════════════════════════════════

function buildVideoSection(name) {
  const vids = videoData[name];
  if (!vids || vids.length === 0) return '';
  let cards = vids.map(v =>
    `<a class="video-card" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener"><div class="video-thumb"><img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="${v.t}" loading="lazy"><div class="play-icon"></div></div><div class="video-info"><div class="video-title">${v.t}</div><div class="video-channel">${v.c}</div></div></a>`
  ).join('');
  return `<div class="video-section"><h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-4px;margin-right:6px"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>Watch & Learn</h3><div class="video-grid">${cards}</div></div>`;
}

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════

buildList();
updateProgress();
buildQuizFilter();
startQuiz();
renderGlossary();
initFlashcards();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
