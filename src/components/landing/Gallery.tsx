import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "https://i.imgur.com/91xafou.jpeg",
    alt: "Sala principal",
  },
  {
    src: "https://i.imgur.com/7mxslVM.jpeg",
    alt: "Sala principal - otra vista",
  },
  {
    src: "https://i.imgur.com/nHJ2mXF.jpeg",
    alt: "Comedor",
  },
  {
    src: "https://i.imgur.com/DnNxe6r.jpeg",
    alt: "Habitación principal",
  },
  {
    src: "https://i.imgur.com/iW38UVI.jpeg",
    alt: "Habitación secundaria",
  },
  {
    src: "https://i.imgur.com/FnDVoQN.jpeg",
    alt: "Habitación terciaria",
  },
  {
    src: "https://i.imgur.com/3QLLcBk.jpeg",
    alt: "Otra vista de habitación principal",
  },
  {
    src: "https://i.imgur.com/bI3wHzV.jpeg",
    alt: "Baño principal",
  },
  {
    src: "https://i.imgur.com/BugvDfS.jpeg",
    alt: "Baño secundario",
  },
  {
    src: "https://i.imgur.com/pmTznf5.jpeg",
    alt: "Cocina",
  },
  {
    src: "https://i.imgur.com/vJPzLuu.jpeg",
    alt: "Cocina - otra vista",
  },
  {
    src: "https://i.imgur.com/NnYynnk.jpeg",
    alt: "Zona de lavandería",
  },
  {
    src: "https://i.imgur.com/pCw95L9.jpeg",
    alt: "Balcón",
  },
  {
    src: "https://i.imgur.com/hpz2kuh.jpeg",
    alt: "Vista exterior",
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="galeria" ref={ref} className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-gold">
            Galería
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Conoce cada espacio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-muted-foreground">
            Explora los ambientes de este apartamento y descubre el potencial de tu nuevo hogar.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mt-12"
        >
          {/* Carousel Header */}
          <div className="mb-6 flex items-center justify-end">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="h-10 w-10 rounded-full border-border/50 bg-card hover:border-gold/30 hover:bg-gold/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="h-10 w-10 rounded-full border-border/50 bg-card hover:border-gold/30 hover:bg-gold/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Embla Carousel */}
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full cursor-pointer sm:basis-1/2 lg:basis-1/3"
                  onClick={() => openLightbox(index)}
                >
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-4">
                      <span className="font-body text-sm text-cream">{image.alt}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute right-6 top-6 z-50 rounded-full bg-cream/10 p-2 text-cream transition-colors hover:bg-cream/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 z-50 rounded-full bg-cream/10 p-3 text-cream transition-colors hover:bg-cream/20"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 z-50 rounded-full bg-cream/10 p-3 text-cream transition-colors hover:bg-cream/20"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Image */}
          <motion.img
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image Info */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
            <span className="font-body text-base text-cream">
              {galleryImages[selectedImage].alt}
            </span>
            <span className="rounded-full bg-cream/10 px-4 py-2 font-body text-sm text-cream backdrop-blur-sm">
              {selectedImage + 1} / {galleryImages.length}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
