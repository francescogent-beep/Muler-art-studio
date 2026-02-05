import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT, IMAGES, SERVICES, FAQS } from '../data';

const REVIEWS = [
  "«El mejor corte que me han hecho en Murcia. La atención al detalle es de otro nivel.» — J. Martínez",
  "«Profesionalidad, técnica y un ambiente inmejorable. Muler es arte puro.» — L. Navarro",
  "«Extremadamente profesional con un trato agradable. Te hace sentir cómodo desde el primer minuto en el estudio.» — A. Sánchez",
  "«Un santuario para el hombre que valora la precisión. Recomendado 100%.» — P. Ruiz",
  "«Ubicación céntrica y trato inmejorable. Mi nueva barbería de referencia.» — M. García",
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" className="shrink-0" role="img" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06 0.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1c-4.3 0-7.7 3.47-7.7 7.7l3.66 2.84c0.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function Home() {
  const faqSchema = {
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="animate-reveal">
      <SEO 
        title="MULER ART STUDIO | Barbería de Autor en Murcia | Estilo & Precisión"
        description="Experiencia de barbería premium en el centro de Murcia. Especialistas en corte técnico, afeitado tradicional y cuidado masculino de alto nivel."
        schema={faqSchema}
      />

      {/* Full-bleed Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={IMAGES.hero}
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 grayscale-[0.3]"
          >
            <source src="https://0c62dtvaztg6t1ql.public.blob.vercel-storage.com/Untitled.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-20"></div>
        </div>
        
        <div className="relative z-30 text-center px-6 max-w-[1400px]">
          <div className="overflow-hidden mb-10">
            <span className="block uppercase tracking-header text-[7px] md:text-[10px] text-zinc-100 font-black animate-reveal [animation-delay:300ms]">
              ACTITUD • PRECISIÓN • ESTILO
            </span>
          </div>
          
          <h1 className="text-5xl md:text-[8vw] font-serif leading-[0.9] mb-8 animate-reveal [animation-delay:500ms] text-white">
            BARBERÍA DE <br /> 
            <span className="italic font-light text-zinc-100 text-[0.85em]">AUTOR EN MURCIA</span>
          </h1>

          <div className="overflow-hidden mb-16 animate-reveal [animation-delay:650ms]">
            <p className="text-zinc-100 text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
              No vienes a cortarte el pelo. <br className="md:hidden" /> Vienes a verte mejor.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center animate-reveal [animation-delay:800ms]">
            <Link to="/reservar" className="w-full md:w-auto neon-border bg-white/5 backdrop-blur-md px-20 py-6 text-[11px] uppercase tracking-premium font-black text-white hover:bg-white hover:text-black transition-all duration-1000 rounded-full">
              RESERVAR CITA
            </Link>
            <Link to="/servicios" className="w-full md:w-auto text-zinc-100 hover:text-white text-[11px] uppercase tracking-premium font-black transition-all">
              VER SERVICIOS
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 z-30">
          <ChevronDown size={30} strokeWidth={1} className="text-white" />
        </div>
      </section>

      {/* Ticker Tape Review Marquee */}
      <section className="bg-white py-4 relative overflow-hidden border-y border-black/10">
        <div className="animate-marquee py-1">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <div key={i} className="flex items-center gap-14 px-14">
              <div className="flex items-center gap-4">
                <GoogleIcon />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="#FBBC05" className="text-[#FBBC05]" />
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/60 ml-2">Google Reviews</span>
              </div>
              <span className="text-xl md:text-2xl font-serif italic text-black whitespace-nowrap">
                {review}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-32 px-8 md:px-16 bg-black relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <span className="text-zinc-300 uppercase tracking-header text-[10px] font-black block mb-8">Nuestra Carta</span>
              <h2 className="text-7xl md:text-9xl font-serif italic text-white leading-none">Servicios</h2>
            </div>
            <Link to="/servicios" className="text-[11px] uppercase tracking-premium font-black text-zinc-100 hover:text-white transition-all mb-4">
              EXPLORAR TODO EL MENÚ <ArrowRight size={16} className="inline ml-3"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((s, idx) => (
              <Link to={`/${s.slug}`} key={s.id} className="group relative aspect-[3/4] overflow-hidden neon-border p-12 flex flex-col justify-end bg-zinc-950 rounded-2xl">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    width="600"
                    height="800"
                    className="w-full h-full object-cover img-premium group-hover:scale-110 transition-all duration-1000 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>
                </div>
                <div className="relative z-10">
                  <span className="absolute -top-48 right-0 text-[10px] text-zinc-100 font-serif group-hover:text-white transition-all duration-700">0{idx + 1}</span>
                  <h3 className="text-4xl font-serif italic mb-6 group-hover:-translate-y-2 transition-transform duration-700 text-white leading-tight">{s.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white opacity-0 group-hover:opacity-100 transition-all duration-700 font-bold uppercase">MÁS DETALLES</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Divider */}
      <div className="neon-divider opacity-40 w-1/2 mx-auto"></div>

      {/* The Experience */}
      <section className="py-32 px-8 md:px-16 bg-black relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <span className="text-zinc-300 uppercase tracking-header text-[10px] font-black block mb-12">Filosofía Muler</span>
              <h2 className="text-6xl md:text-8xl font-serif italic mb-16 leading-[0.9] text-white">
                Donde la técnica se encuentra con el <span className="text-zinc-100">bienestar.</span>
              </h2>
              <p className="text-zinc-100 font-light text-xl leading-relaxed max-w-md tracking-wide">
                No solo cortamos el cabello; diseñamos una identidad. Cada ritual en Muler Art Studio está concebido para ofrecer precisión técnica en un entorno de calma absoluta.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                { n: '01', t: 'Técnica', d: 'Cortes de autor que respetan la estructura ósea y las facciones de cada cliente.', link: '/servicios' },
                { n: '02', t: 'Productos', d: 'Selección exclusiva de cosmética masculina premium para resultados excepcionales.', link: '/servicios' },
                { n: '03', t: 'Ritual', d: 'Toallas calientes, masajes capilares y un ambiente diseñado para desconectar.', link: '/reservar' },
                { n: '04', t: 'Espacio', d: 'Un estudio moderno en el corazón de Murcia que redefine la barbería clásica.', link: '/galeria' }
              ].map((item) => (
                <Link to={item.link} key={item.n} className="border-l border-white/10 pl-12 py-6 group hover:border-white/40 transition-all duration-1000 block">
                  <h3 className="text-[11px] uppercase tracking-[0.5em] text-zinc-100 mb-8 group-hover:text-white transition-colors font-bold uppercase">{item.n}. {item.t}</h3>
                  <p className="text-base text-zinc-100 font-light leading-relaxed group-hover:text-white">{item.d}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Divider */}
      <div className="neon-divider"></div>

      {/* Featured Visual Section (Gallery) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden group">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center brightness-[0.5] grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:brightness-[0.7] group-hover:scale-105" 
          style={{ backgroundImage: `url(${IMAGES.interior})` }}
        ></div>
        <div className="relative z-10 text-center px-6">
            <span className="text-white uppercase tracking-[0.8em] text-[10px] font-black block mb-10 opacity-100">The Studio</span>
            <h2 className="text-7xl md:text-9xl font-serif italic mb-16 text-white leading-none">Un espacio de autor</h2>
            <Link to="/galeria" className="inline-block border-b border-white/40 pb-4 text-[11px] uppercase tracking-premium font-black text-white hover:text-white hover:border-white transition-all duration-700 uppercase">
                VER GALERÍA COMPLETA
            </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 md:px-16 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <span className="text-zinc-300 uppercase tracking-header text-[10px] font-black block mb-8 text-center uppercase">Preguntas Frecuentes</span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-16 text-center leading-tight">Dudas comunes <br/>sobre <span className="text-zinc-100 not-italic">Muler Art Studio</span></h2>
          <div className="space-y-12">
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-8">
                <h3 className="text-xl text-white font-medium mb-4">{faq.question}</h3>
                <p className="text-zinc-100 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Re-designed for column fit and clarity */}
      <section className="py-40 bg-black px-8 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-stretch">
          <div className="relative flex flex-col justify-center bg-zinc-950/50 p-12 md:p-20 rounded-3xl border border-white/5 overflow-hidden">
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-[1px] bg-white/20"></div>
                   <span className="text-zinc-400 uppercase tracking-[0.5em] text-[10px] font-black">Localización</span>
                </div>
                
                <div className="flex flex-col gap-6 mb-16">
                   <div className="flex items-start gap-4">
                      <MapPin className="text-white mt-2 shrink-0" size={32} strokeWidth={1}/>
                      <h3 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">
                        {CONTACT.address}
                      </h3>
                   </div>
                   <p className="text-zinc-300 text-lg font-light tracking-widest pl-12">
                     Distrito {CONTACT.postalCode} • Murcia Centro
                   </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pl-12">
                   {CONTACT.schedule.slice(0, 2).map((s, i) => (
                      <div key={i} className="flex flex-col gap-3">
                         <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold uppercase">{s.day}</span>
                         <span className="text-sm text-zinc-200 font-light">{s.hours}</span>
                      </div>
                   ))}
                </div>

                <div className="mt-20 pl-12 flex flex-wrap gap-8">
                   <Link to="/reservar" className="text-[10px] uppercase tracking-widest font-black text-black bg-white px-12 py-5 rounded-full hover:bg-zinc-200 transition-all uppercase">
                      Reservar Cita
                   </Link>
                   <Link to="/contacto" className="text-[10px] uppercase tracking-widest font-black text-white border border-white/10 px-12 py-5 rounded-full hover:bg-white/5 transition-all uppercase">
                      Ver Ubicación
                   </Link>
                </div>
             </div>
          </div>

          <div className="h-[500px] lg:h-auto min-h-[600px] rounded-3xl overflow-hidden grayscale invert brightness-[0.6] contrast-[1.3] opacity-50 hover:opacity-90 hover:brightness-100 transition-all duration-[1.5s] relative z-20 border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.232323!2d-1.1427737!3d37.9957877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63811e1ddc3727%3A0x8175126c1e12c496!2sMULER+ART+STUDIO!5e0!3m2!1ses!2ses!4v1736784000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación exacta de MULER ART STUDIO en Murcia"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}