import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolio';
import './Projects.css';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <motion.article
      ref={ref}
      className="project__card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {/* Top row */}
      <div className="project__header">
        <div className="project__header-left">
          <div className="project__icon-wrap">
            <span className="material-icons project__icon">{project.icon}</span>
          </div>
          <div>
            <div className="project__badge-type">{project.type}</div>
            <h3 className="project__title">{project.title}</h3>
            {project.subtitle && (
              <div className="project__subtitle">{project.subtitle}</div>
            )}
          </div>
        </div>

        <div className="project__links">
          {project.links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="project__link-btn"
              title={link.label}
            >
              <span className="material-icons project__link-icon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Tech stack badges */}
      <div className="project__tech-section">
        <div className="project__tech-label">Tech Stack:</div>
        <div className="project__tags">
          {project.techStack.map(t => (
            <span key={t} className="project__tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights list from CV */}
      <div className="project__highlights">
        <div className="project__highlights-title">Key Architectural Highlights:</div>
        <ul className="project__bullets">
          {project.highlights.map((h, i) => (
            <li key={i} className="project__bullet-item">
              <span className="project__bullet-icon material-icons">arrow_right</span>
              <div className="project__bullet-content">
                <strong className="project__bullet-tech">{h.tech}:</strong>{' '}
                <span className="project__bullet-text">{h.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Personal Projects"
      subtitle="Production-grade architectures, microservices systems, and automated data pipelines from my CV."
    >
      <div className="project__list">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <motion.div
        className="project__more"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="https://github.com/thanhhieu3004"
          target="_blank"
          rel="noreferrer"
          className="btn btn--outline"
        >
          <span className="material-icons btn__icon">code</span>
          View More Repositories on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
