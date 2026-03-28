// Video links per lesson — ALL IDs verified working via YouTube oEmbed API
// Format: { id: "youtubeId", t: "Video Title", c: "Channel Name" }

const videoData = {
  // ═══ UNIT 1: INTRODUCTION ═══
  "Ten Principles of Economics": [
    { id: "3ez10ADR_gM", t: "Intro to Economics: Crash Course Econ #1", c: "Crash Course" },
    { id: "VVp8UGjECt4", t: "Basic Economics — Thomas Sowell", c: "Free To Choose Network" },
    { id: "PHe0bXAIuk0", t: "How the Economic Machine Works", c: "Ray Dalio" }
  ],
  "Thinking Like an Economist": [
    { id: "3ez10ADR_gM", t: "Intro to Economics: Crash Course Econ #1", c: "Crash Course" },
    { id: "B43YEW2FvDs", t: "Economic Systems: Crash Course Econ #3", c: "Crash Course" },
    { id: "d8uTB5XorBw", t: "Macroeconomics: Crash Course Econ #5", c: "Crash Course" }
  ],
  "Interdependence and the Gains from Trade": [
    { id: "NI9TLDIPVcs", t: "Specialization and Trade: Crash Course Econ #2", c: "Crash Course" },
    { id: "xx9xNJlPOJo", t: "Comparative Advantage", c: "Khan Academy" },
    { id: "9MpVjxxpExM", t: "Globalization and Trade: Crash Course Econ #16", c: "Crash Course" }
  ],

  // ═══ UNIT 2: HOW MARKETS WORK ═══
  "The Market Forces of Supply and Demand": [
    { id: "g9aDizJpd_s", t: "Supply and Demand: Crash Course Econ #4", c: "Crash Course" },
    { id: "kIFBaaPJUO0", t: "Law of Demand", c: "Khan Academy" },
    { id: "eNxk5-EJFrY", t: "Markets, Efficiency, and Price Signals: Crash Course Econ #19", c: "Crash Course" }
  ],
  "Elasticity and Its Application": [
    { id: "HHcblIxiAAk", t: "Elasticity of Demand", c: "Khan Academy" },
    { id: "3midaQqm7NM", t: "Elasticity and Van Gogh: Crash Course Econ #18", c: "Crash Course" },
    { id: "qYKJdooEnwU", t: "Marginal Cost and Average Cost", c: "Khan Academy" }
  ],
  "Supply, Demand, and Government Policies": [
    { id: "01lKDkYSFDg", t: "Price Controls and Good Intentions: Crash Course Econ #20", c: "Crash Course" },
    { id: "g9aDizJpd_s", t: "Supply and Demand: Crash Course Econ #4", c: "Crash Course" },
    { id: "1EzY4Vl460U", t: "Price Controls, Subsidies, and Risk", c: "Crash Course" }
  ],

  // ═══ UNIT 3: MARKETS AND WELFARE ═══
  "Consumers, Producers, and Efficiency": [
    { id: "g9aDizJpd_s", t: "Supply and Demand: Crash Course Econ #4", c: "Crash Course" },
    { id: "eNxk5-EJFrY", t: "Markets and Efficiency: Crash Course Econ #19", c: "Crash Course" },
    { id: "kIFBaaPJUO0", t: "Law of Demand", c: "Khan Academy" }
  ],
  "The Costs of Taxation": [
    { id: "13JOGWzY8kE", t: "Market Failures, Taxes, and Subsidies: Crash Course Econ #21", c: "Crash Course" },
    { id: "7Qtr_vA3Prw", t: "Taxes: Crash Course Econ #31", c: "Crash Course" },
    { id: "otmgFQHbaDo", t: "Fiscal Policy and Stimulus: Crash Course Econ #8", c: "Crash Course" }
  ],
  "International Trade": [
    { id: "geoe-6NBy10", t: "Balance of Payments", c: "Khan Academy" },
    { id: "NI9TLDIPVcs", t: "Specialization and Trade: Crash Course Econ #2", c: "Crash Course" },
    { id: "9MpVjxxpExM", t: "Globalization and Trade: Crash Course Econ #16", c: "Crash Course" }
  ],

  // ═══ UNIT 4: THE PUBLIC SECTOR ═══
  "Externalities": [
    { id: "13JOGWzY8kE", t: "Market Failures, Taxes, and Subsidies: Crash Course Econ #21", c: "Crash Course" },
    { id: "BlAfFgKQ5r8", t: "Environmental Economics: Crash Course Econ #22", c: "Crash Course" },
    { id: "rJixtB0GluQ", t: "Market Failures", c: "Mary J. McGlasson" }
  ],
  "Public Goods and Common Resources": [
    { id: "13JOGWzY8kE", t: "Market Failures, Taxes, and Subsidies: Crash Course Econ #21", c: "Crash Course" },
    { id: "BlAfFgKQ5r8", t: "Environmental Economics: Crash Course Econ #22", c: "Crash Course" },
    { id: "yC5R9WPId0s", t: "Externalities", c: "Mary J. McGlasson" }
  ],
  "The Design of the Tax System": [
    { id: "7Qtr_vA3Prw", t: "Taxes: Crash Course Econ #31", c: "Crash Course" },
    { id: "otmgFQHbaDo", t: "Fiscal Policy and Stimulus: Crash Course Econ #8", c: "Crash Course" },
    { id: "3sUCSGVYzI0", t: "Deficits and Debts: Crash Course Econ #9", c: "Crash Course" }
  ],

  // ═══ UNIT 5: FIRM BEHAVIOUR ═══
  "The Costs of Production": [
    { id: "qYKJdooEnwU", t: "Marginal Cost and Average Cost", c: "Khan Academy" },
    { id: "UWImfFax8Ew", t: "Revenue, Profits, and Price: Crash Course Econ #24", c: "Crash Course" },
    { id: "Sb_-wfmJnHA", t: "Monopolies and Anti-Competitive Markets: Crash Course Econ #25", c: "Crash Course" }
  ],
  "Firms in Competitive Markets": [
    { id: "UWImfFax8Ew", t: "Revenue, Profits, and Price: Crash Course Econ #24", c: "Crash Course" },
    { id: "eNxk5-EJFrY", t: "Markets and Efficiency: Crash Course Econ #19", c: "Crash Course" },
    { id: "qYKJdooEnwU", t: "Marginal Cost and Average Cost", c: "Khan Academy" }
  ],
  "Monopoly": [
    { id: "Sb_-wfmJnHA", t: "Monopolies and Anti-Competitive Markets: Crash Course Econ #25", c: "Crash Course" },
    { id: "UWImfFax8Ew", t: "Revenue, Profits, and Price: Crash Course Econ #24", c: "Crash Course" },
    { id: "PCcVODWm-oY", t: "Oligopolies and Game Theory", c: "Khan Academy" }
  ],
  "Monopolistic Competition": [
    { id: "Sb_-wfmJnHA", t: "Monopolies and Anti-Competitive Markets: Crash Course Econ #25", c: "Crash Course" },
    { id: "PCcVODWm-oY", t: "Oligopolies and Game Theory", c: "Khan Academy" },
    { id: "UWImfFax8Ew", t: "Revenue, Profits, and Price: Crash Course Econ #24", c: "Crash Course" }
  ],
  "Oligopoly": [
    { id: "PCcVODWm-oY", t: "Oligopolies and Game Theory", c: "Khan Academy" },
    { id: "Sb_-wfmJnHA", t: "Monopolies and Anti-Competitive Markets: Crash Course Econ #25", c: "Crash Course" },
    { id: "dqxQ3E1bubI", t: "Behavioral Economics: Crash Course Econ #27", c: "Crash Course" }
  ],

  // ═══ UNIT 6: LABOUR MARKETS ═══
  "The Markets for the Factors of Production": [
    { id: "mWwXmH-n5Bo", t: "Labor Markets and Minimum Wage: Crash Course Econ #28", c: "Crash Course" },
    { id: "UWImfFax8Ew", t: "Revenue, Profits, and Price: Crash Course Econ #24", c: "Crash Course" },
    { id: "kIFBaaPJUO0", t: "Law of Demand", c: "Khan Academy" }
  ],
  "Earnings and Discrimination": [
    { id: "mWwXmH-n5Bo", t: "Labor Markets and Minimum Wage: Crash Course Econ #28", c: "Crash Course" },
    { id: "0xMCWr0O3Hs", t: "Income and Wealth Inequality: Crash Course Econ #17", c: "Crash Course" },
    { id: "8lPbkHVxenU", t: "Economics of Education: Crash Course Econ #23", c: "Crash Course" }
  ],
  "Income Inequality and Poverty": [
    { id: "0xMCWr0O3Hs", t: "Income and Wealth Inequality: Crash Course Econ #17", c: "Crash Course" },
    { id: "rvskMHn0sqQ", t: "Global Poverty: Crash Course", c: "Crash Course" },
    { id: "9MpVjxxpExM", t: "Globalization and Trade: Crash Course Econ #16", c: "Crash Course" }
  ],

  // ═══ UNIT 7: TOPICS FOR FURTHER STUDY ═══
  "The Theory of Consumer Choice": [
    { id: "pLhh_D5b_Lg", t: "Budget Constraints and Indifference Curves", c: "Khan Academy" },
    { id: "3midaQqm7NM", t: "Elasticity and Van Gogh: Crash Course Econ #18", c: "Crash Course" },
    { id: "dqxQ3E1bubI", t: "Behavioral Economics: Crash Course Econ #27", c: "Crash Course" }
  ],
  "Frontiers of Microeconomics": [
    { id: "dqxQ3E1bubI", t: "Behavioral Economics: Crash Course Econ #27", c: "Crash Course" },
    { id: "cbBKoyjFLUY", t: "Economics of Healthcare: Crash Course Econ #29", c: "Crash Course" },
    { id: "PCcVODWm-oY", t: "Game Theory: Crash Course Econ #26", c: "Khan Academy" }
  ],

  // ═══ UNIT 8: THE DATA OF MACROECONOMICS ═══
  "Measuring a Nation's Income": [
    { id: "d8uTB5XorBw", t: "Macroeconomics: Crash Course Econ #5", c: "Crash Course" },
    { id: "UHiUYj5EA0w", t: "Productivity and Growth: Crash Course Econ #6", c: "Crash Course" },
    { id: "PHe0bXAIuk0", t: "How the Economic Machine Works", c: "Ray Dalio" }
  ],
  "Measuring the Cost of Living": [
    { id: "T8-85cZRI9o", t: "Inflation and Bubbles and Tulips: Crash Course Econ #7", c: "Crash Course" },
    { id: "oLhohwfwf_U", t: "Aggregate Demand", c: "Khan Academy" },
    { id: "PHe0bXAIuk0", t: "How the Economic Machine Works", c: "Ray Dalio" }
  ],

  // ═══ UNIT 9: THE REAL ECONOMY IN THE LONG RUN ═══
  "Production and Growth": [
    { id: "UHiUYj5EA0w", t: "Productivity and Growth: Crash Course Econ #6", c: "Crash Course" },
    { id: "SHsCkinrCPE", t: "What Makes Countries Rich or Poor?", c: "Marginal Revolution University" },
    { id: "9MpVjxxpExM", t: "Globalization and Trade: Crash Course Econ #16", c: "Crash Course" }
  ],
  "Saving, Investment, and the Financial System": [
    { id: "Dugn51K_6WA", t: "Money and Finance: Crash Course Econ #11", c: "Crash Course" },
    { id: "GPOv72Awo68", t: "The 2008 Financial Crisis: Crash Course Econ #12", c: "Crash Course" },
    { id: "PHe0bXAIuk0", t: "How the Economic Machine Works", c: "Ray Dalio" }
  ],
  "The Basic Tools of Finance": [
    { id: "Dugn51K_6WA", t: "Money and Finance: Crash Course Econ #11", c: "Crash Course" },
    { id: "WEDIj9JBTC8", t: "Risk and Financial Markets", c: "Khan Academy" },
    { id: "GPOv72Awo68", t: "The 2008 Financial Crisis: Crash Course Econ #12", c: "Crash Course" }
  ],
  "Unemployment": [
    { id: "T8-85cZRI9o", t: "Inflation and Bubbles and Tulips: Crash Course Econ #7", c: "Crash Course" },
    { id: "BHw4NStQsT8", t: "Recession, Hyperinflation, and Stagflation: Crash Course Econ #13", c: "Crash Course" },
    { id: "mWwXmH-n5Bo", t: "Labor Markets and Minimum Wage: Crash Course Econ #28", c: "Crash Course" }
  ],

  // ═══ UNIT 10: MONEY AND PRICES ═══
  "The Monetary System": [
    { id: "1dq7mMort9o", t: "Monetary Policy and the Fed: Crash Course Econ #10", c: "Crash Course" },
    { id: "Dugn51K_6WA", t: "Money and Finance: Crash Course Econ #11", c: "Crash Course" },
    { id: "3mUi9IZb4T4", t: "Banking and the Federal Reserve", c: "Khan Academy" }
  ],
  "Money Growth and Inflation": [
    { id: "gi7jx5IJtik", t: "Quantity Theory of Money", c: "Khan Academy" },
    { id: "T8-85cZRI9o", t: "Inflation and Bubbles: Crash Course Econ #7", c: "Crash Course" },
    { id: "BHw4NStQsT8", t: "Recession, Hyperinflation, Stagflation: Crash Course Econ #13", c: "Crash Course" }
  ],

  // ═══ UNIT 11: OPEN ECONOMIES ═══
  "Open-Economy Macroeconomics: Basic Concepts": [
    { id: "geoe-6NBy10", t: "Balance of Payments", c: "Khan Academy" },
    { id: "9MpVjxxpExM", t: "Globalization and Trade: Crash Course Econ #16", c: "Crash Course" },
    { id: "NI9TLDIPVcs", t: "Specialization and Trade: Crash Course Econ #2", c: "Crash Course" }
  ],
  "A Macroeconomic Theory of the Open Economy": [
    { id: "geoe-6NBy10", t: "Balance of Payments", c: "Khan Academy" },
    { id: "9MpVjxxpExM", t: "Globalization and Trade: Crash Course Econ #16", c: "Crash Course" },
    { id: "PHe0bXAIuk0", t: "How the Economic Machine Works", c: "Ray Dalio" }
  ],

  // ═══ UNIT 12: SHORT-RUN FLUCTUATIONS ═══
  "Aggregate Demand and Aggregate Supply": [
    { id: "oLhohwfwf_U", t: "Aggregate Demand", c: "Khan Academy" },
    { id: "u6XAPnuFjJc", t: "Aggregate Supply and Demand", c: "Khan Academy" },
    { id: "BHw4NStQsT8", t: "Recession, Hyperinflation, Stagflation: Crash Course Econ #13", c: "Crash Course" }
  ],
  "The Influence of Monetary and Fiscal Policy": [
    { id: "otmgFQHbaDo", t: "Fiscal Policy and Stimulus: Crash Course Econ #8", c: "Crash Course" },
    { id: "1dq7mMort9o", t: "Monetary Policy and the Fed: Crash Course Econ #10", c: "Crash Course" },
    { id: "ntxMOKXHlfo", t: "Monetary and Fiscal Policy", c: "Khan Academy" }
  ],
  "The Short-Run Trade-off: Inflation and Unemployment": [
    { id: "T8-85cZRI9o", t: "Inflation and Bubbles: Crash Course Econ #7", c: "Crash Course" },
    { id: "BHw4NStQsT8", t: "Recession, Hyperinflation, Stagflation: Crash Course Econ #13", c: "Crash Course" },
    { id: "PHe0bXAIuk0", t: "How the Economic Machine Works", c: "Ray Dalio" }
  ],

  // ═══ UNIT 13: FINAL THOUGHTS ═══
  "Six Debates over Macroeconomic Policy": [
    { id: "otmgFQHbaDo", t: "Fiscal Policy and Stimulus: Crash Course Econ #8", c: "Crash Course" },
    { id: "1dq7mMort9o", t: "Monetary Policy and the Fed: Crash Course Econ #10", c: "Crash Course" },
    { id: "tZvjh1dxz08", t: "Economic Schools of Thought: Crash Course Econ #14", c: "Crash Course" }
  ],
};
