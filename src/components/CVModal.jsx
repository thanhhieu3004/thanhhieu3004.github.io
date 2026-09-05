import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import './CVModal.css';

export default function CVModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const modalBodyRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Force scroll reset to top
      if (modalBodyRef.current) {
        modalBodyRef.current.scrollTop = 0;
      }
      const timeoutId = setTimeout(() => {
        if (modalBodyRef.current) {
          modalBodyRef.current.scrollTop = 0;
        }
      }, 50);

      return () => {
        clearTimeout(timeoutId);
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
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
${personalInfo.phone} | ${personalInfo.email} | ${personalInfo.githubDisplay}

PROFESSIONAL SUMMARY
${personalInfo.summary}

EDUCATION
Saigon University                                                       Ho Chi Minh City, Vietnam
Engineer in Software Engineering (4.5-Year Program)                   2023 – Early 2028 (Expected)

TECHNICAL SKILLS
Languages & Frameworks: Java (17+), TypeScript, JavaScript, SQL, Spring Boot, Spring Cloud, NestJS, Spring Data JPA, Spring Batch, ReactJS.
Databases & DevOps: PostgreSQL, MySQL, Redis, Apache Kafka, Docker, Docker Compose, Git, GCP.
AI Tools: Cursor, ChatGPT, GitHub Copilot, Prompt Engineering.
Soft Skills: Problem-Solving, Teamwork & Collaboration, Effective Communication, Fast-Learner, Time Management.
Languages: English (Technical reading & writing, conversational speaking), Vietnamese (Native).

PERSONAL PROJECTS
Online Table Reservation & Food Ordering Platform [Backend Code] | [Frontend Code] | [Live Demo]
Tech Stack: Spring Boot (RESTful APIs), Spring Cloud, Kafka, Redis, PostgreSQL, ReactJS, Docker, Vercel
• RESTful API & Spring Cloud: Designed scalable RESTful APIs with Global Exception Handling and DTO validations; leveraged Spring Cloud (Gateway, Eureka, OpenFeign) for dynamic service discovery and inter-service communication.
• Apache Kafka: Centralized event bus for asynchronous communication, handling decoupled workflows including order placement, kitchen cooking status, and payment events.
• Spring Security (JWT & OAuth2): Configured centralized authentication to validate JWT tokens at API Gateway and enforced Role-Based Access Control (RBAC: Admin, Waiter, Kitchen) via custom headers.
• PostgreSQL & Redis: Designed Database-per-Service pattern with 8 isolated PostgreSQL instances; utilized Redis caching to accelerate menu and combo query response times.
• Frontend UI & Deployment (ReactJS, Vercel): Developed the Admin Dashboard and client UI using ReactJS (AI-assisted scaffolding) and deployed frontend seamlessly on Vercel.
• Containerization (Docker Compose): Containerized all microservices, databases, and Kafka broker for instant 1-command reproducible local deployment.

Honda Parts Pipeline & Automated Alerting System [Source Code]
Tech Stack: Spring Boot (RESTful APIs), Spring Batch, MySQL, Telegram Bot API, Nginx, Docker, GCP
• Spring Boot & Spring Batch: Developed multithreaded web scrapers and chunk-based ETL processing jobs to extract, transform, and efficiently persist high-volume parts data into MySQL.
• RESTful CRUD APIs: Designed robust RESTful endpoints with pagination, filtering, and sorting to perform CRUD operations on parts inventory and trigger manual/automated pipeline jobs.
• Automated Alerting (Telegram Bot API): Built automated scheduled tasks to monitor ETL pipeline health and instantly dispatch error logs with contextual details to Telegram channels.
• Docker, Nginx & GCP VPS: Containerized backend services with Docker Compose and deployed the entire architecture onto a Google Cloud Platform VPS with Nginx as a reverse proxy.
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
            initial={{ scale: 0.96, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            onAnimationComplete={() => {
              if (modalBodyRef.current) {
                modalBodyRef.current.scrollTop = 0;
              }
            }}
          >
            {/* Header controls */}
            <div className="cv-modal-header">
              <div className="cv-modal-title-wrap">
                <span className="cv-modal-badge">Official CV</span>
                <span className="cv-modal-title">Nguyễn Thanh Hiếu — Curriculum Vitae</span>
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
            <div className="cv-modal-body" ref={modalBodyRef}>
              <div className="cv-sheet-paper">
                {/* Header */}
                <header className="cv-sheet-header">
                  <h1 className="cv-sheet-name">NGUYEN THANH HIEU</h1>
                  <div className="cv-sheet-role">Software Engineer Intern</div>
                  <div className="cv-sheet-contacts">
                    <a href="tel:+84907767961" className="cv-sheet-contact-item">
                      (+84) 907 767 961
                    </a>
                    <span className="cv-sheet-dot">|</span>
                    <a
                      href="mailto:thanhhieunguyen3004@gmail.com"
                      className="cv-sheet-contact-item"
                    >
                      thanhhieunguyen3004@gmail.com
                    </a>
                    <span className="cv-sheet-dot">|</span>
                    <a
                      href="https://github.com/thanhhieu3004"
                      target="_blank"
                      rel="noreferrer"
                      className="cv-sheet-contact-item"
                    >
                      github.com/thanhhieu3004
                    </a>
                  </div>
                </header>

                {/* Professional Summary */}
                <section className="cv-sheet-section">
                  <h2 className="cv-sheet-section-title">PROFESSIONAL SUMMARY</h2>
                  <p className="cv-sheet-summary">
                    4th-year Software Engineering student aspiring to build a
                    long-term career as a Software Engineer, having chosen Java as my
                    core foundational language. Passionate about server-side logic,
                    system architecture, and solving complex problems with clean,
                    maintainable code. A fast and proactive learner seeking a Software
                    Engineer Intern opportunity to learn from experienced mentors and
                    contribute to real-world software products.
                  </p>
                </section>

                {/* Education */}
                <section className="cv-sheet-section">
                  <h2 className="cv-sheet-section-title">EDUCATION</h2>
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
                </section>

                {/* Technical Skills */}
                <section className="cv-sheet-section">
                  <h2 className="cv-sheet-section-title">TECHNICAL SKILLS</h2>
                  <div className="cv-sheet-skills">
                    <div className="cv-sheet-skill-row">
                      <span className="cv-sheet-skill-heading">Languages &amp; Frameworks:</span>{' '}
                      Java (17+), TypeScript, JavaScript, SQL, Spring Boot, Spring Cloud, NestJS, Spring Data JPA, Spring Batch, ReactJS.
                    </div>
                    <div className="cv-sheet-skill-row">
                      <span className="cv-sheet-skill-heading">
                        Databases &amp; DevOps:
                      </span>{' '}
                      PostgreSQL, MySQL, Redis, Apache Kafka, Docker, Docker Compose, Git, GCP.
                    </div>
                    <div className="cv-sheet-skill-row">
                      <span className="cv-sheet-skill-heading">
                        AI Tools:
                      </span>{' '}
                      Cursor, ChatGPT, GitHub Copilot, Prompt Engineering.
                    </div>
                    <div className="cv-sheet-skill-row">
                      <span className="cv-sheet-skill-heading">
                        Soft Skills:
                      </span>{' '}
                      Problem-Solving, Teamwork &amp; Collaboration, Effective Communication, Fast-Learner, Time Management.
                    </div>
                    <div className="cv-sheet-skill-row">
                      <span className="cv-sheet-skill-heading">Languages:</span>{' '}
                      English (Technical reading &amp; writing, conversational speaking), Vietnamese (Native).
                    </div>
                  </div>
                </section>

                {/* Personal Projects */}
                <section className="cv-sheet-section">
                  <h2 className="cv-sheet-section-title">PERSONAL PROJECTS</h2>

                  {/* Project 1 */}
                  <div className="cv-sheet-project">
                    <div className="cv-sheet-project-top">
                      <span className="cv-sheet-project-name">
                        Online Table Reservation &amp; Food Ordering Platform
                      </span>
                      <span className="cv-sheet-project-links">
                        [<a
                          href="https://github.com/thanhhieu3004"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Backend Code
                        </a>]{' '}|{' '}
                        [<a
                          href="https://github.com/thanhhieu3004"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Frontend Code
                        </a>]{' '}|{' '}
                        [<a
                          href="https://github.com/thanhhieu3004"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>]
                      </span>
                    </div>
                    <div className="cv-sheet-techstack">
                      <strong>Tech Stack:</strong> Spring Boot (RESTful APIs), Spring Cloud, Kafka,
                      Redis, PostgreSQL, ReactJS, Docker, Vercel
                    </div>
                    <ul className="cv-sheet-bullets">
                      <li className="cv-sheet-bullet">
                        <strong>
                          RESTful API &amp; Spring Cloud:
                        </strong>{' '}
                        Designed scalable RESTful APIs with Global Exception Handling and DTO validations; leveraged Spring Cloud (Gateway, Eureka, OpenFeign) for dynamic service discovery and inter-service communication.
                      </li>
                      <li className="cv-sheet-bullet">
                        <strong>Apache Kafka:</strong> Centralized event bus for
                        asynchronous communication, handling decoupled workflows
                        including order placement, kitchen cooking status, and
                        payment events.
                      </li>
                      <li className="cv-sheet-bullet">
                        <strong>Spring Security (JWT &amp; OAuth2):</strong>{' '}
                        Configured centralized authentication to validate JWT tokens at API Gateway and enforced Role-Based Access Control (RBAC: Admin, Waiter, Kitchen) via custom headers.
                      </li>
                      <li className="cv-sheet-bullet">
                        <strong>PostgreSQL &amp; Redis:</strong> Designed
                        Database-per-Service pattern with 8 isolated PostgreSQL
                        instances; utilized Redis caching to accelerate menu and
                        combo query response times.
                      </li>
                      <li className="cv-sheet-bullet">
                        <strong>Frontend UI &amp; Deployment (ReactJS, Vercel):</strong>{' '}
                        Developed the Admin Dashboard and client UI using ReactJS
                        (AI-assisted scaffolding) and deployed frontend seamlessly on
                        Vercel.
                      </li>
                      <li className="cv-sheet-bullet">
                        <strong>Containerization (Docker Compose):</strong>{' '}
                        Containerized all microservices, databases, and
                        Kafka broker for instant 1-command reproducible local
                        deployment.
                      </li>
                    </ul>
                  </div>

                  {/* Project 2 */}
                  <div className="cv-sheet-project">
                    <div className="cv-sheet-project-top">
                      <span className="cv-sheet-project-name">
                        Honda Parts Pipeline &amp; Automated Alerting System
                      </span>
                      <span className="cv-sheet-project-links">
                        [<a
                          href="https://github.com/thanhhieu3004"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>]
                      </span>
                    </div>
                    <div className="cv-sheet-techstack">
                      <strong>Tech Stack:</strong> Spring Boot (RESTful APIs), Spring Batch, MySQL,
                      Telegram Bot API, Nginx, Docker, GCP
                    </div>
                    <ul className="cv-sheet-bullets">
                      <li className="cv-sheet-bullet">
                        <strong>Spring Boot &amp; Spring Batch:</strong> Developed
                        multithreaded web scrapers and chunk-based ETL processing
                        jobs to extract, transform, and efficiently persist
                        high-volume parts data into MySQL.
                      </li>
                      <li className="cv-sheet-bullet">
                        <strong>RESTful CRUD APIs:</strong> Designed robust RESTful endpoints with pagination, filtering, and sorting to perform CRUD operations on parts inventory and trigger manual/automated pipeline jobs.
                      </li>
                      <li className="cv-sheet-bullet">
                        <strong>
                          Automated Alerting (Telegram Bot API):
                        </strong>{' '}
                        Built automated scheduled tasks to monitor ETL pipeline health
                        and instantly dispatch error logs with contextual details
                        to Telegram channels.
                      </li>
                      <li className="cv-sheet-bullet">
                        <strong>Docker, Nginx &amp; GCP VPS:</strong> Containerized
                        backend services with Docker Compose and deployed the entire
                        architecture onto a Google Cloud Platform VPS with Nginx as a
                        reverse proxy.
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
