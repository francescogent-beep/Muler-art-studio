import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Phone, MessageCircle, MapPin, Plus, Minus } from 'lucide-react';
import { CONTACT, SERVICES } from '../data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;
      
      requestAnimationFrame(() => {
        setScrolled(currentScrollY > 50);
        lastScrollY.current = currentScrollY;
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { name: 'Estudio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Reseñas', path: '/resenas' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[110] transition-all duration-700 ${scrolled || isOpen ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-10'}`}>
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex justify-between items-center">
          <Link to="/" className="group relative">
            <span className="font-logo text-2xl md:text-3xl tracking-tighter block transition-all duration-500 group-hover:tracking-normal text-white">
              MULER ART STUDIO
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-12 items-center">
            {links.map(l => (
              <Link 
                key={l.path} 
                to={l.path} 
                className={`text-[10px] uppercase tracking-[0.4em] font-medium transition-all hover:text-white ${location.pathname === l.path ? 'text-white' : 'text-zinc-100'}`}
              >
                {l.name}
              </Link>
            ))}
            <a href={CONTACT.booksyUrl} className="booksy-widget-button ml-4 border border-white/20 px-8 py-2 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 text-white rounded-full">
              RESERVAR
            </a>
          </nav>

          <button 
            className="md:hidden text-white relative z-[120] p-2 -mr-2" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <div className="flex flex-col items-center gap-6 mb-12 px-6 text-center">
          {links.map((l, i) => (
            <Link 
              key={l.path} 
              to={l.path} 
              className={`text-4xl md:text-5xl font-serif italic transition-all duration-500 hover:text-zinc-100 ${location.pathname === l.path ? 'text-white' : 'text-zinc-100'}`}
              style={{ 
                transitionDelay: isOpen ? `${i * 70}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              {l.name}
            </Link>
          ))}
        </div>
        
        <div 
          className="flex flex-col gap-4 w-72 px-6 transition-all duration-700 delay-300"
          style={{ 
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <a 
            href={CONTACT.booksyUrl} 
            className="booksy-widget-button flex items-center justify-center gap-3 border border-white/20 py-5 text-[10px] uppercase tracking-[0.3em] font-bold text-white rounded-full hover:bg-white hover:text-black transition-all"
          >
            RESERVAR CITA
          </a>
          <a 
            href={`tel:${CONTACT.phone}`} 
            className="flex items-center justify-center gap-3 border border-white/10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold text-white rounded-full"
          >
            <Phone size={16} /> LLAMAR AL ESTUDIO
          </a>
        </div>
      </div>
    </>
  );
};

const FooterSection = ({ title, children, defaultOpen = false, canToggle = false }: { title: string, children?: React.ReactNode, defaultOpen?: boolean, canToggle?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="flex flex-col">
      <div 
        className={`flex items-center justify-between group cursor-pointer mb-6 ${!canToggle && 'pointer-events-none'}`}
        onClick={() => canToggle && setIsOpen(!isOpen)}
      >
        <h3 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold">{title}</h3>
        {canToggle && (
          <div className="text-white/80 group-hover:text-white transition-colors">
            {isOpen ? <Minus size={12} /> : <Plus size={12} />}
          </div>
        )}
      </div>
      <div className={`flex flex-col gap-3 text-xs text-zinc-100 font-light overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-16 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="md:col-span-4">
          <h2 className="font-logo text-5xl mb-10 italic text-white leading-tight">Muler Art <br/><span className="not-italic text-white font-light">Studio.</span></h2>
          <p className="text-zinc-100 max-w-sm text-sm leading-relaxed font-light mb-12 italic">
            "Un santuario dedicado a la estética masculina donde el arte y la precisión convergen para redefinir el estilo personal en el corazón de Murcia."
          </p>
          <div className="flex gap-10">
            <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-300 transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
              <Instagram size={16} strokeWidth={1}/> INSTAGRAM
            </a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-300 transition-colors flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold">
              <MessageCircle size={16} strokeWidth={1}/> WHATSAPP
            </a>
          </div>
        </div>
        
        <div className="md:col-span-4 flex flex-col">
          <FooterSection title="Navegación" defaultOpen={true}>
            <Link to="/" className="hover:text-white transition-colors">Estudio</Link>
            <Link to="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center justify-between group">
                <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
              </div>
              <div className="flex flex-col gap-2 pl-4 border-l border-white/10 py-1">
                {SERVICES.map(s => (
                  <Link key={s.id} to={`/${s.slug}`} className="text-[10px] text-zinc-100 hover:text-white transition-colors uppercase tracking-widest">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/galeria" className="hover:text-white transition-colors mt-2">Galería</Link>
            <Link to="/resenas" className="hover:text-white transition-colors">Reseñas</Link>
            <Link to="/contacto" className="hover:text-white transition-colors">Ubicación</Link>
            <a href={CONTACT.booksyUrl} className="booksy-widget-button hover:text-white transition-colors font-bold text-white/90">Reservar Cita</a>
            
            <div className="flex flex-col gap-2 mt-6">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/80 font-bold uppercase">Información Legal</span>
              <div className="flex flex-col gap-2 pl-4 border-l border-white/10 py-1">
                <Link to="/legal/aviso-legal" className="text-[10px] text-zinc-100 hover:text-white transition-colors">Aviso Legal</Link>
                <Link to="/legal/privacidad" className="text-[10px] text-zinc-100 hover:text-white transition-colors">Privacidad</Link>
                <Link to="/legal/cookies" className="text-[10px] text-zinc-100 hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </FooterSection>
        </div>

        <div className="md:col-span-4 flex flex-col gap-10">
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-white font-bold mb-8 uppercase">Ubicación & Contacto</h3>
            <div className="flex flex-col gap-8 text-xs text-zinc-100 font-light leading-relaxed">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="mt-1 text-white shrink-0" strokeWidth={1.5}/>
                <p>
                  <span className="text-white block font-medium mb-1">{CONTACT.address}</span>
                  {CONTACT.postalCode} Murcia, España
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-white shrink-0" strokeWidth={1.5}/>
                <p className="text-white font-medium">{CONTACT.phone}</p>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h4 className="text-[9px] uppercase tracking-[0.4em] text-white/80 font-bold mb-4 uppercase">Horario de Apertura</h4>
                <div className="space-y-2">
                  {CONTACT.schedule.map((s, i) => (
                    <div key={i} className="flex justify-between text-[11px]">
                      <span className="text-zinc-100 font-medium uppercase">{s.day}</span>
                      <span className="text-white font-medium">{s.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 mt-24 pt-12 border-t border-white/10 flex flex-col items-center gap-8 text-[9px] text-white/80 uppercase tracking-[0.5em] font-bold">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex gap-10">
            <span className="text-white uppercase">Diseño & Técnica de Autor</span>
            <span className="text-white uppercase">Hecho en Murcia</span>
          </div>
          <a 
            href="https://fgdigitalsystems.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-zinc-100 transition-colors duration-500 md:border-l md:border-white/10 md:pl-12"
          >
            disegno web by <span className="text-white">FGDIGITALSYSTEMS</span>
          </a>
        </div>
        <span className="text-white/70 pt-4 border-t border-white/5 w-full text-center uppercase tracking-widest">
          MULER ART STUDIO — MURCIA © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-white selection:text-black">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      <a 
        href={CONTACT.booksyUrl}
        className="booksy-widget-button fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:bottom-10 md:w-auto z-[90] glass-premium px-8 py-5 md:py-4 flex items-center justify-center md:justify-start gap-4 group hover:bg-white hover:text-black transition-all duration-700 text-white rounded-full shadow-2xl"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold">Reservar Cita</span>
      </a>
    </div>
  );
};

export default Layout;
