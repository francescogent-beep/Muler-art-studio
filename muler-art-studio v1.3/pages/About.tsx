import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ABOUT, IMAGES } from '../data';
import { ShieldCheck, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-56 pb-40 animate-reveal">
      <SEO 
        title="Sobre Nosotros | Simo & Tofé | MULER ART STUDIO"
        description="Conoce la historia de MULER ART STUDIO. Una barbería creada desde cero en Murcia por Simo y Tofé, basada en la disciplina, el respeto y la identidad."
        slug="sobre-nosotros"
      />
      
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 border-b border-white/10 pb-20 gap-12">
          <div className="max-w-4xl">
            <span className="text-white/60 uppercase tracking-header text-[10px] font-black block mb-6">Nuestra Historia</span>
            <h1 className="text-7xl md:text-9xl font-serif mb-8 italic leading-[0.8] text-white">Identidad <br/><span className="text-white/70 not-italic">& Disciplina</span></h1>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-zinc-200 text-xs uppercase tracking-[0.4em] leading-relaxed font-bold mb-10 italic">
              "Tu imagen habla por ti. Nosotros la cuidamos."
            </p>
          </div>
        </div>

        {/* The Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-56">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl neon-border">
            <img 
              src={IMAGES.interior} 
              alt="Muler Art Studio Interior" 
              className="w-full h-full object-cover grayscale brightness-75"
            />
          </div>
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">Creados desde cero</h2>
            <p className="text-zinc-100 text-xl font-light leading-relaxed tracking-wide">
              {ABOUT.story}
            </p>
            <p className="text-zinc-200 text-lg font-light leading-relaxed">
              {ABOUT.philosophy}
            </p>
            <div className="pt-8 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-header text-white/50 font-black block mb-4 uppercase">Misión</span>
              <p className="text-white text-lg font-serif italic">
                Convertirnos en una barbería de referencia, reconocida por la calidad del servicio, la constancia y la confianza que construimos con cada cliente.
              </p>
            </div>
          </div>
        </div>

        {/* The Team */}
        <div className="mb-56">
          <span className="text-white/40 uppercase tracking-header text-[10px] font-black block mb-12 text-center uppercase">El Equipo de Autor</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ABOUT.team.map((member, i) => (
              <div key={i} className="glass-premium p-16 rounded-3xl border border-white/5 group hover:border-white/20 transition-all duration-700">
                <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 font-bold block mb-4">Muler Artist</span>
                <h3 className="text-5xl font-serif italic text-white mb-2">{member.name}</h3>
                <p className="text-white/60 uppercase tracking-widest text-[10px] font-bold">{member.role}</p>
                <div className="mt-12 h-[1px] w-12 bg-white/20 group-hover:w-full transition-all duration-1000"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-y border-white/5 py-32">
          <div className="text-center">
            <Zap className="mx-auto mb-8 text-white/70" size={32} strokeWidth={1} />
            <h4 className="text-[11px] uppercase tracking-premium text-white font-black mb-6 uppercase">Estilo</h4>
            <p className="text-zinc-200 text-sm font-light leading-relaxed">Cortes que suman presencia y confianza en tu día a día.</p>
          </div>
          <div className="text-center">
            <Target className="mx-auto mb-8 text-white/70" size={32} strokeWidth={1} />
            <h4 className="text-[11px] uppercase tracking-premium text-white font-black mb-6 uppercase">Precisión</h4>
            <p className="text-zinc-200 text-sm font-light leading-relaxed">Cuidado minucioso de cada detalle y técnica avanzada.</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto mb-8 text-white/70" size={32} strokeWidth={1} />
            <h4 className="text-[11px] uppercase tracking-premium text-white font-black mb-6 uppercase">Actitud</h4>
            <p className="text-zinc-200 text-sm font-light leading-relaxed">Respeto por el oficio y trato personalizado desde el minuto uno.</p>
          </div>
        </div>

        <div className="mt-56 text-center">
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-16 leading-tight">Vive la experiencia <br/>Muler Art Studio</h2>
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