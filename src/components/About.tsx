import { useState } from "react";
import selfPortrait from "../assets/Self.jpg";

const email = "hasifbakar@gmail.com";

const strengths = [
  {
    title: "Product-minded UI",
    body: "I focus on flows, states, and output quality so tools stay useful under real constraints.",
  },
  {
    title: "Technical range",
    body: "Comfortable moving between React, TypeScript, C++, game systems, and cloud planning.",
  },
  {
    title: "Operational context",
    body: "Internship work exposed me to transport communication, deadlines, and reliability needs.",
  },
];

const About = () => {
  const [copyState, setCopyState] = useState("Copy email");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("Copied");
      window.setTimeout(() => setCopyState("Copy email"), 1800);
    } catch {
      setCopyState("Copy failed");
      window.setTimeout(() => setCopyState("Copy email"), 1800);
    }
  };

  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <div className="section-title-row">
            <h2>Useful software, built with the user in mind.</h2>
            <p>
              I am a Computer Science student specialising in Interactive Media and
              Game Development at Singapore Institute of Technology. My best work
              sits where interface design, engineering, and practical workflows meet.
            </p>
          </div>
        </div>

        <figure className="card overflow-hidden p-0">
          <img
            src={selfPortrait}
            alt="Portrait of Abu Hasif"
            className="aspect-[4/5] w-full object-cover object-center"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {strengths.map((item) => (
          <article key={item.title} className="content-card">
            <h3 className="text-lg font-semibold text-[#102033]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#5F6F82]">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="contact-panel mt-8">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <div className="section-title-row">
            <h2>Let us build something useful.</h2>
            <p>
              I am open to software engineering, frontend development, UI/UX, and
              graduate programme opportunities.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${email}`} className="primary-button">
            Email me
          </a>
          <button type="button" onClick={handleCopyEmail} className="secondary-button">
            {copyState}
          </button>
          <a
            href="https://www.linkedin.com/in/abuhasif"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/abuhasif"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
