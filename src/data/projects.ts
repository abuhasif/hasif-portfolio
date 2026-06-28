import infographicsOne from "../assets/Infographics1.png";
import infographicsTwo from "../assets/Infographics2.png";
import ironDomeGameplay from "../assets/iron-dome-gameplay.webm";
import ironDomeUpgrade from "../assets/iron-dome-upgrade.webm";

export type ProjectCategory = "Frontend" | "Game" | "Cloud" | "Systems";

export type Project = {
  title: string;
  role?: string;
  category: ProjectCategory;
  status: "Shipped" | "In progress" | "Academic";
  description: string;
  impact: string;
  tech: string[];
  highlights: string[];
  image?: string;
  imageAlt?: string;
  gallery?: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  github?: string;
  demo?: string;
  videoEmbed?: string;
  videos?: Array<{
    src: string;
    label: string;
  }>;
};

// Put project screenshots in public/projects and use paths like:
// image: "/projects/portfolio-dashboard.webp"
export const projects: Project[] = [
  {
    title: "Cloud-Native Developer Portfolio",
    category: "Cloud",
    status: "In progress",
    description:
      "This portfolio, designed as a practical showcase for frontend craft, serverless APIs, deployment automation, and infrastructure planning.",
    impact: "Turns personal work into a maintainable product surface with CI/CD and cloud expansion planned.",
    tech: ["React", "TypeScript", ".NET", "Azure", "Terraform", "GitHub Actions"],
    highlights: [
      "Built a responsive portfolio with componentized sections and reusable data.",
      "Planned Azure Static Web Apps deployment with serverless backend APIs.",
      "Designed future visitor tracking, contact workflow, CI/CD, and IaC support.",
    ],
    image: "/projects/portfolio-dashboard.webp",
    imageAlt: "Screenshot of the cloud-native developer portfolio homepage.",
    github: "https://github.com/abuhasif/hasif-portfolio",
  },
  {
    title: "MRT Disruption & Delay Infographic Generator",
    category: "Frontend",
    status: "Shipped",
    description:
      "A production-focused internal tool developed during my SBS Transit internship to generate commuter-facing MRT delay and disruption visuals.",
    impact: "Reduced repetitive design work and improved consistency for NEL and DTL communication assets.",
    tech: ["React", "TypeScript", "Vite", "Electron", "SVG", "html2canvas"],
    highlights: [
      "Built dynamic NEL and DTL delay and disruption infographic views.",
      "Implemented station range selection, service legends, and export handling.",
      "Refined UI flows for operators producing time-sensitive commuter updates.",
    ],
    gallery: [
      {
        src: infographicsOne,
        alt: "MRT infographic generator screenshot showing a disruption visual.",
        label: "Disruption visual",
      },
      {
        src: infographicsTwo,
        alt: "MRT infographic generator screenshot showing another generated infographic.",
        label: "Generated infographic",
      },
    ],
    github: "https://github.com/abuhasif/Infographics",
  },
  {
    title: "Unarmed",
    category: "Game",
    status: "Academic",
    description:
      "A first-person sci-fi action game developed with a custom C++ game engine, objective-based encounters, combat feedback, and a neon industrial setting.",
    impact: "Owned audio integration and player-facing UI systems inside a multi-discipline game project.",
    tech: ["C++", "Custom Engine", "FMOD", "Gameplay", "UI Systems", "3D Audio"],
    highlights: [
      "Integrated FMOD and FMOD Studio into a custom C++ engine.",
      "Managed sound effects, background music, cutscene audio, 3D spatial audio, and feedback sounds.",
      "Implemented pause and settings menu UI with audio-related player controls.",
    ],
    demo: "https://youtu.be/ViNrqHM-r1M",
    videoEmbed: "https://www.youtube.com/embed/ViNrqHM-r1M",
  },
  {
    title: "Iron Dome",
    role: "Sound Engineer & UI Programmer",
    category: "Game",
    status: "Academic",
    description:
      "A 2D defence game developed using a custom C++ game engine.",
    impact: "Owned audio playback systems and key player-facing UI menus for a custom-engine 2D game.",
    tech: [
      "C++",
      "Custom Game Engine",
      "FMOD Studio",
      "2D Audio",
      "UI Programming",
    ],
    highlights: [
      "Developed the audio engine integration for FMOD and FMOD Studio within a custom C++ game engine.",
      "Managed all in-game audio playback, including sound effects, background music, cutscene audio, 2D audio, and player feedback sounds.",
      "Implemented UI systems for the pause menu and settings menu, supporting player control over game options and audio-related settings.",
    ],
    demo: "https://youtu.be/yckFXJIR0D0",
    videoEmbed: "https://www.youtube.com/embed/yckFXJIR0D0",
    videos: [
      {
        src: ironDomeGameplay,
        label: "Gameplay demo",
      },
      {
        src: ironDomeUpgrade,
        label: "Upgrade flow",
      },
    ],
  },
  {
    title: "Geometry & Collision Detection Toolbox",
    category: "Systems",
    status: "Academic",
    description:
      "Academic graphics and geometry work covering bounding volumes, intersections, transforms, and spatial calculations.",
    impact: "Strengthened practical 3D maths knowledge for game and graphics programming.",
    tech: ["C++", "GLM", "AABB", "Bounding Sphere", "Frustum", "Intersections"],
    highlights: [
      "Worked with AABB, sphere transformations, and intersection logic.",
      "Implemented geometry utilities for graphics-related calculations.",
      "Practised debugging spatial reasoning problems with clear test cases.",
    ],
    image: "/projects/geometry-collision-toolbox.webp",
    imageAlt: "Screenshot or diagram representing geometry and collision detection work.",
  },
];
