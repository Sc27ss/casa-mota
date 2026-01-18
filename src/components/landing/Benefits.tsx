import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, TreePine, Heart, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Seguridad 24/7",
    description:
      "Vive tranquilo en un entorno residencial con medidas de seguridad permanentes.",
  },
  {
    icon: TreePine,
    title: "Entorno Tranquilo",
    description:
      "Disfruta de un ambiente residencial alejado del ruido y el estrés de la ciudad.",
  },
  {
    icon: Heart,
    title: "Calidad de Vida",
    description:
      "Espacios diseñados para el bienestar, la comodidad y el descanso de tu familia.",
  },
  {
    icon: MapPin,
    title: "Ubicación Estratégica",
    description:
      "Acceso conveniente a vías principales y servicios esenciales cerca de ti.",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-gold-light">
            Beneficios
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
            Más que un apartamento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-cream/70">
            Vive en una unidad residencial que ofrece todo lo necesario para 
            una vida plena y tranquila.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group text-center"
            >
              {/* Icon Container */}
              <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 transition-all duration-300 group-hover:border-gold/40 group-hover:bg-gold/20">
                <benefit.icon className="h-10 w-10 text-gold-light transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Content */}
              <h3 className="mb-3 font-display text-xl font-medium text-cream">
                {benefit.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-cream/60">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;