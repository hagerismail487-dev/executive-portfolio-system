export interface RealEstateDecisionIntelligenceProject {
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

  architectureImage: string;

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

export const realEstateDecisionIntelligenceProject: RealEstateDecisionIntelligenceProject = {
  title: "Real Estate Decision Intelligence",

  category: "Real Estate Business Intelligence",
  secondaryCategory: "Decision Support System",
  tertiaryCategory: "Sales, Inventory & Pipeline Intelligence",

  positioning:
    "Integrated Real Estate Sales, Inventory & Pipeline Intelligence System",

  description:
    "An integrated Business Intelligence solution designed to provide management with a connected view of real estate sales performance, inventory position, lead pipeline, conversion, closure, and cancellation activity.",

  snapshot: [
    {
      label: "Project Type",
      value: "Real Estate Business Intelligence & Decision Support System",
    },
    {
      label: "Business Domain",
      value: "Real Estate Sales / Inventory / Lead Management",
    },
    {
      label: "Primary Focus",
      value: "Sales, Inventory & Pipeline Intelligence",
    },
    {
      label: "Reporting Period",
      value: "Sales & Inventory Reporting + 2025 Leads Summary Report",
    },
  ],

  overview: {
    challenge:
      "The project connects demand, conversion, sales, cancellation, and inventory signals to provide a structured view of commercial performance and remaining inventory exposure.",

    objective:
      "Provide decision-makers with a unified intelligence environment for monitoring sales performance, inventory position, and lead pipeline activity.",

    solution:
      "An integrated decision-support framework organized into three connected analytical layers: Sales Intelligence, Inventory Intelligence, and Lead Pipeline Intelligence.",
  },

  dashboards: [
    {
      title: "Sales Summary",
      description:
        "Executive sales performance view covering target achievement, sales rate, conversion, closure, cancellation, sales headcount, leads, meetings, contracts, inventory, and quarterly performance.",
      image:
        "/projects/real-estate-decision-intelligence/01-sales-summary.png",
    },
    {
      title: "Inventory Analytics",
      description:
        "Inventory analysis covering starting and ending inventory, inventory by unit type, sales by unit type, average pricing, cancellation by unit type, and cancellation reasons.",
      image:
        "/projects/real-estate-decision-intelligence/02-inventory-analytics.png",
    },
    {
      title: 'Leads Summary Report "2025"',
      description:
        "Lead pipeline analysis covering lead volume, status, gender, contact type, conversion rate, closure rate, and quarterly reporting, with Added Date, Status, and Quarter filters.",
      image:
        "/projects/real-estate-decision-intelligence/03-leads-summary-2025.png",
    },
  ],

  architectureImage: "",

  architecture: {
    sources: [
      "Excel Sheets",
      "ERP System",
      "CRM System",
    ],
    dataAreas: [
      "Sales Performance",
      "Inventory",
      "Leads & Pipeline",
      "Conversion",
      "Closure",
      "Cancellation",
      "Sales Team Performance",
    ],
    analyticalLayer: [
      "Sales Intelligence",
      "Inventory Intelligence",
      "Lead Pipeline Intelligence",
    ],
  },

  insights: [
    {
      label: "SALES PERFORMANCE",
      value: "88.04%",
      secondary: "Target Achievement",
      detail:
        "The dashboard shows 1.94bn Sales against a 2.21bn Target, with 88.04% Achievement.",
      decision:
        "Management can identify the measurable gap between actual sales and target.",
      tone: "blue",
    },
    {
      label: "SALES ACTIVITY",
      value: "1,102",
      secondary: "Leads",
      detail:
        "The system tracks 1,102 Leads and 831 Meetings alongside 70 Sales Headcount.",
      decision:
        "Provides visibility into the relationship between sales capacity, lead generation, and commercial output.",
      tone: "green",
    },
    {
      label: "CONVERSION",
      value: "21.87%",
      secondary: "Conversion Rate",
      detail:
        "The lead pipeline shows 1,102 Leads followed by a 21.87% Conversion Rate and 36.28% Closure Rate.",
      decision:
        "Management can evaluate how effectively opportunities move through the commercial funnel.",
      tone: "purple",
    },
    {
      label: "CANCELLATION",
      value: "29.39%",
      secondary: "Cancellation Rate",
      detail:
        "The dashboard shows 808.24M Total Cancellation and a 29.39% Cancellation Rate.",
      decision:
        "Gross sales performance needs to be interpreted alongside cancellation exposure.",
      tone: "danger",
    },
    {
      label: "INVENTORY",
      value: "2.32bn",
      secondary: "Ending Inventory",
      detail:
        "Starting inventory is 3.49bn while ending inventory is 2.32bn, with different sales contributions across unit types.",
      decision:
        "Helps management evaluate commercial performance in the context of remaining supply.",
      tone: "amber",
    },
    {
      label: "UNIT TYPES",
      value: "655.90M",
      secondary: "Highest Displayed Sales — Admin",
      detail:
        "Admin generates the highest displayed sales value at approximately 655.90M, while Apartment represents the largest starting inventory value at 1.40bn and the highest displayed cancellation value at 237.31M.",
      decision:
        "Inventory size, sales contribution, pricing, and cancellation risk vary by unit type and should not be managed as one portfolio-wide average.",
      tone: "blue",
    },
  ],

  technologies: [
    "Power BI",
    "DAX",
    "Power Query",
    "Excel Sheets",
  ],

  capabilities: [
    "Real Estate Sales Analytics",
    "Sales Performance Reporting",
    "Lead Pipeline Analytics",
    "Conversion Analysis",
    "Contract & Cancellation Analysis",
    "Inventory Intelligence",
    "Unit-Type Performance Analysis",
    "Executive Decision Support",
  ],
};


