import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Hager Ismail | Executive Portfolio",
    template: "%s | Hager Ismail",
  },

  description:
    "Business Intelligence & MIS Reporting Specialist transforming business data into executive decisions through Executive Reporting, Performance Analytics, and Business Intelligence.",

  keywords: [
    "Business Intelligence",
    "MIS Reporting",
    "Executive Reporting",
    "Power BI",
    "Performance Analytics",
    "Dashboard Design",
    "Data Analytics",
    "Business Reporting",
    "Hager Ismail",
  ],

  authors: [
    {
      name: "Hager Ismail",
    },
  ],

  creator: "Hager Ismail",

  openGraph: {
    title: "Hager Ismail | Executive Portfolio",

    description:
      "Business Intelligence & MIS Reporting Specialist transforming business data into executive decisions.",

    type: "website",

    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${plusJakarta.className}
          bg-[#FAFBFD]
          text-[#102A56]
          antialiased
        `}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
