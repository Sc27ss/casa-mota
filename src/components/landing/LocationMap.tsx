import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Clock, Car } from "lucide-react";

const nearbyPlaces = [
  {
    icon: Car,
    name: "Vías Principales",
    distance: "Fácil acceso",
    description: "Conectividad con toda la ciudad",
  },
  {
    icon: Navigation,
    name: "Transporte Público",
    distance: "Cerca",
    description: "Rutas de bus y transporte",
  },
  {
    icon: Clock,
    name: "Comercio Local",
    distance: "A minutos",
    description: "Tiendas, supermercados y más",
  },
];

const LocationMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="ubicacion" ref={ref} className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-gold">
            Ubicación
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Ubicación <span className="text-gold">estratégica</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
            Unidad Residencial La Mota - Un entorno residencial tranquilo con 
            excelente conectividad.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative h-[400px] overflow-hidden rounded-3xl border border-border/50 bg-muted lg:h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=6.216333,-75.599417&hl=es&z=17&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Nearby Places */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                Cerca de ti
              </h3>
              <div className="space-y-4">
                {nearbyPlaces.map((place, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group flex items-start gap-4 rounded-xl border border-transparent p-3 transition-all hover:border-gold/20 hover:bg-gold/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 transition-colors group-hover:bg-gold/20">
                      <place.icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-body text-sm font-medium text-foreground">
                        {place.name}
                      </h4>
                      <p className="font-body text-xs text-gold">{place.distance}</p>
                      <p className="font-body text-xs text-muted-foreground">
                        {place.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="flex-1 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 to-gold/5 p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                Datos clave
              </h3>
              <ul className="space-y-3 font-body text-sm">
                <li className="flex items-center gap-2 text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Estrato 4
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Zona residencial tranquila
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Seguridad 24/7
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  Excelente valorización
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
