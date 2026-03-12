import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // In real app: POST to API
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper
      id="contact"
      title="Let's Build Together"
      subtitle="I'm open to new projects, collaborations and opportunities."
    >
      <div className="contact__layout" ref={ref}>
        {/* Left info */}
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact__info-heading">
            Got a project? <br />
            <span className="contact__info-accent">Let's talk.</span>
          </h2>
          <p className="contact__info-text">
            Whether you have a big idea, a small fix, or just want to say hi — 
            my inbox is always open. I'll do my best to get back to you quickly!
          </p>

          <div className="contact__items">
            <a href={`mailto:${personalInfo.email}`} className="contact__item">
              <div className="contact__item-icon"><span className="material-icons">mail</span></div>
              <div>
                <div className="contact__item-label">Email</div>
                <div className="contact__item-value">{personalInfo.email}</div>
              </div>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact__item">
              <div className="contact__item-icon"><span className="material-icons">code</span></div>
              <div>
                <div className="contact__item-label">GitHub</div>
                <div className="contact__item-value">github.com/thanhhieu3004</div>
              </div>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact__item">
              <div className="contact__item-icon"><span className="material-icons">link</span></div>
              <div>
                <div className="contact__item-label">LinkedIn</div>
                <div className="contact__item-value">linkedin.com/in/thanhhieu3004</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact__field">
            <label className="contact__label">Your Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nguyen Van A"
              className="contact__input"
              required
            />
          </div>
          <div className="contact__field">
            <label className="contact__label">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="contact__input"
              required
            />
          </div>
          <div className="contact__field">
            <label className="contact__label">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="contact__input contact__textarea"
              rows={5}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary contact__submit">
            {sent
              ? <><span className="material-icons btn__icon">check_circle</span> Sent!</>
              : <><span className="material-icons btn__icon">send</span> Send Message</>
            }
          </button>
          {sent && (
            <motion.p
              className="contact__success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Thanks! I'll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
