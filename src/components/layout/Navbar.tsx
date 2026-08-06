"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "business-value",
      "expertise",
      "projects",
      "services",
      "contact",
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      for (const id of sections) {
        const section = document.getElementById(id);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <Link
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
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {/* About */}

            <Link
              href="/#about"
              className={`relative pb-2 text-[15px] transition-all duration-300 ${
                activeSection === "about"
                  ? "font-bold text-[#123A63]"
                  : "font-medium text-slate-600 hover:text-[#123A63]"
              }`}
            >
              About

              <span
                className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#2563EB] transition-all duration-300 ${
                  activeSection === "about"
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </Link>

            {/* Business Value */}

            <Link
              href="/#business-value"
              className={`relative pb-2 text-[15px] transition-all duration-300 ${
                activeSection === "business-value"
                  ? "font-bold text-[#123A63]"
                  : "font-medium text-slate-600 hover:text-[#123A63]"
              }`}
            >
              Business Value

              <span
                className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#2563EB] transition-all duration-300 ${
                  activeSection === "business-value"
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </Link>

            {/* Expertise */}

            <Link
              href="/#expertise"
              className={`relative pb-2 text-[15px] transition-all duration-300 ${
                activeSection === "expertise"
                  ? "font-bold text-[#123A63]"
                  : "font-medium text-slate-600 hover:text-[#123A63]"
              }`}
            >
              Expertise

              <span
                className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#2563EB] transition-all duration-300 ${
                  activeSection === "expertise"
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </Link>

            {/* Case Studies */}

            <Link
              href="/#projects"
              className={`relative pb-2 text-[15px] transition-all duration-300 ${
                activeSection === "projects"
                  ? "font-bold text-[#123A63]"
                  : "font-medium text-slate-600 hover:text-[#123A63]"
              }`}
            >
              Case Studies

              <span
                className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#2563EB] transition-all duration-300 ${
                  activeSection === "projects"
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </Link>

            {/* Services */}

            <Link
              href="/#services"
              className={`relative pb-2 text-[15px] transition-all duration-300 ${
                activeSection === "services"
                  ? "font-bold text-[#123A63]"
                  : "font-medium text-slate-600 hover:text-[#123A63]"
              }`}
            >
              Services

              <span
                className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#2563EB] transition-all duration-300 ${
                  activeSection === "services"
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </Link>

            {/* Contact */}

            <Link
              href="/#contact"
              className={`relative pb-2 text-[15px] transition-all duration-300 ${
                activeSection === "contact"
                  ? "font-bold text-[#123A63]"
                  : "font-medium text-slate-600 hover:text-[#123A63]"
              }`}
            >
              Contact

              <span
                className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#2563EB] transition-all duration-300 ${
                  activeSection === "contact"
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </Link>
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