import {
  BarChart3,
  FileText,
  LineChart,
  LayoutDashboard,
} from "lucide-react";

export const services = [
  {
    icon: LayoutDashboard,
    title: "Executive Dashboards",
    description:
      "Executive dashboards designed to transform complex business data into clear, strategic insights for faster decision-making.",
  },
  {
    icon: FileText,
    title: "MIS Reporting Systems",
    description:
      "Structured MIS reporting systems that standardize business reporting, improve visibility, and support executive management.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Business intelligence solutions that convert raw operational data into meaningful performance insights across the organization.",
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description:
      "Performance analytics that measure KPIs, identify opportunities, and help organizations continuously improve business results.",
  },
] as const;
