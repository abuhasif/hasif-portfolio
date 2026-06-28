const roles = [
  {
    title: "Software / UI Developer Intern",
    company: "SBS Transit Ltd",
    period: "May 2025 - Apr 2026",
    tags: ["React", "Electron", "UI Systems"],
    points: [
      "Contributed to an MRT Infographic Generator for train delay and disruption communication.",
      "Worked on UI design, infographic generation logic, output handling, and usability refinement.",
      "Built and refined visual flows for NEL and DTL service disruption and delay scenarios.",
      "Gained exposure to prototyping, 3D printing, and transport maintenance-related workflows.",
    ],
  },
  {
    title: "Lifeguard",
    company: "Atelier Aquatic Safety Pte. Ltd.",
    period: "May 2022 - Apr 2025",
    tags: ["Safety", "Communication"],
    points: [
      "Maintained swimmer safety and responded to emergency situations using First Aid and CPR skills.",
      "Developed responsibility, communication, and calm decision-making under pressure.",
    ],
  },
  {
    title: "Network Engineer Intern",
    company: "Terra Systems Pte. Ltd.",
    period: "Sept 2019 - Feb 2020",
    tags: ["Networking", "Teamwork"],
    points: [
      "Applied learned concepts directly in an industry environment.",
      "Analysed problems and collaborated with teams to develop solutions.",
      "Contributed to group projects and presentations with fellow interns.",
      "Built hands-on familiarity with software tools and technical workflows.",
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
            My experience spans software internship work, safety-critical service,
            and early technical exposure in network engineering.
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
