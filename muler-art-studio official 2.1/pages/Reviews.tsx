import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT } from '../data';

const REVIEWS_DATA = [
  { 
    text: "Simo es muy agradable y un excelente profesional, centrado en su trabajo y esmerándose en el corte para darle un toque perfecto. Muy top el detalle de finalización.", 
    author: "Antonio", 
    date: "Jan 16, 2026", 
    service: "Corte de pelo", 
    professional: "by Simo",
    rating: 5 
  },
  { 
    text: "Corte perfecto, muy buen ambiente... Todo 10/10", 
    author: "JuanPe", 
    date: "Jan 29, 2026", 
    service: "Corte de pelo", 
    professional: "by Tofé",
    rating: 5 
  },
  { 
    text: "Es la primera que voy a esta barbería , pero sin duda la recomiendo. El trato hacía mi persona fue de 10 y el trabajo excelente.", 
    author: "Ramon", 
    date: "Jan 16, 2026", 
    service: "Corte de pelo", 
    professional: "by Simo",
    rating: 5 
  },
  { 
    text: "El peluquero que todo el mundo quiere tener ❤️", 
    author: "Moises", 
    date: "Jan 21, 2026", 
    service: "Corte de pelo", 
    professional: "by Simo",
    rating: 5 
  },
  { 
    text: "Estos chicos son los mejores", 
    author: "Carlos jose", 
    date: "Jan 27, 2026", 
    service: "Corte de pelo", 
    professional: "by Tofé",
    rating: 5 
  },
  { 
    text: "Excepcional", 
    author: "Daniel", 
    date: "Jan 15, 2026", 
    service: "Corte de pelo + arreglo de barba", 
    professional: "by Simo",
    rating: 5 
  },
  { 
    text: "Muy buen corte👌", 
    author: "Marco", 
    date: "Jan 29, 2026", 
    service: "Corte de pelo", 
    professional: "by Simo",
    rating: 5 
  },
  { 
    text: "De 10", 
    author: "Sebastian", 
    date: "Jan 26, 2026", 
    service: "Corte de pelo + arreglo de barba", 
    professional: "by Simo",
    rating: 5 
  },
  { 
    text: "En buena manos", 
    author: "alfonso", 
    date: "Jan 20, 2026", 
    service: "Corte de pelo", 
    professional: "by Simo",
    rating: 5 
  },
  { 
    text: "Muy top", 
    author: "Josemariadelamorfernandez", 
    date: "Jan 12, 2026", 
    service: "Corte de pelo", 
    professional: "by Tofé",
    rating: 5 
  }
];

const RatingBar = ({ stars, count, total }: { stars: number, count: number, total: number }) => {
  const percentage = (count / total) * 100;
  return (
    <div className="flex items-center gap-4 w-full">
      <span className="text-zinc-400 text-xs w-4">{stars}</span>
      <Star size={12} className="text-zinc-400" />
      <div className="flex-grow h-[2px] bg-white/10 relative">
        <div 
          className="absolute top-0 left-0 h-full bg-[#fbbc05]" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-zinc-400 text-xs w-8 text-right">{count}</span>
    </div>
  );
};

export default function Reviews() {
  return (
    <div className="pt-40 pb-32 animate-in fade-in duration-700">
      <SEO 
        title="Opiniones y Reseñas | MULER ART STUDIO Murcia"
        description="Lo que dicen nuestros clientes. 5.0/5 estrellas en Booksy. Profesionalidad, detalle y trato exclusivo en Murcia."
        slug="resenas"
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-24 flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-serif text-white">Reseñas</h1>
            <a href={CONTACT.booksyUrl} target="_blank" className="text-zinc-400 text-xs hover:text-white transition-colors underline">Cómo funcionan las reseñas</a>
        </div>

        {/* Summary Card */}
        <div className="glass-premium p-10 md:p-14 rounded-2xl mb-20 flex flex-col md:flex-row gap-16 md:items-center">
            <div className="text-center md:border-r md:border-white/10 md:pr-16">
                <div className="text-7xl font-bold text-white mb-2">5.0</div>
                <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fbbc05" className="text-[#fbbc05]" />)}
                </div>
                <div className="text-zinc-400 text-sm uppercase tracking-widest">{CONTACT.reviewCount} reseñas</div>
            </div>
            <div className="flex-grow space-y-3">
                <RatingBar stars={5} count={245} total={246} />
                <RatingBar stars={4} count={1} total={246} />
                <RatingBar stars={3} count={0} total={246} />
                <RatingBar stars={2} count={0} total={246} />
                <RatingBar stars={1} count={0} total={246} />
            </div>
        </div>

        <div className="space-y-12">
          {REVIEWS_DATA.map((r, i) => (
            <div key={i} className="border-b border-white/5 pb-12">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col gap-1">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="#fbbc05" className="text-[#fbbc05]" />
                        ))}
                    </div>
                    <div className="text-xs text-white font-medium mt-2">{r.service}</div>
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest">{r.professional}</div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-400 font-medium">{r.author} • {r.date}</span>
                    <CheckCircle2 size={14} className="text-sky-400" />
                </div>
              </div>
              
              <p className="text-lg text-zinc-100 font-light leading-relaxed mb-8">
                {r.text}
              </p>

              <div className="flex gap-4">
                <button className="text-[10px] uppercase tracking-widest font-bold text-white/40 border border-white/10 px-4 py-2 rounded-full hover:bg-white/5">Útil (0)</button>
                <button className="text-[10px] uppercase tracking-widest font-bold text-white/40 border border-white/10 px-4 py-2 rounded-full hover:bg-white/5">Reportar</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-10">
          <a 
            href={CONTACT.booksyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold border-b border-white pb-2 text-white hover:text-zinc-200 transition-all"
          >
            Ver todas las reseñas en Booksy <ExternalLink size={14} />
          </a>
          
          <div className="pt-20 border-t border-white/5 w-full text-center">
            <h2 className="text-3xl font-serif italic text-white mb-8">Vive la experiencia Muler</h2>
            <a 
              href={CONTACT.booksyUrl} 
              className="booksy-widget-button inline-flex items-center gap-4 border border-white/10 px-12 py-5 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-white hover:text-black transition-all rounded-full text-center"
            >
              RESERVAR MI CITA <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}