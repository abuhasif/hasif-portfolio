const About = () => {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-medium text-cyan-400">About Me</p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        I enjoy building useful software that solves real problems.
      </h2>

      <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-slate-300">
        <p>
          I’m a Computer Science student at the Singapore Institute of Technology,
          specialising in Interactive Media and Game Development.
        </p>

        <p>
          During my internship at SBS Transit, I contributed to an MRT Infographic
          Generator that helps create train delay and disruption visuals more quickly
          and consistently.
        </p>

        <p>
          I’m interested in frontend development, UI/UX, interactive systems, and
          building practical tools that are clear, reliable, and easy to use.
        </p>
      </div>
    </section>
  );
};

export default About;