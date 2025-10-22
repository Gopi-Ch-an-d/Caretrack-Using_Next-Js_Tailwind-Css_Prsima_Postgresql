"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+91-7207349050";
  const [isClicking, setIsClicking] = useState(false);
  
  // Use api.whatsapp.com instead of wa.me (more reliable)
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber.replace(/[^0-9]/g, "")}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Prevent rapid clicks
    if (isClicking) return;
    
    setIsClicking(true);
    
    // Add a small delay before opening to prevent rate limiting
    setTimeout(() => {
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
      
      // Reset after 2 seconds
      setTimeout(() => {
        setIsClicking(false);
      }, 2000);
    }, 100);
  };

  return (
    <a
      href={whatsappLink}
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 group ${isClicking ? 'pointer-events-none' : ''}`}
      aria-label="Chat with us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className={`relative bg-green-500 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform ${
          isClicking ? 'scale-95 opacity-75' : 'hover:bg-green-600 group-hover:scale-110'
        }`}>
          <FaWhatsapp className="w-6 h-6" />
        </div>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl">
            <p className="text-sm font-medium">
              {isClicking ? "Opening WhatsApp..." : "Chat with us on WhatsApp"}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;