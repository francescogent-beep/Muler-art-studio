
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT, IMAGES, SERVICES, optimizeImg } from '../data';

interface Props {
  service: any;
}

const isVideo = (url: string) => url?.includes('corte%20premium') || url?.endsWith('.mp4');

export default function ServiceDetail({ service }: Props) {
  const otherServices = SERVICES.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-40 pb-32 animate-in slide-in-from-right duration-700">
      <SEO 
        title={service.h1}
        description={service.description}
        slug={service.slug}
        keywords={service.keywords}
        schema={{
          "@type": "Service",
          "serviceType": service.title,
          "provider": {
            "@id": "https://mulerartstudio.com/#business"
          },
          "areaServed": {
            "@type": "City",
            "name": "Murcia"
          },
          "description": service.description,
          "offers": {
            "@type": "Offer",
            "price": service.price,
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Link to="/servicios" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-300 hover:text-white mb-12 transition-colors px-4 py-2 hover:bg-white/5 rounded-full">
          <ArrowLeft size={14}/> Volver a servicios
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight italic mb-8 text-white">{service.h1}</h1>
            <p className="text-zinc-200 text-lg font-light leading-relaxed mb-12">
              {service.description} Realizado por expertos barberos en Murcia que combinan la técnica clásica con las últimas tendencias. En MULER ART STUDIO garantizamos una experiencia de confort total.
            </p>
            
            <div className="space-y-6 mb-16">
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-white mb-6">¿Qué incluye este ritual?</h4>
              {['Diagnóstico personalizado', 'Lavado con masaje capilar', 'Productos premium de acabado', 'Asesoría de mantenimiento'].map(item => (
                <div key={item} className="flex items-center gap-4 text-zinc-200 font-light">
                  <CheckCircle2 size={18} className="text-zinc-200"/>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp}?text=Hola,%20quiero%20reservar%20cita%20para:%20${service.title}`}
                  className="inline-flex items-center justify-center gap-4 bg-white text-black px-12 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors rounded-full"
                >
                  <MessageCircle size={16}/> WhatsApp
                </a>
                <a 
                  href={CONTACT.booksyUrl}
                  className="booksy-widget-button inline-flex items-center justify-center gap-4 border border-white/20 text-white px-12 py-5 text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all rounded-full"
                >
                  Reservar Online
                </a>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-[4/5] glass p-4 rounded-3xl overflow-hidden">
                {isVideo(service.image) ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={service.image} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={optimizeImg(service.image || IMAGES.portfolio[2], 'h')} 
                    width="800"
                    height="1000"
                    decoding="async"
                    className="w-full h-full object-cover" 
                    alt={service.title} 
                  />
                )}
             </div>
             <div className="absolute -bottom-10 -left-10 glass p-8 hidden md:block animate-bounce duration-[3s] rounded-2xl">
                <p className="text-xs uppercase tracking-widest font-bold mb-2 text-white">Duración aprox.</p>
                <p className="text-3xl font-serif italic text-white">{service.duration}</p>
             </div>
          </div>
        </div>

        <div className="mt-40 border-t border-white/5 pt-20">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-white">Otros Servicios en Murcia</h2>
            <Link to="/servicios" className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-white transition-colors">Ver todos <ArrowRight size={12} className="inline ml-1"/></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map(s => (
              <Link key={s.id} to={`/${s.slug}`} className="group block">
                <div className="aspect-[16/9] mb-6 overflow-hidden rounded-xl neon-border">
                  {isVideo(s.image) ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                    >
                      <source src={s.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={optimizeImg(s.image, 'h')} 
                      alt={s.title} 
                      width="600"
                      height="338"
                      decoding="async"
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                      loading="lazy"
                    />
                  )}
                </div>
                <h3 className="text-xl font-serif italic text-white mb-2 group-hover:text-zinc-300 transition-colors">{s.title}</h3>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Desde {s.price}€</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-32 border-t border-white/10 pt-20">
          <h2 className="text-2xl font-serif mb-8 italic text-zinc-200 text-center">Nuestros clientes en Murcia opinan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 italic text-zinc-200 font-light text-sm leading-relaxed rounded-2xl">
              "El mejor corte que me han hecho en Murcia. La atención al detalle en el {service.title} es de otro nivel."
            </div>
            <div className="glass p-8 italic text-zinc-200 font-light text-sm leading-relaxed rounded-2xl">
              "Profesionalidad y puntualidad en Murcia. Se nota que aman lo que hacen en MULER."
            </div>
            <div className="glass p-8 italic text-zinc-200 font-light text-sm leading-relaxed rounded-2xl">
              "Ubicación céntrica en Murcia y trato inmejorable. Mi nueva barbería de referencia."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
