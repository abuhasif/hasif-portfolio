import { useState } from "react";
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

function App() {
  const [activePage, setActivePage] = useState<PageId>("home");

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
        return <Hero onNavigate={setActivePage} />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <div className={activePage === "home" ? "flex-1" : "flex-1 pt-24"}>
        {renderPage()}
      </div>
      <Footer />
    </main>
  );
}

export default App;
