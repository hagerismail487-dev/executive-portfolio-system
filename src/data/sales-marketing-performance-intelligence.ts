export interface SalesMarketingPerformanceProject {
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

export const salesMarketingPerformanceProject: SalesMarketingPerformanceProject = {
  title: "Sales & Marketing Performance Intelligence",

  category: "Sales Intelligence",
  secondaryCategory: "Marketing Performance",
  tertiaryCategory: "Product Performance",

  positioning:
    "Sales + Marketing + Product Performance Intelligence",

  description:
    "A sales and marketing performance dashboard built from multiple Excel files, bringing revenue, cost, profit, conversion, views, lead performance, sales channels, marketing campaigns, regional performance, country performance, and product-level metrics into one analytical reporting experience.",

  snapshot: [
    {
      label: "Primary Focus",
      value: "Sales & Marketing Performance",
    },
    {
      label: "Core Metrics",
      value: "Revenue · Cost · Profit · Conversion · Views",
    },
    {
      label: "Dashboard Views",
      value: "Sales Marketing Dashboard & Product Details",
    },
    {
      label: "Reporting Period",
      value: "2022 / 2023 / 2024",
    },
  ],
  overview: {
    challenge:
      "As the business expanded across multiple regions, products, and marketing channels, sales data became increasingly fragmented. Management lacked a centralized view to evaluate revenue performance, marketing effectiveness, product profitability, and regional trends, making it more difficult to identify growth opportunities and support timely business decisions.",

    objective:
      "Monitor revenue, cost, and profit performance; evaluate conversion and sales-channel performance; measure marketing campaign effectiveness; analyze regional and country performance; identify top-performing products and profitability patterns; and support revenue growth and strategic planning.",

    solution:
      "A two-module Power BI reporting solution that brings sales, marketing, channel, regional, and product performance into one analytical environment, enabling management to monitor business performance, evaluate commercial effectiveness, and identify growth opportunities.",
  },

  dashboards: [
    {
      title: "Sales Marketing Dashboard",
      description:
        "Executive performance view for monitoring revenue, cost, profit, conversion, monthly trends, lead performance, sales channels, marketing campaigns, regions, and country-level performance to support commercial decisions.",
      image:
        "/projects/sales-marketing-performance-intelligence/01-sales-marketing-dashboard.png",
    },
    {
      title: "Product Details",
      description:
        "Detailed product-level view covering rating, scoring, stock, invoices, average price, views, revenue, cost, and profit to identify high-performing products, profitability patterns, and areas requiring commercial attention.",
      image:
        "/projects/sales-marketing-performance-intelligence/02-product-details.png",
    },
  ],

  architectureImage: "",

  architecture: {
    sources: [],
    dataAreas: [
      "Revenue",
      "Cost",
      "Profit",
      "Conversion",
      "Views",
      "Leads",
      "Sales Channels",
      "Marketing Campaigns",
      "Regions",
      "Countries",
      "Products",
    ],
    analyticalLayer: [
      "Revenue Analysis",
      "Cost Analysis",
      "Profit Analysis",
      "Conversion Analysis",
      "Lead Performance",
      "Sales Channel Analysis",
      "Marketing Campaign Analysis",
      "Regional Analysis",
      "Country Analysis",
      "Product Performance Analysis",
    ],
  },

  insights: [
    {
      label: "Revenue",
      value: "$630K",
      secondary: "Displayed Revenue",
      detail:
        "The Sales Marketing Dashboard displays total revenue of $630K for the selected reporting view.",
      decision:
        "Provides the primary revenue performance reference for the dashboard.",
      tone: "blue",
    },
    {
      label: "Profit",
      value: "$136K",
      secondary: "Displayed Profit",
      detail:
        "The dashboard displays $136K in profit alongside $493K in cost.",
      decision:
        "Provides a consolidated view of revenue, cost, and profit performance.",
      tone: "green",
    },
    {
      label: "Conversion",
      value: "17",
      secondary: "Average Conversion Rate",
      detail:
        "The executive dashboard displays an average conversion rate of 17%.",
      decision:
        "Provides a high-level conversion performance indicator.",
      tone: "amber",
    },
    {
      label: "Views",
      value: "46K",
      secondary: "Displayed Views",
      detail:
        "The dashboard displays 46K views in the selected reporting view.",
      decision:
        "Provides visibility into the volume of recorded views.",
      tone: "purple",
    },
    {
      label: "Product Performance",
      value: "Revenue / Cost / Profit",
      secondary: "Product-Level Analysis",
      detail:
        "The Product Details page provides product-level visibility across revenue, cost, profit, views, stock, invoices, pricing, rating, and scoring.",
      decision:
        "Supports detailed comparison of product performance indicators.",
      tone: "blue",
    },
  ],

  technologies: [],

  capabilities: [
    "Sales Performance Analysis",
    "Marketing Performance Analysis",
    "Revenue Analysis",
    "Profitability Analysis",
    "Conversion Analysis",
    "Lead Performance Analysis",
    "Sales Channel Analysis",
    "Marketing Campaign Analysis",
    "Regional Performance Analysis",
    "Country Performance Analysis",
    "Product Performance Analysis",
    "Inventory & Stock Visibility",
  ],
};

