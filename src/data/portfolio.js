export const personalInfo = {
  name: "NGUYEN THANH HIEU",
  fullName: "Nguyễn Thanh Hiếu",
  title: "Java Backend Intern",
  subtitle: "4th-year Software Engineering student aspiring to build a career as a Java Backend Developer with expertise in Spring Boot, Microservices & Event-Driven systems.",
  summary:
    "4th-year Software Engineering student aspiring to build a long-term career as a Backend Developer, having chosen Java as my core foundational language. Passionate about server-side logic, system architecture, and solving complex problems with clean, maintainable code. A fast and proactive learner seeking a Java Backend Intern opportunity to learn from experienced mentors and contribute to real-world software products.",
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
    title: "Languages",
    skills: [
      { name: "Java (17+)", icon: "code", desc: "Core language, OOP, Multithreading" },
      { name: "SQL", icon: "table_chart", desc: "Complex queries, schema design" },
      { name: "JavaScript (ES6+)", icon: "javascript", desc: "Modern syntax, async flow" },
      { name: "HTML5 / CSS3", icon: "html", desc: "Semantic markup & styling" },
    ],
  },
  {
    title: "Frameworks & Architecture",
    skills: [
      { name: "Spring Boot", icon: "layers", desc: "RESTful APIs & Backend services" },
      { name: "Spring Cloud", icon: "cloud_sync", desc: "Gateway, Eureka, OpenFeign" },
      { name: "Spring Data JPA", icon: "storage", desc: "Hibernate ORM & Persistence" },
      { name: "Spring Batch", icon: "dynamic_feed", desc: "Chunk-based ETL processing" },
      { name: "RESTful APIs", icon: "api", desc: "Clean & standardized contracts" },
      { name: "Microservices", icon: "hub", desc: "Distributed domain architecture" },
      { name: "ReactJS", icon: "web", desc: "Admin dashboards & Client UI" },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", icon: "dns", desc: "Database-per-service pattern" },
      { name: "MySQL", icon: "storage", desc: "High-volume data persistence" },
      { name: "Redis", icon: "bolt", desc: "In-memory query acceleration" },
      { name: "Elasticsearch", icon: "search", desc: "Centralized log indexing" },
    ],
  },
  {
    title: "Messaging & Security",
    skills: [
      { name: "Apache Kafka", icon: "sync_alt", desc: "Decoupled async event streaming" },
      { name: "Keycloak", icon: "vpn_key", desc: "IAM & Centralized authentication" },
      { name: "Spring Security", icon: "security", desc: "OAuth2 / JWT & RBAC" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: "deployed_code", desc: "Containerized application packaging" },
      { name: "Docker Compose", icon: "grid_view", desc: "Multi-container local deployment" },
      { name: "Git", icon: "merge", desc: "Version control & collaboration" },
      { name: "Nginx", icon: "alt_route", desc: "Reverse proxy & routing" },
      { name: "Filebeat", icon: "receipt_long", desc: "Real-time log harvesting" },
      { name: "GCP (Google Cloud)", icon: "cloud", desc: "Cloud VPS infrastructure" },
      { name: "Vercel", icon: "flight_takeoff", desc: "Frontend continuous deployment" },
      { name: "Postman", icon: "send", desc: "API testing & documentation" },
    ],
  },
  {
    title: "AI Tools & Prompting",
    skills: [
      { name: "Cursor", icon: "terminal", desc: "AI-powered IDE workflows" },
      { name: "ChatGPT", icon: "smart_toy", desc: "Architecture & logic prompting" },
      { name: "GitHub Copilot", icon: "psychology", desc: "Contextual code assistance" },
      { name: "Prompt Engineering", icon: "auto_awesome", desc: "Precise requirement translation" },
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
      "Spring Boot",
      "Spring Cloud",
      "Kafka",
      "Keycloak",
      "Redis",
      "PostgreSQL",
      "ReactJS",
      "Docker",
      "Vercel",
    ],
    links: [
      { label: "Backend", url: "https://github.com/thanhhieu3004", icon: "code" },
      { label: "Frontend", url: "https://github.com/thanhhieu3004", icon: "web" },
      { label: "Live Demo", url: "https://github.com/thanhhieu3004", icon: "open_in_new" },
    ],
    highlights: [
      {
        tech: "Spring Cloud (Gateway, Eureka, OpenFeign)",
        detail: "Acted as the single entry point for API routing, dynamic service discovery, and synchronous inter-service communication across 8 domain services.",
      },
      {
        tech: "Apache Kafka",
        detail: "Centralized event bus for asynchronous communication, handling decoupled workflows including order placement, kitchen cooking status, and payment events.",
      },
      {
        tech: "Keycloak & Spring Security (OAuth2)",
        detail: "Managed IAM to validate JWT tokens at Gateway and enforce Role-Based Access Control (RBAC: Admin, Waiter, Kitchen) via custom headers.",
      },
      {
        tech: "PostgreSQL & Redis",
        detail: "Designed Database-per-Service pattern with 8 isolated PostgreSQL instances; utilized Redis caching to accelerate menu and combo query response times.",
      },
      {
        tech: "Frontend UI & Deployment (ReactJS, Vercel)",
        detail: "Developed the Admin Dashboard and client UI using ReactJS (AI-assisted scaffolding) and deployed frontend seamlessly on Vercel.",
      },
      {
        tech: "Containerization (Docker Compose)",
        detail: "Containerized all microservices, databases, Keycloak, and Kafka broker for instant 1-command reproducible local deployment.",
      },
    ],
  },
  {
    id: "honda-parts-pipeline",
    title: "Honda Parts Pipeline & Automated Alerting System",
    type: "Personal Project",
    subtitle: "High-Volume ETL Pipeline & Centralized Log Alerting",
    icon: "precision_manufacturing",
    techStack: [
      "Spring Boot",
      "Spring Batch",
      "MySQL",
      "Elasticsearch",
      "Filebeat",
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
        detail: "Developed multithreaded web scrapers and chunk-based ETL processing jobs to extract, transform, and efficiently persist high-volume parts data into MySQL.",
      },
      {
        tech: "Filebeat & Elasticsearch",
        detail: "Configured Filebeat agents to harvest application log files in real-time and stream them to Elasticsearch for centralized storage and rapid index querying.",
      },
      {
        tech: "Elasticsearch Java Client & Telegram API",
        detail: "Built an automated background scheduler to scan error logs and instantly dispatch alert notifications with error context to Telegram channels.",
      },
      {
        tech: "Docker, Nginx & GCP VPS",
        detail: "Containerized backend services with Docker Compose and deployed the entire architecture onto a Google Cloud Platform VPS with Nginx as a reverse proxy.",
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
  summary: "Pursuing a comprehensive Software Engineering degree with core specialization in server-side Java architectures, distributed backend services, and database engineering.",
  modules: [
    { title: "Core Specialization", desc: "Java (17+), OOP Principles, Multithreading, Clean Architecture" },
    { title: "Distributed Systems", desc: "Microservices, Spring Cloud (Gateway/Eureka), Event Streaming with Kafka" },
    { title: "Persistence & Data", desc: "Relational DBs (PostgreSQL, MySQL), Redis In-Memory Caching, Elasticsearch" },
    { title: "DevOps & Infrastructure", desc: "Docker Compose, Linux/GCP VPS deployment, Nginx reverse proxy" },
  ],
};
