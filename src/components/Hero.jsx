import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

function ScrambleText({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    let frame = 0;
    let interval;
    const el = ref.current;
    if (!el) return;

    interval = setInterval(() => {
      el.textContent = text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < frame) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
      if (frame >= text.length) clearInterval(interval);
      frame += 1;
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span ref={ref}>{text}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Animated background grid */}
      <div className="hero__grid" aria-hidden="true" />

      {/* Glowing orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__text">
          <motion.div
            className="hero__tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero__tag-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero__heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Hi, I'm{' '}
            <span className="hero__name">
              <ScrambleText text={personalInfo.name} />
            </span>
          </motion.h1>

          <motion.div
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero__title-prefix">{'>'}</span>{' '}
            {personalInfo.title}
          </motion.div>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn btn--primary">
              <span className="material-icons btn__icon">work</span>
              View My Work
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn--outline">
              <span className="material-icons btn__icon">mail</span>
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero__social">
              <span className="material-icons">code</span>
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero__social">
              <span className="material-icons">link</span>
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__avatar-wrap"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: 'spring', bounce: 0.3 }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar-inner">
              <img
                src={`https://avatars.githubusercontent.com/thanhhieu3004?v=4`}
                alt={personalInfo.name}
                className="hero__avatar-img"
                onError={e => { e.target.src = 'https://ui-avatars.com/api/?name=Thanh+Hieu&background=6c63ff&color=fff&size=256&bold=true'; }}
              />
            </div>
          </div>
          <div className="hero__avatar-badge">
            <span className="material-icons hero__avatar-badge-icon">terminal</span>
            <div>
              <div className="hero__avatar-badge-title">Full-Stack Dev</div>
              <div className="hero__avatar-badge-sub">React · Node · Cloud</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}
