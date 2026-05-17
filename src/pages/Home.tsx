import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';

function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Contact />
    </>
  );
}

export default HomePage;
