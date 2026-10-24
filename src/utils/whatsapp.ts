export interface WhatsAppOptions {
  phone?: string;
  message: string;
}

export function buildWhatsAppLink(message: string, phone: string = '573101234567'): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
