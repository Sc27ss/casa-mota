import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/573165297266?text=Hola%2C%20estoy%20interesado%20en%20el%20apartamento%20ubicado%20en%20la%20Unidad%20Residencial%20La%20Mota.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
      "_blank"
    );
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:bottom-8 sm:right-8"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" fill="white" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-charcoal px-4 py-2 font-body text-sm text-cream shadow-lg sm:block">
        ¿Tienes preguntas?
        <span className="absolute right-0 top-1/2 -mr-2 -translate-y-1/2 border-8 border-transparent border-l-charcoal" />
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;