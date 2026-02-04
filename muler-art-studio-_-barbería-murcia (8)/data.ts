
export const CONTACT = {
  name: 'MULER ART STUDIO',
  legalName: 'Muler Art Studio S.L.',
  founder: 'Muler',
  phone: '671 58 72 42',
  whatsapp: '34671587242',
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
  email: 'contacto@mulerartstudio.es',
  rating: 4.9,
  reviewCount: 43,
  priceRange: '€€',
  schedule: [
    { day: 'Lunes a Viernes', hours: '10:00 - 14:00 | 16:00 - 20:30', schema: ["Mo-Fr 10:00-14:00", "Mo-Fr 16:00-20:30"] },
    { day: 'Sábados', hours: '09:00 - 14:00', schema: ["Sa 09:00-14:00"] },
    { day: 'Domingos', hours: 'Cerrado', schema: [] }
  ]
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
    image: 'https://i.imgur.com/oCk6xJv.jpeg' // Se puede cambiar por la foto del fade neón
  },
  {
    id: 'corte-barba',
    slug: 'corte-pelo-arreglo-barba-murcia',
    title: 'Corte + Arreglo de barba',
    h1: 'Corte de Pelo y Arreglo de Barba en Murcia | Ritual Completo',
    description: 'Servicio integral que incluye corte de pelo, diseño de barba, lavado y peinado. El ritual definitivo.',
    price: '20.00',
    duration: '45 min',
    keywords: ['corte y barba murcia', 'barbería completa murcia', 'diseño barba murcia'],
    image: 'https://i.imgur.com/uGNnN5X.jpeg'
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
    image: 'https://i.imgur.com/4gLj7be.jpeg' // Usar la nueva foto del barbero perfilando barba
  },
  {
    id: 'diseno-cejas',
    slug: 'diseno-cejas-hombre-murcia',
    title: 'Diseño de cejas',
    h1: 'Diseño de Cejas para Hombre en Murcia',
    description: 'Diseño de cejas amoldándonos al rostro del cliente para sacar el máximo partido a tu mirada.',
    price: '5.00',
    duration: '15 min',
    keywords: ['diseño cejas murcia', 'cejas hombre murcia', 'mirada masculina'],
    image: 'https://i.imgur.com/XdHeZ6U.jpeg'
  }
];

export const IMAGES = {
  hero: 'https://i.imgur.com/jpuOQyo.jpeg',
  interior: 'https://i.imgur.com/25Oor3E.jpeg', // Foto de los espejos cuadrados (la nueva)
  storefront: 'https://i.imgur.com/zVv7M0S.jpeg', // Foto exterior nocturna
  portfolio: [
    'https://i.imgur.com/isPnSfU.jpeg',
    'https://i.imgur.com/f3CTJHf.jpeg',
    'https://i.imgur.com/zlIoksf.jpeg',
    'https://i.imgur.com/uXdzO8O.jpeg',
    'https://i.imgur.com/afOJSEw.jpeg',
    'https://i.imgur.com/vWEI3EJ.jpeg',
    'https://i.imgur.com/DIeCRjD.jpeg',
    'https://i.imgur.com/GWsaqWn.jpeg',
    'https://i.imgur.com/w6RAacG.jpeg',
    // Espacios para tus nuevas fotos
    'https://i.imgur.com/new_neon_fade.jpeg', // La foto de las luces neón
    'https://i.imgur.com/new_interior_wide.jpeg', // La foto amplia del local
    'https://i.imgur.com/new_barber_action.jpeg', // La foto del barbero trabajando
    'https://i.imgur.com/new_profile_fade.jpeg', // La foto del cliente pelirrojo
    'https://i.imgur.com/new_beard_detail.jpeg' // La foto de detalle de barba
  ]
};
