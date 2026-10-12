// Page copy for the AgenticPM explainer.
type Step = { n: string; t: string; d: string };
type Item = { t: string; d: string; media: string; bullets: string[] };
const S = (n: string, t: string, d: string): Step => ({ n, t, d });
export const TEAMS = [
  {
    name: "Private Equity",
    agent: "Deal Advisor",
    problem:
      "Under auction pressure, the deal team checks the target’s numbers across CIM, data room and model by hand.",
    time: "Screening and diligence take weeks, and drafting memos from the findings takes more.",
    cost: "Missed add-backs, unbooked liabilities and seasonal swings stay invisible until after closing, once the price is paid.",
    steps: [
      S("1", "Reads the data room", "CIM, files, emails, calls"),
      S("2", "Checks every figure", "Each number linked to its source"),
      S("3", "Flags what’s wrong", "Red flags ranked by severity"),
      S("4", "Drafts the IC memo", "In your template, from verified facts"),
    ],
  },
  {
    name: "Transaction Advisory",
    agent: "Financial Advisor",
    problem:
      "Earnings are normalized and working capital reconciled line by line from the data room on every engagement.",
    time: "The QoE takes up most of the hours on a financial diligence engagement.",
    cost: "An adjustment that is missed or wrong flows straight into the price the client pays.",
    steps: [
      S("1", "Reads the data room", "All financial files"),
      S("2", "Normalizes earnings", "Each adjustment linked to its source"),
      S("3", "Tests the balance sheet", "Working capital, liabilities, aging"),
      S("4", "Builds the QoE", "Live Excel formulas, QA-checked"),
    ],
  },
  {
    name: "Investment Banking",
    agent: "Sell-Side Advisor",
    problem:
      "The CIM, the comps and the answers to buyer questions are each built by hand from the same source files.",
    time: "Every round of buyer Q&A means going back through the data room again.",
    cost: "When figures in the CIM, the model and the Q&A don’t match, buyers lose confidence and push back on price.",
    steps: [
      S("1", "Reads the source files", "Client files and data room"),
      S("2", "Drafts teaser and CIM", "Every figure linked to its source"),
      S("3", "Builds the comps", "Precedents and football field"),
      S("4", "Answers buyers", "From the same files, on demand"),
    ],
  },
];

const I = (t: string, d: string, media: string, bullets: string[]): Item => ({
  t,
  d,
  media,
  bullets,
});
export const CFG = [
  {
    name: "Powering Your Workflow, End to End",
    items: [
      I(
        "Secure Deal Workspace",
        "Stand up a controlled deal environment in under a minute.",
        "secure-deal-workspace.mp4 (from the AgenticPM site)",
        [
          "Separate workstreams with project-level structure",
          "Create each project with parameters that make it easy to identify",
          "Add team members with the right permissions to confidential materials",
          "One shared space where the whole deal team collaborates",
        ],
      ),
      I(
        "Project Email Inbox",
        "Give every deal an inbox so no insight goes missing.",
        "project-email-inbox.png (from the AgenticPM site)",
        [
          "Dedicated email address per project",
          "Emails and attachments auto-filed into deal context",
          "Meeting notes captured alongside documents",
          "Everything searchable inside the workspace",
        ],
      ),
      I(
        "Connectors",
        "Bring deal data in from where it already lives.",
        "Connectors screen recording",
        [
          "Files: PDF, PowerPoint, Word, Excel",
          "Email: Outlook and Gmail",
          "Meetings: Google Meet, Teams, Zoom",
          "Web: Tavily, Google, DuckDuckGo, Bing",
        ],
      ),
      I(
        "Datasets",
        "Third-party data and your own data in one workspace.",
        "Datasets screen recording",
        [
          "Preqin, FactSet, S&P Capital IQ",
          "Crunchbase, AlphaSense",
          "Your firm’s own benchmarks",
          "Your firm’s value drivers",
        ],
      ),
      I(
        "Office Templates (Branded)",
        "Every output in your firm’s own formats.",
        "Follows your Template GIF",
        [
          "Memos and decks follow your firm’s templates",
          "Export to PowerPoint, Word and Excel",
          "Excel cells stay live formulas",
          "Learns your team’s style and preferences",
        ],
      ),
      I("App Types", "[APP TYPES DESCRIPTION TO CONFIRM]", "App Types screen recording", [
        "[Point 1 to confirm]",
        "[Point 2 to confirm]",
        "[Point 3 to confirm]",
        "[Point 4 to confirm]",
      ]),
      I(
        "Collaborate with Advisors",
        "One shared space for the deal team and its advisors.",
        "Advisor’s Space screen recording",
        [
          "Shared project workspace with advisors",
          "Early access to diligence reports",
          "Comments and sign-off on each section",
          "Recent tasks visible to the whole team",
        ],
      ),
    ],
  },
  {
    name: "Your Firm’s Decision Engine",
    items: [
      I("Deal DNA", "One set of core facts, verified by your team.", "deal-dna GIF", [
        "Deal, thesis fit, key financials, deal terms",
        "Customers, market, management team",
        "Every memo, model and deck uses the same numbers",
        "Your team verifies each fact",
      ]),
      I(
        "Scored against your IC",
        "Each opportunity scored against your firm’s past IC decisions.",
        "Scores Opportunity GIF",
        [
          "Hypothesis Validation Score",
          "Hypothesis heatmap",
          "Built from your own committee’s decisions",
        ],
      ),
      I(
        "Your question tree",
        "A custom tree of questions for every memo.",
        "IC Memo builder recording",
        [
          "Sections, then topics and central questions",
          "Follows your firm’s templates and style",
          "Learns your team’s preferences",
        ],
      ),
      I("Thesis validation", "The thesis is tested throughout the deal.", "Red Flag Analysis GIF", [
        "Fact-checks any data point across documents, formats and sources",
        "Red flag analysis",
        "Financial red flags",
      ]),
    ],
  },
  {
    name: "Quality of Response, at the Right Cost",
    items: [
      I("Every figure sourced", "Each number links back to its document.", "every analysis GIF", [
        "Inline reference icons on every number",
        "Links back to the source document",
        "Intelligent highlighting in the source",
      ]),
      I("QA Bot", "Work is reviewed before it goes out.", "QA Bot screenshot", [
        "Findings by severity: High, Medium, Low",
        "Type, topic, finding and resolution",
        "Suggested next step for each finding",
      ]),
      I(
        "Source-conflict resolution",
        "When sources disagree, it shows which one holds.",
        "Source-conflict screen recording",
        ["Document reliability scoring", "Trusted websites", "Ontology across deal facts"],
      ),
      I("Live Excel formulas", "Models stay editable and auditable.", "Excel output recording", [
        "No pasted values",
        "Every cell traceable",
        "Traceable logic behind each conclusion",
      ]),
    ],
  },
];

export const QUOTES = [
  {
    initials: "AK",
    name: "Anil Kumar",
    role: "AI Leader, Alvarez & Marsal · New York, USA",
    text: "AgenticPM is a highly configurable platform and it supported us in conducting an AI-maturity assessment across our PE portfolio. The team has deep experience building platforms at scale — a rarity in this crowded field.",
  },
  {
    initials: "BD",
    name: "Bryant Derbyshire",
    role: "Director, Intrinsic Firm · Denver, USA",
    text: "Agentic Private Markets has been an exceptional partner in helping us implement practical, high-impact AI solutions. Their ability to develop customized workflows tailored to our specific needs has significantly improved efficiency and streamlined key processes. The combination of technical expertise and financial acumen has allowed their team to quickly understand our objectives and deliver agentic workflows that create real value.",
  },
  {
    initials: "MD",
    name: "Managing Director",
    role: "Technology Advisory Firm · Chicago, USA",
    text: "We appreciate your team’s relentless commitment to quality of response. That is the only source of value.",
  },
  {
    initials: "AI",
    name: "AI Leader",
    role: "PE Investment Company · Paris, France",
    text: "We are recommending AgenticPM to our sister concern because we really liked working with the team.",
  },
];
