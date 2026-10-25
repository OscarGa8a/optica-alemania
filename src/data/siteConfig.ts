export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface BusinessContact {
  phonePrimary: string;
  phoneSecondary: string;
  phoneTel: string;
  whatsappNumber: string;
  address: string;
  neighborhood: string;
  city: string;
  department: string;
  schedule: string;
  instagram: string;
  instagramUrl: string;
  facebookUrl: string;
  googleMapsUrl: string;
}

export interface SocialProof {
  rating: string;
  reviewCount: number;
  source: string;
  sourceLabel: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  whatsappMessage: string;
}

export interface TechnologyItem {
  id: string;
  number: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  duration: string;
  image: string;
  alt: string;
  actionText: string;
  actionHref: string;
  whatsappMessage: string;
}

export interface SpaceImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SpaceSectionConfig {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  images: {
    main: SpaceImage;
    shelves: SpaceImage;
    clinic: SpaceImage;
  };
}

export interface KidsVisionConfig {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  titlePart3: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  noteText: string;
  videoDuration: string;
  image: SpaceImage;
}

export interface FrameCategory {
  id: string;
  title: string;
  image: SpaceImage;
  whatsappMessage: string;
}

export interface FramesConfig {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  categories: FrameCategory[];
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  city: string;
  description: string;
  contact: BusinessContact;
  social: {
    instagram: string;
    facebook: string;
  };
  socialProof: SocialProof;
  nav: NavItem[];
  services: ServiceItem[];
  technologies: TechnologyItem[];
  space: SpaceSectionConfig;
  kidsVision: KidsVisionConfig;
  frames: FramesConfig;
}

export const siteConfig: SiteConfig = {
  name: "Óptica Alemania",
  legalName: "Óptica Alemania Villavicencio",
  tagline: "Cuidamos tu visión con experiencia y tecnología.",
  city: "Villavicencio",
  description: "Atención optométrica, evaluaciones especializadas y soluciones para tu salud visual en Villavicencio.",
  contact: {
    phonePrimary: "311 201 7302",
    phoneSecondary: "322 712 8828",
    phoneTel: "+573112017302",
    whatsappNumber: "573112017302",
    address: "Calle 35 #34-36, Barzal Bajo",
    neighborhood: "Barzal Bajo",
    city: "Villavicencio",
    department: "Meta",
    schedule: "Lunes a viernes 8:30 a. m. – 6:00 p. m. | Sábados 8:30 a. m. – 3:00 p. m.",
    instagram: "@opticaalemania",
    instagramUrl: "https://www.instagram.com/opticaalemania/",
    facebookUrl: "https://www.facebook.com/opticaalemaniavillavicencio/",
    googleMapsUrl: "https://maps.google.com/?q=Calle+35+%2334-36+Barzal+Bajo+Villavicencio+Meta",
  },
  social: {
    instagram: "https://www.instagram.com/opticaalemania/",
    facebook: "https://www.facebook.com/opticaalemaniavillavicencio/",
  },
  socialProof: {
    rating: "5.0",
    reviewCount: 38,
    source: "Google",
    sourceLabel: "Google · 38 reseñas",
  },
  nav: [
    { label: "Inicio", href: "#inicio", active: true },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Procedimientos", href: "#procedimientos" },
    { label: "Monturas", href: "#monturas" },
    { label: "Contacto", href: "#contacto" },
  ],
  services: [
    {
      id: "optometria",
      number: "01",
      title: "Consulta de optometría especializada",
      description: "Evaluación completa de tu salud visual con tecnología avanzada.",
      image: "/images/home/3_nuestros_servicios_image2.webp",
      alt: "Equipo de foróptero para consulta de optometría especializada en Óptica Alemania",
      whatsappMessage: "Hola, me gustaría agendar una consulta de optometría especializada en Óptica Alemania.",
    },
    {
      id: "lentes-contacto",
      number: "02",
      title: "Adaptación de lentes de contacto",
      description: "Asesoría y adaptación personalizada según tus necesidades visuales.",
      image: "/images/home/3_nuestros_servicios_image3.webp",
      alt: "Lente de contacto para adaptación clínica personalizada",
      whatsappMessage: "Hola, deseo información sobre la adaptación de lentes de contacto en Óptica Alemania.",
    },
    {
      id: "presion-intraocular",
      number: "03",
      title: "Toma de presión intraocular",
      description: "Evaluación preventiva para el cuidado de la salud de tus ojos.",
      image: "/images/home/3_nuestros_servicios_image4.webp",
      alt: "Examen de tonometría y toma de presión intraocular para prevención de glaucoma",
      whatsappMessage: "Hola, me interesa agendar una toma de presión intraocular en Óptica Alemania.",
    },
    {
      id: "ojo-seco",
      number: "04",
      title: "Test de ojo seco",
      description: "Diagnóstico especializado para detectar y tratar la sequedad ocular.",
      image: "/images/home/3_nuestros_servicios_image6.webp",
      alt: "Evaluación biomicroscópica con luz azul para diagnóstico de ojo seco",
      whatsappMessage: "Hola, deseo consultar sobre el examen y tratamiento para ojo seco en Óptica Alemania.",
    },
  ],
  technologies: [
    {
      id: "volk-inview",
      number: "01",
      titlePart1: "Evaluación retinal",
      titlePart2: "con Volk iNview",
      description: "Utilizamos tecnología de imagen avanzada para obtener una vista detallada de la retina y apoyar el diagnóstico de tu salud visual.",
      duration: "0:28",
      image: "/images/home/4_tecnologia_accion_image1.webp",
      alt: "Especialista realizando evaluación retinal con dispositivo Volk iNview en Óptica Alemania",
      actionText: "Conocer procedimiento",
      actionHref: "#procedimientos",
      whatsappMessage: "Hola, me gustaría conocer más sobre la evaluación retinal con Volk iNview en Óptica Alemania.",
    },
    {
      id: "farnsworth-d15",
      number: "02",
      titlePart1: "Test de",
      titlePart2: "Farnsworth D-15",
      description: "Evaluamos tu visión cromática mediante una prueba especializada que detecta alteraciones en la percepción de los colores.",
      duration: "0:32",
      image: "/images/home/4_tecnologia_accion_image2.webp",
      alt: "Paciente realizando el Test de Farnsworth D-15 para visión del color en Óptica Alemania",
      actionText: "Conocer procedimiento",
      actionHref: "#procedimientos",
      whatsappMessage: "Hola, deseo información sobre el test de visión cromática Farnsworth D-15 en Óptica Alemania.",
    },
  ],
  space: {
    eyebrow: "NUESTRO ESPACIO",
    titlePart1: "Conoce el lugar donde",
    titlePart2: "cuidamos tu visión.",
    description: "Descubre nuestras instalaciones, los espacios de atención y el entorno donde nuestro equipo trabaja por tu bienestar visual.",
    ctaText: "Conoce más de nosotros",
    ctaHref: "#nosotros",
    images: {
      main: {
        src: "/images/home/5_nuestro_espacio_image1.webp",
        alt: "Recepción y sala de espera moderna de Óptica Alemania en Villavicencio",
        width: 1028,
        height: 624,
      },
      shelves: {
        src: "/images/home/5_nuestro_espacio_image2.webp",
        alt: "Exhibidores iluminados con monturas oftálmicas y gafas de sol en Óptica Alemania",
        width: 632,
        height: 296,
      },
      clinic: {
        src: "/images/home/5_nuestro_espacio_image3.webp",
        alt: "Consultorio optométrico equipado con lámpara de hendidura y monitor de diagnóstico visual",
        width: 632,
        height: 296,
      },
    },
  },
  kidsVision: {
    eyebrow: "SALUD VISUAL INFANTIL",
    titlePart1: "Su visión merece",
    titlePart2: "atención desde",
    titlePart3: "pequeños.",
    description: "Acompañamos el cuidado visual de los niños mediante evaluaciones que ayudan a identificar posibles dificultades visuales desde edades tempranas.",
    ctaText: "Consultar atención infantil",
    whatsappMessage: "Hola, me gustaría consultar por la atención visual infantil y agendar una cita en Óptica Alemania.",
    noteText: "Consulta también por el certificado visual escolar.",
    videoDuration: "3:50",
    image: {
      src: "/images/home/6_visual_infantil_image.webp",
      alt: "Especialista de Óptica Alemania realizando examen optométrico pediátrico con lámpara de hendidura a niña paciente",
      width: 1672,
      height: 941,
    },
  },
  frames: {
    eyebrow: "MONTURAS Y ESTILO",
    titlePart1: "Una montura que",
    titlePart2: "va contigo.",
    description: "Descubre opciones de monturas para mujer, hombre y niños, con diferentes estilos y diseños para encontrar el que mejor se adapte a ti.",
    ctaText: "Explorar monturas",
    whatsappMessage: "Hola, me gustaría explorar las opciones de monturas y estilos disponibles en Óptica Alemania.",
    categories: [
      {
        id: "mujer",
        title: "Mujer",
        image: {
          src: "/images/home/7_monturas_image1.webp",
          alt: "Colección de monturas oftálmicas y de diseño para mujer en Óptica Alemania",
          width: 540,
          height: 615,
        },
        whatsappMessage: "Hola, me gustaría conocer la colección de monturas para mujer en Óptica Alemania.",
      },
      {
        id: "hombre",
        title: "Hombre",
        image: {
          src: "/images/home/7_monturas_image2.webp",
          alt: "Colección de monturas oftálmicas modernas y elegantes para hombre en Óptica Alemania",
          width: 540,
          height: 615,
        },
        whatsappMessage: "Hola, me gustaría conocer la colección de monturas para hombre en Óptica Alemania.",
      },
      {
        id: "ninos",
        title: "Niños",
        image: {
          src: "/images/home/7_monturas_image3.webp",
          alt: "Colección de monturas oftálmicas resistentes, cómodas y ligeras para niños en Óptica Alemania",
          width: 540,
          height: 615,
        },
        whatsappMessage: "Hola, me gustaría conocer la colección de monturas infantiles en Óptica Alemania.",
      },
    ],
  },
};
