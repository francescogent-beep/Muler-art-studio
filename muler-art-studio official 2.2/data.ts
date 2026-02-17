
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
  neighborhood: 'San Basilio / Junto a La Opinión / Ranero',
  country: 'ES',
  coordinates: {
    latitude: 37.9957877,
    longitude: -1.1427737
  },
  mapsUrl: 'https://www.google.com/maps/place/MULER+ART+STUDIO/@37.9957877,-1.1427737,17z/data=!3m1!4b1!4m6!3m5!1s0xd63811e1ddc3727:0x8175126c1e12c496!8m2!3d37.9957877!4d-1.1427737!16s%2Fg%2F11lv20tkgw',
  reviewsUrl: 'https://www.google.com/maps/place/MULER+ART+STUDIO/@37.9957877,-1.1427737,17z/data=!4m8!3m7!1s0xd63811e1ddc3727:0x8175126c1e12c496!8m2!3d37.9957877!4d-1.1427737!9m1!1b1!16s%2Fg%2F11lv20tkgw',
  booksyUrl: 'https://booksy.com/es-es/114716_muler-art-studio_barberia_81274_la-albatalia',
  email: 'abdisimo1234@gmail.com',
  rating: 4.9,
  reviewCount: 52,
  priceRange: '€€',
  schedule: [
    { day: 'Lunes a Jueves', hours: '09:00 - 14:00 | 16:00 - 20:30', schema: ["Mo-Th 09:00-14:00", "Mo-Th 16:00-20:30"] },
    { day: 'Viernes y Sábados', hours: '09:00 - 22:00', schema: ["Fr-Sa 09:00-22:00"] },
    { day: 'Domingos', hours: 'Cerrado', schema: [] }
  ]
};

export const GOOGLE_REVIEWS_HIGHLIGHTS = [
  { text: "10/10, todo perfecto, corte, ambiente, simpatía...", author: "JuanPe" },
  { text: "Desde que entras hasta que sales te sientes como en casa...", author: "Angel Costa" },
  { text: "Excelente servicio muy profesional atento al detalle...", author: "Antonio Soto" },
  { text: "Gran barbero, muy profesional y con mucha experiencia.", author: "Maria Zaragoza" },
  { text: "Maxima calidad en el servicio y un trato humano espectacular 🤩", author: "Salvador Cabanes" },
  { text: "El mejor peluquero de la región 😉", author: "Alberto Feringues" }
];

export const optimizeImg = (url: string, suffix: 'l' | 'h' | '' = 'h') => {
  if (!url.includes('imgur.com')) return url;
  if (url.includes('.mp4')) return url;
  const parts = url.split('.');
  parts.pop(); // Remove extension
  // Imgur converts to webp automatically if we append the suffix and use .webp extension
  return `${parts.join('.')}${suffix}.webp`;
};

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'tendencias-barberia-murcia-2025',
    title: 'Tendencias de Barbería de Autor en Murcia para 2025',
    date: '10 Feb 2025',
    category: 'Estilo',
    excerpt: '¿Buscas el mejor barbero en Murcia? Descubre los cortes que dominarán las calles este año: Mullet técnico, Buzz Cut y texturas naturales.',
    image: 'https://i.imgur.com/hLxzN4x.jpeg',
    content: `
El panorama de la peluquería masculina en nuestra ciudad está viviendo una auténtica revolución técnica. El 2025 no es solo un año de cambio, sino de reafirmación de la identidad a través de cortes que exigen una precisión quirúrgica. En nuestra **barbería en Murcia**, hemos notado cómo el cliente ya no busca solo "cortarse el pelo", sino encontrar un estilo que defina su estilo de vida urbano y dinámico.

### Los estilos que dominan la escena murciana:

*   **El Mullet Moderno y Técnico:** Olvida la versión desaliñada de los 80. El Mullet de 2025 es pulido, con degradados laterales (taper fades) que conectan de forma fluida con una nuca texturizada. Es el corte favorito de quienes buscan destacar en el centro de Murcia.
*   **Buzz Cut con Diseño Geométrico:** La simplicidad llevada al extremo. Un rapado milimétrico que se complementa con líneas de diseño o "hair tattoo" minimalistas. Como cada **barbero en Murcia** sabe, la clave de este corte es la limpieza absoluta de los contornos.
*   **Texturas Orgánicas y Naturales:** Estamos dejando atrás las ceras pesadas. Ahora la tendencia es el uso de polvos de peinado que aportan volumen y movimiento sin sacrificar la naturalidad.

### Por qué Murcia apuesta por la Barbería de Autor

En MULER ART STUDIO, entendemos que el clima de Murcia influye en tu cabello. La humedad y el calor exigen cortes que no solo se vean bien al salir de la silla, sino que sean fáciles de mantener y frescos durante el día a día. Nuestra filosofía se aleja de los cortes "en serie" de las grandes franquicias para ofrecerte una asesoría real basada en tu estructura ósea.

Si quieres que tu estilo se mantenga impecable por más tiempo, te recomendamos encarecidamente que leas nuestra [guía de mantenimiento de degradados](/blog/mantenimiento-degradado-fade). Ven a conocernos y descubre por qué somos considerados por muchos como la **mejor barbería en Murcia** para quienes buscan un cambio real.
    `
  },
  {
    id: 2,
    slug: 'ritual-toalla-caliente-barba',
    title: 'El Ritual de la Toalla Caliente: El Secreto de una Barba Perfecta',
    date: '05 Feb 2025',
    category: 'Cuidado',
    excerpt: 'Más que un afeitado, una experiencia sensorial en Murcia. Analizamos por qué somos la barbería en Murcia elegida para el cuidado integral del rostro.',
    image: 'https://i.imgur.com/rTfwzay.jpeg',
    content: `
Entrar en **Muler Art Studio** es sumergirse en una tradición que parece haberse perdido en la velocidad del mundo moderno. Para nosotros, el arreglo de barba no es un trámite; es un arte que requiere tiempo, técnica y, sobre todo, pasión. El uso de la toalla caliente es el pilar fundamental de esta experiencia sensorial que transforma un simple afeitado en un momento de desconexión absoluta.

### Los beneficios reales que tu piel agradecerá:

*   **Apertura Profunda de Poros:** El calor húmedo prepara la dermis, abriendo los poros y permitiendo que la navaja se deslice sin ninguna resistencia. Esto es vital para evitar la foliculitis y la irritación tan común en los afeitados caseros.
*   **Relajación de la Fibra Capilar:** La toalla caliente suaviza el vello más duro y rebelde, lo que nos permite un perfilado mucho más exacto y limpio.
*   **Higiene y Desintoxicación:** El vapor ayuda a eliminar impurezas y toxinas acumuladas, dejando la piel del rostro revitalizada y lista para recibir los tratamientos de hidratación.

### El Arreglo Técnico en Muler Art Studio

Un verdadero **arreglo de barba en Murcia** debe ser un proceso de varios pasos. Empezamos con un aceite pre-afeitado que protege la piel, seguido del ritual de toallas, y culminamos con un masaje con bálsamos orgánicos que nutren el vello desde la raíz. Buscamos que cada cliente salga de nuestra barbería no solo con una mejor imagen, sino con una sensación de bienestar renovada.

Este proceso es el compañero inseparable de nuestro [afeitado clásico tradicional](/blog/afeitado-clasico-murcia-ritual). Si buscas un refugio de calma en pleno Murcia centro, reserva tu cita y permítete disfrutar del ritual.
    `
  }
];

export const ABOUT = {
  team: [
    { name: 'Simo', role: 'Owner & Senior Barber', image: 'https://i.imgur.com/JqwwxKQ.jpeg' },
    { name: 'Tofé', role: 'Artist Barber', image: 'https://i.imgur.com/YJ3AxXb.jpeg' }
  ],
  story: "Nuestra historia empieza desde cero, con mucha ganas de aprender y salir adelante. Decidí ser barbero porque siempre mi llamó la atención el poder cambiar cómo una persona se ve y se siente con algo tan simple como un buen corte.",
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
    answer: "Estamos ubicados en la Avenida Miguel de Cervantes, 9, en el barrio de San Basilio, junto a la redacción de La Opinión y muy cerca de El Corte Inglés."
  },
  {
    question: "¿Qué servicios de barbería ofrecéis?",
    answer: "Somos especialistas en cortes de autor, degradados técnicos (fades), arreglo de barba con ritual de toalla caliente y diseño de cejas masculino en el centro de Murcia."
  }
];

export const SERVICES = [
  {
    id: 'corte-pelo',
    slug: 'corte-pelo-murcia',
    title: 'Corte de pelo',
    h1: 'Mejor Corte de Pelo Hombre en Murcia | Lavado & Estilo',
    description: 'Corte de pelo completo en el centro de Murcia que incluye lavado y peinado profesional. Precisión técnica y asesoría de imagen personalizada.',
    price: '15.00',
    duration: '30 min',
    keywords: ['corte pelo murcia', 'peluquería hombre murcia', 'mejor barbero murcia'],
    image: '/images/corte-pelo-MAS.webp'
  },
  {
    id: 'corte-barba',
    slug: 'corte-pelo-arreglo-barba-murcia',
    title: 'Corte de pelo + arreglo de barba',
    h1: 'Corte de Pelo y Arreglo de Barba en Murcia | Experiencia Completa',
    description: 'Servicio integral en nuestra barbería de Murcia: incluye corte de pelo, diseño de barba, lavado y peinado. El ritual definitivo para el hombre actual.',
    price: '20.00',
    duration: '45 min',
    keywords: ['corte y barba murcia', 'barbería completa murcia', 'diseño barba murcia'],
    image: '/images/corte-barba-MAS.webp
'
  },
  {
    id: 'corte-completo',
    slug: 'corte-barba-cejas-murcia',
    title: 'Corte de pelo + arreglo de barba + diseño de cejas',
    h1: 'Ritual de Autor: Corte, Barba y Cejas en Murcia Centro',
    description: 'La experiencia de cuidado total en Murcia. Incluye corte de autor, arreglo técnico de barba y diseño de cejas personalizado.',
    price: '23.00',
    duration: '60 min',
    keywords: ['ritual completo murcia', 'barbería integral', 'estilo masculino murcia'],
    image: '/images/461859504_564003032634979_7637309143125127325_n.webp'
  },
  {
    id: 'arreglo-barba',
    slug: 'arreglo-barba-diseno-murcia',
    title: 'Arreglo de barba',
    h1: 'Arreglo y Diseño de Barba en Murcia | Ritual Toalla Caliente',
    description: 'Servicio especializado en el arreglo y diseño de la barba con ritual de toalla caliente en el corazón de Murcia capital.',
    price: '8.00',
    duration: '20 min',
    keywords: ['arreglo barba murcia', 'perfilado barba murcia', 'barber shop murcia'],
    image: '/images/arreglo-barba.webp'
  },
  {
    id: 'corte-premium',
    slug: 'corte-pelo-premium-murcia',
    title: 'Corte de pelo premium',
    h1: 'Experiencia Premium: Corte de Autor y Bienestar en Murcia',
    description: 'Nuestro servicio más exclusivo. Incluye corte de precisión, ritual de toalla caliente extendido, masaje capilar y productos de alta gama en Murcia.',
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
