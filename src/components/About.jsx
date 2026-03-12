import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/portfolio';
import './About.css';

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '20+', label: 'Projects Built' },
  { value: '10+', label: 'Happy Clients' },
  { value: '5+', label: 'Technologies' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <SectionWrapper id="about" title="About Me">
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
            Passionate developer, <br />
            <span className="about__heading-accent">problem solver</span> at heart.
          </h2>
          <p className="about__para">{personalInfo.description}</p>
          <p className="about__para">
            I enjoy taking complex problems and turning them into simple, beautiful solutions. 
            When I'm not coding, you'll find me exploring the latest trends in web tech, 
            contributing to open source, or enjoying a good cup of coffee ☕.
          </p>
          <div className="about__chips">
            {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'].map(t => (
              <span key={t} className="about__chip">
                <span className="about__chip-dot" />{t}
              </span>
            ))}
          </div>
          <div className="about__cta-row">
            <a href="mailto:thanhhieu3004@gmail.com" className="btn btn--primary">
              <span className="material-icons btn__icon">mail</span>
              Let's Talk
            </a>
            <a href="/CV.pdf" download className="btn btn--outline">
              <span className="material-icons btn__icon">download</span>
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right: stats */}
        <motion.div
          className="about__stats"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="about__stats-grid">
            {stats.map((s, i) => (
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
            <span className="material-icons about__card-icon">lightbulb</span>
            <div>
              <div className="about__card-title">Currently Exploring</div>
              <div className="about__card-text">AI-powered web features, edge computing & WebAssembly</div>
            </div>
          </div>
          <div className="about__card">
            <span className="material-icons about__card-icon">place</span>
            <div>
              <div className="about__card-title">Based In</div>
              <div className="about__card-text">Vietnam 🇻🇳 · Open to remote worldwide</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
