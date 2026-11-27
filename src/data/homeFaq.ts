import type { FaqItem, ServicesFaqConfig } from './siteConfig';

/** FAQ visible de la home y del FAQPage JSON-LD (la misma fuente). */
export const homeFaqItems: FaqItem[] = [
  {
    id: 'home-ubicacion',
    number: '01',
    question: '¿Dónde está ubicada Óptica Alemania Villavicencio?',
    answer:
      'Estamos ubicados en Calle 35 #34-36, Barzal Bajo, Villavicencio, Meta, en la zona médica de la ciudad.',
    defaultOpen: true,
  },
  {
    id: 'home-horarios',
    number: '02',
    question: '¿Cuáles son los horarios de atención?',
    answer:
      'Atendemos de lunes a viernes de 9:00 a.m. a 12:00 m. y de 2:00 p.m. a 6:00 p.m., y sábados de 9:00 a.m. a 12:00 m. y de 1:00 p.m. a 3:00 p.m.',
    defaultOpen: false,
  },
  {
    id: 'home-agendar',
    number: '03',
    question: '¿Cómo puedo agendar una consulta de optometría?',
    answer:
      'Puedes agendar tu cita directamente a través de nuestro canal de WhatsApp (+57 311 201 7302) o comunicándote al 322 712 8828.',
    defaultOpen: false,
  },
  {
    id: 'home-cofrem',
    number: '04',
    question: '¿Tienen convenio con Cofrem?',
    answer:
      'Sí, como afiliados al Club Descuentos Cofrem ofrecemos 15% de descuento en monturas y 10% en lentes oftálmicos.',
    defaultOpen: false,
  },
];

export const homeFaqConfig: ServicesFaqConfig = {
  id: 'preguntas-frecuentes-inicio',
  eyebrow: 'PREGUNTAS FRECUENTES',
  titlePart1: 'Preguntas frecuentes sobre ',
  titleHighlight: 'nuestros servicios',
  description:
    'Encuentra respuestas a algunas de las preguntas más habituales sobre nuestros servicios de atención visual.',
  contact: {
    title: '¿Tienes otra pregunta?',
    actionText: 'Escríbenos',
    whatsappMessage:
      'Hola, visité la página de Óptica Alemania Villavicencio y tengo una consulta.',
  },
  items: homeFaqItems,
};

export function toFaqPageEntity(items: FaqItem[]) {
  return items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  }));
}
