import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { siteContent } from "../data/siteContent";

const flattenedGallery = siteContent.flatMap((category) =>
  category.subcategories.flatMap((sub) =>
    sub.images.map((url) => ({
      url,
      alt: sub.name,
      category: category.name,
    }))
  )
);

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function ImageShowcase() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const shuffledImages = shuffleArray(flattenedGallery);

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery Showcase</h2>
        <Carousel
          ref={emblaRef}
          className="w-full max-w-5xl mx-auto relative group"
          opts={{ loop: true }}
        >
          <CarouselContent>
            {shuffledImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full flex items-center justify-center bg-gray-100">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="max-w-full max-h-[480px] object-contain rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-2 hover:bg-white transition-all" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-md rounded-full p-2 hover:bg-white transition-all" />
        </Carousel>
      </div>
    </section>
  );
}
