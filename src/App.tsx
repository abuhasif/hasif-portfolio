import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Photography from "./components/Photography";
import Footer from "./components/Footer";

export type PageId =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "photography";

const pageIds: PageId[] = [
  "home",
  "about",
  "projects",
  "skills",
  "experience",
  "photography",
];

const isPageId = (value: string): value is PageId => pageIds.includes(value as PageId);

const getPageFromLocation = (): PageId => {
  const hash = window.location.hash.replace(/^#/, "");
  return isPageId(hash) ? hash : "home";
};

function App() {
  const [activePage, setActivePage] = useState<PageId>(() => getPageFromLocation());

  useEffect(() => {
    const syncPageFromLocation = () => {
      setActivePage(getPageFromLocation());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", syncPageFromLocation);
    window.addEventListener("popstate", syncPageFromLocation);

    return () => {
      window.removeEventListener("hashchange", syncPageFromLocation);
      window.removeEventListener("popstate", syncPageFromLocation);
    };
  }, []);

  const handleNavigate = (page: PageId) => {
    const currentPage = getPageFromLocation();
    const nextUrl =
      page === "home"
        ? `${window.location.pathname}${window.location.search}`
        : `${window.location.pathname}${window.location.search}#${page}`;

    if (currentPage !== page) {
      window.history.pushState({ page }, "", nextUrl);
    }

    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "photography":
        return <Photography />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--primary)] focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to main content
      </a>
      <main id="main-content" tabIndex={-1} className="flex min-h-screen flex-col">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <div className={activePage === "home" ? "flex-1" : "flex-1 pt-24"}>
        {renderPage()}
      </div>
      <Footer />
      </main>
    </>
  );
}

export default App;
