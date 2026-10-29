import type { Metadata } from "next";

import KnowledgeHub from "@/components/knowledge-hub/KnowledgeHub";

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description:
    "Ideas, insights, and practical thinking at the intersection of business and intelligence.",
};

export default function KnowledgeHubPage() {
  return <KnowledgeHub />;
}
