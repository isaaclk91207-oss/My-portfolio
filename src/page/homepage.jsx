import React, { useState } from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/project';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Services from '../components/service';
import FAQ from '../components/FAQ';
import SupportIcon from '../components/supportIcon';


const HomePage = () => {
  const [showFAQ, setShowFAQ] = useState(false); // State to control FAQ visibility

  const toggleFAQ = () => {
    setShowFAQ(!showFAQ);
  };

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <FAQ show={showFAQ} onClose={toggleFAQ} /> {/* Pass the showFAQ state to FAQ component */}
      <SupportIcon onClick={toggleFAQ} /> {/* Add the SupportIcon */}
    </div>
  );
};

export default HomePage;