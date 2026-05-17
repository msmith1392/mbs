import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PortfolioPreview from '../components/PortfolioPreview';
import Process from '../components/Process';
import Contact from '../components/Contact';

function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <Services />
      <PortfolioPreview />
      <Process />
      <Contact />
    </>
  );
}

export default HomePage;
