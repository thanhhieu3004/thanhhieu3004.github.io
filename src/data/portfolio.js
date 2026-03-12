export const personalInfo = {
  name: "Nguyễn Thanh Hiệu",
  title: "Full-Stack Developer",
  subtitle: "Crafting modern web experiences with React, Node.js & Cloud.",
  description:
    "I'm a passionate Full-Stack Developer who loves building scalable web applications, elegant UIs, and solving real-world problems with clean code.",
  email: "thanhhieu3004@gmail.com",
  github: "https://github.com/thanhhieu3004",
  linkedin: "https://linkedin.com/in/thanhhieu3004",
  website: "https://thanhhieu3004.github.io",
  avatar: "https://avatars.githubusercontent.com/u/thanhhieu3004",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    icon: "code",
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2023 — Present",
    current: true,
    bullets: [
      "Built and deployed full-stack web apps for clients across e-commerce and education sectors.",
      "Developed RESTful APIs with Node.js/Express and React frontends.",
      "Integrated payment gateways, authentication systems and CI/CD pipelines.",
    ],
  },
  {
    icon: "hub",
    role: "Web Developer Intern",
    company: "Tech Startup",
    period: "Jun 2023 — Dec 2023",
    current: false,
    bullets: [
      "Collaborated with a cross-functional team to build internal dashboards.",
      "Optimised database queries reducing load time by 40%.",
      "Wrote unit and integration tests using Jest and React Testing Library.",
    ],
  },
  {
    icon: "school",
    role: "Bachelor of Software Engineering",
    company: "University",
    period: "2020 — 2024",
    current: false,
    bullets: [
      "Graduated with honours in Software Engineering.",
      "Coursework: Data Structures, Algorithms, Web Development, Databases.",
    ],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: "web", name: "React / Next.js", desc: "UI Framework" },
      { icon: "palette", name: "Tailwind CSS", desc: "Styling" },
      { icon: "javascript", name: "TypeScript", desc: "Type Safety" },
      { icon: "animation", name: "Framer Motion", desc: "Animations" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { icon: "dns", name: "Node.js / Express", desc: "Server-side" },
      { icon: "database", name: "PostgreSQL / MySQL", desc: "Relational DB" },
      { icon: "storage", name: "MongoDB", desc: "NoSQL DB" },
      { icon: "lock", name: "JWT / OAuth2", desc: "Auth" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { icon: "deployed_code", name: "Docker", desc: "Containerization" },
      { icon: "cloud", name: "AWS / Vercel", desc: "Cloud Deploy" },
      { icon: "merge", name: "Git / GitHub", desc: "Version Control" },
      { icon: "terminal", name: "Linux / Bash", desc: "CLI" },
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product management, cart, checkout, and Stripe payment integration. Built with Next.js, Node.js, and PostgreSQL.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Docker"],
    icon: "shopping_cart",
    demo: "#",
    source: "https://github.com/thanhhieu3004",
    hasImage: false,
  },
  {
    title: "Real-time Chat App",
    description:
      "WebSocket-powered chat application with room support, file sharing, and end-to-end encryption. Frontend in React, backend in Express with Socket.IO.",
    tags: ["React", "Socket.IO", "Express", "MongoDB", "JWT"],
    icon: "chat",
    demo: "#",
    source: "https://github.com/thanhhieu3004",
    hasImage: false,
  },
  {
    title: "Task Management SaaS",
    description:
      "Kanban-style project management tool with team collaboration, drag-and-drop, and analytics dashboard. Deployed on AWS with CI/CD.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    icon: "task_alt",
    demo: "#",
    source: "https://github.com/thanhhieu3004",
    hasImage: false,
  },
  {
    title: "Blog & CMS Platform",
    description:
      "Headless CMS-driven blog with MDX support, full-text search, dark mode, and SEO optimisation. Built with Next.js and Contentful.",
    tags: ["Next.js", "Contentful", "Tailwind", "TypeScript"],
    icon: "article",
    demo: "#",
    source: "https://github.com/thanhhieu3004",
    hasImage: false,
  },
];

export const achievements = [
  { icon: "workspace_premium", rank: "Top 1 🥇", event: "University Hackathon 2024" },
  { icon: "emoji_events", rank: "Top 5", event: "Web Dev Contest 2023" },
  { icon: "emoji_events", rank: "Top 10", event: "Open Source Contribution 2024" },
  { icon: "emoji_events", rank: "Finalist", event: "Startup Pitch Competition 2023" },
];
