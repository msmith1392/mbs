import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SkipToMain from './components/SkipToMain';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import Websites from './pages/Websites';
import Consulting from './pages/Consulting';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import NotFound from './pages/NotFound';

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SkipToMain />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 outline-none focus-visible:ring-2 focus-visible:ring-blue-lct focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
