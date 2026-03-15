import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/project';
import Skills from '../components/skills';
import Contact from '../components/service';
import Services from '../components/contact';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Services />
    </div>
  );
};

export default HomePage;