
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { IMAGES } from '../data';

export default function Gallery() {
  const allImages = [IMAGES.hero, IMAGES.interior, ...IMAGES.portfolio];
  
  // Categorización visual para el grid masonry
  const getGridSpan = (index: number) => {
    if (index % 7 === 0) return 'md:col-span-2 md:row-span-2'; // Pieza grande destacada
    if (index % 5 === 0) return 'md:row-span-2'; // Pieza vertical
    return '';
  };

  return (
    <div className="pt-56 pb-40 animate-reveal">
      <SEO 
        title="Portfolio Editorial | MULER ART STUDIO"
        description="Explora la estética y precisión de nuestros cortes de autor. Una mirada al interior de nuestro estudio en Murcia."
      />
      
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 border-b border-white/10 pb-20 gap-12">
          <div className="max-w-4xl">
            <span className="text-zinc-500 uppercase tracking-header text-[10px] font-black block mb-6">Muler Art Studio</span>
            <h1 className="text-7xl md:text-9xl font-serif mb-8 italic leading-[0.8] text-white">Archivo <br/><span className="text-zinc-400 not-italic">Visual</span></h1>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-zinc-400 text-xs uppercase tracking-[0.4em] leading-relaxed font-bold mb-10">
              Curaduría de estilos, texturas y precisión técnica realizada en nuestro estudio de Murcia. Cada imagen es un testimonio de nuestra filosofía.
            </p>
            <Link to="/reservar" className="inline-block text-[10px] uppercase tracking-premium font-black text-white border-b border-white/20 pb-2 hover:border-white transition-all">
              RESERVAR ESTE ESTILO
            </Link>
          </div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:auto-rows-[300px]">
          {allImages.map((img, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-2xl bg-zinc-900 ${getGridSpan(i)} transition-all duration-700 hover:z-10`}
            >
              <img 
                src={img} 
                alt={`Muler Art Studio Detalle ${i}`} 
                className="w-full h-full object-cover transition-all duration-[2.5s] scale-100 group-hover:scale-110 brightness-[0.8] group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-[9px] uppercase tracking-[0.5em] font-black mb-2 text-white/60 block">Muler Studio — 2024</span>
                  <span className="text-lg italic font-serif text-white">Técnica de Autor</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-56 text-center border-t border-white/5 pt-32">
          <span className="text-[10px] uppercase tracking-header text-zinc-500 font-black block mb-8">¿Deseas este acabado?</span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-16 leading-tight">Es el momento de <br/>redefinir tu imagen</h2>
          <Link 
            to="/reservar" 
            className="inline-block border border-white/20 px-20 py-7 text-[10px] uppercase tracking-premium font-black text-white hover:bg-white hover:text-black transition-all duration-1000 rounded-full"
          >
            SOLICITAR CITA
          </Link>
        </div>
      </div>
    </div>
  );
}
