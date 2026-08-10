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
    "/projects/executive-sales-performance-intelligence/02-executive-dashboard.png",

  gallery: [
    "/projects/executive-sales-performance-intelligence/01-landing-page.png",
    "/projects/executive-sales-performance-intelligence/02-executive-dashboard.png",
    "/projects/executive-sales-performance-intelligence/03-contracts-reservations-cancellations.png",
    "/projects/executive-sales-performance-intelligence/04-leads-meetings.png",
    "/projects/executive-sales-performance-intelligence/05-inventory-analysis.png",
    "/projects/executive-sales-performance-intelligence/06-orientation-analysis.png",
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

    slug: "hr-analytics-dashboard",

    featured: true,

    title: "HR Analytics Dashboard",

    excerpt:
      "Executive HR analytics dashboard providing workforce insights, hiring performance, turnover analysis, and organizational health metrics.",

    category: "Human Resources",

    industry: "Human Resources",

    year: "2026",

    client: "Confidential",

    role: "Senior MIS & BI Specialist",

    images: {
      cover:
        "/images/case-studies/hr-analytics-dashboard/cover.jpg",

      gallery: [
        "/images/case-studies/hr-analytics-dashboard/dashboard-01.jpg",
        "/images/case-studies/hr-analytics-dashboard/dashboard-02.jpg",
        "/images/case-studies/hr-analytics-dashboard/dashboard-03.jpg",
      ],
    },

    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel",
    ],

    objectives: [
      "Monitor workforce performance.",
      "Track recruitment activities.",
      "Analyze employee turnover.",
      "Support HR strategic planning.",
    ],

    content: {
      ...emptyContent,

      overview:
        "Executive HR reporting solution providing leadership with a complete workforce overview.",

      challenge:
        "HR information was spread across multiple reports with limited executive visibility.",

      solution:
        "Designed an interactive Power BI dashboard integrating recruitment, workforce, contracts, and employee analytics.",

      results:
        "Enabled faster HR reporting and executive-level workforce visibility.",
    },

    businessImpact: [
      {
        title: "Reporting Time",
        value: "-70%",
      },
      {
        title: "Executive Visibility",
        value: "100%",
      },
      {
        title: "Recruitment Tracking",
        value: "+45%",
      },
    ],

    contactCTA: defaultCTA,
  },

  {
    id: 3,

    slug: "procurement-dashboard",

    featured: true,

    title: "Procurement Dashboard",

    excerpt:
      "Executive procurement dashboard for purchasing performance, inventory movement, supplier management, and operational efficiency.",

    category: "Procurement",

    industry: "Procurement",

    year: "2026",

    client: "Confidential",

    role: "Senior MIS & BI Specialist",

    images: {
      cover:
        "/images/case-studies/procurement-dashboard/cover.jpg",

      gallery: [
        "/images/case-studies/procurement-dashboard/dashboard-01.jpg",
        "/images/case-studies/procurement-dashboard/dashboard-02.jpg",
        "/images/case-studies/procurement-dashboard/dashboard-03.jpg",
      ],
    },

    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Excel",
    ],

    objectives: [
      "Track purchasing performance.",
      "Monitor supplier efficiency.",
      "Analyze inventory movement.",
      "Support procurement decisions.",
    ],

    content: {
      ...emptyContent,

      overview:
        "Executive procurement reporting solution for monitoring purchasing and inventory performance.",

      challenge:
        "Procurement reporting relied on disconnected spreadsheets and manual analysis.",

      solution:
        "Built an integrated Power BI dashboard covering procurement, suppliers, inventory, and purchasing KPIs.",

      results:
        "Provided real-time procurement visibility and significantly improved reporting efficiency.",
    },

    businessImpact: [
      {
        title: "Reporting Time",
        value: "-65%",
      },
      {
        title: "Inventory Visibility",
        value: "100%",
      },
      {
        title: "Supplier Monitoring",
        value: "+50%",
      },
    ],

    contactCTA: defaultCTA,
  },
];