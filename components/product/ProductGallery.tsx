"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Listing } from "../../types";
import { ImageLightbox } from "./ImageLightbox";
import { FavoriteButton } from "./FavoriteButton";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "../../lib/utils";

interface ProductGalleryProps {
  listing: Listing;
}

export function ProductGallery({ listing }: ProductGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbScrollRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    dragFree: false,
    loop: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      void emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const goToIndex = useCallback(
    (index: number) => {
      setActiveIndex(index);
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const openAt = (index: number) => {
    setActiveIndex(index);
    emblaApi?.scrollTo(index);
    setLightboxOpen(true);
  };


  return (
    <>
      <section className="mb-6">
        {/* Imagem principal */}
        <div className="relative overflow-hidden rounded-xl mb-3">
          <div
            ref={emblaRef}
            className="overflow-hidden rounded-xl cursor-pointer"
            onClick={() => openAt(activeIndex)}
          >
            <div className="flex -ml-0">
              {listing.images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className="min-w-0 flex-[0_0_100%] pl-0 h-56 md:h-80"
                  onClick={(e) => {
                    e.stopPropagation();
                    openAt(index);
                  }}
                >
                  <img
                    src={src}
                    alt={listing.title}
                    className="h-full w-full object-cover transition-transform duration-200 hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Setas desktop */}
          {listing.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollPrev();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 hidden md:flex items-center justify-center rounded-full bg-white/90 text-[#484848] shadow-md hover:bg-white"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollNext();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 hidden md:flex items-center justify-center rounded-full bg-white/90 text-[#484848] shadow-md hover:bg-white"
                aria-label="Próximo"
              >
                <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

          <div className="pointer-events-none absolute left-3 top-3 z-10">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
            {listing.images.length} fotos
          </span>
        </div>

          <div className="absolute right-3 top-3 z-10" onClick={(e) => e.stopPropagation()}>
            <FavoriteButton listingId={listing.id} />
          </div>
        </div>

        {/* Miniaturas horizontais */}
        {listing.images.length > 1 && (
          <div
            ref={thumbScrollRef}
            className="flex gap-2 overflow-x-auto pb-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {(listing.images.length > 5 ? listing.images.slice(0, 5) : listing.images).map((src, index) => (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => goToIndex(index)}
                className={cn(
                  "shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors",
                  activeIndex === index
                    ? "border-[#FF585D] ring-1 ring-[#FF585D]/30"
                    : "border-transparent hover:border-[#484848]/30"
                )}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
            {listing.images.length > 5 && (
              <button
                type="button"
                onClick={() => goToIndex(5)}
                className={cn(
                  "shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-xs font-medium text-[#484848] bg-[#484848]/10 border-2 transition-colors",
                  activeIndex >= 5
                    ? "border-[#FF585D] ring-1 ring-[#FF585D]/30"
                    : "border-transparent hover:border-[#484848]/30"
                )}
              >
                +{listing.images.length - 5} mais
              </button>
            )}
          </div>
        )}
      </section>

      <ImageLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={listing.images}
        activeIndex={activeIndex}
        onChangeIndex={(i) => {
          setActiveIndex(i);
          emblaApi?.scrollTo(i);
        }}
      />
    </>
  );
}
