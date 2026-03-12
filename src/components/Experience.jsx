import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { experiences } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper id="experience" title="Professional Journey" subtitle="My career path — from learning to building production systems.">
      <div className="exp__layout" ref={ref}>
        {/* Timeline nav */}
        <div className="exp__nav">
          {experiences.map((exp, i) => (
            <motion.button
              key={i}
              className={`exp__nav-item${active === i ? ' exp__nav-item--active' : ''}`}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <span className="material-icons exp__nav-icon">{exp.icon}</span>
              <div>
                <div className="exp__nav-role">{exp.role}</div>
                <div className="exp__nav-company">{exp.company}</div>
              </div>
              {exp.current && <span className="exp__current-badge">Current</span>}
            </motion.button>
          ))}
        </div>

        {/* Detail panel */}
        <motion.div
          className="exp__panel"
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="exp__panel-header">
            <div className="exp__panel-icon-wrap">
              <span className="material-icons exp__panel-icon">{experiences[active].icon}</span>
            </div>
            <div>
              <h3 className="exp__panel-role">{experiences[active].role}</h3>
              <div className="exp__panel-meta">
                <span className="exp__panel-company">{experiences[active].company}</span>
                <span className="exp__dot" />
                <span className="exp__panel-period">{experiences[active].period}</span>
              </div>
            </div>
          </div>
          <ul className="exp__bullets">
            {experiences[active].bullets.map((b, i) => (
              <motion.li
                key={i}
                className="exp__bullet"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="exp__bullet-arrow">▸</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
