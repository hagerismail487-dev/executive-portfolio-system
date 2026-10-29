export interface SeriesArticle {
  slug: string;
  title: string;
  description?: string;
}

export interface KnowledgeSeries {
  number: string;
  title: string;
  slug: string;
  description: string;
  articles: SeriesArticle[];
}

export const knowledgeSeries: KnowledgeSeries[] = [
  {
    number: "01",
    title: "Executive MIS",
    slug: "executive-mis",
    description:
      "Practical perspectives on management information, reporting clarity, and the signals leaders need to move with confidence.",
    articles: [],
  },
  {
    number: "02",
    title: "Executive Lens",
    slug: "executive-lens",
    description:
      "A closer look at the questions, context, and judgment behind useful executive insight.",
    articles: [],
  },
  {
    number: "03",
    title: "The Decision Room",
    slug: "the-decision-room",
    description:
      "Thinking tools for turning evidence into focused decisions and meaningful action.",
    articles: [],
  },
  {
    number: "04",
    title: "Business Thinking",
    slug: "business-thinking",
    description:
      "Ideas for connecting analysis to commercial context, operating realities, and business outcomes.",
    articles: [],
  },
  {
    number: "05",
    title: "Behind the Dashboard",
    slug: "behind-the-dashboard",
    description:
      "The principles, trade-offs, and working practices that shape trustworthy reporting.",
    articles: [],
  },
  {
    number: "06",
    title: "Dashboard Design",
    slug: "dashboard-design",
    description:
      "A practical editorial space for thoughtful, useful, and decision-ready information design.",
    articles: [],
  },
  {
    number: "07",
    title: "The Analyst's Mind",
    slug: "the-analysts-mind",
    description:
      "Reflections on curiosity, rigor, communication, and the habits behind strong analysis.",
    articles: [],
  },
  {
    number: "08",
    title: "Career Beyond Dashboards",
    slug: "career-beyond-dashboards",
    description:
      "Perspectives on growing an analytical career beyond tools, outputs, and dashboards.",
    articles: [],
  },
];

export function getKnowledgeSeries(slug: string) {
  return knowledgeSeries.find((series) => series.slug === slug);
}
