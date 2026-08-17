export interface CRMSalesIntelligenceProject {
  title: string;
  category: string;
  secondaryCategory: string;
  tertiaryCategory: string;
  positioning: string;
  description: string;

  snapshot: {
    label: string;
    value: string;
  }[];

  overview: {
    challenge: string;
    objective: string;
    solution: string;
  };

  dashboards: {
    title: string;
    description: string;
    image: string;
  }[];

  architecture: {
    sources: string[];
    dataAreas: string[];
    analyticalLayer: string[];
  };

  insights: {
    label: string;
    value: string;
    secondary: string;
    detail: string;
    decision: string;
    tone: "danger" | "blue" | "green" | "amber" | "purple";
  }[];

  technologies: string[];
  capabilities: string[];
}

export const crmSalesIntelligenceProject: CRMSalesIntelligenceProject = {
  title: "CRM Sales Intelligence",

  category: "Business Intelligence",
  secondaryCategory: "Sales Performance Analytics",
  tertiaryCategory: "Decision Support",

  positioning:
    "Sales Performance + Pipeline Efficiency + Customer & Product Intelligence",

  description:
    "A Business Intelligence solution designed to transform CRM opportunity data into an integrated view of sales performance, pipeline efficiency, product contribution, customer value, and revenue concentration.",

  snapshot: [
    {
      label: "Business Domain",
      value: "CRM / Sales / Revenue Performance",
    },
    {
      label: "Primary Focus",
      value: "Sales Performance, Pipeline, Customers & Products",
    },
    {
      label: "Reporting Platform",
      value: "Microsoft Power BI",
    },
    {
      label: "Analytical Framework",
      value: "Revenue + Sales Team + Pipeline + Product + Customer",
    },
  ],

  overview: {
    challenge:
      "CRM sales data covered multiple products, customers, sales agents, regions, and pipeline stages, making it difficult to translate operational opportunity data into connected management-level visibility.",

    objective:
      "Transform CRM opportunity data into an integrated sales intelligence environment that enables management to monitor performance, diagnose pipeline behavior, understand revenue drivers, and identify actionable business opportunities.",

    solution:
      "A centralized Microsoft Power BI Business Intelligence solution using Power Query, data modeling, and DAX to connect revenue, opportunities, sales teams, products, customers, and regions into an interactive analytical environment.",
  },

  dashboards: [
    {
      title: "Summary",
      description:
        "Executive starting point providing the overall sales intelligence view and key management indicators.",
      image:
        "/projects/crm-sales-intelligence/01-summary.png",
    },
    {
      title: "Overview",
      description:
        "High-level analysis of sales performance, deal outcomes, revenue movement, pipeline, and regional contribution.",
      image:
        "/projects/crm-sales-intelligence/02-overview.png",
    },
    {
      title: "Sales Team",
      description:
        "Sales-agent analysis covering revenue contribution, win rate, deal outcomes, and sales efficiency.",
      image:
        "/projects/crm-sales-intelligence/03-sales-team.png",
    },
    {
      title: "Pipeline",
      description:
        "Pipeline analysis focused on stage conversion, pipeline value, sales-cycle behavior, and revenue leakage.",
      image:
        "/projects/crm-sales-intelligence/04-pipeline.png",
    },
    {
      title: "Product",
      description:
        "Product-level analysis of revenue contribution, win rates, deal volume, and deal economics.",
      image:
        "/projects/crm-sales-intelligence/05-product.png",
    },
    {
      title: "Customers",
      description:
        "Customer and account analysis focused on contribution, concentration, sectors, and office-location performance.",
      image:
        "/projects/crm-sales-intelligence/06-customers.png",
    },
    {
      title: "Insight Story",
      description:
        "Executive interpretation layer translating analytical findings into risks, opportunities, priorities, and decision support.",
      image:
        "/projects/crm-sales-intelligence/07-insight-story.png",
    },
    {
      title: "Data Model",
      description:
        "Data model supporting the CRM sales intelligence reporting environment.",
      image:
        "/projects/crm-sales-intelligence/08-data-model.png",
    },
  ],

  architecture: {
    sources: [
      "CRM Sales Data",
      "Microsoft Excel",
    ],

    dataAreas: [
      "Revenue",
      "Opportunities",
      "Sales Teams",
      "Pipeline Stages",
      "Products",
      "Customers / Accounts",
      "Regions",
    ],

    analyticalLayer: [
      "Sales Performance Analysis",
      "Pipeline Analytics",
      "Customer Intelligence",
      "Product Intelligence",
      "Revenue Analysis",
      "Executive Reporting",
      "Decision Support",
    ],
  },

  insights: [
    {
      label: "Revenue",
      value: "$10.006M",
      secondary: "Total Revenue",
      detail:
        "The project documents approximately $10M in revenue while identifying concentration across a limited number of sales agents, products, and accounts.",
      decision:
        "Supports monitoring revenue concentration and structural dependency risk.",
      tone: "blue",
    },

    {
      label: "Pipeline Leakage",
      value: "37%",
      secondary: "Engaging Opportunities Lost",
      detail:
        "The documented analysis identifies approximately 37% of Engaging opportunities as lost, with 2,473 lost opportunities highlighted in the Insight Story.",
      decision:
        "Supports management focus on the stage creating significant pipeline leakage.",
      tone: "danger",
    },

    {
      label: "Sales Team",
      value: "≈2×",
      secondary: "Top Agent vs. Second",
      detail:
        "The project identifies a top sales agent generating roughly twice the revenue of the second-ranked agent.",
      decision:
        "Supports reducing key-person dependency and distributing high-performing sales practices.",
      tone: "amber",
    },

    {
      label: "Regional Opportunity",
      value: "33.4%",
      secondary: "Central Revenue Contribution",
      detail:
        "The documented Insight Story identifies Central as generating 33.4% of revenue, while East is identified as a clearer growth opportunity.",
      decision:
        "Supports evaluating regional performance differences and targeted expansion opportunities.",
      tone: "green",
    },

    {
      label: "Product",
      value: "$3.5M",
      secondary: "GTX Pro Revenue",
      detail:
        "The project highlights different commercial behaviors across products, including GTX Pro revenue and lower win-rate behavior for GTK 500.",
      decision:
        "Supports differentiated sales motions based on product-level performance patterns.",
      tone: "purple",
    },
  ],

  technologies: [
    "Microsoft Power BI",
    "Power Query",
    "DAX",
    "Microsoft Excel",
    "Data Modeling",
    "Data Visualization",
  ],

  capabilities: [
    "Business Intelligence",
    "CRM Analytics",
    "Sales Performance Analysis",
    "Pipeline Analytics",
    "Customer Intelligence",
    "Product Intelligence",
    "Executive Reporting",
    "KPI Design",
    "Data Modeling",
    "Decision Support",
    "Business Analysis",
    "Interactive Power BI Reporting",
  ],
};

