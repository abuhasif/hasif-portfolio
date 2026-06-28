const skillGroups = [
  {
    title: "Frontend Engineering",
    level: "Strong",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "SVG"],
  },
  {
    title: "Game & Systems",
    level: "Applied",
    skills: ["C++", "C#", "Custom Engines", "FMOD", "Data Structures", "Algorithms"],
  },
  {
    title: "Tools & Workflow",
    level: "Daily",
    skills: ["Git", "Vite", "Electron", "Visual Studio", "Android Studio", "Figma", "Canva"],
  },
  {
    title: "Cloud & DevOps",
    level: "Learning",
    skills: ["Azure", "Azure Functions", "Cosmos DB", "Terraform", "GitHub Actions"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <div className="section-title-row">
          <h2>Tools I use to ship polished interfaces.</h2>
          <p>
            My core strength is frontend development, supported by game systems,
            tooling, and cloud fundamentals.
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
