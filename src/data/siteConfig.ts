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

export interface TrajectoryOrganization {
  id: string;
  name: string;
  image: SpaceImage;
}

export interface TrajectoryConfig {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  organizations: TrajectoryOrganization[];
}

export interface ContactSectionConfig {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  whatsappMessage: string;
  mapImage: SpaceImage;
  facadeImage: SpaceImage;
  routeVideo: {
    eyebrow: string;
    title: string;
    description: string;
    actionTextMobile: string;
    videoUrl: string;
  };
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logo: SpaceImage;
  tagline: string;
  exploreTitle: string;
  navLinks: FooterLink[];
  contactTitle: string;
  address: {
    line1: string;
    line2: string;
  };
  phones: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappUrl: string;
  copyright: string;
  rights: string;
  legalLinks: FooterLink[];
}

export interface ServicesHeroConfig {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  titleHighlight: string;
  description: string;
  exploreText: string;
  exploreHref: string;
  ctaWhatsAppText: string;
  images: {
    desktop: SpaceImage;
    mobile: SpaceImage;
  };
}

export interface ServiceOverviewCard {
  number: string;
  titlePart1: string;
  titlePart2?: string;
  description: string;
  linkText: string;
  href: string;
  image: SpaceImage & {
    positionClass?: string;
  };
}

export interface ServicesOverviewConfig {
  id: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  cards: ServiceOverviewCard[];
}

export interface ServicesPageConfig {
  hero: ServicesHeroConfig;
  overview: ServicesOverviewConfig;
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
  trajectory: TrajectoryConfig;
  contactSection: ContactSectionConfig;
  footer: FooterConfig;
  servicesPage: ServicesPageConfig;
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
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Procedimientos", href: "/#procedimientos" },
    { label: "Monturas", href: "/#monturas" },
    { label: "Contacto", href: "/#contacto" },
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
  trajectory: {
    eyebrow: "NUESTRA TRAYECTORIA",
    titlePart1: "Relaciones que",
    titlePart2: "construyen confianza.",
    description: "Conoce algunas de las organizaciones que han formado parte de nuestra trayectoria.",
    organizations: [
      {
        id: "palmeras-carabao",
        name: "Palmeras Carabao S.A.",
        image: {
          src: "/images/home/8_nuestra_trayectoria_image2.webp",
          alt: "Logotipo de Palmeras Carabao S.A., aliado corporativo de Óptica Alemania",
          width: 1152,
          height: 448,
        },
      },
      {
        id: "itau",
        name: "Itaú",
        image: {
          src: "/images/home/8_nuestra_trayectoria_image3.webp",
          alt: "Logotipo de Banco Itaú, organización aliada en la trayectoria de Óptica Alemania",
          width: 484,
          height: 480,
        },
      },
      {
        id: "inversiones-crismasol",
        name: "Inversiones Crismasol S.A.S.",
        image: {
          src: "/images/home/8_nuestra_trayectoria_image4.webp",
          alt: "Logotipo de Inversiones Crismasol S.A.S., aliado institucional de Óptica Alemania",
          width: 1234,
          height: 422,
        },
      },
      {
        id: "entrepalmas",
        name: "Entrepalmas",
        image: {
          src: "/images/home/8_nuestra_trayectoria_image5.webp",
          alt: "Logotipo de Entrepalmas, empresa aliada de Óptica Alemania",
          width: 1192,
          height: 382,
        },
      },
      {
        id: "copalma",
        name: "Copalma",
        image: {
          src: "/images/home/8_nuestra_trayectoria_image1.webp",
          alt: "Logotipo de Copalma, aliado corporativo en la trayectoria de Óptica Alemania",
          width: 1062,
          height: 398,
        },
      },
    ],
  },
  contactSection: {
    eyebrow: "CONTACTO Y UBICACIÓN",
    titlePart1: "Nos vemos",
    titlePart2: "en Barzal.",
    description: "Visítanos en el sector de Barzal Bajo, Villavicencio. Estamos aquí para ayudarte a encontrar la atención visual que necesitas.",
    whatsappMessage: "Hola, me gustaría agendar una cita y consultar información de ubicación en Óptica Alemania Barzal.",
    mapImage: {
      src: "/images/home/9_contacto_map.webp",
      alt: "Mapa interactivo de ubicación de Óptica Alemania en el sector Barzal Bajo, Villavicencio",
      width: 1656,
      height: 811,
    },
    facadeImage: {
      src: "/images/home/9_contacto_image.webp",
      alt: "Fachada exterior iluminada de la sede Óptica Alemania en Barzal Bajo, Villavicencio",
      width: 1672,
      height: 941,
    },
    routeVideo: {
      eyebrow: "CÓMO LLEGAR",
      title: "Descubre el recorrido hasta nuestra óptica.",
      description: "Te mostramos el camino paso a paso para que llegues sin complicaciones.",
      actionTextMobile: "Ver video del recorrido",
      videoUrl: "https://maps.google.com/?q=Calle+35+%2334-36+Barzal+Bajo+Villavicencio+Meta",
    },
  },
  footer: {
    logo: {
      src: "/images/home/10_footer_logo.webp",
      alt: "Óptica Alemania - Villavicencio",
      width: 808,
      height: 242,
    },
    tagline: "Experiencia y atención para el cuidado de tu salud visual.",
    exploreTitle: "EXPLORA",
    navLinks: [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Procedimientos", href: "#tecnologia" },
      { label: "Monturas", href: "#monturas" },
      { label: "Contacto", href: "#contacto" },
    ],
    contactTitle: "CONTACTO",
    address: {
      line1: "Calle 35 #34-36,",
      line2: "Barzal Bajo, Villavicencio, Meta.",
    },
    phones: "311 201 7302  |  322 712 8828",
    instagramHandle: "@opticaalemania",
    instagramUrl: "https://www.instagram.com/opticaalemania/",
    whatsappUrl: "https://wa.me/573112017302?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20servicios%20en%20%C3%93ptica%20Alemania.",
    copyright: "© 2026 Óptica Alemania Villavicencio.",
    rights: "Todos los derechos reservados.",
    legalLinks: [
      { label: "Política de privacidad", href: "#privacidad" },
      { label: "Tratamiento de datos personales", href: "#tratamiento-datos" },
    ],
  },
  servicesPage: {
    hero: {
      eyebrow: "NUESTROS SERVICIOS",
      titlePart1: "Servicios de",
      titlePart2: "optometría",
      titleHighlight: "en Villavicencio.",
      description: "Conoce nuestras consultas de optometría, adaptación de lentes de contacto y evaluaciones especializadas para el cuidado de tu salud visual.",
      exploreText: "Explorar servicios",
      exploreHref: "#explora-servicios",
      ctaWhatsAppText: "Escríbenos por WhatsApp",
      images: {
        desktop: {
          src: "/images/services/1_hero_desktop_image.webp",
          alt: "Optómetra realizando examen visual con equipo de precisión en Óptica Alemania Villavicencio",
          width: 1672,
          height: 941,
        },
        mobile: {
          src: "/images/services/1_hero_mobile_image.webp",
          alt: "Optómetra realizando examen visual en Óptica Alemania",
          width: 941,
          height: 1192,
        },
      },
    },
    overview: {
      id: "explora-servicios",
      eyebrow: "EXPLORA NUESTROS SERVICIOS",
      titleLine1: "Encuentra la atención",
      titleLine2: "que buscas.",
      description: "Conoce nuestros servicios de optometría y evaluaciones visuales especializadas para el cuidado de tu salud visual.",
      cards: [
        {
          number: "01",
          titlePart1: "Atención",
          titlePart2: "visual",
          description: "Consulta de optometría especializada y adaptación de lentes de contacto.",
          linkText: "Ver servicios",
          href: "#atencion-visual",
          image: {
            src: "/images/services/2_overview_image1.webp",
            alt: "Gafas oftálmicas sobre mesa de consulta en Óptica Alemania",
            width: 1200,
            height: 800,
            positionClass: "object-[72%_center]",
          },
        },
        {
          number: "02",
          titlePart1: "Evaluaciones",
          titlePart2: "especializadas",
          description: "Pruebas visuales específicas para un diagnóstico más completo de tu salud visual.",
          linkText: "Ver servicios",
          href: "#evaluaciones-especializadas",
          image: {
            src: "/images/services/2_overview_image2.webp",
            alt: "Foróptero y equipos de diagnóstico optométrico especializado",
            width: 1200,
            height: 800,
            positionClass: "object-[82%_center]",
          },
        },
        {
          number: "03",
          titlePart1: "Urgencias",
          titlePart2: "oculares",
          description: "Información sobre la atención disponible para determinadas molestias o consulta por orientación.",
          linkText: "Ver servicios",
          href: "#urgencias-oculares",
          image: {
            src: "/images/services/2_overview_image3.webp",
            alt: "Señalización y puerta de atención en consultorio de Óptica Alemania",
            width: 1200,
            height: 800,
            positionClass: "object-[88%_center]",
          },
        },
      ],
    },
  },
};
