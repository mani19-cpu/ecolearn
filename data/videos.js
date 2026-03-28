// Video links per lesson — YouTube videos matched to Mankiw chapter names
// Format: { id: "youtubeId", t: "Video Title", c: "Channel Name" }

const videoData = {
  // ═══ UNIT 1: INTRODUCTION ═══
  "Ten Principles of Economics": [
    { id: "3ez10ADR_gM", t: "Intro to Economics: Crash Course #1", c: "Crash Course" },
    { id: "8DFTGJ6MijU", t: "10 Principles of Economics", c: "Marginal Revolution University" },
    { id: "VVp8UGjECt4", t: "Basic Economics — Thomas Sowell", c: "Free To Choose Network" }
  ],
  "Thinking Like an Economist": [
    { id: "3ez10ADR_gM", t: "Intro to Economics: Crash Course #1", c: "Crash Course" },
    { id: "sLJHTqFbY_4", t: "How to Think Like an Economist", c: "Marginal Revolution University" },
    { id: "B43YEW2FvDs", t: "Economic Systems: Crash Course #2", c: "Crash Course" }
  ],
  "Interdependence and the Gains from Trade": [
    { id: "NI9TLDIPVcs", t: "Specialization and Trade: Crash Course #2", c: "Crash Course" },
    { id: "xx9xNJlPOJo", t: "Comparative Advantage", c: "Khan Academy" },
    { id: "j0TXb5CUXO8", t: "Comparative Advantage and Trade", c: "Marginal Revolution University" }
  ],

  // ═══ UNIT 2: HOW MARKETS WORK ═══
  "The Market Forces of Supply and Demand": [
    { id: "g9aDizJKR6o", t: "Supply and Demand: Crash Course #4", c: "Crash Course" },
    { id: "kIFBaaPJUO0", t: "Law of Demand", c: "Khan Academy" },
    { id: "gdXoDkMbxUg", t: "Supply and Demand in 8 Minutes", c: "Marginal Revolution University" }
  ],
  "Elasticity and Its Application": [
    { id: "HHcblIxiAAk", t: "Elasticity of Demand", c: "Khan Academy" },
    { id: "WGImWHBMk-c", t: "Price Elasticity of Demand", c: "Marginal Revolution University" },
    { id: "uMPJBJbr4gE", t: "Elasticity and Strange Pricing", c: "Crash Course" }
  ],
  "Supply, Demand, and Government Policies": [
    { id: "1EzY4Vl460U", t: "Price Controls & Good Intentions: Crash Course #20", c: "Crash Course" },
    { id: "1AmFB2IKNL0", t: "Price Ceilings and Price Floors", c: "Khan Academy" },
    { id: "wQO7pJL-iB0", t: "Rent Control and Housing Markets", c: "Marginal Revolution University" }
  ],

  // ═══ UNIT 3: MARKETS AND WELFARE ═══
  "Consumers, Producers, and Efficiency": [
    { id: "Fdt8MxQz1Xg", t: "Consumer and Producer Surplus", c: "Khan Academy" },
    { id: "qkB3Uu4Rv1A", t: "Consumer and Producer Surplus", c: "Marginal Revolution University" },
    { id: "g9aDizJKR6o", t: "Supply and Demand: Crash Course #4", c: "Crash Course" }
  ],
  "The Costs of Taxation": [
    { id: "NuLlNxUkvhQ", t: "Deadweight Loss of Taxation", c: "Khan Academy" },
    { id: "x1AHb1GiJco", t: "Taxes and Deadweight Loss", c: "Marginal Revolution University" },
    { id: "otmgFQHbaDo", t: "Fiscal Policy and Stimulus: Crash Course #8", c: "Crash Course" }
  ],
  "International Trade": [
    { id: "LBOjWqrGCA0", t: "Imports, Exports, and Exchange Rates: Crash Course #15", c: "Crash Course" },
    { id: "NI9TLDIPVcs", t: "Specialization and Trade: Crash Course #2", c: "Crash Course" },
    { id: "uSDchZbKMFc", t: "Tariffs and Protectionism", c: "Khan Academy" }
  ],

  // ═══ UNIT 4: THE PUBLIC SECTOR ═══
  "Externalities": [
    { id: "eMBGLfj0mFQ", t: "Externalities: Crash Course #24", c: "Crash Course" },
    { id: "zcaGKQkVN58", t: "Externalities", c: "Khan Academy" },
    { id: "M1JhHv2VgBs", t: "Negative Externalities", c: "Marginal Revolution University" }
  ],
  "Public Goods and Common Resources": [
    { id: "W-EJ5JHh0Hc", t: "Public Goods and Common Resources", c: "Khan Academy" },
    { id: "0Fv-YVB57T4", t: "Tragedy of the Commons", c: "Marginal Revolution University" },
    { id: "eMBGLfj0mFQ", t: "Externalities: Crash Course #24", c: "Crash Course" }
  ],
  "The Design of the Tax System": [
    { id: "7Qtr_vA3Ayo", t: "Taxes: Crash Course #31", c: "Crash Course" },
    { id: "otmgFQHbaDo", t: "Fiscal Policy and Stimulus: Crash Course #8", c: "Crash Course" },
    { id: "S6HEH23W_sM", t: "The Economics of Tax", c: "EconplusDal" }
  ],

  // ═══ UNIT 5: FIRM BEHAVIOUR ═══
  "The Costs of Production": [
    { id: "1kN_LpCvYng", t: "Cost Curves Explained", c: "Khan Academy" },
    { id: "qYKJdooEnwU", t: "Marginal Cost and Average Cost", c: "Marginal Revolution University" },
    { id: "YglJTBgMrvQ", t: "Short-Run Costs", c: "EconplusDal" }
  ],
  "Firms in Competitive Markets": [
    { id: "GCOE3zXRlz0", t: "Perfect Competition", c: "Khan Academy" },
    { id: "qvSdsCunQBU", t: "Profit Maximization", c: "Marginal Revolution University" },
    { id: "RC0yDsyU1DU", t: "Monopolies and Anti-Competitive Markets: Crash Course #25", c: "Crash Course" }
  ],
  "Monopoly": [
    { id: "RC0yDsyU1DU", t: "Monopolies: Crash Course #25", c: "Crash Course" },
    { id: "gMFt20hPLko", t: "Monopoly: How to Graph It", c: "Khan Academy" },
    { id: "7J7CkGALfCM", t: "The Problems With Monopoly", c: "Marginal Revolution University" }
  ],
  "Monopolistic Competition": [
    { id: "9NtfidAr4Ww", t: "Monopolistic Competition", c: "Khan Academy" },
    { id: "FILpWuWO1BE", t: "Monopolistic Competition Long Run", c: "Marginal Revolution University" },
    { id: "RC0yDsyU1DU", t: "Market Structures: Crash Course #25", c: "Crash Course" }
  ],
  "Oligopoly": [
    { id: "PCcVODWm-oY", t: "Oligopolies and Game Theory", c: "Khan Academy" },
    { id: "qcDbpMkOBKg", t: "Game Theory 101", c: "Marginal Revolution University" },
    { id: "7J7CkGALfCM", t: "Market Structures", c: "Crash Course" }
  ],

  // ═══ UNIT 6: LABOUR MARKETS ═══
  "The Markets for the Factors of Production": [
    { id: "f8C0JVP9YqA", t: "Factor Markets", c: "Khan Academy" },
    { id: "4S-7YusJiM0", t: "Demand for Labor", c: "Marginal Revolution University" },
    { id: "9D0RP7X4E70", t: "Labor Markets", c: "EconplusDal" }
  ],
  "Earnings and Discrimination": [
    { id: "Nd1C-GhRwJY", t: "Why Do Women Earn Less Than Men?", c: "Marginal Revolution University" },
    { id: "8AsMGpaQBOY", t: "The Gender Pay Gap", c: "Crash Course" },
    { id: "u1fH0g0DXMU", t: "Human Capital and Signaling", c: "Marginal Revolution University" }
  ],
  "Income Inequality and Poverty": [
    { id: "0xMCWr0O3Hs", t: "Income Inequality: Crash Course #17", c: "Crash Course" },
    { id: "GojFB_3dG18", t: "Income Inequality Explained", c: "Khan Academy" },
    { id: "rvskMHn0sqQ", t: "Global Poverty", c: "Crash Course" }
  ],

  // ═══ UNIT 7: TOPICS FOR FURTHER STUDY ═══
  "The Theory of Consumer Choice": [
    { id: "pLhh_D5b_Lg", t: "Budget Constraints and Indifference Curves", c: "Khan Academy" },
    { id: "6ObY3FBx7Jk", t: "Consumer Theory Basics", c: "Marginal Revolution University" },
    { id: "sLJHTqFbY_4", t: "Thinking at the Margin", c: "Marginal Revolution University" }
  ],
  "Frontiers of Microeconomics": [
    { id: "swM-AdnuKkU", t: "Asymmetric Information", c: "Khan Academy" },
    { id: "oHg5SJYRHA0", t: "Behavioral Economics: Crash Course #27", c: "Crash Course" },
    { id: "qcDbpMkOBKg", t: "Game Theory and Nash Equilibrium", c: "Marginal Revolution University" }
  ],

  // ═══ UNIT 8: THE DATA OF MACROECONOMICS ═══
  "Measuring a Nation's Income": [
    { id: "aBCfnVaHR5M", t: "GDP: Crash Course #6", c: "Crash Course" },
    { id: "rKOIJBWnGnM", t: "What Is GDP?", c: "Khan Academy" },
    { id: "E-kMVHOdsCM", t: "GDP: A Brief History", c: "Marginal Revolution University" }
  ],
  "Measuring the Cost of Living": [
    { id: "JJVAgGFKlPA", t: "Inflation and CPI: Crash Course #7", c: "Crash Course" },
    { id: "T8-85cZRI9o", t: "Introduction to Inflation", c: "Khan Academy" },
    { id: "Y_WQGzFlSDA", t: "The Consumer Price Index", c: "Marginal Revolution University" }
  ],

  // ═══ UNIT 9: THE REAL ECONOMY IN THE LONG RUN ═══
  "Production and Growth": [
    { id: "GPGLBZNx6DQ", t: "Economic Growth: Crash Course #16", c: "Crash Course" },
    { id: "SHsCkinrCPE", t: "What Makes Countries Rich or Poor?", c: "Marginal Revolution University" },
    { id: "FoJ3DMWB78g", t: "Solow Model of Economic Growth", c: "Khan Academy" }
  ],
  "Saving, Investment, and the Financial System": [
    { id: "UFFkRWLJQhg", t: "Financial Markets: Crash Course #11", c: "Crash Course" },
    { id: "iDmOHbkAayo", t: "The Market for Loanable Funds", c: "Khan Academy" },
    { id: "Ahi3VCd6I2Y", t: "Saving and Borrowing", c: "Marginal Revolution University" }
  ],
  "The Basic Tools of Finance": [
    { id: "3MFKdPmnPKA", t: "Present Value and Future Value", c: "Khan Academy" },
    { id: "UFFkRWLJQhg", t: "Financial Markets: Crash Course #11", c: "Crash Course" },
    { id: "WEDIj9JBTC8", t: "Risk and Financial Markets", c: "Khan Academy" }
  ],
  "Unemployment": [
    { id: "JJVAgGFKlPA", t: "Unemployment: Crash Course #7", c: "Crash Course" },
    { id: "UaihQxQ8FYA", t: "Types of Unemployment", c: "Khan Academy" },
    { id: "eOctBD7Ewvs", t: "Natural Rate of Unemployment", c: "Marginal Revolution University" }
  ],

  // ═══ UNIT 10: MONEY AND PRICES ═══
  "The Monetary System": [
    { id: "i_wMFSQrGEg", t: "Monetary Policy: Crash Course #10", c: "Crash Course" },
    { id: "3mUi9IZb4T4", t: "Banking and the Federal Reserve", c: "Khan Academy" },
    { id: "Ct2cMnbZHJE", t: "How Banks Create Money", c: "Marginal Revolution University" }
  ],
  "Money Growth and Inflation": [
    { id: "gi7jx5IJtik", t: "Quantity Theory of Money", c: "Khan Academy" },
    { id: "JJVAgGFKlPA", t: "Inflation: Crash Course #7", c: "Crash Course" },
    { id: "MKe6-jN3sqk", t: "Zimbabwe and Hyperinflation", c: "Marginal Revolution University" }
  ],

  // ═══ UNIT 11: OPEN ECONOMIES ═══
  "Open-Economy Macroeconomics: Basic Concepts": [
    { id: "LBOjWqrGCA0", t: "Imports, Exports, and Exchange Rates: Crash Course #15", c: "Crash Course" },
    { id: "geoe-6NBy10", t: "Balance of Payments", c: "Khan Academy" },
    { id: "7DizDi2HNCg", t: "Open Economy Concepts", c: "Marginal Revolution University" }
  ],
  "A Macroeconomic Theory of the Open Economy": [
    { id: "LBOjWqrGCA0", t: "Exchange Rates: Crash Course #15", c: "Crash Course" },
    { id: "GDBHPkEbSYM", t: "The Foreign Exchange Market", c: "Khan Academy" },
    { id: "C0GGckFTPyU", t: "Twin Deficits and Capital Flows", c: "Marginal Revolution University" }
  ],

  // ═══ UNIT 12: SHORT-RUN FLUCTUATIONS ═══
  "Aggregate Demand and Aggregate Supply": [
    { id: "oFMGU01FKMc", t: "Recession and Stagflation: Crash Course #10", c: "Crash Course" },
    { id: "u6XAPnuFjJc", t: "Aggregate Demand and Supply", c: "Khan Academy" },
    { id: "TiyVnOlsJBE", t: "The AD-AS Model", c: "Marginal Revolution University" }
  ],
  "The Influence of Monetary and Fiscal Policy": [
    { id: "otmgFQHbaDo", t: "Fiscal Policy: Crash Course #8", c: "Crash Course" },
    { id: "i_wMFSQrGEg", t: "Monetary Policy: Crash Course #10", c: "Crash Course" },
    { id: "HEEyI_Smsec", t: "The Multiplier Effect", c: "Khan Academy" }
  ],
  "The Short-Run Trade-off: Inflation and Unemployment": [
    { id: "JJVAgGFKlPA", t: "Inflation and Unemployment: Crash Course #7", c: "Crash Course" },
    { id: "F0-rgDH4F18", t: "Phillips Curve", c: "Khan Academy" },
    { id: "xb0E7QfVz4k", t: "The Phillips Curve", c: "Marginal Revolution University" }
  ],

  // ═══ UNIT 13: FINAL THOUGHTS ═══
  "Six Debates over Macroeconomic Policy": [
    { id: "otmgFQHbaDo", t: "Fiscal Policy: Crash Course #8", c: "Crash Course" },
    { id: "i_wMFSQrGEg", t: "Monetary Policy: Crash Course #10", c: "Crash Course" },
    { id: "oFMGU01FKMc", t: "Recession and Stagflation: Crash Course #10", c: "Crash Course" }
  ],
};
