import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/573165297266?text=Hola%2C%20estoy%20interesado%20en%20el%20apartamento%20ubicado%20en%20la%20Unidad%20Residencial%20La%20Mota.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
      "_blank"
    );
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-24 sm:py-32">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-2 font-body text-sm font-medium tracking-wider text-gold">
            PRECIO NEGOCIABLE
          </span>

          {/* Main Title */}
          <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            ¿Listo para conocer tu{" "}
            <span className="text-gold">nuevo hogar</span>?
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            No dejes pasar esta oportunidad. Agenda una visita y descubre en 
            persona todo lo que este apartamento tiene para ofrecerte.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="group bg-gold px-10 py-7 font-body text-lg font-medium tracking-wide text-charcoal transition-all duration-300 hover:bg-gold-light hover:shadow-xl"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Solicitar Información
              <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Trust Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 font-body text-sm text-muted-foreground"
          >
            Respuesta inmediata · Sin compromiso · Atención personalizada
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;