export interface ProcurementManagementProject {
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

export const procurementManagementProject: ProcurementManagementProject = {
  title: "Procurement Management",

  category: "Operational Intelligence",
  secondaryCategory: "Procurement & Resource Management",
  tertiaryCategory: "Procurement, Inventory & Fixed Assets Intelligence",

  positioning:
    "Executive Procurement, Inventory & Fixed Assets Intelligence",

  description:
    "An integrated intelligence system for procurement performance, inventory visibility, and fixed asset management.",

  snapshot: [
    {
      label: "Business Domain",
      value: "Procurement / Inventory / Fixed Assets",
    },
    {
      label: "Primary Focus",
      value: "Procurement Performance, Inventory & Asset Intelligence",
    },
    {
      label: "Reporting Platform",
      value: "Microsoft Power BI",
    },
    {
      label: "Analytical Framework",
      value: "Procurement + Inventory + Fixed Assets",
    },
  ],

  overview: {
    challenge:
      "Procurement, inventory, and asset information require connected management visibility.",

    objective:
      "Provide an integrated reporting system across procurement, stock, and fixed assets.",

    solution:
      "An integrated management reporting environment connecting purchasing performance, supplier activity, payment status, inventory availability, stock movement, and asset utilization.",
  },

  dashboards: [
    {
      title: "Executive Dashboard",
      description:
        "Executive entry point providing management visibility into procurement activity, payment progress, supplier concentration, procurement status, and departmental procurement value.",
      image:
        "/projects/procurement-management/01-executive-dashboard.png",
    },
    {
      title: "Procurement & Supplies",
      description:
        "Procurement analysis covering purchasing activity, supplier intelligence, procurement status, payment intelligence, and procurement value by department.",
      image:
        "/projects/procurement-management/02-procurement-supplies.png",
    },
    {
      title: "Periodic Movement Analysis",
      description:
        "Inventory movement analysis covering current stock quantity and value distribution across locations and item categories, inventory status, and high-value stock concentration.",
      image:
        "/projects/procurement-management/03-periodic-movement-analysis.png",
    },
    {
      title: "Inventory Analysis",
      description:
        "Detailed inventory analysis covering item quantity, value, location, packaging type, stock status, and item-level monitoring.",
      image:
        "/projects/procurement-management/04-inventory-analysis.png",
    },
    {
      title: "Fixed Assets Analysis",
      description:
        "Fixed asset analysis covering asset value, incoming and outgoing movement, asset type distribution, and current utilization status.",
      image:
        "/projects/procurement-management/05-fixed-assets-analysis.png",
    },
  ],

  architecture: {
    sources: [
      "Procurement Data",
      "Inventory Data",
      "Fixed Assets Data",
    ],

    dataAreas: [
      "Procurement Performance",
      "Supplier Activity",
      "Payment Status",
      "Purchase Order Status",
      "Inventory Position",
      "Stock Movement",
      "Item Analysis",
      "Fixed Assets",
      "Asset Movement",
      "Asset Utilization",
    ],

    analyticalLayer: [
      "Procurement Intelligence",
      "Inventory Intelligence",
      "Fixed Assets Analytics",
      "Operational Analytics",
      "Executive Reporting",
      "Decision Support",
    ],
  },

  insights: [
    {
      label: "PROCUREMENT",
      value: "18.75M",
      secondary: "Total Procurement Value",
      detail:
        "The dashboard reports total procurement value of 18.75M, with the monthly trend reaching approximately 2.42M in December.",
      decision:
        "Supports management monitoring of purchasing activity, trends, and resource allocation.",
      tone: "blue",
    },

    {
      label: "PAYMENT",
      value: "71.5%",
      secondary: "Payment Rate",
      detail:
        "The dashboard reports a 71.5% payment rate with approximately 5.33M outstanding.",
      decision:
        "Supports management follow-up on outstanding procurement balances and payment execution.",
      tone: "danger",
    },

    {
      label: "SUPPLIERS",
      value: "2.85M",
      secondary: "Top Supplier Procurement Value",
      detail:
        "The leading displayed supplier accounts for approximately 2.85M in procurement value.",
      decision:
        "Supports monitoring supplier concentration and purchasing dependency.",
      tone: "amber",
    },

    {
      label: "INVENTORY",
      value: "87.1%",
      secondary: "Available Items",
      detail:
        "The inventory analysis shows 87.1% available items, 7.6% low-stock items, and 5.2% out-of-stock items.",
      decision:
        "Supports prioritization of low-stock and depleted items while monitoring high-value stock concentration.",
      tone: "green",
    },

    {
      label: "LOCATION",
      value: "39.8%",
      secondary: "Tagamoa Current Stock Share",
      detail:
        "Tagamoa represents the largest displayed share of current stock quantity at 39.8% and inventory value at 39.2%.",
      decision:
        "Supports monitoring location-level inventory allocation, availability, and operational requirements.",
      tone: "purple",
    },

    {
      label: "FIXED ASSETS",
      value: "80.1%",
      secondary: "Assets In Use",
      detail:
        "The fixed asset analysis shows 80.1% of assets in use, 15.2% under maintenance, and 4.7% stopped.",
      decision:
        "Supports monitoring asset utilization and identifying maintenance-related resource constraints.",
      tone: "blue",
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
    "Procurement Intelligence",
    "MIS Reporting",
    "Inventory Intelligence",
    "Operational Analytics",
    "Fixed Assets Analytics",
    "Executive Reporting",
    "Resource Management",
    "Decision Support",
  ],
};
