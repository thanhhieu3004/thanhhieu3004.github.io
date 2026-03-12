import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { skillCategories } from '../data/portfolio';
import './Skills.css';

function SkillCard({ skill, delay, inView }) {
  return (
    <motion.div
      className="skill__card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(108,99,255,0.2)' }}
    >
      <div className="skill__card-icon-wrap">
        <span className="material-icons skill__card-icon">{skill.icon}</span>
      </div>
      <div className="skill__card-name">{skill.name}</div>
      <div className="skill__card-desc">{skill.desc}</div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper
      id="skills"
      title="Technical Arsenal"
      subtitle="Tools & technologies I use to build production-grade applications."
    >
      <div ref={ref}>
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="skill__category"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: ci * 0.15 }}
          >
            <div className="skill__category-title">
              <span className="skill__category-title-line" />
              {cat.title}
            </div>
            <div className="skill__grid">
              {cat.skills.map((skill, si) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  delay={ci * 0.1 + si * 0.07}
                  inView={inView}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
