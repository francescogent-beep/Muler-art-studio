
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

/**
 * Enrutamiento Adaptativo:
 * - HashRouter (#): Necesario para entornos de preview como Google AI Studio.
 * - BrowserRouter (/): Para el dominio final de producción (SEO Local).
 */
const isProductionDomain = 
  window.location.hostname === 'mulerartstudio.es' || 
  window.location.hostname === 'www.mulerartstudio.es';

// Refactor: We move routing logic directly into App to solve "missing children" TS errors.
// By defining the nested component structure in a variable and conditionally 
// wrapping it, we ensure that TypeScript correctly sees the children passed to
// Layout and Routes, avoiding the issues seen with the custom Router wrapper.
const App = () => {
  const content = (
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
        <Route path="/legal/privacidad" element={<div className="pt-40 px-6 max-w-2xl mx-auto min-h-screen text-center"><h1 className="font-serif text-3xl italic mb-8">Política de Privacidad</h1><p className="text-zinc-500 font-light">Tus datos están seguros. Cumplimos estrictamente con el RGPD.</p></div>} />
        <Route path="/legal/cookies" element={<div className="pt-40 px-6 max-w-2xl mx-auto min-h-screen text-center"><h1 className="font-serif text-3xl italic mb-8">Política de Cookies</h1><p className="text-zinc-500 font-light">Utilizamos solo cookies técnicas para mejorar la experiencia de navegación.</p></div>} />
        <Route path="/legal/aviso-legal" element={<div className="pt-40 px-6 max-w-2xl mx-auto min-h-screen text-center"><h1 className="font-serif text-3xl italic mb-8">Aviso Legal</h1><p className="text-zinc-500 font-light">MULER ART STUDIO - Av. Miguel de Cervantes, 9, Murcia.</p></div>} />
        
        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );

  if (isProductionDomain) {
    return <BrowserRouter>{content}</BrowserRouter>;
  }
  return <HashRouter>{content}</HashRouter>;
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
