// Economics curriculum based on Mankiw's Principles of Economics
// Each unit = one Part from the textbook, each lesson = one chapter

const units = [
  { label:"Introduction", unitNum:1, gradient:"linear-gradient(135deg,#e8893c,#b56a2a)", shadow:"#8a4a10",
    nodes:[
      {icon:"📈",name:"Ten Principles of Economics",sub:"The foundations of economic thinking"},
      {icon:"🔬",name:"Thinking Like an Economist",sub:"Models, graphs, and the scientific method"},
      {icon:"🤝",name:"Interdependence and the Gains from Trade",sub:"Comparative advantage and specialisation"}
    ]},
  { label:"How Markets Work", unitNum:2, gradient:"linear-gradient(135deg,#4ade80,#2d9e5a)", shadow:"#1a7040",
    nodes:[
      {icon:"⚖️",name:"The Market Forces of Supply and Demand",sub:"How prices are determined"},
      {icon:"📏",name:"Elasticity and Its Application",sub:"Measuring responsiveness"},
      {icon:"🏛️",name:"Supply, Demand, and Government Policies",sub:"Price controls and taxes"}
    ]},
  { label:"Markets and Welfare", unitNum:3, gradient:"linear-gradient(135deg,#5ac8c8,#3a9090)", shadow:"#206060",
    nodes:[
      {icon:"😊",name:"Consumers, Producers, and Efficiency",sub:"Surplus and market welfare"},
      {icon:"💸",name:"The Costs of Taxation",sub:"Deadweight loss and tax burden"},
      {icon:"🌍",name:"International Trade",sub:"Winners, losers, and net gains"}
    ]},
  { label:"The Economics of the Public Sector", unitNum:4, gradient:"linear-gradient(135deg,#e05a5a,#a83d3d)", shadow:"#702020",
    nodes:[
      {icon:"🏭",name:"Externalities",sub:"When markets affect bystanders"},
      {icon:"🏛️",name:"Public Goods and Common Resources",sub:"Non-excludable and non-rival goods"},
      {icon:"📋",name:"The Design of the Tax System",sub:"How governments raise revenue"}
    ]},
  { label:"Firm Behaviour and Industry", unitNum:5, gradient:"linear-gradient(135deg,#c07de0,#7a3da8)", shadow:"#502070",
    nodes:[
      {icon:"📊",name:"The Costs of Production",sub:"Fixed, variable, and marginal costs"},
      {icon:"🌾",name:"Firms in Competitive Markets",sub:"Price takers and profit maximisation"},
      {icon:"👑",name:"Monopoly",sub:"Market power and deadweight loss"},
      {icon:"🎨",name:"Monopolistic Competition",sub:"Differentiation and excess capacity"},
      {icon:"🤝",name:"Oligopoly",sub:"Game theory and strategic behaviour"}
    ]},
  { label:"The Economics of Labour Markets", unitNum:6, gradient:"linear-gradient(135deg,#7d8ce0,#3d4a9e)", shadow:"#202870",
    nodes:[
      {icon:"👷",name:"The Markets for the Factors of Production",sub:"Labour, land, and capital"},
      {icon:"💵",name:"Earnings and Discrimination",sub:"Why wages differ"},
      {icon:"📊",name:"Income Inequality and Poverty",sub:"Measuring and addressing inequality"}
    ]},
  { label:"Topics for Further Study", unitNum:7, gradient:"linear-gradient(135deg,#e0a07d,#a85a3d)", shadow:"#7a3a20",
    nodes:[
      {icon:"🧠",name:"The Theory of Consumer Choice",sub:"Budgets, preferences, and optimisation"},
      {icon:"🔍",name:"Frontiers of Microeconomics",sub:"Asymmetric info, political economy, behavioural"}
    ]},
  { label:"The Data of Macroeconomics", unitNum:8, gradient:"linear-gradient(135deg,#5b9ef0,#3d6da8)", shadow:"#2a4a7a",
    nodes:[
      {icon:"📊",name:"Measuring a Nation's Income",sub:"GDP and what it tells us"},
      {icon:"🛒",name:"Measuring the Cost of Living",sub:"CPI, inflation, and price indices"}
    ]},
  { label:"The Real Economy in the Long Run", unitNum:9, gradient:"linear-gradient(135deg,#4ade80,#2d9e5a)", shadow:"#1a7040",
    nodes:[
      {icon:"🚀",name:"Production and Growth",sub:"What makes nations richer over time"},
      {icon:"🏦",name:"Saving, Investment, and the Financial System",sub:"The market for loanable funds"},
      {icon:"📐",name:"The Basic Tools of Finance",sub:"Present value, risk, and diversification"},
      {icon:"👷",name:"Unemployment",sub:"Types, causes, and policy"}
    ]},
  { label:"Money and Prices in the Long Run", unitNum:10, gradient:"linear-gradient(135deg,#f5c842,#c8a030)", shadow:"#8a6a10",
    nodes:[
      {icon:"💵",name:"The Monetary System",sub:"Banks, the Fed, and money creation"},
      {icon:"📈",name:"Money Growth and Inflation",sub:"The quantity theory of money"}
    ]},
  { label:"The Macroeconomics of Open Economies", unitNum:11, gradient:"linear-gradient(135deg,#e07d9b,#9e3d5a)", shadow:"#702040",
    nodes:[
      {icon:"🌐",name:"Open-Economy Macroeconomics: Basic Concepts",sub:"Trade flows and exchange rates"},
      {icon:"📊",name:"A Macroeconomic Theory of the Open Economy",sub:"Capital flows and trade balances"}
    ]},
  { label:"Short-Run Economic Fluctuations", unitNum:12, gradient:"linear-gradient(135deg,#5ac8c8,#3a9090)", shadow:"#206060",
    nodes:[
      {icon:"📈",name:"Aggregate Demand and Aggregate Supply",sub:"The model of short-run fluctuations"},
      {icon:"🏛️",name:"The Influence of Monetary and Fiscal Policy",sub:"How policy shifts AD"},
      {icon:"⚖️",name:"The Short-Run Trade-off: Inflation and Unemployment",sub:"The Phillips curve"}
    ]},
  { label:"Final Thoughts", unitNum:13, gradient:"linear-gradient(135deg,#e8893c,#b56a2a)", shadow:"#8a4a10",
    nodes:[
      {icon:"🎓",name:"Six Debates over Macroeconomic Policy",sub:"The big questions economists argue about"}
    ]},
];
