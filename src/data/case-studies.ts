import { hrDecisionSupportSystem } from "@/data/hr-decision-support-system";
import { realEstateDecisionIntelligenceProject } from "@/data/real-estate-decision-intelligence";
import { crmSalesIntelligenceProject } from "@/data/crm-sales-intelligence";

/* ===========================================================
   CASE STUDIES DATA
   Executive Portfolio System
=========================================================== */

/* ===========================================================
   Types
=========================================================== */

export interface BusinessImpact {
  title: string;
  value: string;
}

export interface CaseStudyImages {
  cover: string;
  gallery: string[];
}

export interface CaseStudyContent {
  overview: string;
  challenge: string;
  solution: string;
  results: string;
}

export interface ContactCTA {
  title: string;
  description: string;
}

export interface CaseStudy {
  id: number;

  slug: string;

  featured: boolean;

  title: string;

  excerpt: string;

  category: string;

  industry: string;

  year: string;

  client: string;

  role: string;

  images: CaseStudyImages;

  tools: string[];

  objectives: string[];

  content: CaseStudyContent;

  businessImpact: BusinessImpact[];

  contactCTA: ContactCTA;
}

/* ===========================================================
   Default Values
=========================================================== */

const defaultCTA: ContactCTA = {
  title: "Need a Similar Dashboard?",

  description:
    "Let's build an executive reporting solution tailored to your business.",
};

const emptyContent: CaseStudyContent = {
  overview: "",

  challenge: "",

  solution: "",

  results: "",
};

/* ===========================================================
   Case Studies
=========================================================== */

const hrCaseStudy: CaseStudy = {
  id: 3,
  slug: hrDecisionSupportSystem.slug,
  featured: true,
  title: hrDecisionSupportSystem.title,
  excerpt: hrDecisionSupportSystem.description,
  category: hrDecisionSupportSystem.category,
  industry: hrDecisionSupportSystem.industry,
  year: "",
  client: "",
  role: "",
  images: {
    cover: hrDecisionSupportSystem.dashboards[1].image,
    gallery: hrDecisionSupportSystem.dashboards.map(
      (dashboard) => dashboard.image
    ),
  },
  tools: hrDecisionSupportSystem.tools,
  objectives: [
    "Monitor overall workforce health.",
    "Analyze employee distribution and workforce composition.",
    "Track recruitment funnel performance.",
    "Evaluate hiring effectiveness.",
    "Monitor learning and employee development.",
    "Track engagement initiatives.",
    "Identify documentation and contract risks.",
    "Monitor HR compliance indicators.",
    "Provide executive-level KPIs and actionable insights.",
  ],
  content: {
    overview: hrDecisionSupportSystem.description,
    challenge: hrDecisionSupportSystem.challenge,
    solution: hrDecisionSupportSystem.solution,
    results: "",
  },
  businessImpact: [],
  contactCTA: defaultCTA,
};

const crmSalesIntelligenceCaseStudy: CaseStudy = {
  id: 5,
  slug: "crm-sales-intelligence",
  featured: false,
  title: crmSalesIntelligenceProject.title,
  excerpt: crmSalesIntelligenceProject.description,
  category: crmSalesIntelligenceProject.category,
  industry: "CRM / Sales / Revenue Performance",
  year: "",
  client: "",
  role: "",
  images: {
    cover: crmSalesIntelligenceProject.dashboards[0].image,
    gallery: crmSalesIntelligenceProject.dashboards.map(
      (dashboard) => dashboard.image
    ),
  },
  tools: crmSalesIntelligenceProject.technologies,
  objectives: [
    "Monitor sales performance.",
    "Analyze pipeline efficiency and opportunity leakage.",
    "Evaluate sales team performance.",
    "Analyze product contribution and commercial behavior.",
    "Understand customer and account contribution.",
    "Evaluate regional performance and opportunity.",
    "Support executive decision-making through integrated sales intelligence.",
  ],
  content: {
    overview: crmSalesIntelligenceProject.description,
    challenge: crmSalesIntelligenceProject.overview.challenge,
    solution: crmSalesIntelligenceProject.overview.solution,
    results: "",
  },
  businessImpact: [],
  contactCTA: defaultCTA,
};

const realEstateDecisionIntelligenceCaseStudy: CaseStudy = {
  id: 4,
  slug: "real-estate-decision-intelligence",
  featured: false,
  title: realEstateDecisionIntelligenceProject.title,
  excerpt: realEstateDecisionIntelligenceProject.description,
  category: realEstateDecisionIntelligenceProject.category,
  industry: "Real Estate",
  year: "",
  client: "",
  role: "",
  images: {
    cover: realEstateDecisionIntelligenceProject.dashboards[0].image,
    gallery: realEstateDecisionIntelligenceProject.dashboards.map(
      (dashboard) => dashboard.image
    ),
  },
  tools: realEstateDecisionIntelligenceProject.technologies,
  objectives: [
    "Monitor real estate sales performance.",
    "Analyze inventory position and exposure.",
    "Monitor lead pipeline activity.",
    "Evaluate conversion and closure performance.",
    "Analyze cancellation activity.",
    "Support executive decision-making across sales, inventory, and pipeline intelligence.",
  ],
  content: {
    overview: realEstateDecisionIntelligenceProject.description,
    challenge: realEstateDecisionIntelligenceProject.overview.challenge,
    solution: realEstateDecisionIntelligenceProject.overview.solution,
    results: "",
  },
  businessImpact: [],
  contactCTA: defaultCTA,
};
export const caseStudies: CaseStudy[] = [
      {
    id: 1,

    slug: "executive-sales-performance-intelligence",

    featured: true,

    title: "Executive Sales Dashboard",

    excerpt:
      "Executive reporting solution designed to monitor sales performance, revenue trends, reservations, and strategic KPIs.",

    category: "Real Estate",

    industry: "Real Estate",

    year: "2026",

    client: "Confidential",

    role: "Senior MIS & BI Specialist",

   images: {
  cover:
    "/projects/executive-sales-performance-intelligence/02-executive-dashboard.PNG",

  gallery: [
    "/projects/executive-sales-performance-intelligence/01-landing-page.png",
    "/projects/executive-sales-performance-intelligence/02-executive-dashboard.PNG",
    "/projects/executive-sales-performance-intelligence/03-contracts-reservations-cancellations.PNG",
    "/projects/executive-sales-performance-intelligence/04-leads-meetings.PNG",
    "/projects/executive-sales-performance-intelligence/05-inventory-analysis.PNG",
    "/projects/executive-sales-performance-intelligence/06-orientation-analysis.PNG",
  ],
},

    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel",
    ],

    objectives: [
      "Monitor executive sales performance.",
      "Track reservations and contract status.",
      "Analyze revenue trends.",
      "Support strategic decision-making.",
    ],

    content: {
      ...emptyContent,

      overview:
        "An executive reporting solution built to provide leadership with a complete view of sales performance, operational KPIs, and revenue trends.",

      challenge:
        "Business data was distributed across multiple Excel files and operational systems, making executive reporting slow, inconsistent, and difficult to trust.",

      solution:
        "Developed an integrated Power BI dashboard combining sales, reservations, contracts, and financial indicators into one executive reporting platform.",

      results:
        "Delivered a centralized executive dashboard that significantly improved reporting efficiency and provided leadership with real-time business visibility.",
    },

    businessImpact: [
      {
        title: "Reporting Time",
        value: "-75%",
      },

      {
        title: "Decision Speed",
        value: "+40%",
      },

      {
        title: "Executive Visibility",
        value: "100%",
      },
    ],

    contactCTA: defaultCTA,
  },
    {
  id: 2,

  slug: "customer-experience-operations-dashboard",

  featured: true,

  title: "Customer Experience & Operations Dashboard",

  excerpt:
    "Executive Business Intelligence solution integrating customer service, collections, and legal case management into a unified operational intelligence environment.",

  category: "Customer Experience",

  industry:
    "Customer Experience / Customer Service / Collections / Legal Operations",

  year: "",

  client: "",

  role: "",

  images: {
    cover:
      "/projects/customer-experience-operations-dashboard/03-customer-experience.PNG",

    gallery: [
      "/projects/customer-experience-operations-dashboard/01-landing-page.PNG",
      "/projects/customer-experience-operations-dashboard/03-customer-experience.PNG",
      "/projects/customer-experience-operations-dashboard/03-customer-experience.PNG",
      "/projects/customer-experience-operations-dashboard/04-collections-performance.PNG",
      "/projects/customer-experience-operations-dashboard/05-legal-performance.PNG",
      "/projects/customer-experience-operations-dashboard/data-model.png",
    ],
  },

  tools: [
    "Power BI",
    "DAX",
    "Power Query",
    "Excel Sheets",
  ],

  objectives: [
    "Monitor customer service performance.",
    "Track service request resolution.",
    "Analyze request trends and case types.",
    "Evaluate agent workload.",
    "Monitor payment collection performance.",
    "Identify outstanding balances.",
    "Analyze installment payment status.",
    "Monitor legal case activity and workload.",
    "Identify operational areas requiring management attention.",
  ],

  content: {
    ...emptyContent,

    overview:
      "Customer Experience & Operations Dashboard is an executive Business Intelligence solution designed to provide management with a centralized view of customer service, collections and legal case activity performance.",

    challenge:
      "Customer-facing operational data was distributed across multiple functions, making it difficult for management to monitor service performance, collection effectiveness, legal workload, and project-level operational activity through one centralized reporting environment.",

    solution:
      "Create an integrated customer operations intelligence system that enables management to monitor service performance, collection effectiveness, and legal workload through standardized KPIs and interactive analysis.",

    results:
      "The solution transforms fragmented customer-facing operational data into a centralized executive intelligence environment covering customer service, collections, legal operations and performance.",
  },

  businessImpact: [
    {
      title: "Resolution Rate",
      value: "92%",
    },
    {
      title: "SLA Calls Compliance",
      value: "96.46%",
    },
    {
      title: "Remaining Collections",
      value: "1.21bn",
    },
    {
      title: "Unpaid Installments",
      value: "75.89%",
    },
    {
      title: "Active Legal Cases",
      value: "330",
    },
    {
      title: "Total Legal Cases",
      value: "484",
    },
  ],

  contactCTA: defaultCTA,
},
  hrCaseStudy,
  realEstateDecisionIntelligenceCaseStudy,
  crmSalesIntelligenceCaseStudy,
];














