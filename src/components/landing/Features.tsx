import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BedDouble,
  Bath,
  Sofa,
  ChefHat,
  WashingMachine,
  Car,
  Warehouse,
  Wind,
} from "lucide-react";

const features = [
  {
    icon: BedDouble,
    title: "3 Habitaciones",
    description: "Amplias habitaciones con clóset incluido",
  },
  {
    icon: Bath,
    title: "2 Baños Completos",
    description: "Baños funcionales y bien iluminados",
  },
  {
    icon: Sofa,
    title: "Sala - Comedor",
    description: "Espacio amplio e iluminado para compartir",
  },
  {
    icon: ChefHat,
    title: "Cocina Integral",
    description: "Cocina moderna y práctica",
  },
  {
    icon: WashingMachine,
    title: "Zona de Ropas",
    description: "Área independiente para lavandería",
  },
  {
    icon: Car,
    title: "Parqueadero Cubierto",
    description: "Espacio seguro para tu vehículo",
  },
  {
    icon: Warehouse,
    title: "Cuarto Útil",
    description: "Almacenamiento adicional incluido",
  },
  {
    icon: Wind,
    title: "Bien Ventilado",
    description: "Espacios frescos y aireados",
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="caracteristicas"
      ref={ref}
      className="bg-secondary/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-gold">
            Características
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Todo lo que necesitas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
            Un apartamento de 75 m² en excelente estado, con distribución inteligente 
            y acabados de calidad en el cuarto piso.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg transition-transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-xl bg-gold/10 p-3 transition-colors duration-300 group-hover:bg-gold/20">
                <feature.icon className="h-6 w-6 text-gold" />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
