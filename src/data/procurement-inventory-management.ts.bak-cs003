export interface ProcurementInventoryManagementProject {
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

export const procurementInventoryManagementProject: ProcurementInventoryManagementProject = {
  title: "Procurement & Inventory Management",

  category: "Procurement & Inventory",
  secondaryCategory: "Supply Orders & Inventory Movement",
  tertiaryCategory: "Procurement, Inventory & Fixed Assets",

  positioning:
    "Executive Procurement, Inventory & Fixed Assets Intelligence",

  description:
    "An executive Power BI reporting solution designed to provide an integrated view of procurement, supply orders, inventory movement, and fixed assets.",

  snapshot: [
    {
      label: "Business Domain",
      value: "Procurement / Inventory / Fixed Assets",
    },
    {
      label: "Primary Focus",
      value: "Procurement, Supply Orders, Inventory & Fixed Assets",
    },
    {
      label: "Reporting Platform",
      value: "Microsoft Power BI",
    },
    {
      label: "Data Source",
      value: "Excel Sheets",
    },
  ],

  overview: {
    challenge:
      "Procurement, inventory, supply orders, and fixed asset data were distributed across multiple operational files and areas, making it difficult to obtain a unified view of purchasing performance, inventory movement, supplies, and asset balances.",

    objective:
      "Provide management with an integrated view of procurement, supply orders, inventory movement, and fixed assets to support performance monitoring, attention identification, and data-driven operational decisions.",

    solution:
      "Built an interactive Power BI dashboard that brings the main procurement and inventory activities into one reporting system, covering procurement and supplies, supplier performance, department and location analysis, periodic inventory movement, monthly item movement, inventory balances, fixed assets movement, and executive management attention.",
  },

  dashboards: [
    {
      title: "Landing Page",
      description:
        "Project entry page introducing the procurement and inventory management reporting system.",
      image:
        "/projects/procurement-inventory-management/01-landing-page.png",
    },
    {
      title: "Executive Dashboard",
      description:
        "Executive management view covering procurement, inventory movement, supplier activity, and management attention areas.",
      image:
        "/projects/procurement-inventory-management/02-executive-dashboard.png",
    },
    {
      title: "Procurement & Supplies",
      description:
        "Procurement analysis covering purchasing values, supply status, suppliers, supply orders, and procurement value by department.",
      image:
        "/projects/procurement-inventory-management/03-procurement-supplies.png",
    },
    {
      title: "Periodic & Monthly Item Movement",
      description:
        "Inventory movement analysis covering item distribution by location, periodic inventory indicators, inventory value concentration, and monthly incoming and outgoing movement.",
      image:
        "/projects/procurement-inventory-management/04-periodic-monthly-item-movement.png",
    },
    {
      title: "Annual Item & Fixed Assets Movement",
      description:
        "Annual analysis covering fixed asset movement, warehouse activity, buffet and cleaning item movement, and top items by quantity.",
      image:
        "/projects/procurement-inventory-management/05-annual-item-fixed-assets-movement.png",
    },
    {
      title: "Data Model",
      description:
        "Data model view supporting the procurement, inventory, movement, and fixed assets reporting structure.",
      image:
        "/projects/procurement-inventory-management/06-data-model.png",
    },
  ],

  architecture: {
    sources: [
      "Excel Sheets",
    ],

    dataAreas: [
      "Procurement",
      "Supply Orders",
      "Suppliers",
      "Departments",
      "Locations",
      "Periodic Inventory Movement",
      "Monthly Item Movement",
      "Inventory Balances",
      "Fixed Assets Movement",
    ],

    analyticalLayer: [
      "Procurement Intelligence",
      "Inventory Intelligence",
      "Supply Order Analysis",
      "Supplier Performance",
      "Location Analysis",
      "Fixed Assets Analysis",
      "Executive Reporting",
      "Operational Decision Support",
    ],
  },

  insights: [
    {
      label: "PROCUREMENT",
      value: "6.01M",
      secondary: "Total Procurement Value",
      detail:
        "Total procurement value reached 6.01M across the reporting period, with purchasing activity distributed across suppliers and operational areas.",
      decision:
        "Supports management monitoring of procurement volume, purchasing trends, and resource allocation.",
      tone: "blue",
    },

    {
      label: "PAYMENT",
      value: "1.40%",
      secondary: "Payment Rate",
      detail:
        "Only 1.40% of the reported procurement value has been paid, leaving approximately 5.93M outstanding.",
      decision:
        "Requires management follow-up on unpaid procurement balances and payment execution.",
      tone: "danger",
    },

    {
      label: "SUPPLIERS",
      value: "958.25K",
      secondary: "Top Supplier Value",
      detail:
        "The highest displayed supplier accounts for approximately 958.25K within total procurement value of 6.01M.",
      decision:
        "Supports supplier concentration monitoring and review of purchasing dependency.",
      tone: "amber",
    },

    {
      label: "SUPPLIER BASE",
      value: "76",
      secondary: "Total Suppliers",
      detail:
        "The procurement reporting environment covers 76 suppliers across purchasing activity and supply orders.",
      decision:
        "Supports supplier portfolio visibility and prioritization of key supplier relationships.",
      tone: "purple",
    },

    {
      label: "INVENTORY",
      value: "2K",
      secondary: "Current Stock Units",
      detail:
        "Current warehouse inventory stands at approximately 2K units, supported by periodic and monthly movement analysis.",
      decision:
        "Supports inventory monitoring, stock planning, and identification of movement requirements.",
      tone: "green",
    },

    {
      label: "FIXED ASSETS",
      value: "374",
      secondary: "Asset Items",
      detail:
        "The reporting system tracks 374 fixed asset items alongside annual asset movement and warehouse activity.",
      decision:
        "Supports management visibility into asset movement, allocation, and resource utilization.",
      tone: "blue",
    },
  ],
  technologies: [
    "Microsoft Power BI",
    "DAX",
    "Power Query",
    "Microsoft Excel",
  ],

  capabilities: [
    "Procurement Intelligence",
    "Inventory Intelligence",
    "Supply Order Analysis",
    "Supplier Performance",
    "Operational Analytics",
    "Fixed Assets Analysis",
    "Executive Reporting",
    "Decision Support",
  ],
};



