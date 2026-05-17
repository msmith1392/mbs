import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import PortfolioPreview from '../components/PortfolioPreview';
import Contact from '../components/Contact';

function HomePage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <AboutSection />
      <Experience />
      <TechStack />
      <PortfolioPreview />
      <Contact />
    </>
  );
}

export default HomePage;
