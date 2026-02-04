
const IS_PROD = typeof window !== 'undefined' && 
  (window.location.hostname === 'mulerartstudio.es' || window.location.hostname === 'www.mulerartstudio.es');

const getAsset = (localPath: string, previewUrl: string) => IS_PROD ? localPath : previewUrl;

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
    image: getAsset('/images/service-corte-pelo.webp', 'https://i.imgur.com/hLxzN4x.jpeg')
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
    image: getAsset('/images/service-corte-barba.webp', 'https://i.imgur.com/ma8S5IS.jpeg')
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
    image: getAsset('/images/service-arreglo-barba.webp', 'https://i.imgur.com/iUhj5al.jpeg')
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
    image: getAsset('/images/service-diseno-cejas.webp', 'https://i.imgur.com/LdoHala.jpeg')
  }
];

export const IMAGES = {
  hero: getAsset('/images/hero.webp', 'https://i.imgur.com/OC4BdTu.jpeg'),
  interior: getAsset('/images/interior.webp', 'https://i.imgur.com/9mS8oGC.jpeg'),
  storefront: getAsset('/images/storefront.webp', 'https://i.imgur.com/OdMwwWJ.jpeg'),
  portfolio: [
    getAsset('/images/portfolio-1.webp', 'https://i.imgur.com/hLxzN4x.jpeg'),
    getAsset('/images/portfolio-2.webp', 'https://i.imgur.com/ma8S5IS.jpeg'),
    getAsset('/images/portfolio-3.webp', 'https://i.imgur.com/iUhj5al.jpeg'),
    getAsset('/images/portfolio-4.webp', 'https://i.imgur.com/LdoHala.jpeg'),
    getAsset('/images/portfolio-7.webp', 'https://i.imgur.com/OdMwwWJ.jpeg')
  ]
};
