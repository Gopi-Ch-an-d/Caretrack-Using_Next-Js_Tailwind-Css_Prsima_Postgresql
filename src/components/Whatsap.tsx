// removed incorrect SVG Link import (use native <a> instead)
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // FontAwesome WhatsApp icon

 const WhatsAppButton = () => {
  const phoneNumber = '+91-7207349050';
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    window.open(whatsappLink, '_blank'); 
  };

  return (
    <Link
      href={whatsappLink}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110">
          <FaWhatsapp className="w-6 h-6" />
        </div>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl">
            <p className="text-sm font-medium">Chat with us on WhatsApp</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default WhatsAppButton;