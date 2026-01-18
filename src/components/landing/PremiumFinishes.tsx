import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Grid3X3, CheckCircle2 } from "lucide-react";

const finishes = [
  {
    icon: Grid3X3,
    title: "Piso en Cerámica",
    subtitle: "Acabados de Alta Calidad",
    description:
      "Pisos en cerámica de primera calidad que combinan durabilidad con elegancia. Fácil mantenimiento y aspecto impecable por años.",
    features: ["Alta durabilidad", "Fácil limpieza", "Diseño elegante", "Resistente al desgaste"],
  },
  {
    icon: Sparkles,
    title: "Cielo Raso Drywall",
    subtitle: "Acabados Modernos y Elegantes",
    description:
      "Cielos rasos en drywall que aportan un toque contemporáneo y sofisticado. Acabados lisos y perfectos que realzan cada espacio.",
    features: ["Acabado perfecto", "Aislamiento acústico", "Diseño moderno", "Iluminación integrada"],
  },
];

const PremiumFinishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10"
          >
            <Sparkles className="h-8 w-8 text-gold-light" />
          </motion.div>
          <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-gold-light">
            Acabados Premium
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
            Detalles que hacen la{" "}
            <span className="text-gold-light">diferencia</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-cream/70">
            Materiales de primera calidad seleccionados para ofrecer durabilidad, 
            estética y el confort que tu hogar merece.
          </p>
        </motion.div>

        {/* Finishes Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {finishes.map((finish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? -40 : 40 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-charcoal-light/80 to-charcoal/80 p-8 backdrop-blur-sm transition-all duration-500 hover:border-gold/40 sm:p-10"
            >
              {/* Glow effect on hover */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition-all duration-500 group-hover:bg-gold/10" />

              {/* Icon */}
              <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 transition-all duration-300 group-hover:scale-110 group-hover:border-gold/50">
                <finish.icon className="h-8 w-8 text-gold-light" />
              </div>

              {/* Content */}
              <div className="relative">
                <span className="mb-2 block font-body text-sm font-medium uppercase tracking-wider text-gold-light/80">
                  {finish.subtitle}
                </span>
                <h3 className="mb-4 font-display text-2xl font-semibold text-cream sm:text-3xl">
                  {finish.title}
                </h3>
                <p className="mb-6 font-body text-base leading-relaxed text-cream/70">
                  {finish.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-3">
                  {finish.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.5 + fIndex * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-gold" />
                      <span className="font-body text-sm text-cream/80">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Border gradient */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFinishes;
