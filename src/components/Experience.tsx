const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-sm font-medium text-cyan-400">Experience</p>

      <h2 className="mt-3 text-3xl font-bold md:text-4xl">
        Work experience
      </h2>

      <div className="mt-10 space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div>
              <h3 className="text-xl font-bold">Software / UI Developer Intern</h3>
              <p className="text-cyan-300">SBS Transit Ltd</p>
            </div>

            <p className="text-sm text-slate-400">May 2025 – Apr 2026</p>
          </div>

          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
            <li>
              • Contributed to the development of an MRT Infographic Generator
              for train delay and disruption communication.
            </li>
            <li>
              • Worked on UI design, infographic generation logic, output handling,
              and usability refinement.
            </li>
            <li>
              • Built and refined visual flows for NEL and DTL service disruption
              and delay scenarios.
            </li>
            <li>
              • Gained exposure to prototyping, 3D printing, and transport
              maintenance-related tasks.
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row">
            <div>
              <h3 className="text-xl font-bold">Lifeguard</h3>
              <p className="text-cyan-300">Atelier Aquatic Safety Pte. Ltd.</p>
            </div>

            <p className="text-sm text-slate-400">May 2022 – Apr 2025</p>
          </div>

          <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
            <li>
              • Maintained swimmer safety and responded to emergency situations
              using First Aid and CPR skills.
            </li>
            <li>
              • Developed responsibility, communication, and calm decision-making
              under pressure.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;