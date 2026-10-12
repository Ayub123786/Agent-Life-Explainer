// Page copy for the AgenticPM explainer.
type Step = { n: string; t: string; d: string };
type Item = {
  t: string;
  d: string;
  media: string;
  bullets: string[];
  video?: string;
  image?: string;
};
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

const I = (
  t: string,
  d: string,
  media: string,
  bullets: string[],
  video?: string,
  image?: string,
): Item => ({
  t,
  d,
  media,
  bullets,
  video,
  image,
});

export const CFG = [
  {
    name: "Powering Your Workflow, End to End",
    items: [
      I(
        "Secure Deal Workspace",
        "Stand up a controlled deal environment in under a minute.",
        "secure-deal-workspace.mp4",
        [
          "Separate workstreams with project-level structure",
          "Create each project with parameters that make it easy to identify",
          "Add team members with the right permissions to confidential materials",
          "One shared space where the whole deal team collaborates",
        ],
        "/videos/features/powering-your-workflow/secure-deal-workspace.mp4",
        "/features/powering-your-workflow/secure-deal-workspace.png",
      ),
      I(
        "Project Email Inbox",
        "Give every deal an inbox so no insight goes missing.",
        "project-email-inbox.mp4",
        [
          "Dedicated email address per project",
          "Emails and attachments auto-filed into deal context",
          "Meeting notes captured alongside documents",
          "Everything searchable inside the workspace",
        ],
        "/videos/features/powering-your-workflow/project-email-inbox.mp4",
        "/features/powering-your-workflow/project-email-inbox.png",
      ),
      I(
        "Connectors",
        "Bring deal data in from where it already lives.",
        "connectors.mp4",
        [
          "Connect the systems you already trust: CRM, market-data providers, email and cloud drives",
          "Sync automatically: data lands in the deal and stays current — no re-exports",
          "Enrich as you go: connected data feeds your files, datasets and analysis",
          "Act in place: draft outreach and update records without leaving the platform",
        ],
        "/videos/features/powering-your-workflow/connectors.mp4",
        "/features/powering-your-workflow/connectors.png",
      ),
      I(
        "Datasets",
        "Third-party data and your own data in one workspace.",
        "datasets.mp4",
        [
          "Ingests exports from CRM, market-data providers and databases as structured data",
          "Query thousands of rows without loading the whole file into every task",
          "Filter, aggregate and slice across the whole table",
          "Reuse datasets across analyses and deals",
        ],
        "/videos/features/powering-your-workflow/datasets.mp4",
        "/features/powering-your-workflow/datasets.png",
      ),
      I(
        "Office Templates (Branded)",
        "Every output in your firm’s own formats.",
        "office-templates-branded.mp4",
        [
          "Analysis to a shipped document in seconds, not an evening",
          "Rendered in your firm's own template — fonts, colours, logos, layout",
          "Covers the full set: IC memos, deal decks, board packs, 100-day plans",
          "No copy-paste or reformatting — IC-ready as it lands",
        ],
        "/videos/features/powering-your-workflow/office-templates-branded.mp4",
        "/features/powering-your-workflow/office-templates-branded.png",
      ),
      I(
        "App Types",
        "The right interface for every task — not one tool forced to do everything.",
        "app-types.mp4",
        [
          "Report for structured, decision-ready analysis",
          "Artifact for polished, infographic deliverables, with Chat for grounded Q&A",
          "List Builder to build and enrich any structured grid, row by row",
          "Dashboard for live, always-current views of the metrics that matter",
        ],
        "/videos/features/powering-your-workflow/app-types.mp4",
        "/features/powering-your-workflow/app-types.png",
      ),
      I(
        "Collaborate with Advisors",
        "One shared space for the deal team and its advisors.",
        "collaborate-with-advisors.png",
        [
          "Invite advisors and third parties into the workspace",
          "Granular, permission-based access to only what they need",
          "Shared context so everyone works from the same facts",
          "Confidential materials stay governed throughout",
        ],
        undefined,
        "/features/powering-your-workflow/collaborate-with-advisors.png",
      ),
    ],
  },
  {
    name: "Your Firm’s Decision Engine",
    items: [
      I(
        "AI File Intelligence",
        "Understand the whole data room, and what to trust, before you open a file.",
        "ai-file-intelligence.mp4",
        [
          "Instant AI summaries — know what's in every file without opening it",
          "Auto-detected document type, source and authoring context",
          "A reliability rating on every file — how far to trust each source before citing it",
          "Works across the entire room, however messy the upload",
        ],
        "/videos/features/decision-engine/ai-file-intelligence.mp4",
        "/features/decision-engine/ai-file-intelligence.png",
      ),
      I(
        "Knowledge Agents",
        "Put your firm's own knowledge to work on every deal.",
        "knowledge-agents.mp4",
        [
          "Analysis built from your thesis, playbooks, past IC memos and valuation benchmarks",
          "Captures what lives in your team's heads and files — made queryable",
          "Reasons like your firm, not a generic model",
          "Your knowledge stays in your walls — never leaves, never trains others",
        ],
        "/videos/features/decision-engine/knowledge-agents.mp4",
        "/features/decision-engine/knowledge-agents.png",
      ),
      I(
        "Templates per App Type",
        "Your firm's decision logic built into every task.",
        "templates-per-app-type.mp4",
        [
          "Pre-built templates for each use case",
          "Your investment criteria and decision rules embedded in the task",
          "Consistent output structure across the team",
          "Set up once, applied every time",
        ],
        "/videos/features/decision-engine/templates-per-app-type.mp4",
        "/features/decision-engine/templates-per-app-type.png",
      ),
      I(
        "Custom Tools",
        "Build a tool for your exact use case.",
        "custom-tools.mp4",
        [
          "Ready-made PE research engines: company discovery, people discovery, M&A/deal search",
          "Bespoke tools when nothing off-the-shelf fits (e.g. a management-profile builder)",
          "Encodes your firm's logic so output comes back the way you expect",
          "Kill the manual, repetitive work that eats analyst hours",
        ],
        "/videos/features/decision-engine/custom-tools.mp4",
        "/features/decision-engine/custom-tools.png",
      ),
    ],
  },
  {
    name: "Quality of Response, at the Right Cost",
    items: [
      I(
        "Deal DNA / Ontology",
        "Extract core facts once, lock them, feed everything downstream.",
        "deal-dna-ontology.mp4",
        [
          "Automated extraction of the deal's core facts",
          "Human review before anything is locked",
          "One verified source of truth per deal",
          "Locked facts power every downstream analysis",
        ],
        "/videos/features/quality-of-response/deal-dna-ontology.mp4",
        "/features/quality-of-response/deal-dna-ontology.png",
      ),
      I(
        "Tree-of-Questions Report Engine",
        "A custom tree of questions for every memo.",
        "tree-of-questions-report-engine.mp4",
        [
          "Sections, then topics and central questions",
          "Follows your firm’s templates and style",
          "Learns your team’s preferences",
          "Auditable trail of answers back to source materials",
        ],
        "/videos/features/quality-of-response/tree-of-questions-report-engine.mp4",
        "/features/quality-of-response/tree-of-questions-report-engine.png",
      ),
      I(
        "QA Bot",
        "Work is reviewed before it goes out.",
        "qa-bot.mp4",
        [
          "Findings by severity: High, Medium, Low",
          "Type, topic, finding and resolution",
          "Suggested next step for each finding",
          "Automated cross-document consistency checks",
        ],
        "/videos/features/quality-of-response/qa-bot.mp4",
        "/features/quality-of-response/qa-bot.png",
      ),
      I(
        "Inline Reference / Source Fact-Check",
        "Each number links back to its document.",
        "inline-reference-fact-check.mp4",
        [
          "Inline reference icons on every number",
          "Links back to the source document",
          "Intelligent highlighting in the source",
          "Confidence scoring on extracted metrics",
        ],
        "/videos/features/quality-of-response/inline-reference-fact-check.mp4",
        "/features/quality-of-response/inline-reference-fact-check.png",
      ),
      I(
        "Cost Management",
        "Optimize response speed and cost per query.",
        "cost-management.mp4",
        [
          "Smart model routing based on task complexity",
          "Real-time token and budget tracking",
          "Cost allocation by project and workstream",
          "Maximum efficiency without sacrificing accuracy",
        ],
        "/videos/features/quality-of-response/cost-management.mp4",
        "/features/quality-of-response/cost-management.png",
      ),
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
