
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { IMAGES, CONTACT, optimizeImg } from '../data';

export default function Gallery() {
  const allImages = [IMAGES.hero, IMAGES.interior, ...IMAGES.portfolio];
  
  const getGridSpan = (index: number) => {
    if (index % 7 === 0) return 'md:col-span-2 md:row-span-2';
    if (index % 5 === 0) return 'md:row-span-2';
    return '';
  };

  return (
    <div className="pt-56 pb-40 animate-reveal">
      <SEO 
        title="Galería de Cortes y Barba en Murcia | MULER ART STUDIO"
        description="Explora los mejores cortes de pelo y arreglos de barba realizados en nuestra barbería de Murcia centro. Inspiración y estilo masculino real."
        slug="galeria"
        keywords={['fotos barbería murcia', 'estilos corte hombre murcia', 'degradados fotos murcia', 'barbería interior murcia']}
      />
      
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 border-b border-white/10 pb-20 gap-12">
          <div className="max-w-4xl">
            <span className="text-white/60 uppercase tracking-header text-[10px] font-black block mb-6">Barbería en Murcia</span>
            <h1 className="text-7xl md:text-9xl font-serif mb-8 italic leading-[0.8] text-white">Galería <br/><span className="text-white/70 not-italic">de Autor</span></h1>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-zinc-100 text-xs uppercase tracking-[0.4em] leading-relaxed font-bold mb-10">
              Cortes de pelo hombre en Murcia: una selección de nuestros mejores trabajos de barbería técnica y diseño de barbas. <Link to="/servicios" className="text-white underline decoration-white/20">Ver servicios</Link>.
            </p>
            <a href={CONTACT.booksyUrl} className="booksy-widget-button inline-block text-[10px] uppercase tracking-premium font-black text-white border-b border-white/20 pb-2 hover:border-white transition-all">
              QUIERO ESTE CORTE
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:auto-rows-[300px]">
          {allImages.map((img, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/5] md:aspect-auto ${getGridSpan(i)} transition-all duration-700 hover:z-10`}
            >
              <img 
                src={optimizeImg(img, 'h')} 
                alt={`Corte de pelo hombre realizado en Murcia por Muler Art Studio - Ejemplo ${i}`} 
                width="800"
                height="800"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-[2.5s] scale-100 group-hover:scale-110 brightness-[0.8] group-hover:brightness-100 will-change-transform transform-gpu"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-[9px] uppercase tracking-[0.5em] font-black mb-2 text-white/60 block">Barbería Murcia — 2024</span>
                  <span className="text-lg italic font-serif text-white">Corte técnico en Murcia</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-56 text-center border-t border-white/5 pt-32">
          <span className="text-[10px] uppercase tracking-header text-white/40 font-black block mb-8 uppercase">¿Deseas este acabado en Murcia?</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-16 leading-tight">El mejor barbero <br/>de Murcia te espera</h2>
          <a 
            href={CONTACT.booksyUrl} 
            className="booksy-widget-button inline-block border border-white/20 px-20 py-7 text-[10px] uppercase tracking-premium font-black text-white hover:bg-white hover:text-black transition-all duration-1000 rounded-full text-center"
          >
            SOLICITAR CITA AHORA
          </a>
        </div>
      </div>
    </div>
  );
}
