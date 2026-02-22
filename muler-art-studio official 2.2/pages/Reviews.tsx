
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT } from '../data';

const REVIEWS_DATA = [
  { 
    text: "10/10, todo perfecto, corte, ambiente, simpatía…", 
    author: "JuanPe", 
    date: "Enero 2026", 
    service: "Corte de pelo", 
    professional: "Google Review",
    rating: 5 
  },
  { 
    text: "Desde que entras hasta que sales te sientes como en casa y cada pelado impecable", 
    author: "Angel Costa", 
    date: "Enero 2026", 
    service: "Corte premium", 
    professional: "Google Review",
    rating: 5 
  },
  { 
    text: "Excelente servicio muy profesional atento al detalle y siempre deja el corte justo como lo pido totalmente recomendado", 
    author: "Antonio Soto lopez", 
    date: "Enero 2026", 
    service: "Corte de pelo", 
    professional: "Google Review",
    rating: 5 
  },
  { 
    text: "Gran barbero, muy profesional y con mucha experiencia. El ambiente es cómodo, cuida cada detalle y siempre salgo satisfecho con el corte y el arreglo de barba.", 
    author: "maria zaragoza", 
    date: "Enero 2026", 
    service: "Corte + Barba", 
    professional: "Google Review",
    rating: 5 
  },
  { 
    text: "Simo es muy agradable y un excelente profesional, centrado en su trabajo y esmerándose en el corte para darle un toque perfecto. Muy top el detalle de finalización.", 
    author: "Antonio", 
    date: "Diciembre 2025", 
    service: "Corte de pelo", 
    professional: "Booksy Verified",
    rating: 5 
  },
  { 
    text: "El peluquero que todo el mundo quiere tener ❤️", 
    author: "Moises", 
    date: "Diciembre 2025", 
    service: "Corte técnico", 
    professional: "Booksy Verified",
    rating: 5 
  },
  { 
    text: "Maxima calidad en el servicio y un trato humano espectacular 🤩🤩", 
    author: "Salvador Cabanes", 
    date: "Diciembre 2025", 
    service: "Corte de pelo", 
    professional: "Google Review",
    rating: 5 
  },
  { 
    text: "El personal te atiende de manera extremadamente profesional, te ofrecen un trato muy agradable y hacen que te sientas cómodo...", 
    author: "Kiko González Marin", 
    date: "Noviembre 2025", 
    service: "Corte técnico", 
    professional: "Google Review",
    rating: 5 
  },
  { 
    text: "El mejor peluquero de la región 😉", 
    author: "Alberto Feringues", 
    date: "Noviembre 2025", 
    service: "Corte de pelo", 
    professional: "Google Review",
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
        description="Lo que dicen nuestros clientes en Murcia. 4.9/5 estrellas. Profesionalidad, detalle y trato exclusivo en nuestra barbería."
        slug="resenas"
      />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-24 flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-serif text-white">Reseñas <span className="text-zinc-500 italic">de nuestros clientes</span></h1>
            <div className="flex gap-4">
              <a href={CONTACT.reviewsUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-[10px] hover:text-white transition-colors underline uppercase tracking-widest font-bold">Google</a>
              <a href={CONTACT.booksyUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-[10px] hover:text-white transition-colors underline uppercase tracking-widest font-bold">Booksy</a>
            </div>
        </div>

        {/* Summary Card */}
        <div className="glass-premium p-10 md:p-14 rounded-2xl mb-20 flex flex-col md:flex-row gap-16 md:items-center">
            <div className="text-center md:border-r md:border-white/10 md:pr-16">
                <div className="text-7xl font-bold text-white mb-2">{CONTACT.rating}</div>
                <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fbbc05" className="text-[#fbbc05]" />)}
                </div>
                <div className="text-zinc-400 text-sm uppercase tracking-widest">Puntuación Media</div>
            </div>
            <div className="flex-grow space-y-3">
                <RatingBar stars={5} count={CONTACT.reviewCount} total={CONTACT.reviewCount + 2} />
                <RatingBar stars={4} count={1} total={CONTACT.reviewCount + 2} />
                <RatingBar stars={3} count={1} total={CONTACT.reviewCount + 2} />
                <RatingBar stars={2} count={0} total={CONTACT.reviewCount + 2} />
                <RatingBar stars={1} count={0} total={CONTACT.reviewCount + 2} />
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
                    <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">{r.professional}</div>
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
                <button className="text-[10px] uppercase tracking-widest font-bold text-white/40 border border-white/10 px-4 py-2 rounded-full hover:bg-white/5">Útil</button>
                <button className="text-[10px] uppercase tracking-widest font-bold text-white/40 border border-white/10 px-4 py-2 rounded-full hover:bg-white/5">Compartir</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-10">
          <div className="flex gap-10">
            <a 
              href={CONTACT.reviewsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold border-b border-white pb-2 text-white hover:text-zinc-200 transition-all"
            >
              Google Maps <ExternalLink size={14} />
            </a>
            <a 
              href={CONTACT.booksyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-bold border-b border-white pb-2 text-white hover:text-zinc-200 transition-all"
            >
              Booksy Profile <ExternalLink size={14} />
            </a>
          </div>
          
          <div className="pt-20 border-t border-white/5 w-full text-center">
            <h2 className="text-3xl font-serif italic text-white mb-8">¿Quieres dejar tu opinión?</h2>
            <p className="text-zinc-400 text-sm mb-12 max-w-sm mx-auto">
              Tu valoración nos ayuda a seguir mejorando como tu <Link to="/" className="text-white underline decoration-white/20">barbero en Murcia</Link> de confianza.
            </p>
            <a 
              href={CONTACT.booksyUrl} 
              className="booksy-widget-button inline-flex items-center gap-4 border border-white/10 px-12 py-5 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-white hover:text-black transition-all rounded-full text-center"
            >
              RESERVAR MI PRÓXIMA CITA <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
