export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface BusinessContact {
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  address: string;
  neighborhood: string;
  city: string;
  department: string;
  schedule: string;
  instagram: string;
  instagramUrl: string;
  googleMapsUrl: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  city: string;
  description: string;
  contact: BusinessContact;
  nav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Óptica Alemania",
  tagline: "Cuidamos tu visión con experiencia y tecnología.",
  city: "Villavicencio",
  description: "Atención optométrica, evaluaciones especializadas y soluciones para tu salud visual en Villavicencio.",
  contact: {
    phonePrimary: "311 201 7302",
    phoneSecondary: "322 712 8828",
    whatsappNumber: "573112017302",
    address: "Calle 35 #34-36, Barzal Bajo",
    neighborhood: "Barzal Bajo",
    city: "Villavicencio",
    department: "Meta",
    schedule: "Lunes a sábado 8:00 a.m. – 6:00 p.m.",
    instagram: "@opticaalemania",
    instagramUrl: "https://instagram.com/opticaalemania",
    googleMapsUrl: "https://maps.google.com/?q=Calle+35+%2334-36+Barzal+Bajo+Villavicencio+Meta",
  },
  nav: [
    { label: "Inicio", href: "#inicio", active: true },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Procedimientos", href: "#procedimientos" },
    { label: "Monturas", href: "#monturas" },
    { label: "Contacto", href: "#contacto" },
  ],
};
