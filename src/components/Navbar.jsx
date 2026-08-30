import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolio';
import './Navbar.css';

export default function Navbar({ onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.4 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span className="navbar__logo-bracket">{'<'}</span>
          TH
          <span className="navbar__logo-bracket">{'/>'}</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__link${activeSection === link.href.slice(1) ? ' navbar__link--active' : ''}`}
                onClick={(e) => {
                  if (link.href === '#cv' && onOpenCV) {
                    // allows smooth scroll and also ensures users can interact
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={onOpenCV}
              className="navbar__cv-btn"
              title="Open Curriculum Vitae"
            >
              <span className="material-icons" style={{ fontSize: '16px' }}>description</span>
              CV Modal
            </button>
          </li>
          <li>
            <a href="mailto:thanhhieunguyen3004@gmail.com" className="navbar__cta">
              Hire Me
            </a>
          </li>
        </ul>

        <button className="navbar__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span className={`burger-line${menuOpen ? ' open' : ''}`}></span>
          <span className={`burger-line${menuOpen ? ' open' : ''}`}></span>
          <span className={`burger-line${menuOpen ? ' open' : ''}`}></span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              className="navbar__mobile-link"
              style={{
                background: 'rgba(91, 82, 232, 0.1)',
                color: 'var(--accent)',
                fontWeight: 600,
                border: 'none',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                cursor: 'pointer'
              }}
              onClick={() => {
                setMenuOpen(false);
                if (onOpenCV) onOpenCV();
              }}
            >
              <span className="material-icons" style={{ fontSize: '18px' }}>description</span>
              View Full CV / Resume
            </button>
            <a
              href="mailto:thanhhieunguyen3004@gmail.com"
              className="navbar__mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
