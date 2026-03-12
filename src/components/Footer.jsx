import React from 'react';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#hero" className="footer__logo">
            <span className="footer__logo-bracket">{'<'}</span>TH<span className="footer__logo-bracket">{'/>'}</span>
          </a>
          <p className="footer__tagline">Building the web, one component at a time.</p>
        </div>

        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer__social">
            <span className="material-icons">code</span>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="footer__social">
            <span className="material-icons">link</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="footer__social">
            <span className="material-icons">mail</span>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
        <span>Made with <span className="footer__heart">♥</span> using React</span>
      </div>
    </footer>
  );
}
