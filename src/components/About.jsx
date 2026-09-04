import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { personalInfo, education } from '../data/portfolio';
import './About.css';

const highlights = [
  { value: '4th Year', label: 'Saigon University' },
  { value: 'Java 17+', label: 'Core Foundation' },
  { value: '8 Services', label: 'Microservices Architected' },
  { value: 'Spring Ecosystem', label: 'Boot, Cloud, Batch, JPA' },
];

export default function About({ onOpenCV }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <SectionWrapper id="about" title="Professional Summary">
      <div className="about__layout">
        {/* Left: text */}
        <motion.div
          className="about__text"
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="about__heading">
            Aspiring <span className="about__heading-accent">Software Engineer</span> with passion for system architecture.
          </h2>
          <p className="about__para">{personalInfo.summary}</p>
          <p className="about__para">
            Having chosen Java as my foundational language, I focus on server-side logic, scalable distributed architectures with Spring Boot and Spring Cloud, decoupled event-driven workflows with Apache Kafka, and automated data pipelines.
          </p>
          <div className="about__chips">
            {['Java (17+)', 'Spring Boot', 'Spring Cloud', 'NestJS', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Docker'].map(t => (
              <span key={t} className="about__chip">
                <span className="about__chip-dot" />{t}
              </span>
            ))}
          </div>
          <div className="about__cta-row">
            <button
              type="button"
              className="btn btn--primary"
              onClick={onOpenCV}
            >
              <span className="material-icons btn__icon">description</span>
              View Full CV
            </button>
            <a href="#contact" className="btn btn--outline">
              <span className="material-icons btn__icon">mail</span>
              Contact Me
            </a>
            <a href="#projects" className="btn btn--outline">
              <span className="material-icons btn__icon">terminal</span>
              Projects
            </a>
          </div>
        </motion.div>

        {/* Right: stats & quick highlights from CV */}
        <motion.div
          className="about__stats"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="about__stats-grid">
            {highlights.map((s, i) => (
              <motion.div
                key={s.label}
                className="about__stat-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="about__stat-value">{s.value}</div>
                <div className="about__stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="about__card">
            <span className="material-icons about__card-icon">school</span>
            <div>
              <div className="about__card-title">Education & Standing</div>
              <div className="about__card-text">{education.institution} · {education.degree}</div>
            </div>
          </div>

          <div className="about__card">
            <span className="material-icons about__card-icon">work_outline</span>
            <div>
              <div className="about__card-title">Seeking Role</div>
              <div className="about__card-text">Software Engineer Intern — Ready to learn from mentors and contribute</div>
            </div>
          </div>

          <div className="about__card">
            <span className="material-icons about__card-icon">place</span>
            <div>
              <div className="about__card-title">Location</div>
              <div className="about__card-text">{personalInfo.location}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
