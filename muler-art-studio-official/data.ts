export const CONTACT = {
  name: 'MULER ART STUDIO',
  legalName: 'Muler Art Studio S.L.',
  founder: 'Abdi Simo',
  phone: '671 58 72 42',
  whatsapp: '34671587242',
  instagramUrl: 'https://www.instagram.com/_simoml/',
  address: 'Av. Miguel de Cervantes, 9',
  postalCode: '30009',
  city: 'Murcia',
  country: 'ES',
  coordinates: {
    latitude: 37.9957877,
    longitude: -1.1427737
  },
  mapsUrl: 'https://www.google.com/maps/place/MULER+ART+STUDIO/@37.9957877,-1.1427737,17z/data=!3m1!4b1!4m6!3m5!1s0xd63811e1ddc3727:0x8175126c1e12c496!8m2!3d37.9957877!4d-1.1427737!16s%2Fg%2F11lv20tkgw',
  reviewsUrl: 'https://www.google.com/maps/place/MULER+ART+STUDIO/@37.9957877,-1.1427737,17z/data=!4m8!3m7!1s0xd63811e1ddc3727:0x8175126c1e12c496!8m2!3d37.9957877!4d-1.1427737!9m1!1b1!16s%2Fg%2F11lv20tkgw',
  booksyUrl: 'https://booksy.com/es-es/114716_muler-art-studio_barberia_81274_la-albatalia',
  email: 'abdisimo1234@gmail.com',
  rating: 5.0,
  reviewCount: 246,
  priceRange: '€€',
  schedule: [
    { day: 'Lunes a Jueves', hours: '09:00 - 14:00 | 16:00 - 20:30', schema: ["Mo-Th 09:00-14:00", "Mo-Th 16:00-20:30"] },
    { day: 'Viernes y Sábados', hours: '09:00 - 22:00', schema: ["Fr-Sa 09:00-22:00"] },
    { day: 'Domingos', hours: 'Cerrado', schema: [] }
  ]
};

export const ABOUT = {
  team: [
    { name: 'Simo', role: 'Owner & Senior Barber', image: 'https://i.imgur.com/JqwwxKQ.jpeg' },
    { name: 'Tofé', role: 'Artist Barber', image: 'https://i.imgur.com/YJ3AxXb.jpeg' }
  ],
  story: "Nuestra historia empieza desde cero, con muchas ganas de aprender y salir adelante. Decidí ser barbero porque siempre mi llamó la atención el poder cambiar cómo una persona se ve y se siente con algo tan simple como un buen corte.",
  philosophy: "Empecé sin muchos recursos, cometiendo errores y aprendiendo en el proceso, pero con disciplina y constancia. Lo hago porque creo en el trabajo bien hecho, en el trato cercano con el cliente y en que cada corte es una oportunidad para mejorar y crecer.",
  mantra: "Barbería con identidad, disciplina y respeto por el oficio."
};

export const FAQS = [
  {
    question: "¿Es necesario reservar cita previa en Muler Art Studio?",
    answer: "Sí, para garantizar una experiencia de exclusividad y dedicarle el tiempo necesario a cada servicio de autor, recomendamos reservar a través de Booksy o WhatsApp."
  },
  {
    question: "¿Dónde se encuentra la barbería en Murcia?",
    answer: "Estamos ubicados en la Avenida Miguel de Cervantes, 9, en una zona céntrica y de fácil acceso en Murcia capital."
  },
  {
    question: "¿Qué servicios de barbería ofrecéis?",
    answer: "Somos especialistas en cortes de autor, degradados técnicos (fades), arreglo de barba con ritual de toalla caliente y diseño de cejas masculino."
  }
];

export const SERVICES = [
  {
    id: 'corte-pelo',
    slug: 'corte-pelo-murcia',
    title: 'Corte de pelo',
    h1: 'Corte de Pelo para Hombre en Murcia | Lavado & Peinado',
    description: 'Corte de pelo completo que incluye lavado y peinado profesional. Precisión técnica y asesoría de imagen.',
    price: '15.00',
    duration: '30 min',
    keywords: ['corte pelo murcia', 'peluquería hombre murcia', 'mejor barbero murcia'],
    image: 'https://i.imgur.com/7TyaO0F.jpeg'
  },
  {
    id: 'corte-barba',
    slug: 'corte-pelo-arreglo-barba-murcia',
    title: 'Corte de pelo + arreglo de barba',
    h1: 'Corte de Pelo y Arreglo de Barba en Murcia | Ritual Completo',
    description: 'Servicio integral que incluye corte de pelo, diseño de barba, lavado y peinado. El ritual definitivo.',
    price: '20.00',
    duration: '45 min',
    keywords: ['corte y barba murcia', 'barbería completa murcia', 'diseño barba murcia'],
    image: 'https://i.imgur.com/rTfwzay.jpeg'
  },
  {
    id: 'corte-completo',
    slug: 'corte-barba-cejas-murcia',
    title: 'Corte de pelo + arreglo de barba + diseño de cejas',
    h1: 'Ritual Completo: Corte, Barba y Cejas en Murcia',
    description: 'La experiencia de cuidado total. Incluye corte de autor, arreglo técnico de barba y diseño de cejas personalizado.',
    price: '23.00',
    duration: '60 min',
    keywords: ['ritual completo murcia', 'barbería integral', 'estilo masculino murcia'],
    image: 'https://i.imgur.com/OC4BdTu.jpeg'
  },
  {
    id: 'arreglo-barba',
    slug: 'arreglo-barba-diseno-murcia',
    title: 'Arreglo de barba',
    h1: 'Arreglo y Diseño de Barba en Murcia | Precisión & Estilo',
    description: 'Servicio especializado en el arreglo y diseño de la barba con ritual de toalla caliente.',
    price: '8.00',
    duration: '20 min',
    keywords: ['arreglo barba murcia', 'perfilado barba murcia', 'barber shop murcia'],
    image: 'https://i.imgur.com/ll3522A.jpeg'
  },
  {
    id: 'corte-premium',
    slug: 'corte-pelo-premium-murcia',
    title: 'Corte de pelo premium',
    h1: 'Experiencia Premium: Corte de Autor y Bienestar en Murcia',
    description: 'Nuestro servicio más exclusivo. Incluye corte de precisión, ritual de toalla caliente extendido, masaje capilar y productos de alta gama.',
    price: '29.00',
    duration: '60 min',
    keywords: ['corte premium murcia', 'mejor peluquería murcia', 'ritual de autor'],
    image: 'https://0c62dtvaztg6t1ql.public.blob.vercel-storage.com/corte%20premium'
  }
];

export const IMAGES = {
  hero: 'https://i.imgur.com/OC4BdTu.jpeg',
  interior: 'https://i.imgur.com/9mS8oGC.jpeg',
  storefront: 'https://i.imgur.com/OdMwwWJ.jpeg',
  portfolio: [
    'https://i.imgur.com/hLxzN4x.jpeg',
    'https://i.imgur.com/ma8S5IS.jpeg',
    'https://i.imgur.com/iUhj5al.jpeg',
    'https://i.imgur.com/LdoHala.jpeg',
    'https://i.imgur.com/OC4BdTu.jpeg',
    'https://i.imgur.com/9mS8oGC.jpeg',
    'https://i.imgur.com/OdMwwWJ.jpeg'
  ]
};
