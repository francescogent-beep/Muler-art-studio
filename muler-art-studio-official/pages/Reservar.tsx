import React from 'react';
import { MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT } from '../data';

export default function Reservar() {
  const booksyUrl = "https://booksy.com/es-es/114716_muler-art-studio_barberia_81274_la-albatalia#ba_s=sh_1";

  return (
    <div className="pt-44 pb-32 animate-reveal">
      <SEO 
        title="Agenda tu Ritual | MULER ART STUDIO"
        description="Reserva tu cita online en MULER ART STUDIO. Elige tu servicio de barbería y confirma tu visita en segundos a través de nuestro sistema oficial de Booksy."
        slug="reservar"
      />

      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-16">
          <Calendar className="mx-auto mb-6 text-zinc-300" size={32} strokeWidth={1} />
          <h1 className="text-5xl md:text-6xl font-serif italic mb-6 text-white">Agenda tu Ritual</h1>
          <p className="text-zinc-200 font-light text-lg max-w-xl mx-auto">
            Selecciona el servicio y la hora que mejor se adapte a ti. Gestión directa y segura vía Booksy.
          </p>
        </div>

        {/* Booksy Widget Trigger Area */}
        <div className="glass-premium rounded-[16px] overflow-hidden shadow-2xl shadow-white/5 mb-12 min-h-[500px] flex flex-col items-center justify-center relative bg-zinc-950/40">
          <div className="relative z-10 flex flex-col items-center text-center p-8">
            <h2 className="text-2xl font-serif italic text-white mb-10">Accede a nuestra agenda oficial</h2>
            <a 
              href={booksyUrl}
              className="booksy-widget-button px-20 py-8 bg-white text-black text-[12px] uppercase tracking-[0.5em] font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-white/10"
            >
              Cargar Agenda Booksy
            </a>
            <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Reserva confirmada al instante</p>
          </div>
          
          <div className="absolute inset-0 opacity-10 grayscale brightness-50 pointer-events-none" style={{ backgroundImage: 'url(https://i.imgur.com/9mS8oGC.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>

        {/* Alternative Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a 
            href={booksyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-white/10 p-6 text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:bg-white hover:text-black transition-all duration-500 rounded-full"
          >
            <ExternalLink size={14} /> Abrir Booksy en otra pestaña
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