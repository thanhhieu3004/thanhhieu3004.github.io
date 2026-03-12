import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { achievements } from '../data/portfolio';
import './Achievements.css';

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <SectionWrapper id="achievements" title="Achievements" subtitle="Recognition and milestones I'm proud of.">
      <div className="ach__grid" ref={ref}>
        {achievements.map((a, i) => (
          <motion.div
            key={a.event}
            className="ach__card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.12, type: 'spring', bounce: 0.3 }}
            whileHover={{ y: -6 }}
          >
            <div className="ach__icon-wrap">
              <span className="material-icons ach__icon">{a.icon}</span>
            </div>
            <div className="ach__rank">{a.rank}</div>
            <div className="ach__event">{a.event}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
