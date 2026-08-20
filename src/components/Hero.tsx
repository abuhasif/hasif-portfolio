import type { PageId } from "../App";
import selfPortrait from "../assets/Self.webp";

const focusItems = [
  "User-centred interface design",
  "Rail digitalisation workflows",
  "Rapid prototyping and practical tools",
];

type HeroProps = {
  onNavigate: (page: PageId) => void;
};

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-5 pb-12 pt-28 md:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">UI/UX &amp; Frontend Development / Rail Digitalisation</p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-normal text-[#102033] md:text-7xl">
            I turn operational requirements into clear digital experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6F82]">
            I am Hasif, a Computer Science graduate with hands-on experience in
            UI/UX, frontend development, and rail digitalisation. I translate
            operational needs into intuitive interfaces through user-centred
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

      <div className="hero-visual p-5" aria-label="Portfolio work summary">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-[#D5E0EA]/70 bg-[#DDF7FB]/70 p-4">
            <p className="text-sm font-semibold text-[#0F766E]">Latest project</p>
            <p className="mt-2 text-2xl font-bold text-[#102033]">MRT Infographic Generator</p>
            <p className="mt-2 text-sm leading-6 text-[#5F6F82]">
              A React and TypeScript desktop tool for commuter-facing rail
              disruption and delay infographics.
            </p>
          </div>

          <div className="rounded-lg border border-[#D5E0EA]/70 bg-[#FFFFFF]/75 p-4">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase text-[#5F6F82]">
              <span>Capability map</span>
              <span>Frontend to systems</span>
            </div>
            <div className="space-y-3">
              {[
                ["Frontend", "92%"],
                ["UI/UX", "82%"],
                ["Rail Digitalisation", "74%"],
              ].map(([label, width]) => (
                <div key={label}>
                  <div className="mb-1 flex justify-between text-sm text-[#5F6F82]">
                    <span>{label}</span>
                    <span>{width}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#DDF7FB]">
                    <div className="h-2 rounded-full bg-[#0F766E]" style={{ width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {focusItems.map((item) => (
            <div key={item} className="rounded-lg border border-[#D5E0EA]/70 bg-[#FFFFFF]/75 p-4">
              <span className="block h-1.5 w-8 rounded-full bg-[#F97316]" />
              <p className="mt-4 text-sm font-medium leading-5 text-[#102033]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
