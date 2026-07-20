import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Starfield from './components/Starfield';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import CoreEngine from './pages/CoreEngine';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
  }, [loading]);

  return (
    <>
      <Preloader show={loading} />
      <Starfield />
      <div className="grain-overlay" aria-hidden="true" />
      <CustomCursor />
      <ScrollToHash />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/core-engine" element={<CoreEngine />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
