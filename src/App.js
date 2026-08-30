import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import CVSection from './components/CVSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const handleOpenCV = () => setIsCVOpen(true);
  const handleCloseCV = () => setIsCVOpen(false);

  return (
    <div className="App">
      <Navbar onOpenCV={handleOpenCV} />
      <main>
        <Hero onOpenCV={handleOpenCV} />
        <About onOpenCV={handleOpenCV} />
        <Skills />
        <Projects />
        <Education />
        <CVSection onOpenCV={handleOpenCV} />
        <Contact />
      </main>
      <Footer />

      {/* Floating Quick-Access CV button */}
      <button
        type="button"
        className="floating-cv-btn"
        onClick={handleOpenCV}
        title="Open Full CV / Resume"
        aria-label="Open Full CV"
      >
        <span className="material-icons">description</span>
        <span>View CV</span>
      </button>

      {/* Interactive CV Modal */}
      <CVModal isOpen={isCVOpen} onClose={handleCloseCV} />
    </div>
  );
}

export default App;
