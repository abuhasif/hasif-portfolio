import Contact from "./Contact";
import selfPortrait from "../assets/Self.jpg";

const strengths = [
  {
    title: "Product-minded UI",
    body: "I focus on flows, states, and output quality so tools stay useful under real constraints.",
  },
  {
    title: "Technical range",
    body: "Comfortable moving between React, TypeScript, C++, game systems, and cloud planning.",
  },
  {
    title: "Operational context",
    body: "Internship work exposed me to transport communication, deadlines, and reliability needs.",
  },
];

const education = [
  {
    school: "Singapore Institute of Technology",
    qualification: "Bachelor: Computer Science in Interactive Media and Game Development",
    period: "08/2022 - Present",
    location: "Singapore",
  },
  {
    school: "Singapore Polytechnic",
    qualification: "Diploma: Computer Engineering",
    period: "04/2017 - 05/2020",
    location: "Singapore",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <div className="section-title-row">
            <h2>Useful software, built with the user in mind.</h2>
            <p>
              I am a Computer Science student specialising in Interactive Media and
              Game Development at Singapore Institute of Technology. My best work
              sits where interface design, engineering, and practical workflows meet.
            </p>
          </div>
        </div>

        <figure className="card overflow-hidden p-0">
          <img
            src={selfPortrait}
            alt="Portrait of Abu Hasif"
            className="aspect-[4/5] w-full object-cover object-center"
            loading="lazy"
          />
        </figure>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {strengths.map((item) => (
          <article key={item.title} className="content-card">
            <h3 className="text-lg font-semibold text-[#102033]">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#5F6F82]">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <p className="eyebrow">Education</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="content-card">
              <h3 className="text-lg font-semibold text-[#102033]">{item.school}</h3>
              <p className="mt-2 text-sm font-semibold text-[var(--primary)]">
                {item.qualification}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#5F6F82]">
                {item.period} | {item.location}
              </p>
            </article>
          ))}
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default About;
