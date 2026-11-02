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
  scheduleWeekdays: string;
  scheduleSaturday: string;
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
  videoSrc: string;
  image: string;
  pngFallback: string;
  alt: string;
  actionText: string;
  actionHref: string;
  whatsappMessage: string;
}

export interface SpaceImage {
  src: string;
  pngFallback?: string;
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
  videoSrc: string;
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

export interface CofremBenefitItem {
  id: string;
  discount: string;
  label: string;
  icon: 'glasses' | 'lenses';
  theme: 'blue' | 'green';
}

export interface CofremSectionConfig {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  disclaimer: string;
  logo: SpaceImage;
  benefits: CofremBenefitItem[];
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
    videoSrc: string;
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
  image: SpaceImage;
}

export interface ServicesOverviewConfig {
  id: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  cards: ServiceOverviewCard[];
}

export interface VisualCareServiceItem {
  serviceNumber: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  image: SpaceImage & {
    positionClass?: string;
  };
  reverse?: boolean;
}

export interface VisualCareConfig {
  id: string;
  eyebrow: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  items: VisualCareServiceItem[];
}

export interface SpecializedTestItem {
  number: string;
  title: string;
  description: string;
  whatsappMessage: string;
  procedureLink?: {
    text: string;
    href: string;
  };
}

export interface TechnologyBannerConfig {
  eyebrow: string;
  description: string;
}

export interface SpecializedTestsConfig {
  id: string;
  eyebrow: string;
  titlePart1: string;
  titlePart2?: string;
  titleHighlight: string;
  description: string;
  tests: SpecializedTestItem[];
  image: SpaceImage;
  techBanner: TechnologyBannerConfig;
}

export interface EyeEmergenciesNoticeConfig {
  icon: 'eye' | 'info';
  boldText: string;
  regularText: string;
}

export interface EyeEmergenciesConfig {
  id: string;
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  notice: EyeEmergenciesNoticeConfig;
}

export interface ProcedureVideoItem {
  id: string;
  title: string;
  actionText: string;
  actionHref: string;
  image: SpaceImage;
}

export interface ProceduresPreviewConfig {
  id: string;
  eyebrow: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  items: ProcedureVideoItem[];
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface ServicesFaqContactConfig {
  title: string;
  actionText: string;
  whatsappMessage: string;
}

export interface ServicesFaqConfig {
  id: string;
  eyebrow: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  contact: ServicesFaqContactConfig;
  items: FaqItem[];
}

export interface ServicesCtaConfig {
  id: string;
  eyebrow: string;
  titlePart1: string;
  titlePart2?: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface ServicesPageConfig {
  hero: ServicesHeroConfig;
  overview: ServicesOverviewConfig;
  visualCare: VisualCareConfig;
  specializedTests: SpecializedTestsConfig;
  eyeEmergencies: EyeEmergenciesConfig;
  procedures: ProceduresPreviewConfig;
  faq: ServicesFaqConfig;
  cta: ServicesCtaConfig;
}

export interface ProcedimientosHeroConfig {
  id: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  description: string;
  exploreText: string;
  exploreHref: string;
  images: {
    desktop: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    mobile: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
}

export interface ProcedimientosVideoItemConfig {
  id: string;
  videoId: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2?: string;
  titleHighlight: string;
  titleHighlightLine1?: string;
  titleHighlightLine2?: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  video: {
    src?: string;
    poster: string;
    alt: string;
    initialTimestamp: string;
    initialProgress: number;
  };
}

export interface ProcedimientosGalleryCard {
  id: string;
  videoId: string;
  title: string;
  description: string;
  src?: string;
  poster: string;
  alt: string;
  initialTimestamp: string;
  initialProgress: number;
}

export interface ProcedimientosGalleryConfig {
  id: string;
  eyebrow: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  cards: ProcedimientosGalleryCard[];
}

export interface ProcedimientosCtaConfig {
  id: string;
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleMobileLine1?: string;
  titleMobileLine2?: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
  secondaryLink: {
    text: string;
    href: string;
  };
}

export interface ProcedimientosPageConfig {
  metaTitle: string;
  metaDescription: string;
  hero: ProcedimientosHeroConfig;
  volk: ProcedimientosVideoItemConfig;
  farnsworth: ProcedimientosVideoItemConfig;
  gallery: ProcedimientosGalleryConfig;
  cta: ProcedimientosCtaConfig;
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
  cofrem: CofremSectionConfig;
  trajectory: TrajectoryConfig;
  contactSection: ContactSectionConfig;
  footer: FooterConfig;
  servicesPage: ServicesPageConfig;
  procedimientosPage: ProcedimientosPageConfig;
}

export const siteConfig: SiteConfig = {
  name: "Óptica Alemania",
  legalName: "Óptica Alemania Villavicencio",
  tagline: "Cuidamos tu visión con experiencia y tecnología.",
  city: "Villavicencio",
  description: "Conoce Óptica Alemania en Villavicencio: atención optométrica, evaluaciones visuales y monturas. Visítanos en Barzal o contáctanos por WhatsApp.",
  contact: {
    phonePrimary: "311 201 7302",
    phoneSecondary: "322 712 8828",
    phoneTel: "+573112017302",
    whatsappNumber: "573112017302",
    address: "Calle 35 #34-36, Barzal",
    neighborhood: "Barzal",
    city: "Villavicencio",
    department: "Meta",
    schedule: "Lunes a viernes 8:30 a. m. – 6:00 p. m. | Sábados 8:30 a. m. – 3:00 p. m.",
    scheduleWeekdays: "Lunes a viernes 8:30 a. m. – 6:00 p. m.",
    scheduleSaturday: "Sábados 8:30 a. m. – 3:00 p. m.",
    instagram: "@opticaalemania",
    instagramUrl: "https://www.instagram.com/opticaalemania/",
    facebookUrl: "https://www.facebook.com/opticaalemaniavillavicencio/",
    googleMapsUrl: "https://maps.google.com/?q=Calle+35+%2334-36+Barzal+Villavicencio+Meta",
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
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Procedimientos", href: "/procedimientos" },
    { label: "Contacto", href: "/contacto" },
  ],
  services: [
    {
      id: "optometria",
      number: "01",
      title: "Optometría especializada",
      description: "Consulta por nuestras evaluaciones optométricas y conoce las opciones de atención según tus necesidades visuales.",
      image: "/images/service-optometry.webp",
      alt: "Equipo de foróptero para consulta de optometría especializada en Óptica Alemania",
      whatsappMessage: "Hola, quisiera consultar por una evaluación de optometría especializada en Óptica Alemania.",
    },
    {
      id: "lentes-contacto",
      number: "02",
      title: "Adaptación de lentes de contacto",
      description: "Conoce el proceso de valoración y adaptación de lentes de contacto, de acuerdo con las características de tus ojos.",
      image: "/images/service-contact-lenses.webp",
      alt: "Lente de contacto para adaptación clínica personalizada",
      whatsappMessage: "Hola, deseo información sobre la adaptación de lentes de contacto en Óptica Alemania.",
    },
    {
      id: "presion-intraocular",
      number: "03",
      title: "Medición de presión intraocular",
      description: "Una prueba que mide la presión dentro del ojo y puede formar parte de una evaluación visual.",
      image: "/images/service-tonometry.webp",
      alt: "Examen de tonometría y toma de presión intraocular para prevención de glaucoma",
      whatsappMessage: "Hola, quisiera consultar sobre la medición de presión intraocular en Óptica Alemania.",
    },
    {
      id: "ojo-seco",
      number: "04",
      title: "Evaluación de ojo seco",
      description: "Consulta por las pruebas disponibles para valorar molestias relacionadas con la sequedad ocular.",
      image: "/images/service-dry-eye.webp",
      alt: "Evaluación biomicroscópica con luz azul para diagnóstico de ojo seco",
      whatsappMessage: "Hola, deseo consultar sobre la evaluación de ojo seco en Óptica Alemania.",
    },
  ],
  technologies: [
    {
      id: "volk-inview",
      number: "01",
      titlePart1: "Imágenes de la retina",
      titlePart2: "con Volk iNview",
      description: "Observa cómo se utiliza este accesorio de exploración ocular para obtener imágenes de la retina.",
      duration: "0:28",
      videoSrc: "/videos/video-volk-inview.mp4",
      image: "/images/tech-volk-inview.webp",
      alt: "Especialista realizando evaluación retinal con dispositivo Volk iNview en Óptica Alemania",
      actionText: "Conocer procedimiento",
      actionHref: "/procedimientos",
      whatsappMessage: "Hola, me gustaría conocer más sobre el procedimiento con Volk iNview en Óptica Alemania.",
    },
    {
      id: "farnsworth-d15",
      number: "02",
      titlePart1: "Prueba de",
      titlePart2: "Farnsworth D-15",
      description: "Conoce una prueba que utiliza fichas de colores para explorar la capacidad de distinguir distintas tonalidades.",
      duration: "0:32",
      videoSrc: "/videos/video-farnsworth-d15.mp4",
      image: "/images/tech-farnsworth-d15.webp",
      alt: "Paciente realizando el Test de Farnsworth D-15 para visión del color en Óptica Alemania",
      actionText: "Conocer procedimiento",
      actionHref: "/procedimientos",
      whatsappMessage: "Hola, deseo información sobre la prueba de visión del color Farnsworth D-15 en Óptica Alemania.",
    },
  ],
  space: {
    eyebrow: "CONOCE NUESTRA SEDE",
    titlePart1: "Conoce dónde",
    titlePart2: "cuidamos tu visión.",
    description: "Queremos que conozcas Óptica Alemania antes de visitarnos. Explora nuestra sede en Barzal, Villavicencio, y descubre los espacios donde recibimos a quienes llegan para consultar por su salud visual y sus gafas.",
    ctaText: "Cómo llegar",
    ctaHref: "/contacto#ubicacion",
    images: {
      main: {
        src: "/images/space-facade-main.webp",
        alt: "Recepción y sala de espera moderna de Óptica Alemania en Villavicencio",
        width: 1028,
        height: 624,
      },
      shelves: {
        src: "/images/space-frames-display.webp",
        alt: "Exhibidores iluminados con monturas oftálmicas y gafas de sol en Óptica Alemania",
        width: 632,
        height: 296,
      },
      clinic: {
        src: "/images/space-consulting-room.webp",
        alt: "Consultorio optométrico equipado con lámpara de hendidura y monitor de diagnóstico visual",
        width: 632,
        height: 296,
      },
    },
  },
  kidsVision: {
    eyebrow: "ATENCIÓN VISUAL INFANTIL",
    titlePart1: "Su manera de",
    titlePart2: "descubrir el mundo",
    titlePart3: "también merece atención.",
    description: "Cada etapa de la infancia trae nuevas formas de aprender, jugar y explorar. Si tienes preguntas sobre la visión de tu hijo o hija, conoce cómo es la evaluación optométrica infantil que ofrece Óptica Alemania y consulta la atención disponible.",
    ctaText: "Consultar atención infantil",
    whatsappMessage: "Hola, quisiera información sobre la atención visual infantil de Óptica Alemania.",
    noteText: "Consulta también por la disponibilidad de atención optométrica infantil.",
    videoDuration: "3:50",
    videoSrc: "/videos/video-child.mp4",
    image: {
      src: "/images/kids-vision-preview.webp",
      alt: "Especialista de Óptica Alemania realizando examen optométrico pediátrico con lámpara de hendidura a niña paciente",
      width: 799,
      height: 533,
    },
  },
  frames: {
    eyebrow: "MONTURAS Y ESTILO",
    titlePart1: "Una montura que",
    titlePart2: "va contigo.",
    description: "Tus gafas te acompañan todos los días y también pueden reflejar tu estilo. Consulta por las opciones de monturas disponibles en Óptica Alemania y encuentra orientación para elegir la que más te guste.",
    ctaText: "Consultar monturas",
    whatsappMessage: "Hola, quisiera conocer las monturas disponibles en Óptica Alemania.",
    categories: [
      {
        id: "mujer",
        title: "Mujeres",
        image: {
          src: "/images/frames-prescription.webp",
          alt: "Colección de monturas oftálmicas y de diseño para mujer en Óptica Alemania",
          width: 540,
          height: 615,
        },
        whatsappMessage: "Hola, quisiera consultar por monturas para mujer en Óptica Alemania.",
      },
      {
        id: "hombre",
        title: "Hombres",
        image: {
          src: "/images/frames-sunglasses.webp",
          alt: "Colección de monturas oftálmicas modernas y elegantes para hombre en Óptica Alemania",
          width: 540,
          height: 615,
        },
        whatsappMessage: "Hola, quisiera consultar por monturas para hombre en Óptica Alemania.",
      },
      {
        id: "ninos",
        title: "Niños",
        image: {
          src: "/images/frames-kids.webp",
          alt: "Colección de monturas oftálmicas resistentes, cómodas y ligeras para niños en Óptica Alemania",
          width: 540,
          height: 615,
        },
        whatsappMessage: "Hola, quisiera consultar por monturas para niños en Óptica Alemania.",
      },
    ],
  },
  cofrem: {
    eyebrow: "BENEFICIOS ESPECIALES",
    titlePart1: "Club descuentos",
    titlePart2: "Cofrem.",
    description: "Si haces parte del Club Descuentos Cofrem, en Óptica Alemania puedes acceder a beneficios especiales en productos seleccionados.",
    ctaText: "Consultar beneficio",
    whatsappMessage: "Hola, hago parte del Club Descuentos Cofrem y quisiera consultar por los beneficios disponibles en Óptica Alemania.",
    disclaimer: "Aplican condiciones. Beneficios sujetos a validación del convenio vigente.",
    logo: {
      src: "/images/cofrem-discount-logo.webp",
      alt: "Logotipo de Club Descuentos Cofrem, convenio de beneficios especiales en Óptica Alemania",
      width: 800,
      height: 615,
    },
    benefits: [
      {
        id: "montura",
        discount: "15%",
        label: "en montura",
        icon: "glasses",
        theme: "green",
      },
      {
        id: "lente-oftalmico",
        discount: "10%",
        label: "en lente oftálmico",
        icon: "lenses",
        theme: "blue",
      },
    ],
  },
  trajectory: {
    eyebrow: "CONFIANZA QUE NOS ACOMPAÑA",
    titlePart1: "Empresas que han",
    titlePart2: "confiado en nosotros.",
    description: "La confianza también se construye en las relaciones que cultivamos. Estas son algunas de las organizaciones que han contado con Óptica Alemania.",
    organizations: [
      {
        id: "palmeras-carabao",
        name: "Palmeras Carabao S.A.",
        image: {
          src: "/images/partner-palmeras-carabao.webp",
          alt: "Logotipo de Palmeras Carabao S.A., aliado corporativo de Óptica Alemania",
          width: 600,
          height: 388,
        },
      },
      {
        id: "cofrem",
        name: "Cofrem",
        image: {
          src: "/images/partner-cofrem.webp",
          alt: "Logotipo de Caja de Compensación Familiar Cofrem, aliado institucional de Óptica Alemania",
          width: 338,
          height: 400,
        },
      },
      {
        id: "inversiones-crismasol",
        name: "Inversiones Crismasol S.A.S.",
        image: {
          src: "/images/partner-crismasol.webp",
          alt: "Logotipo de Inversiones Crismasol S.A.S., aliado institucional de Óptica Alemania",
          width: 600,
          height: 379,
        },
      },
      {
        id: "entrepalmas",
        name: "Entrepalmas",
        image: {
          src: "/images/partner-entrepalmas.webp",
          alt: "Logotipo de Entrepalmas, empresa aliada de Óptica Alemania",
          width: 565,
          height: 400,
        },
      },
      {
        id: "copalma",
        name: "Copalma",
        image: {
          src: "/images/partner-copalma.webp",
          alt: "Logotipo de Copalma, aliado corporativo en la trayectoria de Óptica Alemania",
          width: 600,
          height: 362,
        },
      },
    ],
  },
  contactSection: {
    eyebrow: "ENCUÉNTRANOS EN VILLAVICENCIO",
    titlePart1: "Nos vemos",
    titlePart2: "en Barzal.",
    description: "Estamos en el sector Barzal de Villavicencio. Revisa cómo llegar a nuestra sede y comunícate con nosotros si necesitas confirmar información antes de visitarnos.",
    whatsappMessage: "Hola, visité la página de Óptica Alemania y quisiera agendar una consulta o confirmar información.",
    mapImage: {
      src: "/images/contact-map.webp",
      alt: "Mapa interactivo de ubicación de Óptica Alemania en el sector Barzal, Villavicencio",
      width: 1656,
      height: 811,
    },
    facadeImage: {
      src: "/images/contact-facade-route.webp",
      alt: "Fachada exterior de la sede Óptica Alemania en Barzal, Villavicencio",
      width: 1047,
      height: 1502,
    },
    routeVideo: {
      eyebrow: "CÓMO LLEGAR",
      title: "Descubre el recorrido hasta nuestra óptica.",
      description: "Te mostramos el camino paso a paso para que llegues sin complicaciones.",
      actionTextMobile: "Ver video del recorrido",
      videoUrl: "https://maps.google.com/?q=Calle+35+%2334-36+Barzal+Villavicencio+Meta",
      videoSrc: "/videos/video-como-llegar.mp4",
    },
  },
  footer: {
    logo: {
      src: "/images/logo.webp",
      alt: "Óptica Alemania - Villavicencio",
      width: 2172,
      height: 724,
    },
    tagline: "Atención visual, evaluaciones optométricas y opciones de monturas en Villavicencio. Conoce nuestros servicios y visita nuestra sede en Barzal.",
    exploreTitle: "EXPLORA",
    navLinks: [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Procedimientos", href: "#tecnologia" },
      { label: "Contacto", href: "#contacto" },
    ],
    contactTitle: "CONTACTO",
    address: {
      line1: "Calle 35 #34-36,",
      line2: "Barzal, Villavicencio, Meta.",
    },
    phones: "311 201 7302  |  322 712 8828",
    instagramHandle: "@opticaalemania",
    instagramUrl: "https://www.instagram.com/opticaalemania/",
    whatsappUrl: "https://wa.me/573112017302?text=Hola,%20visito%20la%20p%C3%A1gina%20de%20%C3%93ptica%20Alemania%20y%20quisiera%20informaci%C3%B3n%20sobre%20sus%20servicios.",
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
          src: "/images/services-hero-desktop.webp",
          alt: "Optómetra realizando examen visual con equipo de precisión en Óptica Alemania Villavicencio",
          width: 1672,
          height: 941,
        },
        mobile: {
          src: "/images/services-hero-mobile.webp",
          alt: "Optómetra realizando examen visual en Óptica Alemania",
          width: 941,
          height: 1672,
        },
      },
    },
    overview: {
      id: "explora-servicios",
      eyebrow: "EXPLORA NUESTROS SERVICIOS",
      titleLine1: "Encuentra la atención",
      titleLine2: "que buscas.",
      description: "Explora nuestras áreas de atención y conoce las evaluaciones disponibles. Puedes consultar cada servicio antes de visitarnos.",
      cards: [
        {
          number: "01",
          titlePart1: "Atención",
          titlePart2: "visual",
          description: "Consulta de optometría especializada y adaptación de lentes de contacto.",
          image: {
            src: "/images/service-optometry.webp",
            alt: "Equipo de foróptero para consulta de optometría especializada en Óptica Alemania",
            width: 360,
            height: 240,
          },
        },
        {
          number: "02",
          titlePart1: "Evaluaciones",
          titlePart2: "especializadas",
          description: "Pruebas orientadas a explorar diferentes aspectos de la visión y la salud ocular.",
          image: {
            src: "/images/service-tonometry.webp",
            alt: "Examen de tonometría y toma de presión intraocular en Óptica Alemania",
            width: 360,
            height: 240,
          },
        },
        {
          number: "03",
          titlePart1: "Urgencias",
          titlePart2: "oculares",
          description: "Conoce el alcance y la disponibilidad de esta atención antes de acudir a nuestra sede.",
          image: {
            src: "/images/service-ocular-emergencies.webp",
            alt: "Atención de molestias y urgencias oculares en Óptica Alemania",
            width: 360,
            height: 240,
          },
        },
      ],
    },
    visualCare: {
      id: "atencion-visual",
      eyebrow: "01 / ATENCIÓN VISUAL",
      titlePart1: "Atención visual",
      titleHighlight: "a tu medida.",
      description: "Cada persona tiene necesidades visuales distintas. Conoce las opciones de valoración y adaptación que puedes consultar con nuestro equipo.",
      items: [
        {
          serviceNumber: "SERVICIO 01",
          titleLine1: "Consulta de",
          titleLine2: "optometría especializada.",
          description: "Una consulta para valorar diferentes aspectos de tu visión, conversar sobre las molestias o dificultades que puedas presentar y conocer las recomendaciones que correspondan según la evaluación profesional.",
          ctaText: "Consultar este servicio",
          whatsappMessage: "Hola, visité la página de Servicios de Óptica Alemania y quisiera información sobre la consulta de optometría especializada.",
          image: {
            src: "/images/services-optometria-consulta.webp",
            alt: "Optómetra realizando examen de salud visual con tecnología especializada en Óptica Alemania",
            width: 1440,
            height: 810,
          },
          reverse: false,
        },
        {
          serviceNumber: "SERVICIO 02",
          titleLine1: "Adaptación de",
          titleLine2: "lentes de contacto.",
          description: "La adaptación de lentes de contacto requiere valorar las características de tus ojos y el tipo de lente adecuado para tu caso. Consulta cómo se realiza este proceso y qué necesitas para comenzar.",
          ctaText: "Consultar este servicio",
          whatsappMessage: "Hola, quisiera información sobre la adaptación de lentes de contacto en Óptica Alemania.",
          image: {
            src: "/images/services-lentes-contacto-adaptacion.webp",
            alt: "Optómetra explicando la adaptación y colocación de lentes de contacto a una paciente en Óptica Alemania",
            width: 1280,
            height: 720,
          },
          reverse: true,
        },
      ],
    },
    specializedTests: {
      id: "evaluaciones-especializadas",
      eyebrow: "02 / EVALUACIONES ESPECIALIZADAS",
      titlePart1: "Conoce nuestras evaluaciones",
      titleHighlight: "especializadas.",
      description: "Conoce algunas pruebas que pueden aportar información durante una evaluación visual. La indicación de cada una depende de las necesidades del paciente y del criterio profesional.",
      tests: [
        {
          number: "01",
          title: "Toma de presión intraocular.",
          description: "Esta prueba mide la presión dentro del ojo y aporta un dato que puede ser relevante durante la evaluación de la salud ocular.",
          whatsappMessage: "Hola, quisiera información sobre la medición de presión intraocular en Óptica Alemania.",
        },
        {
          number: "02",
          title: "Test de ojo seco.",
          description: "Consulta por las pruebas disponibles para valorar molestias relacionadas con la sequedad ocular y obtener orientación sobre la evaluación que corresponda.",
          whatsappMessage: "Hola, quisiera información sobre la evaluación de ojo seco en Óptica Alemania.",
        },
        {
          number: "03",
          title: "Test de Ishihara / Farnsworth D-15.",
          description: "Pruebas que permiten explorar cómo distingues determinados colores mediante láminas de Ishihara y fichas cromáticas organizadas según sus tonalidades.",
          whatsappMessage: "Hola, quisiera información sobre las pruebas de visión del color Ishihara y Farnsworth D-15 en Óptica Alemania.",
          procedureLink: {
            text: "Conoce cómo realizamos esta prueba",
            href: "#procedimientos",
          },
        },
        {
          number: "04",
          title: "Examen digital por retroiluminación.",
          description: "Consulta con nuestro equipo en qué consiste esta técnica de iluminación, cuál es su finalidad y cuándo puede indicarse según el criterio profesional.",
          whatsappMessage: "Hola, quisiera información sobre el examen digital por retroiluminación en Óptica Alemania.",
        },
        {
          number: "05",
          title: "Retinofotografía.",
          description: "Consiste en obtener imágenes de la retina que pueden utilizarse como apoyo documental durante una valoración visual, de acuerdo con el criterio del profesional.",
          whatsappMessage: "Hola, quisiera información sobre la retinofotografía en Óptica Alemania.",
          procedureLink: {
            text: "Conoce cómo realizamos esta prueba",
            href: "#procedimientos",
          },
        },
      ],
      image: {
        src: "/images/services-evaluaciones-especializadas.webp",
        alt: "Optómetra realizando examen y evaluación retinal con equipo Volk iNview en Óptica Alemania",
        width: 1280,
        height: 720,
      },
      techBanner: {
        eyebrow: "TECNOLOGÍA PARA UNA ATENCIÓN MÁS COMPLETA",
        description: "Utilizamos equipos especializados que nos permiten realizar evaluaciones con mayor precisión y obtener información detallada sobre tu salud visual.",
      },
    },
    eyeEmergencies: {
      id: "urgencias-oculares",
      eyebrow: "03 / URGENCIAS OCULARES",
      titlePart1: "¿Necesitas atención",
      titlePart2: "por una",
      titleHighlight: "molestia ocular?",
      description: "Consulta con nuestro equipo qué situaciones podemos atender y la disponibilidad de nuestros servicios antes de acudir a nuestra sede.",
      ctaText: "Consultar disponibilidad",
      whatsappMessage: "Hola, quisiera conocer qué atención ocular tienen disponible, los horarios y cómo funciona el proceso de consulta.",
      notice: {
        icon: "eye",
        boldText: "Ante síntomas o lesiones oculares graves (dolor intenso o pérdida repentina de visión),",
        regularText: "acude directamente a un servicio de urgencias médicas. No esperes una respuesta por WhatsApp.",
      },
    },
    procedures: {
      id: "procedimientos",
      eyebrow: "PROCEDIMIENTOS",
      titlePart1: "Nuestros procedimientos,",
      titleHighlight: "de cerca.",
      description: "Conoce en video cómo realizamos algunas de nuestras evaluaciones visuales en Óptica Alemania Villavicencio.",
      ctaText: "Explorar más procedimientos",
      ctaHref: "/procedimientos",
      items: [
        {
          id: "evaluacion-retinal-volk-inview",
          title: "Evaluación retinal con Volk iNview",
          actionText: "Ver procedimiento",
          actionHref: "/procedimientos#volk-inview",
          image: {
            src: "/images/tech-volk-inview.webp",
            alt: "Especialista realizando evaluación retinal con dispositivo Volk iNview en Óptica Alemania",
            width: 1672,
            height: 941,
          },
        },
        {
          id: "test-farnsworth-d15",
          title: "Test de Farnsworth D-15",
          actionText: "Ver procedimiento",
          actionHref: "/procedimientos#farnsworth",
          image: {
            src: "/images/tech-farnsworth-d15.webp",
            alt: "Paciente realizando el Test de Farnsworth D-15 para visión del color en Óptica Alemania",
            width: 1672,
            height: 941,
          },
        },
      ],
    },
    faq: {
      id: "preguntas-frecuentes",
      eyebrow: "PREGUNTAS FRECUENTES",
      titlePart1: "Resolvemos tus",
      titleHighlight: "dudas.",
      description: "Encuentra respuestas a algunas de las preguntas más habituales sobre nuestros servicios de atención visual.",
      contact: {
        title: "¿Tienes otra pregunta?",
        actionText: "Escríbenos",
        whatsappMessage: "Hola, visité la página de Servicios de Óptica Alemania y tengo una consulta sobre su atención visual.",
      },
      items: [
        {
          id: "cita-optometria",
          number: "01",
          question: "¿Cómo puedo consultar por una cita de optometría?",
          answer: "La disponibilidad depende del servicio que requieras. Te recomendamos escribirnos por WhatsApp antes de visitarnos para confirmar horarios, condiciones de atención y programar tu consulta.",
          defaultOpen: true,
        },
        {
          id: "examenes-ninos",
          number: "02",
          question: "¿Realizan exámenes visuales para niños?",
          answer: "Sí, realizamos valoraciones optométricas adaptadas para niños, evaluando agudeza visual, motilidad ocular y refracción para detectar oportunamente cualquier dificultad visual en su etapa de desarrollo.",
          defaultOpen: false,
        },
        {
          id: "pruebas-color",
          number: "03",
          question: "¿Qué pruebas realizan para evaluar la visión de los colores?",
          answer: "Realizamos el Test de Ishihara para detección de deficiencias cromáticas y la prueba especializada de Farnsworth D-15 para una discriminación y clasificación precisa del color.",
          defaultOpen: false,
        },
        {
          id: "evaluacion-adecuada",
          number: "04",
          question: "¿Cómo sé qué evaluación visual necesito?",
          answer: "Cada evaluación cumple una finalidad distinta. Si tienes dudas, contáctanos por WhatsApp y nuestro equipo te orientará según tus molestias o antecedentes para recomendarte la evaluación que corresponda.",
          defaultOpen: false,
        },
      ],
    },
    cta: {
      id: "contacto-servicios",
      eyebrow: "TU PRÓXIMO PASO",
      titlePart1: "¿Tienes dudas sobre",
      titlePart2: "nuestros servicios?",
      titleHighlight: "Hablemos.",
      description: "Cuéntanos qué servicio te interesa y consulta con nuestro equipo la disponibilidad de atención en Óptica Alemania Villavicencio.",
      ctaText: "Consultar por WhatsApp",
      whatsappMessage: "Hola, visité la página de Servicios de Óptica Alemania y quisiera información sobre la atención disponible.",
    },
  },
  procedimientosPage: {
    metaTitle: "Procedimientos visuales en Villavicencio | Óptica Alemania",
    metaDescription: "Conoce cómo se realizan algunas evaluaciones visuales en Óptica Alemania Villavicencio, como la evaluación retinal y el test de Farnsworth D-15.",
    hero: {
      id: "inicio",
      eyebrow: "CONOCE NUESTROS PROCEDIMIENTOS",
      titleLine1: "Así realizamos",
      titleLine2: "nuestras evaluaciones,",
      titleHighlight: "paso a paso.",
      description: "Descubre en video cómo realizamos algunos de nuestros procedimientos visuales en Óptica Alemania Villavicencio.",
      exploreText: "Explorar procedimientos",
      exploreHref: "#volk-inview",
      images: {
        desktop: {
          src: "/images/procedimientos-hero-desktop.webp",
          alt: "Especialista realizando evaluación visual con foróptero en Óptica Alemania Villavicencio",
          width: 1672,
          height: 941,
        },
        mobile: {
          src: "/images/procedimientos-hero-mobile.webp",
          alt: "Especialista realizando evaluación visual con foróptero en Óptica Alemania Villavicencio",
          width: 941,
          height: 1672,
        },
      },
    },
    volk: {
      id: "volk-inview",
      videoId: "volk-video",
      eyebrow: "01 / TECNOLOGÍA EN ACCIÓN",
      titleLine1: "Evaluación retinal",
      titleLine2: "",
      titleHighlight: "de cerca.",
      description: "Descubre cómo realizamos este procedimiento mediante tecnología Volk InView y conoce parte del proceso de evaluación de la retina en Óptica Alemania Villavicencio.",
      ctaText: "Consultar esta evaluación",
      whatsappMessage: "Hola, quisiera información sobre la evaluación retinal en Óptica Alemania.",
      video: {
        src: "/videos/video-volk-inview.mp4",
        poster: "/images/tech-volk-inview.webp",
        alt: "Evaluación retinal mediante tecnología Volk InView en Óptica Alemania Villavicencio",
        initialTimestamp: "0:00 / 0:28",
        initialProgress: 0,
      },
    },
    farnsworth: {
      id: "farnsworth",
      videoId: "farnsworth-video",
      eyebrow: "02 / VISIÓN DEL COLOR",
      titleLine1: "Test de",
      titleLine2: "Farnsworth D-15.",
      titleHighlight: "Cada color cuenta una historia.",
      titleHighlightLine1: "Cada color cuenta",
      titleHighlightLine2: "una historia.",
      description: "Descubre cómo realizamos esta prueba para evaluar la percepción de los colores en Óptica Alemania Villavicencio.",
      ctaText: "Consultar esta prueba",
      whatsappMessage: "Hola, quisiera información sobre el test de Farnsworth D-15 en Óptica Alemania.",
      video: {
        src: "/videos/video-farnsworth-d15.mp4",
        poster: "/images/tech-farnsworth-d15.webp",
        alt: "Test de Farnsworth D-15 para evaluación de la percepción del color en Óptica Alemania Villavicencio",
        initialTimestamp: "0:00 / 0:32",
        initialProgress: 0,
      },
    },
    gallery: {
      id: "nuestro-trabajo",
      eyebrow: "MÁS DE NUESTRO TRABAJO",
      titlePart1: "La atención está en",
      titleHighlight: "cada detalle.",
      description: "Conoce otros momentos de las evaluaciones visuales que realizamos en Óptica Alemania.",
      cards: [
        {
          id: "evaluacion-optometrica",
          videoId: "gallery-video-1",
          title: "Evaluación optométrica",
          description: "Una evaluación completa de tu visión con tecnología especializada.",
          poster: "/images/procedimientos-evaluacion-optometrica.webp",
          alt: "Evaluación optométrica completa con tecnología especializada en Óptica Alemania Villavicencio",
          initialTimestamp: "0:10 / 0:45",
          initialProgress: 22,
        },
        {
          id: "atencion-visual-infantil",
          videoId: "gallery-video-2",
          title: "Atención visual infantil",
          description: "Evaluaciones adaptadas a las necesidades visuales de cada etapa.",
          src: "/videos/video-child.mp4",
          poster: "/images/kids-vision-preview.webp",
          alt: "Atención visual infantil y valoraciones adaptadas en Óptica Alemania Villavicencio",
          initialTimestamp: "0:00 / 3:50",
          initialProgress: 0,
        },
      ],
    },
    cta: {
      id: "contacto",
      eyebrow: "CONTINUEMOS CUIDANDO TU VISIÓN",
      titleLine1: "¿Quieres conocer más",
      titleLine2: "sobre nuestras",
      titleMobileLine1: "¿Quieres conocer",
      titleMobileLine2: "más sobre nuestras",
      titleHighlight: "evaluaciones?",
      description: "Nuestro equipo puede orientarte sobre los servicios disponibles y ayudarte a consultar la disponibilidad de atención en Óptica Alemania Villavicencio.",
      ctaText: "Hablar por WhatsApp",
      whatsappMessage: "Hola, vi los procedimientos en la página web de Óptica Alemania y quisiera más información sobre las evaluaciones visuales.",
      secondaryLink: {
        text: "Explorar servicios",
        href: "/servicios",
      },
    },
  },
};
