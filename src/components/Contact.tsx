const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-medium text-cyan-400">Contact</p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Let’s connect
      </h2>

      <p className="mt-4 max-w-2xl text-slate-300">
        I’m open to software engineering, frontend development, UI/UX, and
        graduate programme opportunities.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:hasifbakar@gmail.com"
          className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/abuhasif"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Lacketronik"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/10"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;