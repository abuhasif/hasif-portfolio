import type { PageId } from "../App";
import selfPortrait from "../assets/Self.webp";

type HeroProps = {
  onNavigate: (page: PageId) => void;
};

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-5 pb-12 pt-28 md:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">Software Development / UI/UX / Interactive Systems</p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-normal text-[#102033] md:text-7xl">
            I build practical software for real workflows.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6F82]">
            I am Hasif, a Computer Science graduate with hands-on experience in
            frontend development, Android applications, and rail digitalisation.
            I turn operational needs into clear interfaces through user-centred
            design, rapid prototyping, and practical problem-solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => onNavigate("projects")} className="primary-button">
              View projects
            </button>
            <button type="button" onClick={() => onNavigate("about")} className="secondary-button">
              Contact me
            </button>
            <a href="/Resume.pdf" className="secondary-button">
              Resume
            </a>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            <div className="metric-card">
              <dt>Focus</dt>
              <dd>UI / UX</dd>
            </div>
            <div className="metric-card">
              <dt>Stack</dt>
              <dd>React+TypeScript</dd>
            </div>
            <div className="metric-card">
              <dt>Base</dt>
              <dd>Singapore</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual" aria-label="Portrait and current profile">
          <div className="border-b border-[#D5E0EA]/70 p-5">
            <img
              src={selfPortrait}
              alt="Portrait of Abu Hasif"
              className="aspect-[4/5] w-full rounded-[18px] object-cover object-center"
            />
          </div>

          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-xs font-semibold uppercase text-[#5F6F82]">Current profile</p>
              <h2 className="mt-1 text-lg font-semibold text-[#102033]">UI/UX &amp; Frontend Developer</h2>
            </div>
            <span className="rounded-full bg-[#DDF7FB] px-3 py-1 text-xs font-bold text-[#C2410C]">
              Available
            </span>
          </div>
        </div>
      </div>

      <div className="hero-work-strip" aria-label="Featured project">
        <div className="hero-work-copy">
          <p className="eyebrow">Selected work / App</p>
          <h2 className="mt-3 text-2xl font-bold text-[#102033] md:text-3xl">
            Photo Culling Project
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#5F6F82]">
            A desktop workflow for reviewing large photo sets, detecting quality
            issues, and making faster keep-or-reject decisions.
          </p>
          <button
            type="button"
            onClick={() => onNavigate("projects")}
            className="mt-5 inline-flex items-center text-sm font-bold text-[#0F766E] underline decoration-[#F97316] decoration-2 underline-offset-4"
          >
            Explore the project
          </button>
        </div>
        <img
          src="/projects/photo-culler-review-workspace.webp"
          alt="Photo Culler review workspace showing thumbnails and culling controls."
          className="hero-work-image"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Hero;
