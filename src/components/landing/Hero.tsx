import { motion } from "framer-motion";
import { ChevronDown, MapPin, Ruler, BedDouble, Bath, Building, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";

// Animated background shapes component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-gold/8 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold/6 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold-light)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--gold-light)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Animated lines */}
      <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="hsl(var(--gold))"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.line
          x1="100%"
          y1="20%"
          x2="0%"
          y2="80%"
          stroke="hsl(var(--gold))"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
      </svg>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-gold/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById("caracteristicas");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const propertyStats = [
    { icon: Ruler, label: "Área", value: "75 m²" },
    { icon: BedDouble, label: "Habitaciones", value: "3" },
    { icon: Bath, label: "Baños", value: "2" },
    { icon: Building, label: "Estrato", value: "4" },
    { icon: Layers, label: "Piso", value: "4to" },
  ];

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-12"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/20 backdrop-blur-sm">
            <span className="font-display text-lg font-semibold text-gold-light">LM</span>
          </div>
          <span className="font-display text-lg font-medium text-cream">La Mota</span>
        </div>
import { smoothScrollTo } from "@/lib/utils";
...
        <div className="hidden items-center gap-8 md:flex">
          {[
            { label: "Inicio", href: "#inicio" },
            { label: "Características", href: "#caracteristicas" },
            { label: "Galería", href: "#galeria" },
            { label: "Ubicación", href: "#ubicacion" },
            { label: "Contacto", href: "#contacto" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-body text-sm font-medium text-cream/70 transition-colors hover-underline-animation"
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(item.href.substring(1));
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button
          size="sm"
          className="bg-gold/20 font-body text-sm text-gold-light backdrop-blur-sm transition-all hover:bg-gold/30"
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=573165297266&text=Hola%2C%20estoy%20interesado%20en%20el%20apartamento%20ubicado%20en%20la%20Unidad%20Residencial%20La%20Mota.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
              "_blank"
            );
          }}
        >
          Contactar
        </Button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col items-center justify-center px-6 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 backdrop-blur-sm"
          >
            <MapPin className="h-4 w-4 text-gold-light" />
            <span className="font-body text-sm font-medium tracking-wider text-gold-light">
              UNIDAD RESIDENCIAL LA MOTA
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 font-display text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Un hogar que eleva
            <br />
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent">
              tu estilo de vida
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mb-12 max-w-2xl font-body text-lg font-light leading-relaxed text-cream/70 sm:text-xl"
          >
            Descubre un apartamento diseñado para quienes valoran la comodidad, 
            la tranquilidad y los espacios que inspiran.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-gold to-gold-light px-10 py-7 font-body text-base font-semibold tracking-wide text-charcoal shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
              onClick={() => {
                window.open(
                  "https://wa.me/573165297266?text=Hola%2C%20estoy%20interesado%20en%20el%20apartamento%20ubicado%20en%20la%20Unidad%20Residencial%20La%20Mota.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
                  "_blank"
                );
              }}
            >
              Solicitar Información
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-cream/30 bg-cream/5 px-10 py-7 font-body text-base font-medium tracking-wide text-cream backdrop-blur-sm transition-all duration-300 hover:border-cream/50 hover:bg-cream/10"
              onClick={scrollToFeatures}
            >
              Explorar Propiedad
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={scrollToFeatures}
          className="absolute bottom-36 left-1/2 -translate-x-1/2 cursor-pointer text-cream/50 transition-colors hover:text-cream"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.button>
      </div>

      {/* Property Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-gold/10 bg-charcoal/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 py-6 sm:gap-8 md:gap-12">
          {propertyStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              className="group flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 transition-colors group-hover:bg-gold/20">
                <stat.icon className="h-5 w-5 text-gold-light" />
              </div>
              <div className="text-left">
                <span className="block font-body text-xs font-light tracking-wide text-cream/50">
                  {stat.label}
                </span>
                <span className="font-display text-lg font-medium text-cream">
                  {stat.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
