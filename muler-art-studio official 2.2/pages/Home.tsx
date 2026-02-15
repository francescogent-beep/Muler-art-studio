
import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, MapPin, ArrowRight, ChevronDown, CheckCircle2, Calendar, ChevronLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT, IMAGES, SERVICES, FAQS, BLOG_POSTS, optimizeImg } from '../data';

const REVIEWS_BOOKSY = [
  "«Corte perfecto, muy buen ambiente... Todo 10/10» — JuanPe",
  "«El peluquero que todo el mundo quiere tener ❤️» — Moises",
  "«Simo es muy agradable y un excelente profesional, centrado en su trabajo.» — Antonio",
  "«Es la primera que voy a esta barbería , pero sin duda la recomiendo. Trato de 10.» — Ramon",
  "«Estos chicos son los mejores. Profesionalidad absoluta.» — Carlos jose",
  "«Muy buen corte👌 Mi nueva referencia en Murcia Center.» — Marco",
];

const isVideo = (url: string) => url?.includes('corte%20premium') || url?.endsWith('.mp4');

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isGateway = location.pathname === '/barberia-murcia';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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
    <div>
      <SEO 
        title={isGateway ? "Barbería Murcia Centro | MULER ART STUDIO | Barbero Murcia" : "Mejor Barbería en Murcia | MULER ART STUDIO | Estilo & Precisión"}
        description="Experiencia de barbería premium en el centro de Murcia. Especialistas en corte técnico, degradados (fade) y cuidado masculino de alto nivel en San Basilio."
        schema={faqSchema}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ fetchPriority: 'high' } as any}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 grayscale-[0.3] bg-black"
          >
            <source src="https://0c62dtvaztg6t1ql.public.blob.vercel-storage.com/Untitled.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black z-20"></div>
        </div>
        
        <div className="relative z-30 text-center px-6 max-w-[1400px]">
          <div className="overflow-hidden mb-10">
            <span className="block uppercase tracking-header text-[7px] md:text-[10px] text-white font-black animate-reveal [animation-delay:50ms]">
              ACTITUD • PRECISIÓN • ESTILO
            </span>
          </div>
          
          <h1 className="text-5xl md:text-[8vw] font-serif leading-[0.9] mb-8 animate-reveal [animation-delay:150ms] text-white uppercase">
            BARBERÍA DE <br /> 
            <span className="italic font-light text-white text-[0.85em] uppercase">AUTOR EN MURCIA</span>
          </h1>

          <div className="overflow-hidden mb-16 animate-reveal [animation-delay:250ms]">
            <p className="text-white text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-tight">
              <span className="block">No vienes a cortarte el pelo.</span>
              <span className="block mt-1">Vienes a verte mejor.</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center animate-reveal [animation-delay:350ms]">
            <a href={CONTACT.booksyUrl} className="booksy-widget-button w-full md:w-auto border border-white/20 bg-white/5 backdrop-blur-md px-20 py-6 text-[11px] uppercase tracking-premium font-black text-white hover:bg-white hover:text-black transition-all duration-1000 rounded-full text-center">
              RESERVAR CITA
            </a>
            <Link to="/servicios" className="w-full md:w-auto text-white hover:text-zinc-200 text-[11px] uppercase tracking-premium font-black transition-all text-center">
              VER SERVICIOS
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 z-30">
          <ChevronDown size={30} strokeWidth={1} className="text-white" />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-zinc-950 py-6 relative overflow-hidden border-y border-white/10">
        <div className="animate-marquee py-1">
          {[...REVIEWS_BOOKSY, ...REVIEWS_BOOKSY].map((review, i) => (
            <div key={i} className="flex items-center gap-14 px-14">
              <div className="flex items-center gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} fill="#FFFFFF" className="text-white" />
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-2">Booksy Verified</span>
              </div>
              <span className="text-xl md:text-2xl font-serif italic text-white whitespace-nowrap">
                {review}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser Services */}
      <section className="py-32 px-8 md:px-16 bg-black relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <span className="text-white/60 uppercase tracking-header text-[10px] font-black block mb-8 uppercase">Nuestra Carta</span>
              <h2 className="text-7xl md:text-9xl font-serif italic text-white leading-none">Servicios</h2>
            </div>
            <Link to="/servicios" className="text-[11px] uppercase tracking-premium font-black text-white hover:text-zinc-300 transition-all mb-4 uppercase">
              EXPLORAR TODO EL MENÚ <ArrowRight size={16} className="inline ml-3"/>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((s, idx) => (
              <Link to={`/${s.slug}`} key={s.id} className="group relative aspect-[3/4] overflow-hidden border border-white/10 p-12 flex flex-col justify-end bg-zinc-950 rounded-2xl">
                <div className="absolute inset-0 z-0 overflow-hidden">
                  {isVideo(s.image) ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover img-premium group-hover:scale-110 transition-all duration-1000 ease-out will-change-transform transform-gpu"
                    >
                      <source src={s.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={optimizeImg(s.image, 'h')} 
                      alt={`${s.title} en Murcia - Barbería de Autor Muler Art Studio`} 
                      width="600"
                      height="800"
                      decoding="async"
                      className="w-full h-full object-cover img-premium group-hover:scale-110 transition-all duration-1000 ease-out will-change-transform transform-gpu"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>
                </div>
                <div className="relative z-10">
                  <span className="absolute -top-48 right-0 text-[10px] text-white font-serif group-hover:text-zinc-200 transition-all duration-700">0{idx + 1}</span>
                  <h3 className="text-4xl font-serif italic mb-6 group-hover:-translate-y-2 transition-transform duration-700 text-white leading-tight">{s.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white opacity-0 group-hover:opacity-100 transition-all duration-700 font-bold uppercase">MÁS DETALLES</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-8 md:px-16 bg-black relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <span className="text-white/60 uppercase tracking-header text-[10px] font-black block mb-12 uppercase">Filosofía Muler</span>
              <h2 className="text-6xl md:text-8xl font-serif italic mb-16 leading-[0.9] text-white">
                Técnica de barbero en Murcia para tu <span className="text-white">bienestar.</span>
              </h2>
              <p className="text-zinc-100 font-light text-xl leading-relaxed max-w-md tracking-wide">
                No solo cortamos el cabello; diseñamos una identidad. Como barbería en Murcia, cada ritual está concebido para ofrecer precisión técnica cerca de puntos clave como el barrio de <strong>San Basilio</strong> y la sede de <strong>La Opinión</strong>.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                { n: '01', t: 'Técnica', d: 'Cortes de autor que respetan tu fisionomía. Somos tu peluquería de hombre en Murcia de confianza.', link: '/servicios' },
                { n: '02', t: 'Productos', d: 'Selección exclusiva de cosmética masculina premium disponible en nuestro estudio de Murcia.', link: '/servicios' },
                { n: '03', t: 'Ritual', d: 'Toallas calientes y masajes capilares en San Basilio. Un oasis de calma.', link: CONTACT.booksyUrl, isExternal: true },
                { n: '04', t: 'Espacio', d: 'Un estudio moderno en Av. Miguel de Cervantes que redefine la barbería clásica murciana.', link: '/galeria' }
              ].map((item) => (
                item.isExternal ? (
                  <a href={item.link} key={item.n} className="booksy-widget-button border-l border-white/10 pl-12 py-6 group hover:border-white/40 transition-all duration-1000 block">
                    <h3 className="text-[11px] uppercase tracking-[0.5em] text-white mb-8 group-hover:text-zinc-200 transition-colors font-bold uppercase">{item.n}. {item.t}</h3>
                    <p className="text-base text-zinc-100 font-light leading-relaxed group-hover:text-white">{item.d}</p>
                  </a>
                ) : (
                  <Link to={item.link} key={item.n} className="border-l border-white/10 pl-12 py-6 group hover:border-white/40 transition-all duration-1000 block">
                    <h3 className="text-[11px] uppercase tracking-[0.5em] text-white mb-8 group-hover:text-zinc-200 transition-colors font-bold uppercase">{item.n}. {item.t}</h3>
                    <p className="text-base text-zinc-100 font-light leading-relaxed group-hover:text-white">{item.d}</p>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-8 md:px-16 bg-black border-y border-white/5">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-white/60 uppercase tracking-header text-[10px] font-black block mb-8 uppercase">Portafolio</span>
                <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-none">Cortes <br/><span className="not-italic text-zinc-400">en Murcia</span></h2>
              </div>
              <Link to="/galeria" className="text-[11px] uppercase tracking-premium font-black text-white border-b border-white/20 pb-2 hover:border-white transition-all uppercase">
                VER GALERÍA COMPLETA <ArrowRight size={14} className="inline ml-3"/>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {IMAGES.portfolio.slice(0, 4).map((img, i) => (
                <div key={i} className="aspect-[4/5] overflow-hidden rounded-xl neon-border group">
                  <img 
                    src={optimizeImg(img, 'h')} 
                    alt={`Corte degradado fade realizado en barbería Murcia - Trabajo de barbero ${i}`} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Blog Preview Section - Carousel */}
      <section className="py-32 px-8 md:px-16 bg-zinc-950 relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-white/60 uppercase tracking-header text-[10px] font-black block mb-8 uppercase">Crónicas de Estilo</span>
              <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-none">Cultura <br/><span className="not-italic text-zinc-400">Barber Murcia</span></h2>
            </div>
            <div className="flex gap-4 mb-4">
              <button 
                onClick={() => scroll('left')} 
                className="p-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all"
                aria-label="Anterior artículo"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="p-4 rounded-full border border-white/10 hover:bg-white/5 text-white transition-all"
                aria-label="Siguiente artículo"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {BLOG_POSTS.map((post) => (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.id} 
                className="group flex flex-col gap-8 min-w-[85vw] md:min-w-[450px] snap-center"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-2xl relative">
                  <img 
                    src={optimizeImg(post.image, 'h')} 
                    alt={`Artículo de estilo: ${post.title} - Muler Art Studio Murcia`} 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-6 left-6 px-4 py-1.5 glass-premium rounded-full text-[8px] uppercase tracking-widest font-bold text-white">
                    {post.category}
                  </span>
                </div>
                <div className="max-w-md">
                   <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-zinc-400 font-bold mb-4">
                     <Calendar size={12} /> {post.date}
                   </div>
                   <h3 className="text-3xl font-serif italic text-white group-hover:text-zinc-300 transition-colors leading-tight mb-4">{post.title}</h3>
                   <p className="text-zinc-400 text-sm font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-8 md:px-16 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <span className="text-white/60 uppercase tracking-header text-[10px] font-black block mb-8 text-center uppercase">Preguntas Frecuentes</span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-16 text-center leading-tight">Dudas sobre <br/><span className="text-white not-italic">Barbería en Murcia</span></h2>
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

      {/* Location Section */}
      <section className="py-40 bg-black px-8 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-stretch">
          <div className="relative flex flex-col justify-center bg-zinc-950/50 p-12 md:p-20 rounded-3xl border border-white/5 overflow-hidden">
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-[1px] bg-white/20"></div>
                   <span className="text-zinc-200 uppercase tracking-[0.5em] text-[10px] font-black uppercase">Localización San Basilio</span>
                </div>
                
                <div className="flex flex-col gap-6 mb-16">
                   <div className="flex items-start gap-4">
                      <MapPin className="text-white mt-2 shrink-0" size={32} strokeWidth={1}/>
                      <h3 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">
                        {CONTACT.address}
                      </h3>
                   </div>
                   <p className="text-zinc-100 text-lg font-light tracking-widest pl-12">
                     Barrio de San Basilio • Murcia Capital (Al lado de La Opinión)
                   </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pl-12">
                   {CONTACT.schedule.slice(0, 2).map((s, i) => (
                      <div key={i} className="flex flex-col gap-3">
                         <span className="text-[10px] uppercase tracking-widest text-zinc-200 font-bold uppercase">{s.day}</span>
                         <span className="text-sm text-zinc-100 font-light">{s.hours}</span>
                      </div>
                   ))}
                </div>

                <div className="mt-20 pl-12 flex flex-wrap gap-8">
                   <a href={CONTACT.booksyUrl} className="booksy-widget-button text-center text-[10px] uppercase tracking-widest font-black text-black bg-white px-12 py-5 rounded-full hover:bg-zinc-200 transition-all uppercase">
                      Pedir Cita Barbería
                   </a>
                   <Link to="/contacto" className="text-[10px] uppercase tracking-widest font-black text-white border border-white/10 px-12 py-5 rounded-full hover:bg-white/5 transition-all uppercase text-center">
                      Mapa San Basilio
                   </Link>
                </div>
             </div>
          </div>

          <div className="h-[500px] lg:h-auto min-h-[600px] rounded-3xl overflow-hidden grayscale invert brightness-[0.6] contrast-[1.3] opacity-50 hover:opacity-100 hover:brightness-100 hover:grayscale-0 hover:invert-0 transition-all duration-[1.5s] relative z-20 border border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.232323!2d-1.1427737!3d37.9957877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63811e1ddc3727%3A0x8175126c1e12c496!2sMULER+ART+STUDIO!5e0!3m2!1ses!2ses!4v1736784000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbería en Murcia Barrio San Basilio MULER ART STUDIO"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
