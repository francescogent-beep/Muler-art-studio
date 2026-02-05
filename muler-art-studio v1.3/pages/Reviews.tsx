
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT } from '../data';

const REVIEWS_DATA = [
  { text: "Increíble peluquero y mejor persona. Destaco su gran profesionalidad y el cuidado minucioso de cada detalle.", author: "J. Martínez", rating: 5 },
  { text: "Extremadamente profesional con un trato muy agradable. Te hace sentir cómodo desde el primer minuto en el estudio.", author: "L. Navarro", rating: 5 },
  { text: "Muy profesionales, puntuales y una excelente relación calidad-precio. La mejor opción en Murcia.", author: "A. Sánchez", rating: 5 }
];

export default function Reviews() {
  return (
    <div className="pt-40 pb-32 animate-in fade-in duration-700">
      <SEO 
        title="Opiniones y Reseñas | MULER ART STUDIO Murcia"
        description="Lo que dicen nuestros clientes. 4.9/5 estrellas en Google Maps. Profesionalidad, detalle y trato exclusivo en Murcia."
        slug="resenas"
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="white" className="text-white" />)}
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 italic text-white">Experiencias Reales</h1>
          <p className="text-zinc-200 uppercase tracking-widest text-[10px] font-bold">4.9/5 Estrellas • 43 Reseñas en Google</p>
        </div>

        <div className="space-y-8">
          {REVIEWS_DATA.map((r, i) => (
            <div key={i} className="glass p-12 rounded-sm relative italic">
              <div className="absolute top-6 left-10 text-6xl text-white/10 font-serif">“</div>
              <p className="text-xl md:text-2xl font-serif text-white leading-relaxed relative z-10">
                {r.text}
              </p>
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">— {r.author}</span>
                <span className="text-[10px] text-zinc-300 uppercase font-bold tracking-widest">Verificado en Google</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-10">
          <a 
            href={CONTACT.reviewsUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold border-b border-white pb-2 text-white hover:text-zinc-200 transition-all"
          >
            Leer todas las opiniones en Google <ExternalLink size={14} />
          </a>
          
          <div className="pt-20 border-t border-white/5 w-full text-center">
            <h2 className="text-3xl font-serif italic text-white mb-8">Vive la experiencia Muler</h2>
            <Link 
              to="/reservar" 
              className="inline-flex items-center gap-4 border border-white/10 px-12 py-5 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-white hover:text-black transition-all rounded-full"
            >
              RESERVAR MI CITA <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
