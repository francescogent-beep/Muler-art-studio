
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

export const optimizeImg = (url: string, suffix: 'l' | 'h' | '' = 'h') => {
  if (!url.includes('imgur.com')) return url;
  if (url.includes('.mp4')) return url;
  const parts = url.split('.');
  const ext = parts.pop();
  return `${parts.join('.')}${suffix}.${ext}`;
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
  },
  {
    id: 3,
    slug: 'mantenimiento-degradado-fade',
    title: 'Guía Maestra: Cómo Mantener tu Degradado como el Primer Día',
    date: '28 Ene 2025',
    category: 'Guía',
    excerpt: 'Consejos profesionales para prolongar la nitidez de tu fade entre visitas. Optimiza tu imagen en nuestra barbería en Murcia.',
    image: 'https://i.imgur.com/OC4BdTu.jpeg',
    content: `
La sensación de salir de la barbería con un "Skin Fade" perfecto es inigualable. Sin embargo, sabemos que el cabello crece rápido y esa nitidez cristalina empieza a desvanecerse a los pocos días. En esta guía, el equipo de **Muler Art Studio** te desvela los secretos para que tu visita a nuestra **barbería en Murcia** rinda al máximo y luzcas un corte impecable durante semanas.

### Reglas de oro para tu mantenimiento:

*   **Limpieza de Contornos:** Si te atreves, utiliza una pequeña patillera para limpiar únicamente el vello fino que crece en la zona del cuello y detrás de las orejas. Mantener estas líneas limpias dará la ilusión de que el corte principal sigue fresco.
*   **Hidratación sin Residuos:** El cuero cabelludo en los degradados extremos está muy expuesto. Utiliza champús suaves y evita ceras que dejen residuos blancos, ya que estos apagan el contraste de las sombras de tu degradado.
*   **El Cepillado es Clave:** Para degradados que conectan con barbas, cepillar el vello hacia abajo ayuda a mantener la estructura y evita que el volumen se descontrole.

### La importancia de la regularidad

Aunque estos consejos ayudan, nada sustituye la mano de un **barbero experto en Murcia**. Recomendamos programar tus visitas cada 15 o 20 días para "refrescar" el degradado sin perder la base del diseño. Un buen corte es una inversión en tu marca personal.

Si quieres complementar tu look, echa un vistazo a los [estilos de barba que están marcando tendencia en Murcia](/blog/estilos-barba-murcia-mas-pedidos). Te esperamos para esculpir tu próxima versión.
    `
  },
  {
    id: 4,
    slug: 'afeitado-clasico-murcia-ritual',
    title: 'Afeitado Clásico: La Maestría de la Navaja en el Corazón de Murcia',
    date: '20 Ene 2025',
    category: 'Rituales',
    excerpt: 'El regreso de la navaja tradicional. Descubre por qué el afeitado clásico en MULER ART STUDIO es un lujo necesario para el hombre moderno.',
    image: 'https://i.imgur.com/ll3522A.jpeg',
    content: `
En un mundo dominado por las máquinas eléctricas y las cuchillas de plástico desechables, en **Muler Art Studio** hemos decidido dar un paso atrás para avanzar. El afeitado clásico a navaja es una disciplina que exige pulso, paciencia y un conocimiento profundo de la dirección del crecimiento del vello. En nuestra **barbería en Murcia**, este servicio se ha convertido en uno de los más demandados por hombres que buscan un apurado imposible de conseguir en casa.

### ¿Por qué elegir el afeitado tradicional?

*   **Precisión Milimétrica:** La navaja nos permite llegar a ángulos y zonas del cuello donde las máquinas fallan, ofreciendo una piel suave como la seda.
*   **Prevención de Vello Encarnado:** Al realizar una pasada limpia y única con el ángulo correcto, reducimos drásticamente la posibilidad de que el pelo se enquiste, un problema crónico para muchos hombres murcianos.
*   **Higiene Mental:** No es solo estética. El silencio de la navaja sobre la piel y el aroma del jabón de afeitar aplicado con brocha de tejón crean un oasis de paz.

### El Proceso Artesanal

Nuestro ritual comienza con un masaje facial con aceites esenciales para ablandar la queratina del pelo. Luego, montamos el jabón en un tazón de cerámica hasta conseguir una espuma densa y cremosa que aplicamos con movimientos circulares. Cada pasada de navaja es un ejercicio de respeto por la piel. Finalizamos con un tónico de alumbre y una hidratación profunda que cierra los poros y calma cualquier rojez.

Este ritual se potencia al máximo con nuestro famoso [servicio de toalla caliente](/blog/ritual-toalla-caliente-barba). Redescubre el placer de ser atendido por un auténtico barbero de autor en Murcia.
    `
  },
  {
    id: 5,
    slug: 'mejor-barbero-murcia-guia',
    title: 'Cómo Identificar a un Barbero de Autor en Murcia',
    date: '12 Ene 2025',
    category: 'Consejos',
    excerpt: 'Claves para elegir tu barbería de confianza. Técnica, visión artística y trato personalizado en la capital del Segura.',
    image: 'https://i.imgur.com/JqwwxKQ.jpeg',
    content: `
No todas las barberías son iguales. En los últimos años, Murcia ha visto florecer decenas de locales, pero pocos pueden decir que ofrecen una experiencia de "autor". Elegir al **mejor barbero en Murcia** para tu estilo no es una decisión que deba tomarse a la ligera, ya que tu cabello es tu principal accesorio. Aquí te damos las pautas para que identifiques dónde hay un verdadero artista de la tijera y la navaja.

### Lo que define a un profesional de élite:

1.  **La Consulta Previa:** Un barbero mediocre empieza a cortar a los 10 segundos de que te sientas. Un barbero de autor en **Muler Art Studio** te preguntará por tu trabajo, tus hábitos de peinado y analizará tus facciones durante al menos 5 minutos antes de empezar.
2.  **Dominio de la Ergonomía:** Fíjate en cómo maneja las herramientas. La fluidez en el movimiento y la seguridad con la navaja son signos inequívocos de miles de horas de práctica.
3.  **Higiene y Detalle:** La limpieza del puesto de trabajo y la desinfección de las herramientas entre clientes hablan de un profesional que respeta su oficio y a su clientela.

### La Experiencia Muler

En nuestro estudio, no creemos en las modas pasajeras que no te favorecen. Nuestra misión es encontrar un equilibrio entre lo que quieres y lo que realmente te queda bien. Nuestra [galería de trabajos](/galeria) es el mejor testimonio de la versatilidad de nuestro equipo. 

Si buscas dar un salto de calidad en tu imagen, no dudes en visitarnos. Estamos aquí para asesorarte sobre las [últimas tendencias de 2025](/blog/tendencias-barberia-murcia-2025) y adaptarlas a tu personalidad única.
    `
  },
  {
    id: 6,
    slug: 'estilos-barba-murcia-mas-pedidos',
    title: 'Anatomía de la Barba Perfecta: Los Estilos más Pedidos',
    date: '02 Ene 2025',
    category: 'Estilo',
    excerpt: 'Exploramos los looks de barba que definen la estética masculina en Murcia. Personalización y diseño técnico de alto nivel.',
    image: 'https://i.imgur.com/rTfwzay.jpeg',
    content: `
La barba ha dejado de ser una opción para convertirse en una declaración de intenciones. Bien llevada, puede modificar la estructura de tu rostro, ocultar una mandíbula débil o enfatizar tus pómulos. En nuestra **barbería en Murcia**, el diseño de barba es uno de nuestros servicios estrella, y hoy queremos compartir contigo qué es lo que más nos piden nuestros clientes más exigentes.

### Estilos ganadores en la calle:

*   **El Stubble Fade (Barba de 3 días técnica):** Es quizás el estilo más difícil de conseguir. Consiste en una barba muy corta pero con los bordes y el cuello perfectamente degradados, conectando con el pelo de forma invisible.
*   **Barba Boxed (Corporativa):** Un estilo denso, bien perfilado y con una longitud controlada que no supera los 2 centímetros. Es la elección perfecta para el profesional que trabaja en el centro de Murcia y necesita un look pulcro pero con carácter.
*   **La Barba Vikinga Sculpted:** Para los que aman el volumen. No es una barba descuidada, sino una estructura larga pero esculpida con tijera para evitar que se abra por los lados, manteniendo una silueta afilada.

### Cuidado y Nutrición en el Clima de Murcia

El agua de Murcia es dura y el clima seco, lo que suele resecar la barba y causar picor. En MULER ART STUDIO siempre recomendamos finalizar tu servicio con un aceite hidratante de calidad. Si quieres saber más sobre cómo mantener la forma entre visitas, consulta nuestra [guía de mantenimiento de fade y barba](/blog/mantenimiento-degradado-fade).

Tu barba es el marco de tu sonrisa. No la dejes en manos de cualquiera, ven a la **barber shop en Murcia** donde el detalle es nuestra única religión.
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
