"use client";

import { useState } from "react";
import { Listing } from "../../types";
import { ImageLightbox } from "./ImageLightbox";
import { FavoriteButton } from "./FavoriteButton";

interface ProductGalleryProps {
  listing: Listing;
}

export function ProductGallery({ listing }: ProductGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="relative mb-6 grid gap-2 md:grid-cols-4">
        {listing.images.slice(0, 4).map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(index)}
            className={`overflow-hidden rounded-xl border border-black/5 bg-neutral-100 ${
              index === 0 ? "md:col-span-2 md:row-span-2 h-56 md:h-80" : "h-28 md:h-40"
            }`}
          >
            <img
              src={src}
              alt={listing.title}
              className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
            />
          </button>
        ))}

        <div className="pointer-events-none absolute left-3 top-3">
          <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
            {listing.images.length} fotos
          </span>
        </div>

        <div className="absolute right-3 top-3">
          <FavoriteButton listingId={listing.id} />
        </div>
      </section>

      <ImageLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={listing.images}
        activeIndex={activeIndex}
        onChangeIndex={setActiveIndex}
      />
    </>
  );
}

