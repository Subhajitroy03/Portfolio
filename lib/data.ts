// All content comes from your resume. Replace the "#" links with your real URLs.
export const me = {
  name: "Subhajit Roy",
  email: "roysubhajit2003@gmail.com",
  linkedin: "#",
  github: "#",
  resume: "/Resume_Subhajit_Roy.pdf",
};

export const projects = [
  { name: "SusQuery", tags: ["Game", "SQL", "Backend"], kind: 0,
    desc: "A gamified SQL detective game with authentication, query evaluation, progress tracking, leaderboards and admin-managed challenges.",
    role: "Backend development", stack: "Node.js, Express.js, Drizzle ORM, PostgreSQL, Redis",
    note: "DQL-only query execution and caching for frequently accessed data.", live: "https://susquery.subha03.me", github: "",
    youtube: "https://www.youtube.com/embed/_JkLvpkRtR8" },
  { name: "GLOF Risk Intelligence", tags: ["Machine learning", "Geospatial", "Award"], kind: 1,
    desc: "An ML-powered platform for Glacial Lake Outburst Flood risk assessment with secure REST APIs, authentication, input validation and risk prediction.",
    role: "Backend and ML integration", stack: "Express.js, Flask, Scikit-learn, XGBoost, Pandas",
    note: "Best Innovative Project, Hack-Technique (2026).", live: "", github: "https://github.com/Team-Nexarion/Glacier_backend",
    youtube: "https://www.youtube.com/embed/_JkLvpkRtR8" },
  { name: "Smart Attendance Monitoring", tags: ["Face recognition", "Final-year project"], kind: 2,
    desc: "A CCTV-based attendance system that uses face recognition to automate attendance management. Includes scheduled background jobs and real-time sync.",
    role: "Backend architecture", stack: "TypeScript, Next.js, Express.js, Python, YOLOv8",
    note: "In progress, 2026 to present.", live: "", github: "https://github.com/Subhajitroy03/ATTENDANCE_BACKEND-FYP-",
    youtube: "https://www.youtube.com/embed/_JkLvpkRtR8" },
  { name: "Alumni Portal", tags: ["Full-stack", "Real-time", "Academy of Technology"], kind: 3,
    desc: "A scalable alumni networking platform with mentorship, networking and alumni engagement features.",
    role: "Full-stack development", stack: "Next.js, Express.js, Redis, WebSockets",
    note: "Redis caching, search and WebSocket real-time communication.", live: "https://alumni.aot.edu.in", github: "",
    youtube: "https://www.youtube.com/embed/_JkLvpkRtR8" },
];

export const experience = [
  { when: "Feb – Apr 2026", role: "Full Stack Developer Intern", org: "Indomitech Group",
    text: "Built REST APIs and full-stack features for client projects, turning business requirements into working software." },
  { when: "Oct 2025 – Present", role: "Tech Lead, IEI Student Chapter CSE", org: "Academy of Technology",
    text: "Designed and deployed a Task Manager with automated email reminders, and leading the official SC-CSE AOT website." },
  { when: "Jun – Sep 2025", role: "Junior Software Developer Intern", org: "Resourcio Pvt. Ltd.",
    text: "Developed backend functionality with Strapi: content models, REST APIs and content management workflows." },
];

export const skills: [string, string][] = [
  ["Languages", "JavaScript, TypeScript, Python, Java, C/C++"],
  ["Backend", "Node.js, Express.js, REST APIs, Flask, FastAPI"],
  ["AI / LLM", "LangChain, LangGraph, OpenAI APIs, LLM integration"],
  ["Databases", "PostgreSQL, MongoDB, MySQL, Redis"],
  ["Data tools", "Prisma, Drizzle ORM"],
  ["Frontend", "Next.js, React.js"],
  ["DevOps", "Docker, Git, Linux, Render, Vercel"],
];

export const marquee = ["Node.js", "Express.js", "PostgreSQL", "Redis", "Next.js", "Python", "LangChain", "Docker", "TypeScript"];
