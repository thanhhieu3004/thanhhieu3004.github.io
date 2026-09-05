export const personalInfo = {
  name: "NGUYEN THANH HIEU",
  fullName: "Nguyễn Thanh Hiếu",
  title: "Software Engineer Intern",
  subtitle: "4th-year Software Engineering student aspiring to build a long-term career as a Software Engineer with expertise in Java, Spring Boot, Microservices & Data Pipelines.",
  summary:
    "4th-year Software Engineering student aspiring to build a long-term career as a Software Engineer, having chosen Java as my core foundational language. Passionate about server-side logic, system architecture, and solving complex problems with clean, maintainable code. A fast and proactive learner seeking a Software Engineer Intern opportunity to learn from experienced mentors and contribute to real-world software products.",
  email: "thanhhieunguyen3004@gmail.com",
  phone: "(+84) 907 767 961",
  phoneRaw: "+84907767961",
  github: "https://github.com/thanhhieu3004",
  githubDisplay: "github.com/thanhhieu3004",
  location: "Ho Chi Minh City, Vietnam",
  university: "Saigon University",
  degree: "Engineer in Software Engineering (4.5-Year Program)",
  educationPeriod: "2023 – Early 2028 (Expected)",
  cvUrl: "/cv.html",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "CV / Resume", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Java (17+)", icon: "code", desc: "Core language, OOP, Multithreading" },
      { name: "TypeScript", icon: "code", desc: "Type-safe modern development" },
      { name: "JavaScript", icon: "javascript", desc: "Modern syntax, asynchronous flow" },
      { name: "SQL", icon: "table_chart", desc: "Relational queries & optimization" },
      { name: "Spring Boot", icon: "layers", desc: "RESTful APIs & Backend services" },
      { name: "Spring Cloud", icon: "cloud_sync", desc: "Gateway, Eureka, OpenFeign" },
      { name: "NestJS", icon: "hub", desc: "Enterprise TypeScript architecture" },
      { name: "Spring Data JPA", icon: "storage", desc: "Hibernate ORM & Persistence" },
      { name: "Spring Batch", icon: "dynamic_feed", desc: "Chunk-based ETL processing" },
      { name: "ReactJS", icon: "web", desc: "Client UI & Admin dashboards" },
    ],
  },
  {
    title: "Databases & DevOps",
    skills: [
      { name: "PostgreSQL", icon: "dns", desc: "Database-per-service pattern" },
      { name: "MySQL", icon: "storage", desc: "High-volume data persistence" },
      { name: "Redis", icon: "bolt", desc: "In-memory query acceleration" },
      { name: "Apache Kafka", icon: "sync_alt", desc: "Decoupled async event streaming" },
      { name: "Docker", icon: "deployed_code", desc: "Containerized app packaging" },
      { name: "Docker Compose", icon: "grid_view", desc: "Multi-service local orchestration" },
      { name: "Git", icon: "merge", desc: "Version control & collaboration" },
      { name: "GCP", icon: "cloud", desc: "Cloud VPS infrastructure" },
    ],
  },
  {
    title: "AI Tools",
    skills: [
      { name: "Cursor", icon: "terminal", desc: "AI-powered IDE workflows" },
      { name: "ChatGPT", icon: "smart_toy", desc: "Architecture & logic prompting" },
      { name: "GitHub Copilot", icon: "psychology", desc: "Contextual code assistance" },
      { name: "Prompt Engineering", icon: "auto_awesome", desc: "Precise requirement translation" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", icon: "lightbulb", desc: "Analytical mindset & debugging" },
      { name: "Teamwork & Collaboration", icon: "groups", desc: "Cross-functional team synergy" },
      { name: "Effective Communication", icon: "forum", desc: "Clear technical and interpersonal discussion" },
      { name: "Fast-Learner", icon: "trending_up", desc: "Quick adaptation to new technologies" },
      { name: "Time Management", icon: "schedule", desc: "Prioritization & delivery focus" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "English", icon: "translate", desc: "Technical reading & writing, conversational speaking" },
      { name: "Vietnamese", icon: "flag", desc: "Native proficiency" },
    ],
  },
];

export const projects = [
  {
    id: "table-reservation",
    title: "Online Table Reservation & Food Ordering Platform",
    type: "Personal Project",
    subtitle: "Microservices Architecture with 8 Domain Services",
    icon: "restaurant_menu",
    techStack: [
      "Spring Boot (RESTful APIs)",
      "Spring Cloud",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "ReactJS",
      "Docker",
      "Vercel",
    ],
    links: [
      { label: "Backend Code", url: "https://github.com/thanhhieu3004", icon: "code" },
      { label: "Frontend Code", url: "https://github.com/thanhhieu3004", icon: "web" },
      { label: "Live Demo", url: "https://github.com/thanhhieu3004", icon: "open_in_new" },
    ],
    highlights: [
      {
        tech: "RESTful API & Spring Cloud",
        detail:
          "Designed scalable RESTful APIs with Global Exception Handling and DTO validations; leveraged Spring Cloud (Gateway, Eureka, OpenFeign) for dynamic service discovery and inter-service communication.",
      },
      {
        tech: "Apache Kafka",
        detail:
          "Centralized event bus for asynchronous communication, handling decoupled workflows including order placement, kitchen cooking status, and payment events.",
      },
      {
        tech: "Spring Security (JWT & OAuth2)",
        detail:
          "Configured centralized authentication to validate JWT tokens at API Gateway and enforced Role-Based Access Control (RBAC: Admin, Waiter, Kitchen) via custom headers.",
      },
      {
        tech: "PostgreSQL & Redis",
        detail:
          "Designed Database-per-Service pattern with 8 isolated PostgreSQL instances; utilized Redis caching to accelerate menu and combo query response times.",
      },
      {
        tech: "Frontend UI & Deployment (ReactJS, Vercel)",
        detail:
          "Developed the Admin Dashboard and client UI using ReactJS (AI-assisted scaffolding) and deployed frontend seamlessly on Vercel.",
      },
      {
        tech: "Containerization (Docker Compose)",
        detail:
          "Containerized all microservices, databases, and Kafka broker for instant 1-command reproducible local deployment.",
      },
    ],
  },
  {
    id: "honda-parts-pipeline",
    title: "Honda Parts Pipeline & Automated Alerting System",
    type: "Personal Project",
    subtitle: "High-Volume ETL Pipeline & Automated Telegram Alerting",
    icon: "precision_manufacturing",
    techStack: [
      "Spring Boot (RESTful APIs)",
      "Spring Batch",
      "MySQL",
      "Telegram Bot API",
      "Nginx",
      "Docker",
      "GCP",
    ],
    links: [
      { label: "Source Code", url: "https://github.com/thanhhieu3004", icon: "code" },
    ],
    highlights: [
      {
        tech: "Spring Boot & Spring Batch",
        detail:
          "Developed multithreaded web scrapers and chunk-based ETL processing jobs to extract, transform, and efficiently persist high-volume parts data into MySQL.",
      },
      {
        tech: "RESTful CRUD APIs",
        detail:
          "Designed robust RESTful endpoints with pagination, filtering, and sorting to perform CRUD operations on parts inventory and trigger manual/automated pipeline jobs.",
      },
      {
        tech: "Automated Alerting (Telegram Bot API)",
        detail:
          "Built automated scheduled tasks to monitor ETL pipeline health and instantly dispatch error logs with contextual details to Telegram channels.",
      },
      {
        tech: "Docker, Nginx & GCP VPS",
        detail:
          "Containerized backend services with Docker Compose and deployed the entire architecture onto a Google Cloud Platform VPS with Nginx as a reverse proxy.",
      },
    ],
  },
];

export const education = {
  institution: "Saigon University",
  location: "Ho Chi Minh City, Vietnam",
  degree: "Engineer in Software Engineering (4.5-Year Program)",
  period: "2023 – Early 2028 (Expected)",
  status: "4th-Year Software Engineering Student",
  summary:
    "Pursuing a comprehensive Software Engineering degree with core specialization in server-side logic, system architecture, distributed microservices, and automated data pipelines.",
  modules: [
    {
      title: "Core Foundations",
      desc: "Java (17+), TypeScript, JavaScript, SQL, OOP Principles, Clean Architecture",
    },
    {
      title: "Frameworks & Backend",
      desc: "Spring Boot, Spring Cloud (Gateway, Eureka, OpenFeign), NestJS, Spring Data JPA, Spring Batch",
    },
    {
      title: "Databases & Caching",
      desc: "PostgreSQL, MySQL, Redis in-memory acceleration, Database-per-service pattern",
    },
    {
      title: "DevOps & Cloud",
      desc: "Apache Kafka, Docker, Docker Compose, Git, GCP VPS, Nginx reverse proxy",
    },
  ],
};
