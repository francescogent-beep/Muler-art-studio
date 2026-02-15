import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT } from '../data';

export default function Contact() {
  return (
    <div className="pt-40 pb-32 animate-fade-in">
      <SEO 
        title="Contacto y Ubicación | MULER ART STUDIO Murcia"
        description="Reserva tu cita en MULER ART STUDIO. Estamos en Av. Miguel de Cervantes, 9, Murcia. Teléfono: 671 58 72 42."
        slug="contacto"
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 italic text-white">Reserva tu Ritual</h1>
          <p className="text-zinc-200 uppercase tracking-widest text-[10px] font-bold">Murcia Centro • Av. Miguel de Cervantes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="glass p-12 rounded-2xl">
              <h3 className="text-2xl font-serif mb-10 italic text-white">Información de Contacto</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0 text-white"><MapPin size={20}/></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-white">Ubicación</h4>
                    <p className="text-zinc-200 font-light text-sm">{CONTACT.address}, {CONTACT.postalCode} {CONTACT.city}</p>
                    <a href={CONTACT.mapsUrl} target="_blank" className="text-white text-[10px] uppercase font-bold tracking-widest mt-2 inline-flex items-center gap-1 hover:underline">
                      Abrir en Google Maps <ExternalLink size={10}/>
                    </a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0 text-white"><Phone size={20}/></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-white">Teléfono</h4>
                    <p className="text-zinc-200 font-light text-sm">{CONTACT.phone}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center shrink-0 text-white"><Clock size={20}/></div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold mb-2 text-white">Horarios</h4>
                    <div className="space-y-2 text-zinc-200 font-light text-sm">
                      {CONTACT.schedule.map((s, i) => (
                        <p key={i} className="flex justify-between w-64">
                          <span>{s.day}:</span>
                          <span>{s.hours}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href={`https://wa.me/${CONTACT.whatsapp}`}
              className="block w-full bg-white text-black text-center py-6 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:bg-zinc-200 transition-all"
            >
              Reservar por WhatsApp
            </a>
          </div>

          <div className="h-[600px] glass rounded-2xl overflow-hidden grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.232323!2d-1.1427737!3d37.9957877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63811e1ddc3727%3A0x8175126c1e12c496!2sMULER+ART+STUDIO!5e0!3m2!1ses!2ses!4v1736784000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Mapa de MULER ART STUDIO"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}