export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  heroDescription: string;

  businessValue: string;

  deliverables: string[];

  workflow: string[];

  technologies: string[];

  faqs: FAQ[];

  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "executive-dashboards",

    title: "Executive Reporting",

    shortDescription:
      "Executive reporting solutions that turn complex business performance into clear, decision-ready information for leadership.",

    heroDescription:
      "Executive reporting solutions that bring KPIs, business performance, and key operational signals together into a clear view for leadership decision-making.",

    businessValue:
      "Give leadership a trusted view of business performance, helping decision-makers understand what matters, where attention is needed, and what requires action.",

    deliverables: [
      "Executive Reporting Views",
      "KPI & Performance Views",
      "Management Reporting Pack",
      "Custom Executive Visualizations",
      "Supporting Data Model",
      "Documentation",
    ],

    workflow: [
      "Business Discovery",
      "Reporting Requirements",
      "Data Preparation",
      "Reporting Design",
      "Development",
      "Validation",
      "Deployment",
    ],

    technologies: [
      "Power BI",
      "DAX",
      "Power Query",
      "SQL",
      "Excel",
    ],

    faqs: [
      {
        question: "What does \"Executive Reporting\" actually mean, and how is it different from a regular dashboard?",
        answer:
          "Executive Reporting is the process of translating business performance into a clear, leadership-level view — the key KPIs, performance measures, and trends that matter most to decision-makers. Unlike a general dashboard built for operational staff, it is structured specifically around what leadership needs to see, understand, and act on, with the noise and detail-level data removed."
      },
      {
        question: "Who is this service designed for?",
        answer:
          "This service is designed for business owners, executives, and leadership teams who need a reliable, high-level view of company or departmental performance without having to interpret raw data themselves. It suits organizations where important information exists but is not yet organized into a format leadership can quickly read and act on."
      },
      {
        question: "What will I actually receive at the end of the engagement?",
        answer:
          "Deliverables typically include executive reporting views, KPI and performance views, executive summary pages, a management reporting pack, and custom executive visualizations, supported by an underlying data model. Interactive filters and drilldowns are included where relevant, along with documentation explaining how the reporting is structured and should be used."
      },
      {
        question: "We already have reports — why would we need this?",
        answer:
          "Many organizations have reports, but not reporting built for executive decision-making. Existing reports are often operational, fragmented, or too detailed for leadership use. This service reorganizes and presents that information into a decision-ready format focused on visibility, clarity, and the specific performance measures leadership needs."
      },
      {
        question: "Does this replace our existing systems or data sources?",
        answer:
          "No. The goal is not to replace existing systems or data sources. The reporting layer is designed to work with the available business information and organize it into a clearer executive view, with the underlying reporting structure and data model aligned to the specific management requirements."
      }
    ],

    cta: {
      title: "Ready to Improve Executive Reporting?",
      description:
        "Let's discuss your reporting needs and build a clearer view of business performance for leadership.",
      buttonText: "Let's Talk",
    },
  },

  {
    slug: "mis-reporting-systems",

    title: "MIS Reporting Systems",

    shortDescription:
      "Structured MIS reporting systems that standardize business information, improve reporting consistency, and support management visibility.",

    heroDescription:
      "Structured MIS reporting frameworks that establish consistent reporting standards, templates, and processes across departments.",

    businessValue:
      "Create a consistent reporting environment that improves information clarity, strengthens reporting discipline, and gives management a more reliable view of operations.",

    deliverables: [
      "MIS Reporting Structure",
      "Standard Reporting Templates",
      "Reporting Controls",
      "Data Validation Framework",
      "Reporting Documentation",
    ],

    workflow: [
      "Current Process Assessment",
      "Reporting Requirements",
      "Framework & Standards Design",
      "Report Development",
      "Validation & Testing",
      "Implementation",
    ],

    technologies: [
      "Excel",
      "Power BI",
      "SQL",
      "Power Query",
    ],

    faqs: [
      {
        question: "What problem does an MIS Reporting System actually solve?",
        answer:
          "It addresses fragmented, inconsistent, or ad-hoc management information — where reports differ between teams, KPIs are defined differently across the business, or leadership receives conflicting numbers. The service establishes a structured reporting framework so management information is organized, standardized, and reliable on a recurring basis."
      },
      {
        question: "How is this different from just building better reports?",
        answer:
          "Reports are an output; an MIS is the underlying structure that governs how those reports are produced. This service focuses on defining KPIs consistently, establishing reporting structures, and setting the standards that make recurring management reporting accurate and repeatable — not on designing individual reports in isolation."
      },
      {
        question: "Our teams currently report numbers differently — can this be fixed?",
        answer:
          "Yes, this is a core focus of the service. Inconsistent KPI definitions and reporting formats across teams are addressed by standardizing how management information is defined, structured, and reported, so leadership receives consistent figures regardless of which team or department they come from."
      },
      {
        question: "Is this a one-time project or something that needs to be maintained?",
        answer:
          "An MIS Reporting System is designed to support recurring management reporting rather than a single report. The initial engagement focuses on establishing the reporting structure, standards, KPI definitions, and information requirements so the framework can support consistent reporting over time."
      },
      {
        question: "What does \"reporting governance\" mean in practical terms here?",
        answer:
          "In this context, governance means having clear, agreed definitions for KPIs and reporting structures, and a consistent process for how management information is produced. It reduces reliance on individual interpretation and ensures decision-makers are working from the same, reliably structured information."
      }
    ],

    cta: {
      title: "Improve Your Reporting Process",
      description:
        "Build a structured reporting environment that management can rely on for consistent business information.",
      buttonText: "Get Started",
    },
  },

  {
    slug: "business-intelligence",

    title: "Business Intelligence",

    shortDescription:
      "Business intelligence solutions that connect business data, KPIs, and analysis to reveal meaningful performance insights.",

    heroDescription:
      "Business intelligence solutions that connect data, KPIs, and analysis to help organizations understand performance, identify patterns, and uncover meaningful business insights.",

    businessValue:
      "Turn business data into a clearer understanding of performance, helping leaders identify patterns, relationships, and areas that require attention.",

    deliverables: [
      "BI Analysis Framework",
      "Data Modeling",
      "KPI & Analytical Models",
      "Performance Insights",
      "Documentation",
    ],

    workflow: [
      "Business Assessment",
      "Data & KPI Analysis",
      "Analytical Solution Design",
      "Development",
      "Validation",
      "Deployment",
    ],

    technologies: [
      "Power BI",
      "SQL",
      "Excel",
      "DAX",
    ],

    faqs: [
      {
        question: "What is the difference between Business Intelligence and Executive Reporting?",
        answer:
          "Executive Reporting focuses on presenting performance clearly for leadership visibility. Business Intelligence goes further, starting from business questions and strategic priorities to explain why performance is changing, what is driving results, and where opportunities exist. It is oriented around analysis and interpretation, not just presentation."
      },
      {
        question: "Do we need to already know what questions we want answered?",
        answer:
          "Not necessarily. This service starts from your business challenges and operational priorities, then works with you to shape those into specific, answerable questions. Having some sense of your key concerns is helpful, but the process is designed to translate business context into meaningful analysis, not to require a fully defined brief upfront."
      },
      {
        question: "What kind of outcomes should we expect from a Business Intelligence engagement?",
        answer:
          "You should expect to move from raw data to business understanding — clarity on why results are changing, where opportunities or risks exist, and what the data means in practical business terms. The focus is on insight that supports better decisions, not simply on producing more reports or visuals."
      },
      {
        question: "Is this only useful if we have a lot of data already?",
        answer:
          "Meaningful data is important, but the value of Business Intelligence is not determined by data volume alone. The focus is on whether the available information is relevant to the business questions being examined and whether it can support meaningful analysis and interpretation."
      },
      {
        question: "How is this different from just asking someone to \"analyze the numbers\"?",
        answer:
          "This service connects data analysis directly to business context — strategic objectives, operational priorities, and the specific challenges you are facing — rather than analyzing numbers in isolation. The output is framed around what the findings mean for the business and how they can support a decision, not just statistical observations."
      }
    ],

    cta: {
      title: "Turn Data Into Business Insight",
      description:
        "Build a clearer analytical view of your business data, KPIs, and performance.",
      buttonText: "Book a Consultation",
    },
  },

  {
    slug: "performance-analytics",

    title: "Performance Analytics",

    shortDescription:
      "Performance analytics that measure KPIs, reveal performance gaps, and identify opportunities for improvement.",

    heroDescription:
      "Performance analytics that track KPIs, analyze trends and performance gaps, and help organizations focus on areas that require improvement.",

    businessValue:
      "Create a clear view of performance against expectations, helping leaders identify gaps, understand trends, and focus improvement efforts.",

    deliverables: [
      "KPI Framework",
      "Performance Analysis",
      "Trend Analysis",
      "Performance Gap Analysis",
      "Recommendations",
    ],

    workflow: [
      "KPI Definition",
      "Data Preparation",
      "Performance Analysis",
      "Trend & Gap Analysis",
      "Performance Review",
    ],

    technologies: [
      "Power BI",
      "Excel",
      "SQL",
      "DAX",
    ],

    faqs: [
      {
        question: "What does Performance Analytics focus on that the other services don't?",
        answer:
          "Performance Analytics focuses specifically on how well the business or its operations are performing — through KPIs, performance measures, trends, and gaps — with the goal of identifying where improvement attention is needed. Where MIS focuses on reporting structure and BI focuses on broader business insight, this service centers on operational and performance effectiveness."
      },
      {
        question: "How do you identify where performance gaps exist?",
        answer:
          "Performance gaps are identified by examining KPIs and performance measures against trends over time, highlighting where results are falling short, plateauing, or diverging from expected performance. This creates a clear picture of where operational effectiveness is strongest and where attention is required."
      },
      {
        question: "Is this only relevant for operational teams, or is it useful for leadership too?",
        answer:
          "It is relevant to both. Operational teams gain visibility into performance gaps and trends they can act on directly, while leadership gains a clear view of where operational effectiveness stands across the business, supporting decisions about where improvement efforts should be prioritized."
      },
      {
        question: "Will this tell us exactly how to fix performance issues?",
        answer:
          "Performance Analytics identifies where performance gaps and improvement opportunities exist based on KPIs, measures, and trends, providing an evidence-based starting point for improvement discussions. The analysis helps clarify where attention is needed, while the specific operational or process actions remain dependent on the business context."
      },
      {
        question: "How is \"performance\" defined for our organization?",
        answer:
          "Performance is defined through the KPIs and performance measures most relevant to your business or operational context, rather than a fixed generic set. The analysis is built around the measures that genuinely reflect effectiveness and improvement in your specific environment."
      }
    ],

    cta: {
      title: "Measure Business Performance",
      description:
        "Build a performance measurement framework that supports continuous improvement.",
      buttonText: "Start Your Project",
    },
  },
];
