
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, MessageCircle, ArrowRight, Quote } from 'lucide-react';
import SEO from '../components/SEO';
import { BLOG_POSTS, CONTACT, optimizeImg } from '../data';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  if (!post) return <Navigate to="/blog" />;

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  const articleSchema = {
    "@type": "Article",
    "headline": post.title,
    "image": [post.image],
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": CONTACT.founder
    },
    "publisher": {
      "@id": "https://mulerartstudio.com/#business"
    },
    "description": post.excerpt
  };

  /**
   * Procesa estilos en línea (Negritas y Enlaces)
   * Asegura la eliminación total de los símbolos **
   */
  const processInlineStyles = (text: string) => {
    // Primero, separar por negritas de forma segura
    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="text-white font-bold tracking-tight">
            {part.slice(2, -2)}
          </strong>
        );
      }

      // Procesar enlaces dentro de la parte que no es negrita
      const subParts = part.split(/(\[.*?\]\(.*?\))/g);
      return subParts.map((subPart, j) => {
        const match = subPart.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <Link 
              key={`${i}-${j}`} 
              to={match[2]} 
              className="text-white underline underline-offset-8 decoration-white/20 hover:decoration-white transition-all hover:text-zinc-300"
            >
              {match[1]}
            </Link>
          );
        }
        return subPart;
      });
    });
  };

  /**
   * Renderizador visual avanzado que procesa bloques de Markdown
   * Limpia agresivamente símbolos ### y *
   */
  const renderContent = (content: string) => {
    // Identificar bloques por dobles saltos de línea
    const blocks = content.split(/\n\s*\n/);
    let paragraphCount = 0;

    return blocks.map((block, index) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // 1. Renderizar Encabezados (H3) - Limpia ###
      if (trimmed.startsWith('###')) {
        return (
          <h3 key={index} className="text-3xl md:text-5xl font-serif italic text-white mt-20 mb-10 leading-tight">
            {trimmed.replace(/^###\s+/, '')}
          </h3>
        );
      }

      // 2. Renderizar Listas - Limpia * o -
      if (trimmed.startsWith('*') || trimmed.startsWith('-')) {
        const items = trimmed.split('\n').filter(li => li.trim().length > 0);
        return (
          <ul key={index} className="space-y-6 mb-12 my-8">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-5 ml-2 group">
                <span className="w-2 h-2 rounded-full bg-white/30 mt-2.5 shrink-0 group-hover:bg-white transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
                <span className="text-zinc-200 font-light text-lg leading-relaxed">
                  {processInlineStyles(item.replace(/^[\*\-]\s+/, ''))}
                </span>
              </li>
            ))}
          </ul>
        );
      }

      // 3. Renderizar Bloques de Cita / Insights
      if (trimmed.length < 160 && (trimmed.includes('mejor') || trimmed.includes('exclusividad')) && !trimmed.startsWith('###')) {
        return (
           <div key={index} className="my-16 p-10 bg-zinc-950 border-l-2 border-white/40 relative group">
              <Quote className="absolute -top-4 -left-4 text-white/20 group-hover:text-white transition-colors duration-700" size={40} />
              <p className="text-2xl font-serif italic text-white leading-relaxed">
                {processInlineStyles(trimmed)}
              </p>
           </div>
        )
      }

      // 4. Párrafos Estándar con Capitular
      paragraphCount++;
      const isFirstParagraph = paragraphCount === 1;

      return (
        <p key={index} className={`mb-10 text-zinc-200 font-light text-lg md:text-xl leading-relaxed tracking-wide ${isFirstParagraph ? 'editorial-dropcap' : ''}`}>
          {processInlineStyles(trimmed)}
        </p>
      );
    });
  };

  return (
    <div className="pt-48 pb-32 animate-reveal">
      <SEO 
        title={`${post.title} | Blog MULER ART STUDIO`}
        description={post.excerpt}
        slug={`blog/${post.slug}`}
        schema={articleSchema}
      />
      
      <div className="max-w-4xl mx-auto px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-zinc-400 hover:text-white mb-16 transition-colors group">
          <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" /> Volver al archivo
        </Link>

        <header className="mb-20">
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-black text-white/40 mb-8">
            <span className="flex items-center gap-2"><Calendar size={12}/> {post.date}</span>
            <span className="flex items-center gap-2"><Tag size={12}/> {post.category}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-[1] mb-12">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-zinc-400 leading-relaxed italic border-l-2 border-white/10 pl-8">
            {post.excerpt}
          </p>
        </header>

        <div className="aspect-[16/9] w-full mb-24 rounded-3xl overflow-hidden border border-white/5 relative group">
          <img 
            src={optimizeImg(post.image, 'h')} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <article className="max-w-none">
          {renderContent(post.content)}
        </article>

        <div className="mt-24 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-6">
            <img 
              src="https://i.imgur.com/JqwwxKQ.jpeg" 
              alt={CONTACT.founder} 
              className="w-16 h-16 rounded-full object-cover grayscale border border-white/10"
            />
            <div>
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold block mb-1 uppercase">Escrito por</span>
              <span className="text-lg font-serif italic text-white">{CONTACT.founder} — Senior Barber en Murcia</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={`https://wa.me/?text=He%20leído%20esto%20y%20me%20ha%20gustado:%20https://mulerartstudio.com/blog/${post.slug}`} 
              target="_blank" 
              className="w-12 h-12 glass-premium rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all shadow-[0_0_15px_rgba(16,185,129,0)] hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              <MessageCircle size={18} />
            </a>
            <button className="w-12 h-12 glass-premium rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        {/* Artículos Recomendados */}
        <div className="mt-40">
          <h2 className="text-4xl font-serif italic text-white mb-16">Lecturas Sugeridas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {relatedPosts.map(p => (
               <Link key={p.id} to={`/blog/${p.slug}`} className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 border border-white/5 relative">
                    <img src={optimizeImg(p.image, 'h')} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1s]" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
                  </div>
                  <h4 className="text-xl font-serif italic text-white group-hover:text-zinc-300 transition-colors leading-tight mb-4">{p.title}</h4>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold group-hover:text-white transition-colors">Continuar leyendo <ArrowRight size={10} className="inline ml-1" /></span>
               </Link>
             ))}
          </div>
        </div>

        <div className="mt-32 p-12 md:p-24 bg-zinc-950 rounded-[40px] border border-white/5 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 grayscale group-hover:scale-110 transition-transform duration-[3s]" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover' }}></div>
            <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-header text-white/40 font-black block mb-10 uppercase">Propuesta de Autor</span>
                <h3 className="text-4xl md:text-7xl font-serif italic text-white mb-16 leading-tight">Tu próxima versión <br/>empieza aquí</h3>
                <a 
                    href={CONTACT.booksyUrl} 
                    className="booksy-widget-button inline-block bg-white text-black px-20 py-7 text-[11px] uppercase tracking-premium font-black rounded-full hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10"
                >
                    AGENDAR CITA EN MURCIA
                </a>
            </div>
        </div>
      </div>

      <style>{`
        .editorial-dropcap:first-letter {
          float: left;
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          line-height: 0.8;
          padding-top: 0.5rem;
          padding-right: 0.75rem;
          color: white;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
