// Deep dive content — add extended content per lesson
// Format: DD["Lesson Name"] = `<h3>Title</h3><p>Content...</p>`;
// Uses same HTML classes as lessons: key-point, example-box, warning-box, analogy-box

const DD = {};

// Example deep dive for Unit 1
DD["What Is Economics?"] = `<h3>The Methodology Wars</h3>
<p>Economics has long struggled with its identity as a science. Unlike physics or chemistry, economists cannot run controlled experiments on entire economies. Instead, they rely on <strong>natural experiments</strong> (events that create quasi-experimental conditions), <strong>econometric modelling</strong> (statistical analysis of observational data), and increasingly, <strong>randomised controlled trials</strong> (RCTs).</p>

<p>The 2019 Nobel Prize went to <strong>Abhijit Banerjee, Esther Duflo, and Michael Kremer</strong> for pioneering RCTs in development economics — testing anti-poverty interventions the same way medical researchers test drugs. This "credibility revolution" has transformed how empirical economics is done.</p>

<div class="example-box"><strong>🔗 Research example:</strong>
Duflo and Banerjee tested whether giving free bed nets or charging a small price was better for malaria prevention in Kenya. Free distribution led to much higher adoption with no reduction in usage — overturning the conventional economic wisdom that "people don't value what they get for free."</div>

<h3>Behavioural Economics: The Challenge to Rationality</h3>
<p>Traditional economics assumes people are <strong>rational agents</strong> who maximise their utility with perfect information. <strong>Behavioural economics</strong>, pioneered by <strong>Daniel Kahneman</strong> and <strong>Amos Tversky</strong>, showed this is often wrong. People are subject to cognitive biases: loss aversion (losses hurt twice as much as equivalent gains feel good), anchoring (being influenced by irrelevant numbers), and present bias (overvaluing immediate rewards over future ones).</p>

<p><strong>Richard Thaler</strong> (Nobel 2017) applied these insights to policy through <strong>"nudge theory"</strong> — designing choices so the default option leads to better outcomes (e.g., automatic enrollment in retirement savings plans increased participation from 49% to 86%).</p>

<div class="key-point"><span class="kp-icon">💡</span><span><strong>The big picture:</strong> Economics is becoming more empirical, more experimental, and more psychologically realistic. The field that once assumed perfect rationality now studies how real humans — with their biases, emotions, and limited attention — actually make decisions.</span></div>`;

DD["Scarcity & Opportunity Cost"] = `<h3>Opportunity Cost in Policy Debates</h3>
<p>Opportunity cost is not just an academic concept — it's the hidden force behind every policy debate. When a government spends $1 trillion on defence, the opportunity cost is the healthcare, education, infrastructure, or tax cuts that money could have funded. Economists call this the <strong>guns vs. butter</strong> trade-off, illustrated by the production possibilities frontier.</p>

<p><strong>Frédéric Bastiat</strong> (1850) captured this in his essay "That Which Is Seen, and That Which Is Not Seen." Politicians love to showcase the jobs created by a new government project (what is seen). But the jobs and goods that would have existed if taxpayers had spent that money themselves are invisible (what is not seen). The unseen opportunity cost is just as real.</p>

<div class="warning-box"><strong>⚠️ The broken window fallacy:</strong>
Bastiat's most famous example: a boy breaks a shopkeeper's window. Onlookers say "at least it's good for the glazier — it creates work!" But this ignores the opportunity cost: the shopkeeper would have spent that money on a new suit, creating work for the tailor instead. Destruction doesn't create wealth — it merely redirects spending while destroying existing value. This fallacy persists today when people claim natural disasters or wars are "good for the economy."</div>

<h3>The Marginal Revolution</h3>
<p>The concept of <strong>marginal analysis</strong> transformed economics in the 1870s. Three economists independently arrived at the same insight: <strong>William Stanley Jevons</strong> (England), <strong>Carl Menger</strong> (Austria), and <strong>Léon Walras</strong> (France). They showed that the value of a good is determined not by the total utility it provides, but by the <em>marginal</em> utility of the last unit consumed.</p>

<p>This solved the <strong>diamond-water paradox</strong> that had puzzled Adam Smith: water is essential for life but cheap; diamonds are frivolous but expensive. The answer is marginal utility — water is abundant, so the last glass provides little additional satisfaction. Diamonds are scarce, so the last diamond provides high marginal utility. Price reflects marginal value, not total value.</p>

<div class="key-point"><span class="kp-icon">💡</span><span>Thinking at the margin is the single most powerful tool in the economist's toolkit. It applies everywhere: Should a firm hire one more worker? Should you study one more hour? Should a country spend one more dollar on defence? The answer always compares marginal benefit to marginal cost.</span></div>`;

// Add more deep dives as lessons are built:
// DD["Lesson Name"] = `<h3>...</h3><p>...</p>`;
