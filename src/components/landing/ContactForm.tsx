import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, User, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es muy largo"),
  phone: z.string().trim().min(7, "Ingresa un número válido").max(20, "Número muy largo"),
  message: z.string().trim().min(5, "El mensaje debe tener al menos 5 caracteres").max(1000, "El mensaje es muy largo"),
});

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const initialFormData = {
    name: "",
    phone: "",
    message: "Hola, estoy interesado en el apartamento ubicado en la Unidad Residencial La Mota. Quisiera más información.",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setIsSubmittedSuccessfully(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Construct WhatsApp message
    const text = `*Nuevo contacto desde la web*%0A%0A` +
      `*Nombre:* ${encodeURIComponent(formData.name.trim())}%0A` +
      `*Teléfono:* ${encodeURIComponent(formData.phone.trim())}%0A%0A` +
      `*Mensaje:*%0A${encodeURIComponent(formData.message.trim())}`;

    // Open WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=573165297266&text=${text}`, "_blank");

    setIsSubmittedSuccessfully(true);
    setFormData(initialFormData); // Reset form fields
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" ref={ref} className="bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-gold">
              Contacto
            </span>
            <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              ¿Tienes preguntas?{" "}
              <span className="text-gold">Escríbenos</span>
            </h2>
            <p className="mb-8 font-body text-lg leading-relaxed text-muted-foreground">
              Completa el formulario y te responderemos a la brevedad. 
              También puedes contactarnos directamente por WhatsApp.
            </p>

            {/* Contact Benefits */}
            <div className="space-y-4">
              {[
                "Respuesta en menos de 24 horas",
                "Agenda una visita personalizada",
                "Sin compromiso de compra",
                "Atención personalizada",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20">
                    <CheckCircle className="h-4 w-4 text-gold" />
                  </div>
                  <span className="font-body text-base text-foreground">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isSubmittedSuccessfully ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gold/50 bg-card p-8 text-center shadow-lg sm:p-10">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
                </motion.div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Tu mensaje ha sido preparado. Completa el envío en WhatsApp.
                </p>
                <Button
                  onClick={handleReset}
                  className="mt-8"
                  variant="outline"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border/50 bg-card p-8 shadow-lg sm:p-10"
              >
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-body text-sm font-medium text-foreground"
                    >
                      Nombre completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        className={`h-12 pl-12 font-body ${
                          errors.name ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 font-body text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block font-body text-sm font-medium text-foreground"
                    >
                      Teléfono / WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+57 300 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`h-12 pl-12 font-body ${
                          errors.phone ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 font-body text-sm text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-body text-sm font-medium text-foreground"
                    >
                      Mensaje
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntanos qué te interesa saber..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`pl-12 pt-3 font-body ${
                          errors.message ? "border-destructive" : ""
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 font-body text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gold to-gold-light py-6 font-body text-base font-semibold tracking-wide text-charcoal transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar por WhatsApp
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center font-body text-xs text-muted-foreground">
                    Al enviar, serás redirigido a WhatsApp para completar el mensaje.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
