
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOG_POSTS, optimizeImg } from '../data';

export default function Blog() {
  return (
    <div className="pt-48 pb-32 animate-reveal">
      <SEO 
        title="Blog de Barbería y Estilo | MULER ART STUDIO Murcia"
        description="Tendencias, rituales y consejos de cuidado masculino en Murcia. Lee los últimos artículos de nuestros barberos de autor."
        slug="blog"
        keywords={['blog barbería murcia', 'consejos barba murcia', 'tendencias pelo hombre 2025', 'cuidado masculino']}
      />
      
      <div className="max-w-[1600px] mx-auto px-8 md:px-16">
        <div className="max-w-4xl mb-24">
          <span className="text-white/60 uppercase tracking-header text-[10px] font-black block mb-8">Archivo de Autor</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-10 italic text-white leading-[0.9]">
            Blog de <br />
            <span className="not-italic text-zinc-100">Estilo & Cultura</span>
          </h1>
          <p className="text-zinc-100 text-lg md:text-xl font-light leading-relaxed max-w-2xl tracking-wide">
            Compartimos nuestra visión sobre la barbería clásica y moderna, rituales de bienestar y tendencias que definen el estilo en Murcia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id}
              className="group flex flex-col h-full bg-zinc-950/50 border border-white/5 hover:border-white/20 transition-all duration-700 rounded-3xl overflow-hidden"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={optimizeImg(post.image, 'h')} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] will-change-transform"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="px-4 py-1.5 glass-premium rounded-full text-[9px] uppercase tracking-widest font-bold text-white">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest text-zinc-300 font-bold mb-6">
                  <Calendar size={12} strokeWidth={2} /> {post.date}
                </div>
                <h2 className="text-3xl font-serif italic text-white mb-6 group-hover:text-zinc-200 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-zinc-300 font-light text-sm leading-relaxed mb-10 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/50 group-hover:text-white transition-colors">
                    Leer artículo
                  </span>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
