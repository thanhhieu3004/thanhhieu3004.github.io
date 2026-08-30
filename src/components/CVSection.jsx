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

          {/* Quick interactive CV preview sheet */}
          <div className="cv-preview-frame">
            <div className="cv-preview-watermark">Verified Resume Document</div>

            <div className="cv-preview-grid">
              <div>
                <div className="cv-preview-block-title">
                  <span className="material-icons">person</span>
                  Candidate Profile & Focus
                </div>
                <p className="cv-preview-text">
                  {personalInfo.summary}
                </p>
              </div>

              <div>
                <div className="cv-preview-block-title">
                  <span className="material-icons">code</span>
                  Core Tech Stack & Tools
                </div>
                <div className="cv-preview-skills-summary">
                  <span className="cv-preview-pill">Java 17+</span>
                  <span className="cv-preview-pill">Spring Boot</span>
                  <span className="cv-preview-pill">Spring Cloud</span>
                  <span className="cv-preview-pill">Apache Kafka</span>
                  <span className="cv-preview-pill">Keycloak / OAuth2</span>
                  <span className="cv-preview-pill">PostgreSQL & Redis</span>
                  <span className="cv-preview-pill">Spring Batch / ETL</span>
                  <span className="cv-preview-pill">Docker & GCP</span>
                  <span className="cv-preview-pill">Elasticsearch & Filebeat</span>
                </div>
              </div>

              <div>
                <div className="cv-preview-block-title">
                  <span className="material-icons">restaurant_menu</span>
                  Key Project 1: Table Reservation & Food Ordering
                </div>
                <p className="cv-preview-text">
                  Microservices architecture with 8 domain services, Spring Cloud Gateway & Eureka, Kafka asynchronous event streaming, Keycloak RBAC, and Database-per-service PostgreSQL.
                </p>
              </div>

              <div>
                <div className="cv-preview-block-title">
                  <span className="material-icons">precision_manufacturing</span>
                  Key Project 2: Honda Parts Pipeline & Alerting
                </div>
                <p className="cv-preview-text">
                  Multithreaded web scrapers with Spring Batch chunk-based ETL, real-time logging via Filebeat & Elasticsearch, and Telegram API alert automation on GCP.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
