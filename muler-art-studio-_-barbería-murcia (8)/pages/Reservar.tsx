
import React from 'react';
import { MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT } from '../data';

export default function Reservar() {
  const booksyUrl = "https://booksy.com/es-es/114716_muler-art-studio_barberia_81274_la-albatalia#ba_s=sh_1";

  return (
    <div className="pt-44 pb-32 animate-reveal">
      <SEO 
        title="Reservar cita | MULER ART STUDIO – Barbería en Murcia"
        description="Reserva tu cita online en MULER ART STUDIO. Elige tu servicio de barbería y confirma tu visita en segundos."
        slug="reservar"
      />

      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-16">
          <Calendar className="mx-auto mb-6 text-zinc-300" size={32} strokeWidth={1} />
          <h1 className="text-5xl md:text-6xl font-serif italic mb-6 text-white">Agenda tu Ritual</h1>
          <p className="text-zinc-200 font-light text-lg max-w-xl mx-auto">
            Selecciona el servicio y la hora que mejor se adapte a ti. Confirmación inmediata vía Booksy.
          </p>
        </div>

        {/* Booksy Widget Container */}
        <div className="glass-premium rounded-[16px] overflow-hidden shadow-2xl shadow-white/5 mb-12">
          <iframe 
            src={booksyUrl}
            title="Booksy Booking Widget"
            width="100%"
            height="850px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Fallback Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a 
            href={booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-white/10 p-6 text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:bg-white hover:text-black transition-all duration-500 rounded-full"
          >
            <ExternalLink size={14} /> Abrir Booksy en pestaña externa
          </a>
          <a 
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 p-6 text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 rounded-full"
          >
            <MessageCircle size={14} className="text-emerald-500" /> Reserva vía WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
