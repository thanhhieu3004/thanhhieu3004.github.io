import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/portfolio';
import './CVSection.css';

export default function CVSection({ onOpenCV }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper
      id="cv"
      title="Curriculum Vitae"
      subtitle="Complete resume & background summary for recruiter evaluation."
    >
      <div ref={ref}>
        <motion.div
          className="cv-section__card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Banner Row */}
          <div className="cv-section__banner">
            <div className="cv-section__info">
              <div className="cv-section__badge-icon">
                <span className="material-icons">description</span>
              </div>
              <div>
                <h3 className="cv-section__title">
                  {personalInfo.name} — CV / Resume
                </h3>
                <p className="cv-section__subtitle">
                  {personalInfo.title} · {personalInfo.university} (Expected 2028)
                </p>
              </div>
            </div>

            <div className="cv-section__actions">
              <button
                type="button"
                className="btn btn--primary"
                onClick={onOpenCV}
              >
                <span className="material-icons btn__icon">visibility</span>
                View Full CV
              </button>
              <a
                href="/cv.html"
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                <span className="material-icons btn__icon">print</span>
                Print / Save PDF
              </a>
            </div>
          </div>

          {/* Paper-style document preview */}
          <div className="cv-preview-paper-container">
            <div className="cv-preview-sheet">
              {/* Header */}
              <header className="cv-preview-header">
                <h2 className="cv-preview-name">NGUYEN THANH HIEU</h2>
                <div className="cv-preview-role">Software Engineer Intern</div>
                <div className="cv-preview-contacts">
                  <span>(+84) 907 767 961</span>
                  <span>|</span>
                  <span>thanhhieunguyen3004@gmail.com</span>
                  <span>|</span>
                  <span>github.com/thanhhieu3004</span>
                </div>
              </header>

              {/* Summary */}
              <section className="cv-preview-section">
                <div className="cv-preview-section-title">PROFESSIONAL SUMMARY</div>
                <p className="cv-preview-summary-text">
                  4th-year Software Engineering student aspiring to build a long-term career as a Software Engineer, having chosen Java as my core foundational language. Passionate about server-side logic, system architecture, and solving complex problems with clean, maintainable code. A fast and proactive learner seeking a Software Engineer Intern opportunity to learn from experienced mentors and contribute to real-world software products.
                </p>
              </section>

              {/* Education */}
              <section className="cv-preview-section">
                <div className="cv-preview-section-title">EDUCATION</div>
                <div className="cv-preview-edu-row">
                  <span className="cv-preview-edu-inst">Saigon University</span>
                  <span className="cv-preview-edu-loc">Ho Chi Minh City, Vietnam</span>
                </div>
                <div className="cv-preview-edu-row">
                  <span className="cv-preview-edu-degree">Engineer in Software Engineering (4.5-Year Program)</span>
                  <span className="cv-preview-edu-period">2023 – Early 2028 (Expected)</span>
                </div>
              </section>

              {/* Technical Skills */}
              <section className="cv-preview-section">
                <div className="cv-preview-section-title">TECHNICAL SKILLS</div>
                <div className="cv-preview-skills-list">
                  <div className="cv-preview-skill-line">
                    <span className="cv-preview-skill-title">Languages &amp; Frameworks:</span> Java (17+), TypeScript, JavaScript, SQL, Spring Boot, Spring Cloud, NestJS, Spring Data JPA, Spring Batch, ReactJS.
                  </div>
                  <div className="cv-preview-skill-line">
                    <span className="cv-preview-skill-title">Databases &amp; DevOps:</span> PostgreSQL, MySQL, Redis, Apache Kafka, Docker, Docker Compose, Git, GCP.
                  </div>
                  <div className="cv-preview-skill-line">
                    <span className="cv-preview-skill-title">AI Tools:</span> Cursor, ChatGPT, GitHub Copilot, Prompt Engineering.
                  </div>
                  <div className="cv-preview-skill-line">
                    <span className="cv-preview-skill-title">Soft Skills:</span> Problem-Solving, Teamwork &amp; Collaboration, Effective Communication, Fast-Learner, Time Management.
                  </div>
                  <div className="cv-preview-skill-line">
                    <span className="cv-preview-skill-title">Languages:</span> English (Technical reading &amp; writing, conversational speaking), Vietnamese (Native).
                  </div>
                </div>
              </section>

              {/* Personal Projects Preview */}
              <section className="cv-preview-section">
                <div className="cv-preview-section-title">PERSONAL PROJECTS</div>
                <div style={{ marginBottom: '6px' }}>
                  <div className="cv-preview-project-header">
                    <span className="cv-preview-project-title">Online Table Reservation &amp; Food Ordering Platform</span>
                    <span className="cv-preview-project-links">[Backend Code] | [Frontend Code] | [Live Demo]</span>
                  </div>
                  <div className="cv-preview-tech-stack">
                    <strong>Tech Stack:</strong> Spring Boot (RESTful APIs), Spring Cloud, Kafka, Redis, PostgreSQL, ReactJS, Docker, Vercel
                  </div>
                  <div className="cv-preview-bullet">
                    <strong>RESTful API &amp; Spring Cloud:</strong> Designed scalable RESTful APIs with Global Exception Handling and DTO validations; leveraged Spring Cloud for dynamic service discovery and inter-service communication.
                  </div>
                  <div className="cv-preview-bullet">
                    <strong>Apache Kafka:</strong> Centralized event bus for asynchronous communication, handling decoupled workflows including order placement, kitchen cooking status, and payment events.
                  </div>
                </div>

                <div>
                  <div className="cv-preview-project-header">
                    <span className="cv-preview-project-title">Honda Parts Pipeline &amp; Automated Alerting System</span>
                    <span className="cv-preview-project-links">[Source Code]</span>
                  </div>
                  <div className="cv-preview-tech-stack">
                    <strong>Tech Stack:</strong> Spring Boot (RESTful APIs), Spring Batch, MySQL, Telegram Bot API, Nginx, Docker, GCP
                  </div>
                  <div className="cv-preview-bullet">
                    <strong>Spring Boot &amp; Spring Batch:</strong> Developed multithreaded web scrapers and chunk-based ETL processing jobs to extract, transform, and persist parts data into MySQL.
                  </div>
                  <div className="cv-preview-bullet">
                    <strong>Automated Alerting (Telegram Bot API):</strong> Built automated scheduled tasks to monitor ETL pipeline health and instantly dispatch error logs with contextual details.
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
