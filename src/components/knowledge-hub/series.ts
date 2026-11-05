export interface SeriesArticle {
  id: string;
  number: string;
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
  number: "00",
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
  number: "01",
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

علشان كده بقيت مؤمنة إن شغل الـ MIS ا��حقيقي يبدأ قبل ما أفتح Power BI.

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
  number: "02",
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
  number: "03",
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

const executiveMisBuildRulesBeforeReports: SeriesArticle = {
  id: "executive-mis-build-rules-before-reports",
  number: "04",
  slug: "build-the-rules-before-the-reports",
  title: "Build the Rules Before the Reports",
  description: "Why strong reporting begins with clear rules before beautiful reports.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-05-9oGnMYS23YsP7P4zhjg0VZQ3Vm20IC.png",
    alt: "Executive MIS infographic: Reporting is a business process, not just a task.",
  },
  content: {
    en: String.raw`# Build the Rules Before the Reports

**Before you build any report... build the rules first.**

Many companies invest significant time in designing reports and dashboards, only to discover later that different departments produce different numbers for the same KPI.

Not because someone made a mistake.

But because there were no clear rules from the beginning.

Before thinking about how a report should look, you need to ask:

- Where does this data come from?
- Who is responsible for it?
- When should it be updated?
- How will it be calculated?
- And what is the approved definition of each KPI?

When these questions are clear, all reports speak the same language, disagreements decrease, and management can trust the numbers in front of them.

But if you start with the report before establishing the rules...

every new dashboard will create a new discussion.

In my view, this is one of the most important roles of Executive MIS.

Not to build beautiful reports.

But to build a system that ensures every report follows the same standards, regardless of who created it.

Because reports may change.

But the rules are what ensure that the truth remains consistent.

**Where Business Meets Intelligence.**

*Because great reports are built on great rules, not great visuals.*

💬 In your opinion, what is the first rule every company should agree on before building a reporting system?

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #ReportingFramework #DataGovernance #BusinessAnalysis #Leadership`,
    ar: String.raw`# Build the rules before the reports

**قبل ما تبني أي Report... ابنِ القواعد الأول.**

في شركات كتير بتستثمر وقت كبير في تصميم التقارير ولوحات المتابعة، لكن بعد فترة تكتشف إن كل إدارة بتطلع أرقام مختلفة لنفس الـ KPI.

مش لأن حد غلط.

لكن لأن مفيش قواعد واضحة من البداية.

قبل ما تفكر في شكل التقرير، لازم تسأل:

- البيانات دي جاية منين؟
- مين المسؤول عنها؟
- إمتى تتحدث؟
- إزاي هتتحسب؟
- وإيه التعريف المعتمد لكل KPI؟

لما الأسئلة دي تكون واضحة، التقارير كلها هتتكلم بنفس اللغة، وهتقل الخلافات، والإدارة هتثق في الأرقام اللي قدامها.

أما لو بدأت بالتقرير قبل ما تبني القواعد...

فكل Dashboard جديدة هتخلق نقاش جديد.

وده في رأيي واحد من أهم أدوار الـ Executive MIS.

مش إنه يبني تقارير جميلة.

لكن إنه يبني نظام يخلي أي تقرير يطلع بنفس المعايير، مهما اختلف الشخص اللي عمله.

لأن التقارير ممكن تتغير.

لكن القواعد هي اللي بتضمن إن الحقيقة تفضل واحدة.

**Where Business Meets Intelligence.**

*Because great reports are built on great rules, not great visuals.*

💬 في رأيك، إيه أول قاعدة لازم أي شركة تتفق عليها قبل ما تبدأ تبني نظام Reporting؟

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #ReportingFramework #DataGovernance #BusinessAnalysis #Leadership`,
  },
};

const executiveMisReportingIsBusinessProcess: SeriesArticle = {
  id: "executive-mis-reporting-is-a-business-process",
  number: "05",
  slug: "reporting-is-a-business-process",
  title: "Reporting Is a Business Process",
  description: "Why reporting is a complete business process, not just a task.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-05-9Cqapkqs0Fe8v8pN8VWbQeAxDqNZ5l.png",
    alt: "Executive MIS infographic: Reporting is a business process, not just a task.",
  },
  content: {
    en: String.raw`# Reporting Is a Business Process

**Many people treat Reporting as a task.**

- A daily report.
- A weekly report.
- Or a monthly report.

Something that gets prepared, sent, and that's it.

But the truth is, Reporting is not just a task. It is a **Business Process**.

It is a complete process that starts long before the report itself is written.

It begins with collecting data, reviewing it, and ensuring its quality.

Then standardizing KPI definitions, analyzing results, presenting them in the right format, and finally supporting decision-making.

If any of these steps is weak, the entire report loses its value.

That is why successful companies do not focus only on the report itself. They focus on the process that produces it.

This is why I have come to see every report as an outcome, not a starting point.

Because a good report is a reflection of a good Reporting process.

And if the process has a problem, no dashboard can hide it.

This is one of the most important roles of MIS:

Building a clear process where everyone understands their role.

Every department knows its responsibilities.

And every report is produced with consistent quality, every time.

Because the goal is not simply to deliver the report on time.

The goal is to ensure that the decision built on it is the right one.

---

**Where Business Meets Intelligence.**

*Because reporting isn't a document you send... it's a business process that supports every important decision.*

💬 From your work experience, which stage causes the most challenges in the Reporting process?

#ExecutiveMIS #BusinessIntelligence #MIS #Reporting #BusinessProcess #ExecutiveReporting #DecisionSupport #BusinessAnalysis`,
    ar: String.raw`**كتير من الناس بتتعامل مع الـ Reporting على إنها مهمة.**

- تقرير يومي.
- أو أسبوعي.
- أو شهري.

يتعمل ويتبعت وخلاص.

لكن الحقيقة الـ Reporting مش مهمة هي **Business Process**.

يعني عملية كاملة بتبدأ قبل ما التقرير يتكتب بوقت طويل.

بتبدأ من جمع البيانات ثم مراجعتها ثم التأكد من جودتها.

ثم توحيد تعريفات الـ KPIs ثم تحليل النتائج ثم عرضها بالشكل المناسب.

وأخيرًا اتخاذ القرار.

ولو أي خطوة من الخطوات دي ضعفت التقرير كله هيفقد قيمته.

وده السبب إن الشركات الناجحة ما بتركزش على التقرير نفسه بتركز على العملية اللي بتنتجه

علشان كده بقيت أشوف أي Report كنتيجة مش كبداية لأن التقرير الجيد هو انعكاس لعملية Reporting جيدة.

ولو العملية فيها مشكلة مفيش Dashboard هتقدر تخفيها.

وده واحد من أهم أدوار الـ MIS.

إنها تبني Process واضحة كل شخص يعرف دوره فيها.

وكل إدارة تعرف مسؤوليتها.

وكل تقرير يطلع بنفس الجودة في كل مرة.

لأن الهدف مش إن التقرير يوصل في موعده.

الهدف إن القرار اللي هيُبن���� عليه يكون قرارًا صحيحًا.

---

**Where Business Meets Intelligence.**

*Because reporting isn't a document you send... it's a business process that supports every important decision.*

💬 من واقع شغلك، إيه أكتر مرحلة بتسبب مشاكل في الـ Reporting؟

#ExecutiveMIS #BusinessIntelligence #MIS #Reporting #BusinessProcess #ExecutiveReporting #DecisionSupport #BusinessAnalysis`,
  },
};

const executiveMisDataQualityComesFirst: SeriesArticle = {
  id: "executive-mis-data-quality-comes-first",
  number: "06",
  slug: "data-quality-comes-first",
  title: "Data Quality Comes First",
  description: "Why trust in executive reporting begins with reliable data quality.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-06.PNG-LfHoV5VP0a9w68pEhjzmudXKI2mVOm.png",
    alt: "Executive MIS infographic: Trust in reports is built by data quality.",
  },
  content: {
    en: String.raw`# Data Quality Comes First

**No Executive Report can be stronger than the quality of the data it is built on.**

You may have the best dashboard, the most accurate KPIs, and the fastest reporting process. But if the data itself has a problem, everything that follows becomes questionable.

That is why the first question I have learned to ask in any project is not:

*"How will we present the data?"*

But:

**"Can we trust it?"**

Because in the world of MIS...

Trust matters more than speed.

A report delivered one day late is better than a report delivered on time with incorrect numbers.

That is why data quality is not just one stage of a project.

It is the foundation of the entire project.

There must be clear rules for data entry, continuous reviews, standardized definitions, and mechanisms to detect errors before they reach management.

Because every small data error can become much bigger when it turns into a decision.

And this is the real role of MIS.

Not simply to collect data.

But to ensure that the data behind every decision is reliable.

Because a manager can deal with bad news, but it is much harder to deal with a number they cannot trust.

And ultimately...

The value of any reporting system is not measured by the number of reports it produces.

It is measured by how much management trusts every number it presents.

---

**Where Business Meets Intelligence.**

*Because in Executive MIS, trust begins long before the report is published... it begins with data quality.*

💬 In your opinion, which is more dangerous: **a delayed report or an on-time report with inaccurate data?**

#ExecutiveMIS #BusinessIntelligence #MIS #DataQuality #ExecutiveReporting #DataGovernance #BusinessAnalysis #DecisionSupport`,
    ar: String.raw`# Data Quality Comes First

**مفيش Executive Report تقدر تكون أقوى من جودة البيانات اللي اتبنت عليها.**

ممكن يكون عندك أفضل Dashboard وأدق KPIs وأسرع Reporting Process لكن لو البيانات نفسها فيها مشكلة فكل اللي بعدها هيبقى محل شك.

وده السبب إن أول سؤال بقيت أسأله في أي مشروع مش:

*"هنعرض البيانات إزاي؟"*

لكن:

**"هل نقدر نثق فيها؟"**

لأن في عالم الـ MIS...

الثقة أهم من السرعة

وجود تقرير يوصل متأخر يوم أفضل من تقرير يوصل في معاده لكن أرقامه غلط.

علشان كده جودة البيانات مش مرحلة في المشروع.

هي أساس المشروع كله لازم يكون فيه قواعد واضحة لإدخال البيانات ومراجعة مستمرة وتعريفات موحدة وآلية لاكتشاف الأخطاء قبل ما توصل للإدارة.

لأن كل خطأ صغير في البيانات ممكن يكبر جدًا لما يتحول إلى قرار.

وده هو الدور الحقيقي للـ MIS مش إنها تجمع البيانات فقط.

لكن إنها تضمن إن البيانات اللي هيتبني عليها القرار بيانات موثوقة.

لأن المدير يقدر يتعامل مع خبر سيئ لكن صعب جدًا يتعامل مع رقم مش واثق فيه.

وفي النهاية...

قيمة أي نظام Reporting مش بعدد التقارير اللي بيطلعها.

قيمته بمدى ثقة الإدارة في كل رقم بيظهر فيها.

---

**Where Business Meets Intelligence.**

*Because in Executive MIS, trust begins long before the report is published... it begins with data quality.*

💬 في رأيك... أيهما أخطر: **تقرير متأخر** أم **تقرير في موعده لكن بياناته غير دقيقة؟**

#ExecutiveMIS #BusinessIntelligence #MIS #DataQuality #ExecutiveReporting #DataGovernance #BusinessAnalysis #DecisionSupport`,
  },
};

const executiveMisGovernanceBuildsTrust: SeriesArticle = {
  id: "executive-mis-governance-builds-trust",
  number: "07",
  slug: "governance-builds-trust",
  title: "Governance Builds Trust",
  description: "Why governance turns reliable data into trusted reporting.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-07.PNG-qcm4dLxDBjxpAH7uVDdECqIadwfbVY.png",
    alt: "Executive MIS infographic: Trust in reports is built by governance.",
  },
  content: {
    ar: String.raw`# Governance Builds Trust

**الثقة في التقارير ما بتتبنيش بالدقة فقط بتتبني بالـ Governance.**

كتير من الشركات عندها بيانات جيدة.

لكن أول ما يحصل اختلاف في رقم محدش يعرف يرجع لمصدره.

- مين عدّل ��لبيانات؟
- إمتى اتحدثت؟
- مين مسؤول عن الـ KPI دي؟
- وإيه تعريفها أصلًا؟

في اللحظة دي المشكلة ما بتبقاش في التقرير.

المشكلة إن مفيش نظام يحكم البيانات وده هو معنى **Data Governance**.

إن يبقى لكل رقم مالك ولكل KPI تعريف واضح ولكل تقرير قواعد ثابتة ولكل تعديل أثر يمكن تتبعه.

لأن الـ Governance مش هدفها تعقيد الشغل.

هدفها إن أي شخص يفتح التقرير يبقى واثق إن كل رقم فيه له مصدر معروف، وتعريف واضح، ومسؤولية محددة.

وده اللي بيخلي الإدارة تثق في المعلومات

ولما الإدارة تثق في البيانات بتاخد القرار أسرع وبثقة أكبر.

علشان كده بقيت مؤمنة إن ا��ـ Governance مش موضوع خاص بإدارة البيانات فقط.

دي جزء أساسي من شغل الـ MIS لأن التقارير ممكن تتغير والـ Dashboards ممكن تتطور.

لكن الثقة لازم تفضل ثابتة.

وفي النهاية أفضل نظام Reporting مش هو اللي بيطلع أكبر عدد من التقارير.

هو اللي يخلي أي شخص في الشركة يصدق أول رقم يشوفه لأنه عارف النظام اللي وراه.

---

**Where Business Meets Intelligence.**

*Because governance doesn't control data... it builds trust in every decision made from it.*

💬 في رأيك... إيه أول خطوة لبناء الثقة في البيانات داخل أي شركة: **توحيد تعريفات الـ KPIs**، ولا **تحديد مسؤولية كل بيانات**؟

#ExecutiveMIS #BusinessIntelligence #MIS #DataGovernance #ExecutiveReporting #BusinessAnalysis #DecisionSupport #Leadership`,
    en: String.raw`# Governance Builds Trust

**Trust in reporting is not built on accuracy alone. It is also built on Governance.**

Many companies have good-quality data.

But when a discrepancy appears in a number, no one knows how to trace it back to its source.

- Who modified the data?
- When was it updated?
- Who is responsible for this KPI?
- And what is its actual definition?

At that moment, the problem is no longer the report itself.

The problem is the absence of a system that governs the data.

And that is what **Data Governance** means.

Every number has an owner, every KPI has a clear definition, every report follows consistent rules, and every modification leaves a traceable record.

Because Governance is not meant to make work more complicated.

Its purpose is to ensure that anyone opening a report can trust that every number has a known source, a clear definition, and defined ownership.

That is what builds management's trust in information.

And when management trusts the data, decisions can be made faster and with greater confidence.

That is why I have come to believe that Governance is not a responsibility limited to the Data Management department.

It is an essential part of MIS.

Reports may change, and dashboards may evolve.

But trust must remain consistent.

Ultimately, the best reporting system is not the one that produces the largest number of reports.

It is the one that makes anyone in the company believe the first number they see, because they understand the system behind it.

---

**Where Business Meets Intelligence.**

*Because governance doesn't control data... it builds trust in every decision made from it.*

💬 In your opinion, what is the first step toward building trust in data within any company: **standardizing KPI definitions** or **assigning clear ownership of every data element?**

#ExecutiveMIS #BusinessIntelligence #MIS #DataGovernance #ExecutiveReporting #BusinessAnalysis #DecisionSupport #Leadership`,
  },
};

const executiveMisHiddenCostInconsistentData: SeriesArticle = {
  id: "executive-mis-hidden-cost-inconsistent-data",
  number: "08",
  slug: "hidden-cost-of-inconsistent-data",
  title: "The Hidden Cost of Inconsistent Data",
  description: "Why inconsistent data creates expensive business decisions.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-08.PNG-caRP61Kziz5fMiFrHCAX0vXRhnKXrn.png",
    alt: "Executive MIS infographic: Inconsistent data costs decisions.",
  },
  content: {
    ar: String.raw`# The Hidden Cost of Inconsistent Data

**لما البيانات تكون غير متسقة المشكلة مش في التقرير المشكلة في كل قرار هيتبني عليه**

تخيل إن قسم المبيعات بيحسب "العميل النشط" بطريقة وقسم خدمة العملاء بيحسبه بطريقة تانية والإدارة بتراجع تقريرين...

كل واحد فيهم بيقول رقم مختلف.

في اللحظة دي مفيش حد هيعرف ياخد قرار بثقة لأن السؤال هيبقى:

**"أنهي رقم هو الصح؟"**

والأسوأ من كده إن تكلفة عدم اتساق البيانات مش بتظهر في الـ Dashboard.

بتظهر في الوقت الضائع في الاجتماعات الطويلة في إعادة مراجعة الأرقام وفي القرارات اللي بتتأجل.

وأحيانًا في القرارات اللي بتتاخد بناءً على معلومة غير صحيحة.

وده هو الثمن الحقيقي مش إن الرقم مختلف لكن إن الشركة تستهلك وقتها في مناقشة البيانات بدل ما تناقش البزنس.

علشان كده بقيت مؤمنة إن توحيد البيانات مش مشروع تقني ده مشروع إداري لأن أول خطوة لتحسين سرعة اتخاذ القرار...

مش بناء Dashboard جديدة لكن التأكد إن كل شخص في الشركة بيتكلم بنفس لغة البيانات.

لأن أي نظام MIS ناجح مش بيقاس بعدد التقارير اللي بينتجها لكن بيتقاس بعدد الاجتماعات اللي بتبدأ مباشرة بالحلول...

لأن محدش احتاج يناقش الأرقام.

---

**Where Business Meets Intelligence.**

*Because inconsistent data doesn't just create reporting problems... it creates expensive business decisions.*

💬 في رأيك... إيه أكبر تكلفة لعدم اتساق البيانات داخل الشركات: **الوقت الضائع، فقدان الثقة، ولا القرارات الخاطئة؟**

#ExecutiveMIS #BusinessIntelligence #MIS #DataQuality #DataGovernance #ExecutiveReporting #BusinessAnalysis #DecisionSupport`,
    en: String.raw`# The Hidden Cost of Inconsistent Data

**When data is inconsistent, the problem is not just the report. It is every decision built on it.**

Imagine the Sales Department calculates an "Active Customer" one way, while Customer Service uses a different definition.

Management reviews two reports...

And each one shows a different number.

At that moment, no one can make a decision with confidence, because the question becomes:

**"Which number is correct?"**

And the worst part is that the cost of inconsistent data does not appear on the dashboard.

It appears in the time wasted in lengthy meetings, in repeatedly reviewing numbers, and in decisions that get delayed.

And sometimes, in decisions made based on incorrect information.

That is the real cost.

It is not simply that the numbers are different. It is that the company spends its time discussing data instead of discussing the business.

That is why I have come to believe that data standardization is not just a technical project. It is a management initiative.

Because the first step toward improving decision-making speed...

Is not building another dashboard.

It is making sure that everyone in the company speaks the same data language.

Because a successful MIS system should not be measured by the number of reports it produces.

It should be measured by the number of meetings that can start directly with solutions...

Because no one needs to spend time debating the numbers.

---

**Where Business Meets Intelligence.**

*Because inconsistent data doesn't just create reporting problems... it creates expensive business decisions.*

💬 In your opinion, what is the biggest cost of inconsistent data within companies: **wasted time, loss of trust, or incorrect decisions?**

#ExecutiveMIS #BusinessIntelligence #MIS #DataQuality #DataGovernance #ExecutiveReporting #BusinessAnalysis #DecisionSupport`,
  },
};

const executiveMisEveryDatasetNeedsOwner: SeriesArticle = {
  id: "executive-mis-every-dataset-needs-an-owner",
  number: "09",
  slug: "every-dataset-needs-an-owner",
  title: "Every Dataset Needs an Owner",
  description: "Why every dataset needs clear ownership for trusted reporting.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-09.PNG-1EFN8yOMkPXRr0o7CRX1Pcf4KQcg9Z.png",
    alt: "Executive MIS infographic: Every dataset needs an owner.",
  },
  content: {
    ar: String.raw`**لما تلاقي مشكلة في البيانات...**

أول سؤال لازم يتسأل مش:

*"إيه الخطأ؟"*

لكن:

**مين مسؤول عن البيانات دي؟**

لأن من أكبر أسباب ضعف أنظمة الـ MIS إن البيانات بتكون "مسؤولية الجميع".

وفي الحقيقة لما كل الناس تبقى مسؤولة...

محدش بيكون مسؤول.

كل Dataset داخل الشركة لازم يكون ليها **Owner** شخص أو إدارة مسؤولة عنها.

تعرف مصدرها وتراجع جودتها وتعتمد أي تغيير فيها وتكون المرجع الأساسي لأي استفسار يخصها.

لأن وجود Data Owner مش معناه إنه هو اللي بيدخل كل البيانات.

لكن معناه إن فيه شخص يتحمل مسؤولية صحتها وده بيغير طريقة الشغل بالكامل.

بدل ما أي مشكلة في البيانات تفضل تدور بين الإدارات يبقى معروف مين يراجعها ومين يقرر ومين يوافق على أي تعديل.

وده هو جوهر الـ **Data Governance**.

إن كل معلومة داخل الشركة يبقى ليها مالك واضح.

علشان لما الإدارة تعتمد على رقم تبقى عارفة إن فيه شخص مسؤول عنه مش مجرد ملف Excel بيتنقل بين الأقسام.

وفي رأيي...

واحدة من علامات نضج أي نظام MIS إنك تقدر تجاوب على أي سؤال عن أي Dataset بجملة واحدة:

**"مين مالك البيانات دي؟"**

ولو مفيش إجابة واضحة فدي أول مشكلة لازم تتحل.

---

**Where Business Meets Intelligence.**

*Because every dataset needs an owner... and every important decision needs someone accountable for the data behind it.*

💬 هل كل Dataset في شركتكم ليها شخص واضح مسؤول عنها؟

#ExecutiveMIS #BusinessIntelligence #MIS #DataGovernance #DataManagement #ExecutiveReporting #BusinessAnalysis #DecisionSupport`,
    en: String.raw`# Every Dataset Needs an Owner

**When you find a problem in the data...**

The first question should not be:

*"What's the error?"*

But:

**"Who is responsible for this data?"**

One of the biggest reasons MIS systems become weak is that data is treated as "everyone's responsibility."

But in reality, when everyone is responsible...

No one is accountable.

Every dataset within a company needs an **Owner** — a person or department responsible for knowing its source, reviewing its quality, approving any changes, and serving as the primary point of reference for any questions related to it.

Having a Data Owner does not mean that this person is responsible for entering all the data.

It means there is someone accountable for its accuracy, and that changes the way the entire organization works.

Instead of data issues moving endlessly between departments, it becomes clear who reviews them, who makes decisions, and who approves any changes.

And that is the essence of **Data Governance**.

Making sure that every piece of information within the company has a clearly assigned owner.

So when management relies on a number, they know there is someone accountable for it — not just an Excel file being passed between departments.

In my opinion...

One of the signs of a mature MIS system is being able to answer one question about any dataset with a single sentence:

**"Who owns this data?"**

And if there is no clear answer, that is the first problem that needs to be solved.

---

**Where Business Meets Intelligence.**

*Because every dataset needs an owner... and every important decision needs someone accountable for the data behind it.*

💬 Does every dataset in your company have a clearly identified person responsible for it?

#ExecutiveMIS #BusinessIntelligence #MIS #DataGovernance #DataManagement #ExecutiveReporting #BusinessAnalysis #DecisionSupport`,
  },
};

const executiveMisWhyExecutivesTrustReports: SeriesArticle = {
  id: "executive-mis-why-executives-trust-reports",
  number: "10",
  slug: "why-executives-trust-some-reports",
  title: "Why Executives Trust Some Reports and Ignore Others",
  description: "Why executives trust reports that consistently earn their confidence.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-10.PNG-CEsuFTgtsa7sWW8HG2B9NrlG0oVS7g.png",
    alt: "Executive MIS infographic: Why executives trust some reports and ignore others.",
  },
  content: {
    ar: String.raw`**مش كل Report بتاخد نفس الاهتمام.**

مع إن أوقات كتير بتكون معمولة بنفس الجودة.

وده خلاني أسأل نفسي مرة:

**ليه في تقارير الإدارة بتفتحها أول ما توصل... وتقارير تانية بتتجاهلها؟**

واكتشفت إن الموضوع ملهوش علاقة بشكل الـ Dashboard ولا بعدد الـ KPIs ولا حتى بالألوان.

الموضوع كله...

**ثقة.**

المدير التنفيذي بيثق في التقرير لما يعرف إن أرقامه ثابتة وإن تعريفات الـ KPIs واضحة وإن نفس السؤال هيديله نفس الإجابة...

كل مرة.

وبيثق فيه لما يعرف إن البيانات اتراجعت وإن مصدرها معروف وإن مفيش كل شهر رقم مختلف لنفس المؤشر.

وبيثق فيه أكتر لما التقرير يساعده ياخد قرار مش لما يزوده بمعلومات أكتر.

علشان كده الثقة في التقارير ما بتتبنيش يوم ما التقرير يتبعت.

بتتبني قبلها بوقت طويل بتتبني من جودة البيانات ومن قواعد الـ Reporting ومن الـ Governance ومن الالتزام بنفس المنهج في كل مرة.

وده هو الفرق بين Report تتفتح وReport تتحط في Folder وما حدش يرجعلها.

لأن المدير مش بيدور على تقرير شكله احترافي هو بيدور على تقرير يقدر يبني عليه قرار من غير ما يشك في أي رقم.

وده في رأيي أعلى مستوى ممكن يوصله أي نظام MIS.

إن التقرير ما يحتاجش يدافع عن نفسه لأن الثقة فيه بقت موجودة بالفعل.

---

**Where Business Meets Intelligence.**

*Because executives don't trust reports that look professional... they trust reports that have consistently earned their confidence.*

💬 في رأيك... إيه أكتر عامل بيخلي الإدارة تثق في تقرير: **دقة البيانات، ثبات الأرقام، ولا وضوح الـ KPIs؟**

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #DataGovernance #BusinessAnalysis #DecisionSupport #Leadership`,
    en: String.raw`# Why Executives Trust Some Reports and Ignore Others

**Not every report gets the same level of attention.**

Even though many reports are created with the same level of quality.

And that once made me ask myself:

**Why do executives open some reports as soon as they arrive... while ignoring others?**

I discovered that it has nothing to do with the dashboard design, the number of KPIs, or even the colors.

It all comes down to one thing...

**Trust.**

Executives trust a report when they know its numbers are consistent, its KPI definitions are clear, and the same question will always produce the same answer...

Every single time.

They trust it when they know the data has been reviewed, its source is known, and the same metric does not show a different number every month.

And they trust it even more when the report helps them make a decision, rather than simply giving them more information.

That is why trust in reporting is not built on the day a report is delivered.

It is built long before that.

It comes from data quality, reporting rules, governance, and following the same methodology every time.

And that is the difference between a report that gets opened and one that gets placed in a folder and never revisited.

Because executives are not looking for a report that simply looks professional.

They are looking for a report they can make decisions based on, without questioning any of its numbers.

And in my opinion, this is the highest level any MIS system can reach.

When a report no longer needs to defend itself, because trust in it has already been established.

---

**Where Business Meets Intelligence.**

*Because executives don't trust reports that look professional... they trust reports that have consistently earned their confidence.*

💬 In your opinion, what makes management trust a report the most: **data accuracy, consistency of numbers, or clear KPI definitions?**

#ExecutiveMIS #BusinessIntelligence #MIS #ExecutiveReporting #DataGovernance #BusinessAnalysis #DecisionSupport #Leadership`,
  },
};

const executiveMisOneKpiOneDefinition: SeriesArticle = {
  id: "executive-mis-one-kpi-one-definition",
  number: "11",
  slug: "one-kpi-one-definition",
  title: "One KPI. One Definition.",
  description: "Why every KPI needs one shared definition across the organization.",
  coverImage: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MIS-11.PNG-7vdgaQkbPuTkXlwHKti3A6ZoflUhaY.png",
    alt: "Executive MIS infographic: One KPI. One Definition.",
  },
  content: {
    en: String.raw`# One KPI. One Definition.

**One KPI can become the source of a problem across an entire organization.**

Not because the calculations are wrong, but because different people understand and define it differently.

Imagine the management team reviewing a KPI called:

**Customer Retention Rate**

- The Sales Manager calculates it one way.
- Marketing calculates it differently.
- Customer Service uses a third approach.

Everyone gets a different number, and everyone believes they are right.

At that moment, the problem is no longer the calculation.

The problem is the absence of **one shared definition**.

And this is one of the most important principles of Executive MIS:

**One KPI. One Definition.**

Every KPI across an organization should have:

- A clear, documented definition.
- A consistent calculation methodology.
- A known data source.
- An assigned owner.

This ensures that everyone interpreting the number understands it in exactly the same way.

Because when KPI definitions differ, reports will differ, decisions will differ, and meetings will be wasted discussing calculation methods instead of understanding what the results actually mean.

That is why one of the signs of a mature reporting system is having a centralized **KPI Dictionary** that serves as a single reference for every metric, documenting:

- Its definition.
- Its calculation methodology.
- Its data source.
- Its update frequency.

With this in place, every report speaks the same language, and every dashboard presents the same reality.

Because the value of a KPI is not simply in the number it displays.

Its real value lies in ensuring that everyone across the organization understands that number in the same way.

That is what transforms scattered data into a shared business language across all departments.

---

**Where Business Meets Intelligence.**

*Because a KPI creates alignment only when everyone defines it the same way.*

💬 Does your organization have a centralized **KPI Dictionary**, or do different departments still interpret some metrics in their own ways?

#ExecutiveMIS #BusinessIntelligence #MIS #KPIs #DataGovernance #ExecutiveReporting #BusinessAnalysis #DecisionSupport`,
    ar: String.raw`# KPI واحدة. تعريف واحد.

**ممكن KPI واحدة تبقى سبب مشكلة في شركة كاملة.**

مش لأن الحسابات غلط، لكن لأن كل شخص فاهمها بطريقة مختلفة.

تخيل إن الإدارة بتراجع KPI اسمها:

**Customer Retention Rate**

- مدير المبيعات بيحسبها بطريقة.
- والتسويق بطريقة تانية.
- وخدمة العملاء بطريقة تالتة.

كلهم بيطلعوا أرقام مختلفة، وكلهم مقتنعين إنهم صح.

في اللحظة دي المشكلة مش في الحساب.

المشكلة إن مفيش **تعريف واحد**.

وده واحد من أهم مبادئ الـ Executive MIS:

**One KPI. One Definition.**

كل KPI داخل الشركة لازم يكون ليها:

- تعريف واضح ومكتوب.
- طريقة حساب ثابتة.
- مصدر بيانات معروف.
- شخص مسؤول عنها.

بحيث أي شخص يشوف الرقم يفهم معناه بنفس الطريقة.

لأن لو اختلف تعريف الـ KPI، هتختلف التقارير، وهتختلف القرارات، وهتضيع الاجتماعات في مناقشة طريقة الحساب بدل مناقشة معنى النتيجة.

علشان كده من علامات نضج أي نظام Reporting إن يبقى عنده **KPI Dictionary** مرجع موحد يوضح لكل مؤشر:

- تعريفه.
- طريقة حسابه.
- مصدر بياناته.
- وتكرار تحديثه.

ساعتها...

أي Report هتطلع بنفس اللغة، وأي Dashboard هتعرض نفس الحقيقة.

لأن قيمة الـ KPI مش في الرقم اللي بتعرضه.

قيمتها إن كل شخص في الشركة يفهم الرقم بنفس المعنى.

وده هو اللي يحول البيانات من أرقام متفرقة إلى لغة مشتركة بين كل الإدارات.

---

**Where Business Meets Intelligence.**

*Because a KPI creates alignment only when everyone defines it the same way.*

💬 هل عندكم في الشركة **KPI Dictionary** موحد، ولا كل إدارة بتفسر بعض المؤشرات بطريقتها؟

#ExecutiveMIS #BusinessIntelligence #MIS #KPIs #DataGovernance #ExecutiveReporting #BusinessAnalysis #DecisionSupport`,
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
      executiveMisBuildRulesBeforeReports,
      executiveMisReportingIsBusinessProcess,
      executiveMisDataQualityComesFirst,
      executiveMisGovernanceBuildsTrust,
      executiveMisHiddenCostInconsistentData,
      executiveMisEveryDatasetNeedsOwner,
      executiveMisWhyExecutivesTrustReports,
      executiveMisOneKpiOneDefinition,
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
