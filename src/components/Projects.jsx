import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolio';
import './Projects.css';

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.article
      ref={ref}
      className="project__card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      whileHover={{ y: -8 }}
    >
      {/* Card top: icon / image */}
      <div className="project__card-top">
        <div className="project__icon-wrap">
          <span className="material-icons project__icon">{project.icon}</span>
        </div>
        <div className="project__links">
          <a href={project.source} target="_blank" rel="noreferrer" className="project__link" title="Source">
            <span className="material-icons">code</span>
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="project__link" title="Demo">
            <span className="material-icons">open_in_new</span>
          </a>
        </div>
      </div>

      <h3 className="project__title">{project.title}</h3>
      <p className="project__desc">{project.description}</p>

      <div className="project__tags">
        {project.tags.map(t => (
          <span key={t} className="project__tag">{t}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      title="Selected Projects"
      subtitle="Things I've built that I'm proud of."
    >
      <div className="project__grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <motion.div
        className="project__more"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="https://github.com/thanhhieu3004"
          target="_blank"
          rel="noreferrer"
          className="btn btn--outline"
        >
          <span className="material-icons btn__icon">code</span>
          More on GitHub
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
