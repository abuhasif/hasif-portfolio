import infographicsOne from "../assets/Infographics1.webp";
import infographicsTwo from "../assets/Infographics2.webp";
import ironDomeGameplay from "../assets/iron-dome-gameplay.webm";
import ironDomeUpgrade from "../assets/iron-dome-upgrade.webm";

export type ProjectCategory = "Frontend" | "Game" | "Cloud" | "Systems";

export type Project = {
  title: string;
  role?: string;
  category: ProjectCategory;
  status: "Completed" | "Shipped" | "Academic";
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
    title: "Photo Culling Project",
    role: "Developer",
    category: "Systems",
    status: "Completed",
    description:
      "An Electron and React desktop workflow for reviewing photo sets, scoring image sharpness, detecting faces, and quickly marking keepers or rejects.",
    impact:
      "Turns repetitive photo selection into a structured review process with keyboard-first triage, saved project state, and clear export and reject handling.",
    tech: ["React", "TypeScript", "Electron", "Sharp", "MediaPipe", "ExifTool"],
    highlights: [
      "Built a desktop workflow for importing folders, generating previews, and reviewing large photo sets.",
      "Added multi-signal sharpness analysis, face detection, face sharpness checks, and similar-image grouping to support selection decisions.",
      "Implemented keyboard-first rating and pick/reject actions, saved project state, picked-photo export, and rejected-photo organization.",
    ],
    gallery: [
      {
        src: "/projects/photo-culler-empty-state.webp",
        alt: "Photo Culler empty workspace ready to import a folder.",
        label: "Empty workspace",
      },
      {
        src: "/projects/photo-culler-review-workspace.webp",
        alt: "Photo Culler review workspace showing thumbnails, face detection, and culling controls.",
        label: "Review workspace",
      },
    ],
    github: "https://github.com/abuhasif/photo-culler",
  },
  {
    title: "BusWise AI Chatbot",
    role: "Developer",
    category: "Systems",
    status: "Completed",
    description:
      "A local conversational assistant for Singapore bus journeys that combines AI query understanding, OneMap route planning, and a local transit data snapshot.",
    impact:
      "Makes bus planning more conversational by keeping route context, showing transfers on an interactive map, and answering stop and timetable questions from structured local data.",
    tech: ["React", "TypeScript", "Python", "SQLite", "OneMap", "Qwen3.5"],
    highlights: [
      "Built bus-only journey planning with walking access, transfers, route options, and interactive map context.",
      "Added conversational follow-ups for direct routes, stop services, first and last bus questions, and route changes.",
      "Included a bundled January 2026 SQLite snapshot with clearly labelled fallback behavior when live OneMap planning is unavailable.",
    ],
    gallery: [
      {
        src: "/projects/buswise-home.webp",
        alt: "BusWise journey planner showing a Singapore map and bus route search fields.",
        label: "Journey planner",
      },
      {
        src: "/projects/buswise-route-results.webp",
        alt: "BusWise route results showing two bus options with journey duration, walking distance, and transfer steps.",
        label: "Route results",
      },
    ],
    github: "https://github.com/abuhasif/BusWise-AI-Chatbot",
  },
  {
    title: "Cloud-Native Developer Portfolio",
    role: "Developer",
    category: "Cloud",
    status: "Completed",
    description:
      "A personal portfolio built as a polished product surface for my software, UI, game, and photography work.",
    impact: "Gives recruiters and collaborators one clear place to understand my work, technical range, and current direction.",
    tech: ["React", "TypeScript", ".NET", "Azure", "Terraform", "GitHub Actions"],
    highlights: [
      "Built a responsive multi-page portfolio with reusable project data and interactive project previews.",
      "Added photography, local media previews, project filtering, and accessible page navigation.",
      "Planned serverless contact, visitor tracking, CI/CD, and infrastructure automation as future cloud additions.",
    ],
    github: "https://github.com/abuhasif/hasif-portfolio",
    demo: "https://hasif-portfolio.vercel.app/#",
  },
  {
    title: "MRT Infographic Generator",
    role: "Frontend Developer",
    category: "Frontend",
    status: "Shipped",
    description:
      "An internal React and Electron tool developed during my SBS Transit internship to generate commuter-facing MRT disruption and delay infographics.",
    impact: "Reduced repetitive design work and helped standardize NEL and DTL communication visuals during time-sensitive disruption scenarios.",
    tech: ["React", "TypeScript", "Vite", "Electron", "SVG", "html2canvas"],
    highlights: [
      "Built dynamic NEL and DTL infographic views for delay and disruption scenarios.",
      "Implemented station range selection, service legends, SVG composition, and image export handling.",
      "Improved the workflow for producing consistent commuter-facing visuals quickly.",
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
    role: "Sound Engineer & UI Programmer",
    category: "Game",
    status: "Academic",
    description:
      "A first-person sci-fi action game built with a custom C++ engine, featuring objective-based encounters, combat feedback, and a neon industrial environment.",
    impact: "Owned the audio pipeline and player-facing menu systems, connecting engine-level audio support to the final gameplay experience.",
    tech: ["C++", "Custom Engine", "FMOD", "Gameplay", "UI Systems", "3D Audio"],
    highlights: [
      "Integrated FMOD and FMOD Studio into the custom C++ engine.",
      "Managed sound effects, background music, cutscene audio, 3D spatial audio, and player feedback sounds.",
      "Implemented pause and settings menu UI so players could control game and audio options.",
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
      "A 2D defence game built with a custom C++ engine, focused on fast arcade-style player feedback and upgrade-driven play.",
    impact: "Delivered the audio integration and menu UI that supported core player feedback, settings control, and game flow.",
    tech: [
      "C++",
      "Custom Game Engine",
      "FMOD Studio",
      "2D Audio",
      "UI Programming",
    ],
    highlights: [
      "Developed FMOD and FMOD Studio integration inside the custom C++ engine.",
      "Managed sound effects, background music, cutscene audio, 2D audio, and feedback sounds.",
      "Implemented pause and settings menus so players could control game and audio-related options.",
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
    role: "Graphics & Systems Programmer",
    category: "Systems",
    status: "Academic",
    description:
      "Academic graphics and geometry work covering bounding volumes, intersections, transforms, and spatial calculations.",
    impact: "Strengthened the practical 3D maths foundation I use when working on game and graphics programming problems.",
    tech: ["C++", "GLM", "AABB", "Bounding Sphere", "Frustum", "Intersections"],
    highlights: [
      "Worked with AABB, sphere transformations, frustums, and intersection logic.",
      "Implemented reusable geometry utilities for graphics-related calculations.",
      "Practised debugging spatial reasoning problems with clear expected cases.",
    ],
    image: "/projects/geometry-collision-toolbox.webp",
    imageAlt: "Screenshot or diagram representing geometry and collision detection work.",
  },
];
