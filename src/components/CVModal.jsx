import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import './CVModal.css';

export default function CVModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopy = () => {
    const cvText = `
${personalInfo.name}
${personalInfo.title}
Phone: ${personalInfo.phone} | Email: ${personalInfo.email} | GitHub: ${personalInfo.githubDisplay}

PROFESSIONAL SUMMARY
${personalInfo.summary}

TECHNICAL SKILLS
- Languages: Java (17+), SQL, JavaScript (ES6+), HTML5/CSS3.
- Frameworks & Architecture: Spring Boot, Spring Cloud (Gateway, Eureka, OpenFeign), Spring Data JPA (Hibernate), Spring Batch, RESTful APIs, Microservices, ReactJS.
- Databases & Caching: PostgreSQL, MySQL, Redis, Elasticsearch.
- Messaging & Security: Apache Kafka, Keycloak, Spring Security (OAuth2/JWT, RBAC).
- DevOps & Tools: Docker, Docker Compose, Git, Vercel, Nginx, Filebeat, GCP, Postman.
- AI Tools & Prompting: Cursor, ChatGPT, GitHub Copilot, Prompt Engineering.

PERSONAL PROJECTS
1. Online Table Reservation & Food Ordering Platform
Tech Stack: Spring Boot, Spring Cloud, Kafka, Keycloak, Redis, PostgreSQL, ReactJS, Docker, Vercel
- Spring Cloud (Gateway, Eureka, OpenFeign): Acted as the single entry point for API routing, dynamic service discovery, and synchronous inter-service communication across 8 domain services.
- Apache Kafka: Centralized event bus for asynchronous communication, handling decoupled workflows including order placement, kitchen cooking status, and payment events.
- Keycloak & Spring Security (OAuth2): Managed IAM to validate JWT tokens at Gateway and enforce Role-Based Access Control (RBAC: Admin, Waiter, Kitchen) via custom headers.
- PostgreSQL & Redis: Designed Database-per-Service pattern with 8 isolated PostgreSQL instances; utilized Redis caching to accelerate menu and combo query response times.
- Frontend UI & Deployment (ReactJS, Vercel): Developed the Admin Dashboard and client UI using ReactJS (AI-assisted scaffolding) and deployed frontend seamlessly on Vercel.
- Containerization (Docker Compose): Containerized all microservices, databases, Keycloak, and Kafka broker for instant 1-command reproducible local deployment.

2. Honda Parts Pipeline & Automated Alerting System
Tech Stack: Spring Boot, Spring Batch, MySQL, Elasticsearch, Filebeat, Nginx, Docker, GCP
- Spring Boot & Spring Batch: Developed multithreaded web scrapers and chunk-based ETL processing jobs to extract, transform, and efficiently persist high-volume parts data into MySQL.
- Filebeat & Elasticsearch: Configured Filebeat agents to harvest application log files in real-time and stream them to Elasticsearch for centralized storage and rapid index querying.
- Elasticsearch Java Client & Telegram API: Built an automated background scheduler to scan error logs and instantly dispatch alert notifications with error context to Telegram channels.
- Docker, Nginx & GCP VPS: Containerized backend services with Docker Compose and deployed the entire architecture onto a Google Cloud Platform VPS with Nginx as a reverse proxy.

EDUCATION
Saigon University - Ho Chi Minh City, Vietnam
Engineer in Software Engineering (4.5-Year Program) | 2023 – Early 2028 (Expected)
    `.trim();

    navigator.clipboard.writeText(cvText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    window.open('/cv.html', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="cv-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="cv-modal-container"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header controls */}
            <div className="cv-modal-header">
              <div className="cv-modal-title-wrap">
                <span className="cv-modal-badge">Official CV</span>
                <span className="cv-modal-title">Curriculum Vitae</span>
              </div>
              <div className="cv-modal-controls">
                <button
                  type="button"
                  className="cv-btn cv-btn--primary"
                  onClick={handlePrint}
                  title="Open printable version or download PDF"
                >
                  <span className="material-icons">print</span>
                  Print / PDF
                </button>
                <button
                  type="button"
                  className="cv-btn"
                  onClick={handleCopy}
                  title="Copy formatted text"
                >
                  <span className="material-icons">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  {copied ? 'Copied!' : 'Copy Text'}
                </button>
                <a
                  href="/cv.html"
                  target="_blank"
                  rel="noreferrer"
                  className="cv-btn"
                  title="Open full page"
                >
                  <span className="material-icons">open_in_new</span>
                </a>
                <button
                  type="button"
                  className="cv-btn cv-btn--close"
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <span className="material-icons">close</span>
                </button>
              </div>
            </div>

            {/* Document sheet */}
            <div className="cv-modal-body">
              {/* Header */}
              <div className="cv-sheet-header">
                <h1 className="cv-sheet-name">NGUYEN THANH HIEU</h1>
                <div className="cv-sheet-role">Java Backend Intern</div>
                <div className="cv-sheet-contacts">
                  <a href="tel:+84907767961" className="cv-sheet-contact-item">
                    📞 (+84) 907 767 961
                  </a>
                  <span className="cv-sheet-dot">·</span>
                  <a
                    href="mailto:thanhhieunguyen3004@gmail.com"
                    className="cv-sheet-contact-item"
                  >
                    ✉️ thanhhieunguyen3004@gmail.com
                  </a>
                  <span className="cv-sheet-dot">·</span>
                  <a
                    href="https://github.com/thanhhieu3004"
                    target="_blank"
                    rel="noreferrer"
                    className="cv-sheet-contact-item"
                  >
                    🐙 github.com/thanhhieu3004
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">Professional Summary</h2>
                <p className="cv-sheet-summary">
                  4th-year Software Engineering student aspiring to build a
                  long-term career as a Backend Developer, having chosen Java as my
                  core foundational language. Passionate about server-side logic,
                  system architecture, and solving complex problems with clean,
                  maintainable code. A fast and proactive learner seeking a Java
                  Backend Intern opportunity to learn from experienced mentors and
                  contribute to real-world software products.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">Technical Skills</h2>
                <div className="cv-sheet-skills">
                  <div className="cv-sheet-skill-row">
                    <span className="cv-sheet-skill-heading">Languages:</span>{' '}
                    Java (17+), SQL, JavaScript (ES6+), HTML5/CSS3.
                  </div>
                  <div className="cv-sheet-skill-row">
                    <span className="cv-sheet-skill-heading">
                      Frameworks & Architecture:
                    </span>{' '}
                    Spring Boot, Spring Cloud (Gateway, Eureka, OpenFeign), Spring
                    Data JPA (Hibernate), Spring Batch, RESTful APIs, Microservices,
                    ReactJS.
                  </div>
                  <div className="cv-sheet-skill-row">
                    <span className="cv-sheet-skill-heading">
                      Databases & Caching:
                    </span>{' '}
                    PostgreSQL, MySQL, Redis, Elasticsearch.
                  </div>
                  <div className="cv-sheet-skill-row">
                    <span className="cv-sheet-skill-heading">
                      Messaging & Security:
                    </span>{' '}
                    Apache Kafka, Keycloak, Spring Security (OAuth2/JWT, RBAC).
                  </div>
                  <div className="cv-sheet-skill-row">
                    <span className="cv-sheet-skill-heading">DevOps & Tools:</span>{' '}
                    Docker, Docker Compose, Git, Vercel, Nginx, Filebeat, GCP,
                    Postman.
                  </div>
                  <div className="cv-sheet-skill-row">
                    <span className="cv-sheet-skill-heading">
                      AI Tools & Prompting:
                    </span>{' '}
                    Cursor, ChatGPT, GitHub Copilot, Prompt Engineering.
                  </div>
                </div>
              </div>

              {/* Personal Projects */}
              <div className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">Personal Projects</h2>

                {/* Project 1 */}
                <div className="cv-sheet-project">
                  <div className="cv-sheet-project-top">
                    <span className="cv-sheet-project-name">
                      Online Table Reservation & Food Ordering Platform
                    </span>
                    <span className="cv-sheet-project-links">
                      <a
                        href="https://github.com/thanhhieu3004"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Backend
                      </a>{' '}
                      |{' '}
                      <a
                        href="https://github.com/thanhhieu3004"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Frontend
                      </a>{' '}
                      |{' '}
                      <a
                        href="https://github.com/thanhhieu3004"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    </span>
                  </div>
                  <div className="cv-sheet-techstack">
                    <strong>Tech Stack:</strong> Spring Boot, Spring Cloud, Kafka,
                    Keycloak, Redis, PostgreSQL, ReactJS, Docker, Vercel
                  </div>
                  <ul className="cv-sheet-bullets">
                    <li className="cv-sheet-bullet">
                      <strong>
                        Spring Cloud (Gateway, Eureka, OpenFeign):
                      </strong>{' '}
                      Acted as the single entry point for API routing, dynamic
                      service discovery, and synchronous inter-service
                      communication across 8 domain services.
                    </li>
                    <li className="cv-sheet-bullet">
                      <strong>Apache Kafka:</strong> Centralized event bus for
                      asynchronous communication, handling decoupled workflows
                      including order placement, kitchen cooking status, and
                      payment events.
                    </li>
                    <li className="cv-sheet-bullet">
                      <strong>Keycloak & Spring Security (OAuth2):</strong>{' '}
                      Managed IAM to validate JWT tokens at Gateway and enforce
                      Role-Based Access Control (RBAC: Admin, Waiter, Kitchen) via
                      custom headers.
                    </li>
                    <li className="cv-sheet-bullet">
                      <strong>PostgreSQL & Redis:</strong> Designed
                      Database-per-Service pattern with 8 isolated PostgreSQL
                      instances; utilized Redis caching to accelerate menu and
                      combo query response times.
                    </li>
                    <li className="cv-sheet-bullet">
                      <strong>Frontend UI & Deployment (ReactJS, Vercel):</strong>{' '}
                      Developed the Admin Dashboard and client UI using ReactJS
                      (AI-assisted scaffolding) and deployed frontend seamlessly on
                      Vercel.
                    </li>
                    <li className="cv-sheet-bullet">
                      <strong>Containerization (Docker Compose):</strong>{' '}
                      Containerized all microservices, databases, Keycloak, and
                      Kafka broker for instant 1-command reproducible local
                      deployment.
                    </li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="cv-sheet-project">
                  <div className="cv-sheet-project-top">
                    <span className="cv-sheet-project-name">
                      Honda Parts Pipeline & Automated Alerting System
                    </span>
                    <span className="cv-sheet-project-links">
                      <a
                        href="https://github.com/thanhhieu3004"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Source Code
                      </a>
                    </span>
                  </div>
                  <div className="cv-sheet-techstack">
                    <strong>Tech Stack:</strong> Spring Boot, Spring Batch, MySQL,
                    Elasticsearch, Filebeat, Nginx, Docker, GCP
                  </div>
                  <ul className="cv-sheet-bullets">
                    <li className="cv-sheet-bullet">
                      <strong>Spring Boot & Spring Batch:</strong> Developed
                      multithreaded web scrapers and chunk-based ETL processing
                      jobs to extract, transform, and efficiently persist
                      high-volume parts data into MySQL.
                    </li>
                    <li className="cv-sheet-bullet">
                      <strong>Filebeat & Elasticsearch:</strong> Configured
                      Filebeat agents to harvest application log files in real-time
                      and stream them to Elasticsearch for centralized storage and
                      rapid index querying.
                    </li>
                    <li className="cv-sheet-bullet">
                      <strong>
                        Elasticsearch Java Client & Telegram API:
                      </strong>{' '}
                      Built an automated background scheduler to scan error logs
                      and instantly dispatch alert notifications with error context
                      to Telegram channels.
                    </li>
                    <li className="cv-sheet-bullet">
                      <strong>Docker, Nginx & GCP VPS:</strong> Containerized
                      backend services with Docker Compose and deployed the entire
                      architecture onto a Google Cloud Platform VPS with Nginx as a
                      reverse proxy.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">Education</h2>
                <div className="cv-sheet-edu-row">
                  <span className="cv-sheet-edu-inst">Saigon University</span>
                  <span className="cv-sheet-edu-loc">
                    Ho Chi Minh City, Vietnam
                  </span>
                </div>
                <div className="cv-sheet-edu-row">
                  <span className="cv-sheet-edu-degree">
                    Engineer in Software Engineering (4.5-Year Program)
                  </span>
                  <span className="cv-sheet-edu-period">
                    2023 – Early 2028 (Expected)
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
