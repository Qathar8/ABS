import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '254700123456';
  const message = 'Hello! I would like to inquire about your Hajj and Umrah packages.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
    >
      <MessageCircle className="h-6 w-6 group-hover:animate-pulse" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;