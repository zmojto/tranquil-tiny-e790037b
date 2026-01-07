import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import galleryPool from "@/assets/gallery-pool.jpg";
import galleryRoom from "@/assets/gallery-room.jpg";
import galleryFood from "@/assets/gallery-food.jpg";
import galleryMeditation from "@/assets/gallery-meditation.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";

const images = [
  { src: galleryPool, alt: "Infinity pool at sunset", caption: "Infinity Pool" },
  { src: galleryRoom, alt: "Luxury eco-lodge bedroom", caption: "Accommodation" },
  { src: galleryFood, alt: "Organic breakfast spread", caption: "Farm-to-Table Cuisine" },
  { src: galleryMeditation, alt: "Meditation pavilion", caption: "Meditation Space" },
  { src: gallerySpa, alt: "Spa treatment room", caption: "Wellness Spa" },
  { src: galleryNature, alt: "Jungle hiking trail", caption: "Nature Excursions" },
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
            Our Sanctuary
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4">
            Explore the Retreat
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
              aria-label="Close lightbox"
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
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/50 hover:bg-foreground/70 text-white p-2 rounded-full transition-colors"
              aria-label="Next image"
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
