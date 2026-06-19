const Hero = () => {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-20">
      <p className="mb-4 text-sm font-medium text-cyan-400">
        Computer Science Student · Frontend Developer · UI/UX
      </p>

      <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
        Hi, I’m Hasif. I build practical software tools with clean interfaces.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-300">
        I’m a Computer Science student specialising in Interactive Media and Game Development,
        with experience building frontend tools, infographic generators, and interactive systems.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
        >
          View Projects
        </a>

        <a
          href="/Resume.pdf"
          className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;