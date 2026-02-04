import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import Reservar from './pages/Reservar';
import { SERVICES } from './data';
import './index.css';

const App = () => {
  // Detect if we are in a preview environment or production
  const isProduction = window.location.hostname === 'mulerartstudio.es' || window.location.hostname === 'www.mulerartstudio.es';
  
  // Use HashRouter for previews/local to avoid 404s on subpaths, BrowserRouter for clean URLs in prod
  const Router = isProduction ? BrowserRouter : HashRouter;

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/resenas" element={<Reviews />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/reservar" element={<Reservar />} />
          
          {/* Enrutamiento para SEO Atómico */}
          <Route path="/barberia-murcia" element={<Home />} />
          {SERVICES.map(s => (
            <Route key={s.id} path={`/${s.slug}`} element={<ServiceDetail service={s} />} />
          ))}
          
          {/* Páginas Legales */}
          <Route path="/legal/privacidad" element={<div className="pt-40 px-6 max-w-2xl mx-auto min-h-screen text-center"><h1 className="font-serif text-3xl italic mb-8 text-white">Política de Privacidad</h1><p className="text-zinc-500 font-light">Tus datos están seguros. Cumplimos estrictamente con el RGPD.</p></div>} />
          <Route path="/legal/cookies" element={<div className="pt-40 px-6 max-w-2xl mx-auto min-h-screen text-center"><h1 className="font-serif text-3xl italic mb-8 text-white">Política de Cookies</h1><p className="text-zinc-500 font-light">Utilizamos solo cookies técnicas para mejorar la experiencia de navegación.</p></div>} />
          <Route path="/legal/aviso-legal" element={<div className="pt-40 px-6 max-w-2xl mx-auto min-h-screen text-center"><h1 className="font-serif text-3xl italic mb-8 text-white">Aviso Legal</h1><p className="text-zinc-500 font-light">MULER ART STUDIO - Av. Miguel de Cervantes, 9, Murcia.</p></div>} />
          
          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}