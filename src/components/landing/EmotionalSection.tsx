import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EmotionalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative Line */}
          <div className="mx-auto mb-8 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Quote */}
          <h2 className="mb-8 font-display text-3xl font-medium leading-relaxed tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Donde cada detalle está pensado para{" "}
            <span className="text-gold">tu bienestar</span>
          </h2>

          <p className="mx-auto max-w-2xl font-body text-lg font-light leading-relaxed text-muted-foreground">
            Un espacio que combina funcionalidad y elegancia, diseñado para 
            ofrecerte la tranquilidad y comodidad que mereces. Vive en un entorno 
            que se adapta a tu ritmo de vida.
          </p>

          {/* Decorative Line */}
          <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalSection;