import React from 'react';
import Aboutme from './components/Aboutme';
import Certification from './components/Certification';
import CodingProfile from './components/CodingProfile';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Education from './components/Education'

const App = () => {
  return (
    <div className="pt-16 scroll-smooth inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <Navbar />
      <Hero id="hero" />
      <Aboutme id="aboutme" />
      {/* <Education /> */}
      <Skills />
      <Projects />
      <CodingProfile />
      <Certification />
      <Contact />
    </div>
  );
};

export default App;