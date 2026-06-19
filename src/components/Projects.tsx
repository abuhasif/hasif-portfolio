import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-medium text-cyan-400">Projects</p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Featured work
      </h2>

      <p className="mt-4 max-w-2xl text-slate-300">
        A collection of frontend, software, academic, and cloud-focused projects
        that reflect what I’m currently building and learning.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {project.highlights.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4 text-sm font-medium">
              <a href={project.github} className="text-cyan-300 hover:text-cyan-200">
                GitHub
              </a>
              <a href={project.demo} className="text-cyan-300 hover:text-cyan-200">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;