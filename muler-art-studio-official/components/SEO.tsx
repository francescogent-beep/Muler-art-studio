import React, { useEffect } from 'react';
import { CONTACT, IMAGES } from '../data';

interface SEOProps {
  title: string;
  description: string;
  slug?: string;
  keywords?: string[];
  schema?: any;
}

export default function SEO({ title, description, slug = '', keywords = [], schema }: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords.join(', '));
    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:url', `https://mulerartstudio.com/${slug}`);
    setMeta('og:site_name', CONTACT.name);
    setMeta('og:type', 'website');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Schema injection
    const existingSchema = document.getElementById('json-ld-schema');
    if (existingSchema) existingSchema.remove();

    const script = document.createElement('script');
    script.id = 'json-ld-schema';
    script.type = 'application/ld+json';
    
    const openingHours = CONTACT.schedule.flatMap(s => (s as any).schema || []);

    // 1. BarberShop Schema (Main Entity)
    const barberShopSchema: any = {
      "@type": "BarberShop",
      "@id": "https://mulerartstudio.com/#organization",
      "name": CONTACT.name,
      "url": "https://mulerartstudio.com",
      "logo": "https://mulerartstudio.com/favicon.svg",
      "image": IMAGES.interior,
      "telephone": CONTACT.phone,
      "priceRange": CONTACT.priceRange || "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT.address,
        "addressLocality": CONTACT.city,
        "postalCode": CONTACT.postalCode,
        "addressCountry": CONTACT.country
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": CONTACT.coordinates.latitude,
        "longitude": CONTACT.coordinates.longitude
      },
      "openingHours": openingHours,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": CONTACT.rating,
        "bestRating": 5,
        "worstRating": 1,
        "reviewCount": CONTACT.reviewCount
      },
      "sameAs": [
        "https://www.instagram.com/mulerartstudio",
        `https://wa.me/${CONTACT.whatsapp}`
      ]
    };

    // 2. Breadcrumb Schema
    const breadcrumbList = {
      "@type": "BreadcrumbList",
      "@id": `https://mulerartstudio.com/${slug}#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://mulerartstudio.com/"
        }
      ]
    };

    if (slug) {
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": title.split('|')[0].trim(),
        "item": `https://mulerartstudio.com/${slug}`
      });
    }

    // Clean additional schema from potential @context to avoid nesting errors
    let cleanExtraSchema = schema;
    if (schema && schema['@context']) {
      const { '@context': _, ...rest } = schema;
      cleanExtraSchema = rest;
    }

    const combinedSchema = cleanExtraSchema 
      ? [barberShopSchema, breadcrumbList, cleanExtraSchema] 
      : [barberShopSchema, breadcrumbList];

    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": combinedSchema
    });
    document.head.appendChild(script);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://mulerartstudio.com/${slug}`);

  }, [title, description, slug, keywords, schema]);

  return null;
}
