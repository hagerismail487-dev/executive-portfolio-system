import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#102A56] via-[#0F274A] to-[#0B1E3B] text-white">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#3B82F6]/10 blur-[140px]" />

        <div className="absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-[#2563EB]/10 blur-[140px]" />

      </div>

      <Container>

        <div className="relative z-10 py-10">

          {/* ================================= */}
          {/* Top Row */}
          {/* ================================= */}

         <div className="flex flex-col gap-10">
<div className="grid grid-cols-1 items-center gap-8 py-2 lg:grid-cols-[300px_1fr_180px]">

  {/* ================= Brand ================= */}

<div className="flex items-center justify-self-start gap-3">
        <Image
      src="/Logo - Copy.png"
      alt="Hager Ismail Logo"
      width={38}
      height={38}
      className="transition duration-300 hover:scale-105"
    />

<div className="h-10 w-px bg-[#2563EB]/60" />
    <div>

<h3 className="text-[16px] font-bold leading-none tracking-tight">
            Hager Ismail
      </h3>

<p className="mt-1 text-[12px] text-blue-100/70">
        MIS & Business Intelligence Specialist
      </p>

    </div>

  </div>

  {/* ================= Navigation ================= */}

<nav className="flex items-center justify-center gap-5">

    <Link
      href="/#about"
      className="relative text-[14px] text-slate-300 transition-all duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#3B82F6] after:transition-all hover:after:w-full"
    >
      About
    </Link>

    <div className="h-4 w-px bg-white/15" />

    <Link
      href="/#expertise"
      className="relative text-[14px] text-slate-300 transition-all duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#3B82F6] after:transition-all hover:after:w-full"
    >
      Expertise
    </Link>

    <div className="h-4 w-px bg-white/15" />

    <Link
      href="/#projects"
      className="relative text-[14px] text-slate-300 transition-all duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#3B82F6] after:transition-all hover:after:w-full"
    >
      Projects
    </Link>

    <div className="h-4 w-px bg-white/15" />

    <Link
      href="/#services"
      className="relative text-[14px] text-slate-300 transition-all duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#3B82F6] after:transition-all hover:after:w-full"
    >
      Services
    </Link>

    <div className="h-4 w-px bg-white/15" />

    <Link
      href="/#contact"
      className="relative text-[14x] text-white after:absolute after:-bottom-[8px] after:left-0 after:h-[2px] after:w-full after:bg-[#3B82F6]"
    >
      Contact
    </Link>

  </nav>

  {/* ================= Social ================= */}

<div className="flex items-center justify-self-end gap-4">

    {/* LinkedIn */}

    <a
      href="https://www.linkedin.com/in/hagerismail1"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#3B82F6]"
    >
      {/* LinkedIn SVG */}
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-[18px] w-[18px] text-slate-300 transition duration-300 group-hover:text-[#60A5FA]"
>
  <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zm.02 3.5H1v16h4V7zm6.5 0h-4v16h4v-8.4c0-4.67 6-5.05 6 0V23h4v-9.8c0-7.64-8.72-7.36-10-3.6V7z"/>
</svg>
    </a>

    {/* Mail */}

    <a
      href="mailto:hagerismail487@gmail.com"
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <Mail className="h-[18px] w-[18px] text-slate-300 transition group-hover:text-white" />
    </a>

    {/* GitHub */}

    <a
      href="https://github.com/hagerismail487-dev"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      {/* GitHub SVG */}
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-[17px] w-[17px] text-slate-300 transition duration-300 group-hover:text-white"
>
  <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.58.1.79-.25.79-.56v-2.18c-3.25.71-3.94-1.39-3.94-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.57-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.21-3.15-.12-.3-.52-1.52.12-3.17 0 0 .99-.32 3.25 1.2a11.2 11.2 0 015.92 0c2.26-1.52 3.25-1.2 3.25-1.2.64 1.65.24 2.87.12 3.17.75.82 1.21 1.87 1.21 3.15 0 4.51-2.74 5.49-5.35 5.79.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
</svg>
    </a>

  </div>

</div>
          </div>

          {/* ================================= */}
          {/* Divider */}
          {/* ================================= */}

<div className="mt-8 mb-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* ================================= */}
          {/* Bottom Row */}
          {/* ================================= */}

<div className="flex items-center justify-between">
                <p className="text-[15px] text-slate-400">
              © {new Date().getFullYear()} Hager Ismail. All rights reserved.
            </p>

            <p className="text-[15px] text-blue-100/70">
              Where Business Meets Intelligence.
            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}