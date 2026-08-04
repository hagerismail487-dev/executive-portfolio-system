import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="relative flex items-center bg-white pt-32 pb-20">
      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-14 xl:gap-20">

          {/* Left Content */}
          <div className="max-w-[560px]">

            {/* Badge */}
            <span className="inline-block mb-8 text-[15px] font-semibold uppercase tracking-[0.35em] text-[#2E63D3]">
              Senior Data Analyst | MIS Specialist
            </span>

            {/* Heading */}
            <h1 className="text-[54px] lg:text-[64px] leading-[0.98] font-bold tracking-[-0.04em] text-[#102A56]">
              Transforming
              <br />
              Business Data
              <br />
              into Executive
              <br />
              Decisions.
            </h1>

            {/* Accent Line */}
            <div className="mt-5 mb-8 h-[4px] w-36 rounded-full bg-[#2E63D3]" />

            {/* Description */}
            <p className="max-w-[500px] text-[20px] leading-[1.85] text-slate-500">
              Transforming business data into executive clarity through
              strategic reporting, performance intelligence, and MIS
              frameworks that support confident decision-making.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
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

          {/* Portrait */}
          <div className="flex justify-center lg:justify-center">

            <div className="relative flex h-[550px] w-[440px] items-center justify-center rounded-[42px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.10)]">

              <div className="absolute inset-5 rounded-[34px] border border-slate-200" />

              <div className="text-center">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mb-8 h-24 w-24 text-[#123A67]/60"
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

                <p className="text-lg font-medium tracking-[0.15em] uppercase text-slate-500">
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