
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
    setMeta('og:url', `https://mulerartstudio.es/${slug}`);
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

    // 1. BarberShop Schema
    const barberShopSchema = {
      "@type": "BarberShop",
      "@id": "https://mulerartstudio.es/#organization",
      "name": CONTACT.name,
      "legalName": (CONTACT as any).legalName,
      "image": `https://mulerartstudio.es${IMAGES.interior}`,
      "url": "https://mulerartstudio.es",
      "telephone": CONTACT.phone,
      "priceRange": CONTACT.priceRange || "$$",
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
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://mulerartstudio.es/"
        }
      ]
    };

    if (slug) {
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": title.split('|')[0].trim(),
        "item": `https://mulerartstudio.es/${slug}`
      });
    }

    const combinedSchema = schema ? [barberShopSchema, breadcrumbList, schema] : [barberShopSchema, breadcrumbList];

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
    canonical.setAttribute('href', `https://mulerartstudio.es/${slug}`);

  }, [title, description, slug, keywords, schema]);

  return null;
}
