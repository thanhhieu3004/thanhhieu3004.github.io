import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { education } from '../data/portfolio';
import './Education.css';

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="Academic background and foundational engineering training."
    >
      <div className="education__container" ref={ref}>
        <motion.div
          className="education__card"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="education__header">
            <div className="education__icon-wrap">
              <span className="material-icons education__icon">school</span>
            </div>
            <div className="education__title-block">
              <div className="education__meta">
                <span className="education__badge">{education.status}</span>
                <span className="education__period">{education.period}</span>
              </div>
              <h3 className="education__institution">{education.institution}</h3>
              <div className="education__degree">
                <span>{education.degree}</span>
                <span className="education__dot">·</span>
                <span className="education__location">
                  <span className="material-icons education__loc-icon">place</span>
                  {education.location}
                </span>
              </div>
            </div>
          </div>

          <p className="education__summary">{education.summary}</p>

          <div className="education__modules-grid">
            {education.modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                className="education__module-card"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              >
                <div className="education__module-title">
                  <span className="education__module-dot" />
                  {mod.title}
                </div>
                <div className="education__module-desc">{mod.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
