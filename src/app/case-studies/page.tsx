import type { Metadata } from "next";
import AllProjects from "@/components/sections/AllProjects";
export const metadata: Metadata = {
  title: "Case Studies",
};


export default function CaseStudiesPage() {
  return <AllProjects />;
}
