import { useState } from "react";
import type { PageId } from "../App";

const navItems = [
  { label: "Home", page: "home" },
  
  { label: "Projects", page: "projects" },
  { label: "Skills", page: "skills" },
  { label: "Experience", page: "experience" },
  { label: "Photography", page: "photography" },
  { label: "About Me", page: "about" },
] satisfies Array<{ label: string; page: PageId }>;

type NavbarProps = {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
};

const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#D5E0EA]/70 bg-[#FFFFFF]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-6">
        <button
          type="button"
          className="flex items-center gap-3 font-semibold text-[#102033]"
          onClick={() => handleNavigate("home")}
          aria-current={activePage === "home" ? "page" : undefined}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#0F766E] text-sm font-black text-white">
            AH
          </span>
          <span className="hidden sm:inline">Abu Hasif</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => handleNavigate(item.page)}
              className={`nav-link ${activePage === item.page ? "nav-link-active" : ""}`}
              aria-current={activePage === item.page ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a href="/Resume.pdf" className="hidden rounded-lg border border-[#D5E0EA] bg-[#FFFFFF]/75 px-4 py-2 text-sm font-semibold text-[#5F6F82] transition hover:border-[#0F766E] hover:text-[#0F766E] md:inline-flex">
          Resume
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-[#D5E0EA] text-[#102033] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          <span className="grid gap-1" aria-hidden="true">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-[#D5E0EA]/70 bg-[#FFFFFF] px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                type="button"
                className={`rounded-lg px-3 py-3 text-left text-sm font-medium text-[#5F6F82] hover:bg-[#DDF7FB] hover:text-[#0F766E] ${
                  activePage === item.page ? "bg-[#DDF7FB] text-[#0F766E]" : ""
                }`}
                onClick={() => handleNavigate(item.page)}
                aria-current={activePage === item.page ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/Resume.pdf"
              className="mt-2 rounded-lg bg-[#0F766E] px-3 py-3 text-sm font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
