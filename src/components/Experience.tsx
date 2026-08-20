const roles = [
  {
    title: "Software / Product Developer Intern",
    company: "SBS Transit Ltd",
    period: "May 2025 - Apr 2026",
    tags: ["UI/UX", "Frontend Development", "Rail Digitalisation"],
    points: [
      "Worked with stakeholders to understand operational needs and translate requirements into practical digital solutions.",
      "Contributed to development, UI design, prototyping, testing, troubleshooting, and iterative improvements across digitalisation initiatives.",
      "Supported technology events and roadshows by presenting and demonstrating innovation initiatives such as IMOS to internal and external audiences.",
    ],
  },
  {
    title: "Network Engineer Intern",
    company: "Terra Systems Pte Ltd",
    period: "Sep 2019 - Feb 2020",
    tags: ["Networking", "Troubleshooting", "Documentation"],
    points: [
      "Assisted with network setup, configuration, troubleshooting, and testing in a real-world technical environment.",
      "Supported technical projects and documentation while gaining hands-on experience with networking tools, hardware, and IT workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <div className="section-title-row">
          <h2>Work shaped by responsibility and delivery.</h2>
          <p>
            My experience spans rail digitalisation, UI/UX and frontend delivery,
            plus early technical exposure in network engineering.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {roles.map((role) => (
          <article key={`${role.company}-${role.title}`} className="timeline-card">
            <div className="grid gap-5 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="text-sm font-semibold text-[#0F766E]">{role.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#102033]">{role.title}</h3>
                <p className="mt-1 text-[#0F766E]">{role.company}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span key={tag} className="tech-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="space-y-3 text-sm leading-6 text-[#5F6F82]">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
