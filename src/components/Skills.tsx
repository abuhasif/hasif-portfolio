const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "SVG", "Tailwind CSS"],
  },
  {
    title: "Programming",
    skills: ["C++", "C#", "Data Structures", "Algorithms", "Game Development"],
  },
  {
    title: "Tools",
    skills: ["Git", "Vite", "Electron", "VS Code", "html2canvas"],
  },
  {
    title: "Cloud / DevOps",
    skills: ["Azure", "Azure Functions", "Cosmos DB", "Terraform", "GitHub Actions"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-medium text-cyan-400">Skills</p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Technologies I work with
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="font-bold text-cyan-300">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;