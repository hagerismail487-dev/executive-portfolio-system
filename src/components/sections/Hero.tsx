import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionBackground from "../ui/SectionBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBFCFE] pt-32 pb-24 lg:pt-36 lg:pb-28">

      <SectionBackground />

      <Container>

        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2 xl:gap-24">

          {/* ========================= */}
          {/* Left Content */}
          {/* ========================= */}

          <div className="max-w-[560px]">

            {/* Badge */}

            <span className="inline-flex items-center rounded-full border border-[#D9E7FF] bg-[#F5F9FF] px-5 py-2 text-[13px] font-semibold uppercase tracking-[0.32em] text-[#2E63D3]">
              Senior Data Analyst | MIS Specialist
            </span>

            {/* Heading */}

            <h1 className="mt-8 text-[54px] font-bold leading-[0.95] tracking-[-0.05em] text-[#102A56] lg:text-[68px]">

              Transforming
              <br />
              Business Data
              <br />
              into Executive
              <br />
              Decisions.

            </h1>

            {/* Accent */}

            <div className="mt-6 h-[4px] w-36 rounded-full bg-[#2E63D3]" />

            {/* Description */}

            <p className="mt-10 max-w-[500px] text-[20px] leading-9 text-slate-600">

              Transforming business data into executive clarity through
              strategic reporting, performance intelligence, and MIS
              frameworks that support confident decision-making.

            </p>

            {/* Buttons */}

            <div className="mt-14 flex flex-wrap gap-5">

              <Button
                variant="primary"
                size="lg"
                className="min-w-[220px]"
              >
                View Portfolio
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="min-w-[220px]"
              >
                Download CV
              </Button>

            </div>

          </div>
                    {/* ========================= */}
          {/* Portrait */}
          {/* ========================= */}

          <div className="relative flex justify-center">

            {/* Blue Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-[#2E63D3]/10 blur-[120px]" />

            {/* Card */}

            <div className="relative flex h-[560px] w-[440px] items-center justify-center overflow-hidden rounded-[42px] border border-[#E7EEF8] bg-white shadow-[0_40px_100px_rgba(18,58,99,0.10)]">

              {/* Inner Border */}

              <div className="absolute inset-5 rounded-[34px] border border-[#EEF3FA]" />

              <div className="relative z-10 text-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mb-8 h-24 w-24 text-[#123A67]/55"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0"
                  />
                </svg>

                <p className="text-lg font-medium uppercase tracking-[0.15em] text-slate-500">
                  Professional Portrait
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}