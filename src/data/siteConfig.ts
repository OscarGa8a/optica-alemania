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
      title: "Optometría especializada",
      description: "Consulta por nuestras evaluaciones optométricas y conoce las opciones de atención según tus necesidades visuales.",
      image: "/images/home/3_nuestros_servicios_image2.webp",
      alt: "Equipo de foróptero para consulta de optometría especializada en Óptica Alemania",
      whatsappMessage: "Hola, quisiera consultar por una evaluación de optometría especializada en Óptica Alemania.",
    },
    {
      id: "lentes-contacto",
      number: "02",
      title: "Adaptación de lentes de contacto",
      description: "Conoce el proceso de valoración y adaptación de lentes de contacto, de acuerdo con las características de tus ojos.",
      image: "/images/home/3_nuestros_servicios_image3.webp",
      alt: "Lente de contacto para adaptación clínica personalizada",
      whatsappMessage: "Hola, deseo información sobre la adaptación de lentes de contacto en Óptica Alemania.",
    },
    {
      id: "presion-intraocular",
      number: "03",
      title: "Medición de presión intraocular",
      description: "Una prueba que mide la presión dentro del ojo y puede formar parte de una evaluación visual.",
      image: "/images/home/3_nuestros_servicios_image4.webp",
      alt: "Examen de tonometría y toma de presión intraocular para prevención de glaucoma",
      whatsappMessage: "Hola, quisiera consultar sobre la medición de presión intraocular en Óptica Alemania.",
    },
    {
      id: "ojo-seco",
      number: "04",
      title: "Evaluación de ojo seco",
      description: "Consulta por las pruebas disponibles para valorar molestias relacionadas con la sequedad ocular.",
      image: "/images/home/3_nuestros_servicios_image6.webp",
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
      image: "/images/home/4_tecnologia_accion_image1.webp",
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
      image: "/images/home/4_tecnologia_accion_image2.webp",
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
    eyebrow: "ATENCIÓN VISUAL INFANTIL",
    titlePart1: "Su manera de",
    titlePart2: "descubrir el mundo",
    titlePart3: "también merece atención.",
    description: "Cada etapa de la infancia trae nuevas formas de aprender, jugar y explorar. Si tienes preguntas sobre la visión de tu hijo o hija, conoce cómo es la evaluación optométrica infantil que ofrece Óptica Alemania y consulta la atención disponible.",
    ctaText: "Consultar atención infantil",
    whatsappMessage: "Hola, quisiera información sobre la atención visual infantil de Óptica Alemania.",
    noteText: "Consulta también por la disponibilidad de atención optométrica infantil.",
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
    description: "Tus gafas te acompañan todos los días y también pueden reflejar tu estilo. Consulta por las opciones de monturas disponibles en Óptica Alemania y encuentra orientación para elegir la que más te guste.",
    ctaText: "Consultar monturas",
    whatsappMessage: "Hola, quisiera conocer las monturas disponibles en Óptica Alemania.",
    categories: [
      {
        id: "mujer",
        title: "Mujeres",
        image: {
          src: "/images/home/7_monturas_image1.webp",
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
          src: "/images/home/7_monturas_image2.webp",
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
          src: "/images/home/7_monturas_image3.webp",
          alt: "Colección de monturas oftálmicas resistentes, cómodas y ligeras para niños en Óptica Alemania",
          width: 540,
          height: 615,
        },
        whatsappMessage: "Hola, quisiera consultar por monturas para niños en Óptica Alemania.",
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
    eyebrow: "ENCUÉNTRANOS EN VILLAVICENCIO",
    titlePart1: "Nos vemos",
    titlePart2: "en Barzal.",
    description: "Estamos en el sector Barzal de Villavicencio. Revisa cómo llegar a nuestra sede y comunícate con nosotros si necesitas confirmar información antes de visitarnos.",
    whatsappMessage: "Hola, visité la página de Óptica Alemania y quisiera agendar una consulta o confirmar información.",
    mapImage: {
      src: "/images/home/9_contacto_map.webp",
      alt: "Mapa interactivo de ubicación de Óptica Alemania en el sector Barzal, Villavicencio",
      width: 1656,
      height: 811,
    },
    facadeImage: {
      src: "/images/home/9_contacto_image.webp",
      alt: "Fachada exterior iluminada de la sede Óptica Alemania en Barzal, Villavicencio",
      width: 1672,
      height: 941,
    },
    routeVideo: {
      eyebrow: "CÓMO LLEGAR",
      title: "Descubre el recorrido hasta nuestra óptica.",
      description: "Te mostramos el camino paso a paso para que llegues sin complicaciones.",
      actionTextMobile: "Ver video del recorrido",
      videoUrl: "https://maps.google.com/?q=Calle+35+%2334-36+Barzal+Villavicencio+Meta",
    },
  },
  footer: {
    logo: {
      src: "/images/home/10_footer_logo.webp",
      alt: "Óptica Alemania - Villavicencio",
      width: 808,
      height: 242,
    },
    tagline: "Atención visual, evaluaciones optométricas y opciones de monturas en Villavicencio. Conoce nuestros servicios y visita nuestra sede en Barzal.",
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
    visualCare: {
      id: "atencion-visual",
      eyebrow: "01 / ATENCIÓN VISUAL",
      titlePart1: "Atención visual",
      titleHighlight: "a tu medida.",
      description: "Conoce nuestras consultas de optometría especializada y el servicio de adaptación de lentes de contacto.",
      items: [
        {
          serviceNumber: "SERVICIO 01",
          titleLine1: "Consulta de",
          titleLine2: "optometría especializada.",
          description: "Realizamos una evaluación completa de tu salud visual para determinar tus necesidades de corrección, con el apoyo de tecnología especializada y un enfoque personalizado.",
          ctaText: "Consultar este servicio",
          whatsappMessage: "Hola, me gustaría agendar una consulta de optometría especializada en Óptica Alemania.",
          image: {
            src: "/images/services/3_atencion_visual_image1.webp",
            alt: "Optómetra realizando examen de salud visual con tecnología especializada en Óptica Alemania",
            width: 1400,
            height: 788,
          },
          reverse: false,
        },
        {
          serviceNumber: "SERVICIO 02",
          titleLine1: "Adaptación de",
          titleLine2: "lentes de contacto.",
          description: "Te acompañamos en el proceso de adaptación de lentes de contacto, con una evaluación profesional, orientación en la elección y el uso adecuado según tus necesidades visuales.",
          ctaText: "Consultar este servicio",
          whatsappMessage: "Hola, deseo información sobre la adaptación de lentes de contacto en Óptica Alemania.",
          image: {
            src: "/images/services/3_atencion_visual_image2.webp",
            alt: "Optómetra explicando la adaptación y colocación de lentes de contacto a una paciente en Óptica Alemania",
            width: 1400,
            height: 788,
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
      description: "Contamos con diferentes pruebas y equipos para evaluar aspectos específicos de tu salud visual y ofrecerte una atención acorde con tus necesidades.",
      tests: [
        {
          number: "01",
          title: "Toma de presión intraocular.",
          description: "Medición de la presión dentro del ojo, como parte de la evaluación de tu salud visual.",
          whatsappMessage: "Hola, me interesa agendar una toma de presión intraocular en Óptica Alemania.",
        },
        {
          number: "02",
          title: "Test de ojo seco.",
          description: "Evaluación de aspectos relacionados con la película lagrimal y la superficie ocular.",
          whatsappMessage: "Hola, deseo consultar sobre el examen y tratamiento para ojo seco en Óptica Alemania.",
        },
        {
          number: "03",
          title: "Test de Ishihara / Farnsworth D-15.",
          description: "Pruebas que permiten evaluar la percepción de los colores y la visión cromática.",
          whatsappMessage: "Hola, deseo información sobre el test de visión cromática (Ishihara / Farnsworth D-15) en Óptica Alemania.",
          procedureLink: {
            text: "Conoce cómo realizamos esta prueba",
            href: "#procedimientos",
          },
        },
        {
          number: "04",
          title: "Examen digital por retroiluminación.",
          description: "Evaluación que permite observar estructuras oculares mediante tecnología de iluminación especializada.",
          whatsappMessage: "Hola, deseo consultar sobre el examen digital por retroiluminación en Óptica Alemania.",
        },
        {
          number: "05",
          title: "Retinofotografía.",
          description: "Captura de imágenes de la retina mediante equipos especializados para un análisis más detallado de la salud visual.",
          whatsappMessage: "Hola, me gustaría agendar una evaluación de retinofotografía en Óptica Alemania.",
          procedureLink: {
            text: "Conoce cómo realizamos esta prueba",
            href: "#procedimientos",
          },
        },
      ],
      image: {
        src: "/images/services/4_evaluaciones_especializadas_image.webp",
        alt: "Optómetra realizando examen y evaluación retinal con equipo Volk InView en Óptica Alemania",
        width: 1400,
        height: 933,
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
      description: "Consulta con nuestro equipo qué situaciones podemos atender y la disponibilidad de nuestros servicios.",
      ctaText: "Consultar disponibilidad",
      whatsappMessage: "Hola, me comunico por una molestia ocular y quisiera consultar su disponibilidad de atención.",
      notice: {
        icon: "eye",
        boldText: "Ante síntomas o lesiones oculares graves,",
        regularText: "acude directamente a un servicio de urgencias médicas.",
      },
    },
    procedures: {
      id: "procedimientos",
      eyebrow: "04 / PROCEDIMIENTOS",
      titlePart1: "Nuestros procedimientos,",
      titleHighlight: "de cerca.",
      description: "Conoce en video cómo realizamos algunas de nuestras evaluaciones visuales en Óptica Alemania Villavicencio.",
      ctaText: "Explorar más procedimientos",
      ctaHref: "/procedimientos",
      items: [
        {
          id: "evaluacion-retinal-volk-inview",
          title: "Evaluación retinal con Volk InView",
          actionText: "Ver procedimiento",
          actionHref: "/procedimientos#evaluacion-retinal-volk-inview",
          image: {
            src: "/images/services/6_procedimientos_image1.webp",
            alt: "Optómetra realizando evaluación retinal con equipo Volk InView en Óptica Alemania Villavicencio",
            width: 1200,
            height: 675,
          },
        },
        {
          id: "test-farnsworth-d15",
          title: "Test de Farnsworth D-15",
          actionText: "Ver procedimiento",
          actionHref: "/procedimientos#test-farnsworth-d15",
          image: {
            src: "/images/services/6_procedimientos_image2.webp",
            alt: "Demostración de test de discriminación de color Farnsworth D-15 e Ishihara en Óptica Alemania",
            width: 1200,
            height: 675,
          },
        },
      ],
    },
    faq: {
      id: "preguntas-frecuentes",
      eyebrow: "07 / PREGUNTAS FRECUENTES",
      titlePart1: "Resolvemos tus",
      titleHighlight: "dudas.",
      description: "Encuentra respuestas a algunas de las preguntas más habituales sobre nuestros servicios de atención visual.",
      contact: {
        title: "¿Tienes otra pregunta?",
        actionText: "Escríbenos",
        whatsappMessage: "Hola Óptica Alemania, tengo una consulta sobre sus servicios de atención visual.",
      },
      items: [
        {
          id: "cita-optometria",
          number: "01",
          question: "¿Cómo puedo consultar por una cita de optometría?",
          answer: "Puedes comunicarte con nuestro equipo por WhatsApp para consultar la disponibilidad de atención y recibir información sobre nuestros servicios.",
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
          answer: "Si no estás seguro de qué examen necesitas, nuestro equipo te orientará por WhatsApp o en consulta según tus síntomas, molestias o antecedentes visuales para indicarte la evaluación adecuada.",
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
      whatsappMessage: "Hola Óptica Alemania, tengo dudas sobre sus servicios y quisiera consultar la disponibilidad de atención.",
    },
  },
};
