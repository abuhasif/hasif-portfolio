const skillGroups = [
  {
    title: "UI/UX Design",
    level: "Core",
    skills: [
      "Interaction Design",
      "User-Centred Design",
      "Requirements Gathering",
      "Stakeholder Collaboration",
      "Wireframing & Prototyping",
    ],
  },
  {
    title: "Frontend Development",
    level: "Core",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "SVG", "Tailwind CSS"],
  },
  {
    title: "Application Development",
    level: "Applied",
    skills: ["Electron", "Android Studio"],
  },
  {
    title: "Version Control & DevOps",
    level: "Working",
    skills: ["Git", "GitHub", "GitHub Actions"],
  },
  {
    title: "Cloud & Deployment",
    level: "Working",
    skills: ["Azure", "Vercel"],
  },
  {
    title: "Languages",
    level: "Fluent",
    skills: ["English", "Malay"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <div className="section-title-row">
          <h2>Design and engineering skills for practical digital products.</h2>
          <p>
            My core work sits at the intersection of user-centred design, frontend
            development, and rail digitalisation, supported by application tooling,
            DevOps, and cloud deployment.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="content-card">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-semibold text-[#102033]">{group.title}</h3>
              <span className="status-chip">{group.level}</span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-chip">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
