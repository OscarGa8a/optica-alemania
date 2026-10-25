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
};
