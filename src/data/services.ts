import {
  BarChart3,
  FileText,
  LineChart,
  LayoutDashboard,
} from "lucide-react";

export const services = [
  {
    slug: "executive-dashboards",

    icon: LayoutDashboard,

    title: "Executive Reporting",

    description:
      "Executive reporting solutions designed to turn complex business performance into clear, decision-ready information for leadership.",
  },

  {
    slug: "mis-reporting-systems",

    icon: FileText,

    title: "MIS Reporting Systems",

    description:
      "Structured MIS reporting systems that standardize business information, improve reporting consistency, and support executive management.",
  },

  {
    slug: "business-intelligence",

    icon: BarChart3,

    title: "Business Intelligence",

    description:
      "Business intelligence solutions that transform operational data into meaningful performance insights and explain what the data means for the business.",
  },

  {
    slug: "performance-analytics",

    icon: LineChart,

    title: "Performance Analytics",

    description:
      "Performance analytics that measure KPIs, reveal performance gaps, and help leaders focus on opportunities for improvement.",
  },
] as const;
