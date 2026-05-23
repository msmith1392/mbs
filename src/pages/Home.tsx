import React from 'react';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Experience from '../components/Experience';
import About from '../components/About';
import Contact from '../components/Contact';

function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <Experience />
      <Work />
      <About />
      <Contact />
    </>
  );
}

export default HomePage;
