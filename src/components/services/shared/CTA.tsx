import Link from "next/link";
import Container from "@/components/ui/Container";

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTA({
  title,
  description,
  buttonText,
  buttonHref,
}: CTAProps) {
  return (
    <section className="bg-[#102A56] py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold tracking-[-0.03em] text-white lg:text-5xl">
            {title}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300 lg:text-xl">
            {description}
          </p>

          {/* Button */}
          <div className="mt-12">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#102A56] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EEF5FF] hover:shadow-2xl"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}