import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SkipToMain from './components/SkipToMain';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
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
          className="flex-1 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-bg-primary)"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
