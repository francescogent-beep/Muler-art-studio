
import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Clock, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import { SERVICES, CONTACT } from '../data';

export default function Services() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Carta de Servicios - Muler Art Studio",
    "description": "Lista de servicios de barbería profesional en Murcia.",
    "itemListElement": SERVICES.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Service",
        "name": s.title,
        "description": s.description,
        "url": `https://mulerartstudio.es/${s.slug}`,
        "offers": {
          "@type": "Offer",
          "price": (s as any).price,
          "priceCurrency": "EUR"
        }
      }
    }))
  };

  return (
    <div className="pt-40 pb-32 animate-reveal">
      <SEO 
        title="Servicios de Barbería en Murcia | Cortes y Estilismos | Muler Art Studio"
        description="Explora nuestra carta de servicios exclusivos en Murcia. Especialistas en corte de autor, degradados técnicos y rituales de barba. Calidad y precisión en cada detalle."
        keywords={['barbería murcia centro', 'mejor peluquería hombre murcia', 'corte de pelo caballero murcia', 'arreglo barba murcia']}
        schema={itemListSchema}
      />
      
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="max-w-4xl mb-20">
          <span className="text-zinc-400 uppercase tracking-header text-[10px] font-black block mb-8">Propuesta de Autor</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 italic text-white leading-[0.9]">
            Servicios de <br />
            <span className="not-italic text-zinc-300">Barbería en Murcia</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl tracking-wide">
            En Muler Art Studio fusionamos la precisión técnica con el bienestar. 
            Cada ritual es un proceso artesanal diseñado para potenciar tu imagen personal 
            en un entorno de exclusividad en el corazón de Murcia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <Link 
              to={`/${s.slug}`} 
              key={s.id}
              className="group relative flex flex-col bg-zinc-950 neon-border overflow-hidden transition-all duration-700 rounded-2xl"
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  width="800"
                  height="533"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 brightness-[0.7] group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full glass-premium flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl md:text-3xl font-serif italic text-white group-hover:text-zinc-200 transition-colors leading-tight">
                    {s.title}
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-400 mt-1">
                    <Clock size={12} />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{s.duration}</span>
                  </div>
                </div>
                
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8 line-clamp-2">
                  {s.description}
                </p>
                
                <div className="mt-auto flex justify-between items-center pt-5 border-t border-white/5">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-bold group-hover:text-white transition-colors">
                    Ver Detalles
                  </span>
                  <div className="flex gap-2">
                    {s.keywords.slice(0, 1).map(kw => (
                      <span key={kw} className="text-[8px] uppercase tracking-widest text-zinc-600">#{kw.split(' ')[0]}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 text-center">
            <Link 
                to="/reservar" 
                className="inline-block border border-white/10 px-16 py-6 text-[11px] uppercase tracking-premium font-black text-white hover:bg-white hover:text-black transition-all duration-700 rounded-full"
            >
                RESERVAR EXPERIENCIA
            </Link>
        </div>
      </div>
    </div>
  );
}
