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
          <p className="footer__tagline">Java Backend Developer · Saigon University</p>
        </div>

        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#cv">CV / Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer__social" title="GitHub">
            <span className="material-icons">code</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="footer__social" title="Email">
            <span className="material-icons">mail</span>
          </a>
          <a href={`tel:${personalInfo.phoneRaw}`} className="footer__social" title="Phone">
            <span className="material-icons">call</span>
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</span>
        <span>Saigon University · Software Engineering</span>
      </div>
    </footer>
  );
}
