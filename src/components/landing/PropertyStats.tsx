import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Calendar, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "75",
    suffix: "m²",
    label: "Área Total",
    description: "Espacios amplios y bien distribuidos",
  },
  {
    icon: Calendar,
    value: "4",
    suffix: "to",
    label: "Piso",
    description: "Vista privilegiada y mayor privacidad",
  },
  {
    icon: Award,
    value: "4",
    suffix: "",
    label: "Estrato",
    description: "Excelente calidad de vida",
  },
  {
    icon: TrendingUp,
    value: "100",
    suffix: "%",
    label: "Estado",
    description: "En excelentes condiciones",
  },
];

const PropertyStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold/20">
                <stat.icon className="h-7 w-7 text-gold" />
              </div>

              {/* Value */}
              <div className="mb-2 flex items-baseline justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="font-display text-4xl font-semibold text-foreground"
                >
                  {stat.value}
                </motion.span>
                <span className="ml-1 font-body text-xl text-gold">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                {stat.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {stat.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyStats;
