import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-charcoal">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20">
                <span className="font-display text-xl font-semibold text-gold-light">LM</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-cream">La Mota</h3>
                <p className="font-body text-sm text-cream/60">Unidad Residencial</p>
              </div>
            </div>
            <p className="mb-6 max-w-md font-body text-base leading-relaxed text-cream/70">
              Un apartamento de 75 m² en excelente estado, ubicado en el cuarto piso 
              de una de las mejores unidades residenciales. Tu próximo hogar te espera.
            </p>
            {/* Social/Contact Quick Links */}
            <div className="flex gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=573165297266&text=Hola%2C%20estoy%20interesado%20en%20el%20apartamento%20ubicado%20en%20la%20Unidad%20Residencial%20La%20Mota.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold-light transition-all hover:bg-gold/20"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="tel:+573165297266"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold-light transition-all hover:bg-gold/20"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
import { smoothScrollTo } from "@/lib/utils";
...
          <div>
            <h4 className="mb-6 font-display text-base font-semibold text-cream">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Características", href: "#caracteristicas" },
                { label: "Galería", href: "#galeria" },
                { label: "Ubicación", href: "#ubicacion" },
                { label: "Contacto", href: "#contacto" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 transition-colors hover:text-gold-light"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo(link.href.substring(1));
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 font-display text-base font-semibold text-cream">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+573165297266"
                  className="flex items-center gap-3 font-body text-sm text-cream/60 transition-colors hover:text-gold-light"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  +57 316 529 7266
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span className="font-body text-sm text-cream/60">
                  Unidad Residencial La Mota
                  <br />
                  Piso 4 · Estrato 4
                </span>
              </li>
            </ul>

            {/* Price Badge */}
            <div className="mt-6 inline-block rounded-lg border border-gold/30 bg-gold/10 px-4 py-2">
              <span className="font-body text-sm font-medium text-gold-light">
                Precio Negociable
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-body text-sm text-cream/50">
            © {currentYear} La Mota. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 font-body text-sm text-cream/50">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-gold" />
            <span>para tu futuro hogar</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg bg-gold/10 px-4 py-2 font-body text-sm text-cream/70 transition-all hover:bg-gold/20 hover:text-cream"
          >
            <ArrowUp className="h-4 w-4" />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
