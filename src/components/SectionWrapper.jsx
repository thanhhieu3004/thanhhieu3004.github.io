import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SectionWrapper.css';

export function useFadeIn(delay = 0) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return {
    ref,
    variants: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
    },
    initial: 'hidden',
    animate: inView ? 'visible' : 'hidden',
  };
}

export default function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  const fade = useFadeIn();

  return (
    <section id={id} className={`section ${className}`}>
      <div className="section__inner">
        <motion.div ref={fade.ref} variants={fade.variants} initial={fade.initial} animate={fade.animate} className="section__header">
          <div className="section__label">
            <span className="section__label-line" />
            {title}
            <span className="section__label-line" />
          </div>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
