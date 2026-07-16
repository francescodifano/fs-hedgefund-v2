// Content for the department pages — one record drives the shared DepartmentPage.
export type Dept = { name: string; hero: string; body: string[] }

export const DEPARTMENTS_DATA: Record<string, Dept> = {
  'index-construction': {
    name: 'Index Construction',
    hero: 'indexconstruction-3.png',
    body: [
      'The Index Construction Department designs and launches publicly tradable financial indices, taking ideas from raw sector research all the way through to a live, investable product.',
      'In partnership with Solactive and UniCredit, we build real financial products — not simulations.',
    ],
  },
  'hedge-fund': {
    name: 'Hedge Fund',
    hero: 'hedgefund-1.png',
    body: [
      'The Hedge Fund combines discretionary and systematic approaches across multiple strategies and asset classes. Members develop macro theses, construct diversified portfolios, and implement hedging strategies to generate risk-adjusted returns across varying market environments. Detailed content for this department will be provided shortly.',
    ],
  },
  derivatives: {
    name: 'Derivatives & Trading',
    hero: 'derivatives-1.png',
    body: [
      'The trading and derivative department brings together students from across disciplines, forming cross-functional teams that collaborate to navigate real-world financial markets. Each team manages a portfolio using a set of derivative instruments spanning multiple asset classes, developing and executing strategies in a structured, competitive environment.',
      'Teams are evaluated on a quarterly basis using performance metrics, with standings tracked and published throughout the year. Beyond the competition itself, members benefit from a rich learning environment — including workshops on financial theory and derivative strategies — as well as ongoing dialogue with experienced traders and academics who provide guidance, challenge ideas, and help teams refine their thinking. It is a department designed to sharpen analytical skills, foster cross-asset understanding, and cultivate the next generation of investment talent.',
    ],
  },
  quant: {
    name: 'Quant',
    hero: 'quant-1.png',
    body: [
      'The Quantitative Research department brings together students with a passion for mathematics, data science, and financial markets, forming collaborative teams that develop and apply systematic investment strategies. Each team works to research, build, and refine quantitative models and analytical tools that support more informed investment decisions across asset classes.',
      'Teams present and evaluate their strategies on a regular basis, with a focus on sound methodology, and continuous iteration.',
      'Beyond project work, the department offers a hands-on introduction to the world of quantitative finance. Through workshops and practical sessions, members gain exposure to real-world methodologies used in the industry, while also building the technical and conceptual foundations required for careers in the field. The department aims to foster rigorous thinking, strengthen programming and modelling skills, and prepare students for interviews and roles in quantitative finance.',
    ],
  },
}
