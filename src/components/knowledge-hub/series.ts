export interface SeriesArticle {
  id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage?: {
    src: string;
    alt: string;
  };
  content: {
    en: string;
    ar: string;
  };
}

const executiveMisIntroduction: SeriesArticle = {
  id: "executive-mis-introduction",
  slug: "introduction-to-executive-mis",
  title: "Introduction to Executive MIS",
  description: "Where Business Meets Intelligence.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-00.PNG-0ifHGC1vzncsQNVDyxjKxLgUxZz2MH.png",
    alt: "Executive MIS series cover: Beyond Reports. Beyond Dashboards.",
  },
  content: {
    en: String.raw`# Executive MIS

When you hear the term **MIS**, what is the first thing that comes to mind?

Reports?

Dashboards?

Excel?

I used to think that was what MIS was all about, too.

But after working with different departments and seeing how information is actually used to make decisions, I realized that **MIS is much more than reporting.**

That is why I decided to start this series.

**Executive MIS**

This series is not about Excel.

It is not about Power BI.

And it is not about how to build a dashboard.

It is about the real role of Management Information Systems within an organization.

We will explore how management uses information to lead the business, why a report is only one part of a much larger system, and how data quality, KPI definitions, reporting systems, and the way information is presented can directly influence decision quality.

We will also explore Executive Reporting, KPI Governance, Performance Management, and Cross-functional Visibility — and how the MIS role can evolve from report preparation to supporting management decision-making.

Because the value of MIS is not measured by the number of reports it produces.

**Its value lies in ensuring that the right person receives the right information, at the right time, in a format that helps them make better decisions.**

Welcome to **Executive MIS**.

A series about what happens behind the reports — and the real role that turns data into decisions.

**Where Business Meets Intelligence.**

*Because Executive MIS isn't about producing reports... it's about enabling better business decisions.*

💬 When you hear **MIS**, what comes to mind first: **Reporting, Dashboards, or Decision Support?**

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #DecisionSupport #BusinessAnalysis #Leadership #PerformanceManagement`,
    ar: String.raw`# Executive MIS

**أول ما تسمع كلمة MIS... إيه أول حاجة بتيجي في بالك؟**

تقارير؟

Dashboards؟

Excel؟

أنا كمان كنت فاكرة إن ده هو الـ MIS.

لكن بعد ما اشتغلت مع الإدارات المختلفة وشوفت إزاي المعلومات بتستخدم في اتخاذ القرار، اكتشفت إن الـ MIS أكبر بكتير من مجرد تقارير.

وده السبب اللي خلاني أبدأ السلسلة دي.

**Executive MIS**

السلسلة دي مش هتتكلم عن Excel.

ولا Power BI.

ولا إزاي تبني Dashboard.

هنتكلم عن الدور الحقيقي للـ Management Information Systems داخل أي شركة.

هنتكلم عن إزاي الإدارة بتستخدم المعلومات علشان تقود البزنس، وليه التقرير مجرد جزء من منظومة أكبر، وإزاي جودة البيانات، وتعريف الـ KPIs، ونظام الـ Reporting، وطريقة عرض المعلومات، كلها عوامل بتأثر بشكل مباشر على جودة القرار.

وهنتكلم كمان عن Executive Reporting، وKPI Governance، وPerformance Management، وCross-functional Visibility، وإزاي دور الـ MIS بيتطور من إعداد التقارير إلى دعم الإدارة في اتخاذ القرار.

لأن قيمة الـ MIS مش في عدد التقارير اللي بتطلعها.

قيمتها في إنك تضمن إن الشخص المناسب يوصل له الرقم الصحيح، في الوقت المناسب، بالشكل اللي يساعده ياخد قرار أفضل.

أهلًا بيكم في **Executive MIS**.

سلسلة عن اللي بيحصل وراء التقارير... والدور الحقيقي اللي بيحول البيانات إلى قرارات.

**Where Business Meets Intelligence.**

*Because Executive MIS isn't about producing reports... it's about enabling better business decisions.*

💬 لما تسمع كلمة **MIS**... إيه أول حاجة بتيجي في بالك: **Reporting، Dashboards، ولا Decision Support؟**

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #DecisionSupport #BusinessAnalysis #Leadership #PerformanceManagement`,
  },
};

const executiveMisReportingSystems: SeriesArticle = {
  id: "executive-mis-reporting-systems-not-dashboards",
  slug: "reporting-systems-not-dashboards",
  title: "Reporting Systems, Not Dashboards",
  description: "Why trusted reporting systems matter more than dashboards alone.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-01.PNG-SL7kwFsavdZn2XTjqDMnkoZahM3wCf.png",
    alt: "Executive MIS infographic: MIS is more than a dashboard.",
  },
  content: {
    en: String.raw`# Reporting Systems, Not Dashboards

When someone mentions **MIS**, the first thing that comes to many people's minds is a dashboard.

But the truth is, a dashboard is only a small part of the bigger picture.

When I started my career, I thought my role was to build a good report and present numbers clearly. But over time, I realized that the value of MIS is not in the report itself. It lies in the system that ensures every number in that report is accurate, up to date, and reliable.

Because managers don't need a new dashboard every day. They need a **Reporting System** they can rely on.

A system that ensures data arrives from every department in a consistent way, that KPIs have a single definition, and that the numbers in every report are the same numbers presented in every meeting.

And that is the real difference.

A **dashboard** answers a question.

But a **Reporting System** ensures that every question is answered with reliable information.

That is why I have come to believe that real MIS work begins before I even open Power BI.

It begins with understanding the data lifecycle, organizing data, connecting departments, standardizing KPI definitions, and building a reporting process that the business can rely on every day.

Because the most beautiful dashboard in the world...

has no real value...

if the system behind it isn't strong.

Ultimately, large organizations don't rely on dashboards alone.

They rely on strong **Reporting Systems**, with dashboards serving as the window through which the system's results are displayed.

---

**Where Business Meets Intelligence.**

*Because dashboards display information... but reporting systems build trust in that information.*

💬 In your opinion, what matters more to a company: having a beautiful dashboard, or having a Reporting System that ensures every number can be trusted?

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #DecisionSupport #BusinessAnalysis #ReportingSystems #Leadership`,
    ar: String.raw`# Reporting systems, not dashboards

**لما حد يقول MIS أول حاجة بتيجي في بال ناس كتير هي الـ Dashboard.**

لكن الحقيقة الـ Dashboard مجرد جزء صغير من الصورة.

في بداية شغلي كنت فاكرة إن دوري هو إني أبني تقرير كويس، وأعرض الأرقام بشكل واضح. لكن مع الوقت اكتشفت إن قيمة الـ MIS مش في التقرير نفسه، لكن في النظام اللي بيخلي كل رقم في التقرير يكون دقيق، ومحدث، وقابل للاعتماد عليه.

لأن المدير مش محتاج Dashboard جديدة كل يوم هو محتاج **Reporting System** يقدر يعتمد عليه.

System يضمن إن البيانات بتوصل من كل الإدارات بنفس الطريقة، وإن الـ KPIs ليها تعريف واحد، وإن الأرقام في كل تقرير هي نفس الأرقام اللي هتطلع في أي اجتماع.

وده هو الفرق الحقيقي.

الـ Dashboard بتجاوب على سؤال.

لكن الـ Reporting System بيضمن إن كل الأسئلة تتجاوب بإجابات موثوقة.

علشان كده بقيت مؤمنة إن شغل الـ MIS الحقيقي يبدأ قبل ما أفتح Power BI.

يبدأ من فهم دورة البيانات، وتنظيمها، وربط الإدارات ببعض، وتوحيد تعريفات الـ KPIs، وبناء عملية Reporting يقدر البزنس يعتمد عليها كل يوم.

لأن أجمل Dashboard في العالم...

مش هتكون ليها قيمة...

لو النظام اللي وراها مش قوي.

في النهاية، الشركات الكبيرة ما بتعتمدش على Dashboards فقط.

هي بتعتمد على **Reporting Systems** قوية، والـ Dashboards مجرد نافذة بتعرض نتائج النظام ده.

---

**Where Business Meets Intelligence.**

*Because dashboards display information... but reporting systems build trust in that information.*

💬 في رأيك... إيه الأهم لأي شركة: إنها تمتلك Dashboard جميلة، ولا Reporting System يضمن إن كل رقم فيها موثوق؟

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #DecisionSupport #BusinessAnalysis #ReportingSystems #Leadership`,
  },
};

const executiveMisReportingFramework: SeriesArticle = {
  id: "executive-mis-reporting-framework",
  slug: "every-organization-needs-reporting-framework",
  title: "Every Organization Needs a Reporting Framework",
  description: "Why trusted reporting starts with a framework everyone can rely on.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-02.PNG-01kbTJVxzwFbi9THORw7Ueh3lfPPjp.png",
    alt: "Executive MIS infographic: Reporting Framework — build it right, trust it always.",
  },
  content: {
    en: String.raw`# Every Organization Needs a Reporting Framework

**Every company needs a Reporting Framework... even if it has the best dashboard.**

Some companies invest significant time and effort in building reports, yet every department operates differently.

Each team calculates KPIs differently.

Each report looks different.

And eventually, everyone asks:

*"Which one is correct?"*

The problem isn't the report itself.

The problem is the absence of a clear framework governing the reporting process.

A successful Reporting Framework needs to answer a few simple questions:

- What data needs to be collected?
- Who is responsible for it?
- When should it be updated?
- How should KPIs be calculated?
- Who will use the report?
- And what decision is it supposed to support?

When these questions are clear, reports become clearer, confidence in the numbers grows, and meetings shift from debating data accuracy to discussing decisions.

In my view, that is the difference between a company that has reports...

and a company that has a real Reporting System.

Because a report might solve a temporary problem.

But a Reporting Framework builds a system that continues to serve the organization as it grows.

**Where Business Meets Intelligence.**

*Because great reporting doesn't start with dashboards... it starts with a framework everyone trusts.*

💬 If you were building a Reporting Framework from scratch, what would you start with?

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #ReportingFramework #DecisionSupport #BusinessAnalysis #Leadership`,
    ar: String.raw`**كل شركة محتاجة Reporting Framework... حتى لو عندها أفضل Dashboard.**

في شركات بتصرف وقت ومجهود كبير على بناء التقارير، لكن كل إدارة بتشتغل بطريقة مختلفة.

كل فريق بيحسب الـ KPIs بشكل مختلف.

وكل تقرير بيطلع بشكل مختلف.

وفي الآخر الكل بيسأل:

"مين فيهم الصح؟"

المشكلة هنا مش في التقرير.

المشكلة إن مفيش Framework واضح يحكم عملية الـ Reporting.

أي Reporting Framework ناجح لازم يجاوب على أسئلة بسيطة:

- إيه البيانات اللي هتتجمع؟
- مين المسؤول عنها؟
- إمتى تتحدث؟
- إزاي تتحسب الـ KPIs؟
- مين هيستخدم التقرير؟
- وإيه القرار اللي المفروض يدعمه؟

لما الأسئلة دي تكون واضحة، التقارير نفسها بتبقى أوضح، والثقة في الأرقام بتزيد، والاجتماعات بتتحول من مناقشة صحة البيانات إلى مناقشة القرار.

وده في رأيي هو الفرق بين شركة عندها تقارير...

وشركة عندها نظام Reporting حقيقي.

لأن التقرير ممكن يحل مشكلة مؤقتة.

لكن الـ Reporting Framework بيبني نظام يفضل يخدم الشركة وهي بتكبر.

**Where Business Meets Intelligence.**

*Because great reporting doesn't start with dashboards... it starts with a framework everyone trusts.*

💬 لو كنت بتبني Reporting Framework من الصفر، هتبدأ بإيه؟

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #ReportingFramework #DecisionSupport #BusinessAnalysis #Leadership`,
  },
};

const executiveMisOneSourceOfTruth: SeriesArticle = {
  id: "executive-mis-one-source-of-truth",
  slug: "one-source-of-truth",
  title: "One Source of Truth",
  description: "Why trusted decisions begin with one trusted source of data.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-03.PNG-6z1OKWhYn4EPHClg7emjHeag9PUt3H.png",
    alt: "Executive MIS infographic: One Source of Truth.",
  },
  content: {
    en: String.raw`# One Source of Truth

**"What's the correct number?"**

This might be one of the most common questions in any management meeting.

The problem is that, too often, we have more than one number for the same KPI.

The sales report shows one number.

The finance report shows another.

And the dashboard shows a third.

And everyone is confident that their numbers are correct.

At that moment, the problem is no longer about the number itself.

The problem is that the organization has lost trust in its data.

That is why every successful MIS system relies on one principle:

**One Source of Truth.**

This means having one approved source for the data behind every report, dashboard, and KPI.

Every report.

Every dashboard.

Every KPI.

Should draw from it.

So when someone asks:

*"What's the revenue?"*

There is one answer, not three.

And this is where meetings begin to change.

Instead of spending the first half hour discussing:

*"Which number is correct?"*

We spend our time on a much more important question:

**Based on this number... what should we do?**

In my view, this is one of the most important roles of MIS.

Not to produce more reports, but to build trust in data.

Because once an organization has a single source of truth, the conversation naturally shifts from reviewing numbers to making decisions.

And that is where the real impact of any Reporting System begins.

---

**Where Business Meets Intelligence.**

*Because organizations don't move faster when they have more reports... they move faster when everyone trusts the same numbers.*

💬 In your opinion, what is the biggest risk when different departments rely on different data sources for the same KPI?

#ExecutiveMIS #BusinessIntelligence #MIS #Reporting #DataGovernance #ExecutiveReporting #DecisionSupport #Leadership`,
    ar: String.raw`# One source of truth

**الرقم الصحيح كام؟"

يمكن دي أكتر جملة اتقالت في أي اجتماع إدارة والمشكلة إن أوقات كتير بيكون قدامنا أكتر من رقم لنفس الـ KPI.

تقرير المبيعات بيقول رقم.

وتقرير المالية بيقول رقم تاني.

والـ Dashboard بتقول رقم ثالث.

وكل واحد واثق إن أرقامه هي الصح.

في اللحظة دي المشكلة ما بتبقاش في الرقم.

المشكلة إن الشركة فقدت الثقة في بياناتها وده السبب اللي بيخلي أي نظام MIS ناجح يعتمد على مبدأ واحد:

**One Source of Truth.**

يعني يبقى فيه مصدر واحد معتمد لكل البيانات.

أي Report.

وأي Dashboard.

وأي KPI.

تطلع منه.

علشان أول ما حد يسأل:

*"الإيرادات كام؟"*

يبقى فيه إجابة واحدة مش ثلاث إجابات.

ومن هنا الاجتماعات بتتغير بدل ما نقضي أول نصف ساعة بنناقش:

*"أنهي رقم صح؟"*

بنقضي الوقت كله في سؤال أهم:

**بناءً على الرقم ده... هنعمل إيه؟**

وده في رأيي...

واحد من أهم أدوار الـ MIS مش إنه ينتج تقارير أكتر لكن إنه يبني الثقة في البيانات.

لأن أول ما الشركة يبقى عندها مصدر واحد للحقيقة النقاش هيتحول تلقائيًا من مراجعة الأرقام إلى صناعة القرارات.

وده هو المكان اللي يبدأ فيه الأثر الحقيقي لأي Reporting System.

---

**Where Business Meets Intelligence.**

*Because organizations don't move faster when they have more reports... they move faster when everyone trusts the same numbers.*

💬 في رأيك... إيه أكبر ضرر ممكن يحصل لما كل إدارة تعتمد على مصدر بيانات مختلف لنفس الـ KPI؟

#ExecutiveMIS #BusinessIntelligence #MIS #Reporting #DataGovernance #ExecutiveReporting #DecisionSupport #Leadership`,
  },
};

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
    articles: [
      executiveMisIntroduction,
      executiveMisReportingSystems,
      executiveMisReportingFramework,
      executiveMisOneSourceOfTruth,
    ],
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
