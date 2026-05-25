import React from 'react';
import Hero from '../components/Hero';
import HighlightedWork from '../components/HighlightedWork';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <Experience />
      <HighlightedWork />
      <Contact />
    </>
  );
}

export default HomePage;
