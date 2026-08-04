import Image from "next/image";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center transition-opacity duration-300 hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="Hager Ismail"
              width={300}
              height={64}
              priority
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="#about"
              className="text-[15px] font-medium text-slate-600 transition-colors duration-300 hover:text-[#123A67]"
            >
              About
            </a>

            <a
              href="#expertise"
              className="text-[15px] font-medium text-slate-600 transition-colors duration-300 hover:text-[#123A67]"
            >
              Expertise
            </a>

            <a
              href="#projects"
              className="text-[15px] font-medium text-slate-600 transition-colors duration-300 hover:text-[#123A67]"
            >
              Case Studies
            </a>

            <a
              href="#services"
              className="text-[15px] font-medium text-slate-600 transition-colors duration-300 hover:text-[#123A67]"
            >
              Services
            </a>

            <a
              href="#contact"
              className="text-[15px] font-medium text-slate-600 transition-colors duration-300 hover:text-[#123A67]"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#123A67]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
