import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import cyprusPoolNight from "@/assets/cyprus-pool-night.jpg";

import cyprusBlueLagoon from "@/assets/cyprus-blue-lagoon.jpg";
import cyprusBedroom from "@/assets/cyprus-bedroom.jpg";
import cyprusKonnosBay from "@/assets/cyprus-konnos-bay.jpg";
import cyprusMimosaBeach from "@/assets/cyprus-mimosa-beach.jpg";

const images = [
  { src: cyprusPoolNight, alt: "Bazén pri západe slnka na Cypre", caption: "Cyprus – bazén" },
  { src: "/images/blatinka/interior.jpg", alt: "Útulná spoločenská miestnosť v Blatinke", caption: "Spoločné priestory" },
  { src: "/images/necpaly/main.jpg", alt: "Chalet Alexandra v Necpaloch", caption: "Necpaly – Veľká Fatra" },
  { src: "/images/blatinka/yoga.jpg", alt: "Jóga v Blatinke", caption: "Jóga v prírode" },
  { src: cyprusKonnosBay, alt: "Záliv Konnos na Cypre", caption: "Cyprus – pobrežie" },
  { src: "https://www.zadarvillas.com/photos/villas/galleries/22082024130701_dsc-5122.jpg", alt: "Villa Quince v Chorvátsku", caption: "Útulné ubytovanie" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-secondary/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Naša svätyňa
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4">
            Preskúmajte pobyt
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-serif text-lg">{image.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-none shadow-none">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Zavrieť galériu"
            >
              <X className="w-8 h-8" />
            </button>

            {selectedIndex !== null && (
              <>
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/70 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-serif">{images[selectedIndex].caption}</span>
                </div>
              </>
            )}

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-foreground/50 hover:bg-foreground/70 text-white p-2 rounded-full transition-colors"
              aria-label="Predchádzajúci obrázok"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/50 hover:bg-foreground/70 text-white p-2 rounded-full transition-colors"
              aria-label="Ďalší obrázok"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
