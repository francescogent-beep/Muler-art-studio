import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ServiceDetail from './pages/ServiceDetail';
import Reservar from './pages/Reservar';
import { SERVICES, CONTACT, BLOG_POSTS } from './data';
import SEO from './components/SEO';
import './index.css';

// Detectar si estamos en el dominio de producción
const isProduction = 
  window.location.hostname === 'mulerartstudio.com' || 
  window.location.hostname === 'www.mulerartstudio.com';

// Fix: Wrap Router in a functional component with optional children to ensure correct prop types and avoid inference issues in React 18.
const Router = ({ children }: { children?: React.ReactNode }) => {
  const ActualRouter = isProduction ? BrowserRouter : HashRouter;
  return <ActualRouter>{children}</ActualRouter>;
};

// Fix: Make children optional to avoid 'Property children is missing' errors in Route elements and React 18 strictness.
const LegalPageLayout = ({ title, children }: { title: string, children?: React.ReactNode }) => (
  <div className="pt-48 pb-32 px-8 animate-reveal">
    <SEO title={`${title} | MULER ART STUDIO`} description={`${title} oficial de Muler Art Studio en Murcia.`} />
    <div className="max-w-3xl mx-auto">
      <h1 className="font-serif text-5xl md:text-7xl italic mb-16 text-white text-center">{title}</h1>
      <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 font-light leading-relaxed space-y-8 text-sm md:text-base">
        {children}
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/resenas" element={<Reviews />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/reservar" element={<Reservar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          
          <Route path="/barberia-murcia" element={<Home />} />
          {SERVICES.map(s => (
            <Route key={s.id} path={`/${s.slug}`} element={<ServiceDetail service={s} />} />
          ))}
          
          {/* Páginas Legales Reales */}
          <Route path="/legal/aviso-legal" element={
            <LegalPageLayout title="Aviso Legal">
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">1. Identificación del Titular</h2>
                <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se exponen los datos identificativos:</p>
                <ul className="list-none p-0 mt-4 space-y-1">
                  <li><strong>Titular:</strong> {CONTACT.legalName}</li>
                  <li><strong>Domicilio:</strong> {CONTACT.address}, {CONTACT.postalCode}, {CONTACT.city} (España)</li>
                  <li><strong>Contacto:</strong> {CONTACT.email} | {CONTACT.phone}</li>
                  <li><strong>Actividad:</strong> Peluquería y tratamiento de estética masculina.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">2. Propiedad Intelectual</h2>
                <p>El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de {CONTACT.legalName}.</p>
              </section>
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">3. Condiciones de Uso</h2>
                <p>El usuario se compromete a utilizar el sitio web, sus servicios y contenidos sin contravenir la legislación vigente, la buena fe y el orden público.</p>
              </section>
            </LegalPageLayout>
          } />

          <Route path="/legal/privacidad" element={
            <LegalPageLayout title="Privacidad">
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">1. Responsable del Tratamiento</h2>
                <p>El responsable del tratamiento de sus datos es {CONTACT.legalName}, con domicilio en {CONTACT.address}, Murcia.</p>
              </section>
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">2. Finalidad y Legitimación</h2>
                <p>Tratamos la información que nos facilita con el fin de gestionar la reserva de citas y el envío de información solicitada. La base legal es el consentimiento del interesado al contactarnos o realizar una reserva mediante plataformas de terceros (Booksy).</p>
              </section>
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">3. Conservación de Datos</h2>
                <p>Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.</p>
              </section>
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">4. Derechos del Usuario</h2>
                <p>Usted tiene derecho a obtener confirmación sobre si estamos tratando sus datos personales, por tanto tiene derecho a acceder a sus datos, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios escribiendo a {CONTACT.email}.</p>
              </section>
            </LegalPageLayout>
          } />

          <Route path="/legal/cookies" element={
            <LegalPageLayout title="Política de Cookies">
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">1. ¿Qué son las Cookies?</h2>
                <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario.</p>
              </section>
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">2. Cookies utilizadas</h2>
                <p>Este sitio web utiliza únicamente <strong>cookies técnicas</strong> necesarias para el funcionamiento del sitio y la visualización de fuentes tipográficas o elementos interactivos esenciales. No utilizamos cookies de rastreo publicitario de terceros en este dominio.</p>
              </section>
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">3. Terceros</h2>
                <p>Al utilizar nuestro sistema de reservas, usted interactúa con Booksy, que puede utilizar sus propias cookies según su política de privacidad para gestionar la sesión de reserva.</p>
              </section>
              <section>
                <h2 className="text-white font-bold uppercase tracking-widest text-xs mb-4">4. Desactivación</h2>
                <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.</p>
              </section>
            </LegalPageLayout>
          } />
          
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