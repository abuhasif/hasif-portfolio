import { useCallback, useEffect, useMemo, useState } from "react";
import { projects, type Project, type ProjectCategory } from "../data/projects";

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Game",
  "Cloud",
  "Systems",
];

const defaultProjectTitle = "Cloud-Native Developer Portfolio";

const ProjectVisual = ({ project }: { project: Project }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const shouldShowImage = project.image && !imageFailed;

  const closeGallery = () => setActiveGalleryIndex(null);
  const showPreviousGalleryImage = useCallback(() => {
    setActiveGalleryIndex((current) =>
      current === null || !project.gallery?.length
        ? current
        : (current - 1 + project.gallery.length) % project.gallery.length
    );
  }, [project.gallery]);
  const showNextGalleryImage = useCallback(() => {
    setActiveGalleryIndex((current) =>
      current === null || !project.gallery?.length
        ? current
        : (current + 1) % project.gallery.length
    );
  }, [project.gallery]);

  useEffect(() => {
    if (activeGalleryIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPreviousGalleryImage();
      }

      if (event.key === "ArrowRight") {
        showNextGalleryImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGalleryIndex, showNextGalleryImage, showPreviousGalleryImage]);

  if (project.gallery?.length) {
    return (
      <>
        <div className="grid gap-3 p-3 md:grid-cols-2">
          {project.gallery.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] text-left"
              onClick={() => setActiveGalleryIndex(index)}
              aria-label={`Open ${image.label}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
              <span className="block px-3 py-2 text-xs font-semibold text-[var(--muted)]">
                {image.label}
              </span>
            </button>
          ))}
        </div>

        {activeGalleryIndex !== null && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#102033]/85 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} gallery preview`}
            onClick={closeGallery}
          >
            <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
              <img
                src={project.gallery[activeGalleryIndex].src}
                alt={project.gallery[activeGalleryIndex].alt}
                className="max-h-[82vh] w-full rounded-[20px] object-contain"
              />

              <button
                type="button"
                className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-lg bg-white text-xl font-bold text-[#102033]"
                onClick={closeGallery}
                aria-label="Close preview"
              >
                x
              </button>

              <button
                type="button"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-lg bg-white text-2xl font-bold text-[#102033]"
                onClick={showPreviousGalleryImage}
                aria-label="Previous image"
              >
                {"<"}
              </button>

              <button
                type="button"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-lg bg-white text-2xl font-bold text-[#102033]"
                onClick={showNextGalleryImage}
                aria-label="Next image"
              >
                {">"}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  if (shouldShowImage) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? `${project.title} screenshot`}
        className="h-full min-h-64 w-full object-cover"
        loading="lazy"
        onError={() => setImageFailed(true)}
      />
    );
  }

  if (project.videos?.length) {
    return (
      <div className="grid gap-3 p-3 md:grid-cols-2">
        {project.videos.map((video) => (
          <figure key={video.src} className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
            <video
              src={video.src}
              className="aspect-video w-full bg-black object-cover"
              controls
              preload="metadata"
            />
            <figcaption className="px-3 py-2 text-xs font-semibold text-[var(--muted)]">
              {video.label}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  if (project.videoEmbed) {
    return (
      <iframe
        src={project.videoEmbed}
        title={`${project.title} trailer`}
        className="h-full min-h-64 w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div className="project-visual-fallback">
      <span>{project.category}</span>
      <strong>{project.status}</strong>
      <p>
        {project.image
          ? `Add ${project.image.replace("/projects/", "")} to public/projects`
          : project.tech.slice(0, 3).join(" / ")}
      </p>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const [openProjectTitle, setOpenProjectTitle] = useState(defaultProjectTitle);

  const visibleProjects = useMemo(() => {
    const filteredProjects =
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    if (!openProjectTitle) {
      return filteredProjects;
    }

    const selectedProject = filteredProjects.find(
      (project) => project.title === openProjectTitle
    );

    if (!selectedProject) {
      return filteredProjects;
    }

    return [
      selectedProject,
      ...filteredProjects.filter((project) => project.title !== openProjectTitle),
    ];
  }, [activeFilter, openProjectTitle]);

  const handleFilterChange = (filter: (typeof filters)[number]) => {
    setActiveFilter(filter);
    const firstProject =
      filter === "All"
        ? projects.find((project) => project.title === defaultProjectTitle)
        : projects.find((project) => project.category === filter);

    setOpenProjectTitle(firstProject?.title ?? "");
  };

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <div className="section-title-row">
          <h2>Projects with practical outcomes</h2>
          <p>
            A focused set of frontend tools, game systems, cloud planning, and
            graphics work. Filter the list and expand each project for the role,
            decisions, and technical details.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleFilterChange(filter)}
            className={`interactive-pill ${
              activeFilter === filter ? "interactive-pill-active" : ""
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {visibleProjects.map((project) => {
          const isOpen = openProjectTitle === project.title;
          const detailsId = `project-${project.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`;

          return (
            <article
              key={project.title}
              className={`project-card ${isOpen ? "project-card-open lg:col-span-2" : ""}`}
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => setOpenProjectTitle(isOpen ? "" : project.title)}
                aria-expanded={isOpen}
                aria-controls={detailsId}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="status-chip">{project.status}</span>
                      <span className="text-xs font-semibold uppercase text-[#5F6F82]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#102033]">
                      {project.title}
                    </h3>
                    {project.role && (
                      <p className="mt-1 text-sm font-semibold text-[var(--primary)]">
                        {project.role}
                      </p>
                    )}
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5F6F82]">
                      {project.description}
                    </p>
                  </div>

                  <span className="icon-button" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
              </button>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>

              {isOpen && (
                <div id={detailsId} className="mt-6">
                  <div>
                    <p className="impact-note">{project.impact}</p>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-[#5F6F82]">
                      {project.highlights.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="link-button"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="link-button link-button-secondary"
                        >
                          {project.videoEmbed ? "Watch trailer" : "Live demo"}
                        </a>
                      )}
                    </div>

                    <div className="project-visual mt-6">
                      <ProjectVisual project={project} />
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
