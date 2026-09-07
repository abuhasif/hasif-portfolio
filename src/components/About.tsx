import Contact from "./Contact";
import selfPortrait from "../assets/Self.webp";

const strengths = [
  {
    title: "User-centred design",
    body: "I translate operational needs into intuitive digital solutions that stay clear and useful under real constraints.",
  },
  {
    title: "Rapid prototyping",
    body: "I move from requirements to wireframes, prototypes, testing, and iterative improvements with a practical delivery mindset.",
  },
  {
    title: "Practical problem-solving",
    body: "I combine UI/UX thinking, frontend development, and technical troubleshooting to solve real workflow problems.",
  },
];

const education = [
  {
    school: "Singapore Institute of Technology",
    qualification: "Bachelor of Science in Computer Science in Interactive Media and Game Development",
    period: "2022 - 2026",
    location: "Singapore",
  },
  {
    school: "Singapore Polytechnic",
    qualification: "Diploma in Computer Engineering",
    period: "2017 - 2020",
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
            <h2>UI/UX and frontend development for rail digitalisation.</h2>
            <p>
              Computer Science graduate with hands-on experience in UI/UX, frontend
              development, and rail digitalisation. I translate operational
              requirements into intuitive digital solutions through user-centred
              design, rapid prototyping, and practical problem-solving.
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
