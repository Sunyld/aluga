"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import type { Listing } from "../../types";
import { cn } from "../../lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Progress } from "../ui/progress";

interface ListingStoryCardProps {
  data: Listing;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export function ListingStoryCard({
  data,
  isWishlisted,
  onToggleWishlist,
}: ListingStoryCardProps) {
  const [index, setIndex] = useState(0);

  return (
    <article className="flex min-h-[calc(100vh-4.5rem)] flex-col justify-between pb-20 pt-3">
      <div className="space-y-3">
        <div className="relative h-[340px] w-full overflow-hidden rounded-3xl bg-neutral-200">
          <Carousel
            className="h-full w-full"
          >
            <CarouselContent>
              {data.images.map((src, i) => (
                <CarouselItem
                  key={src}
                  className="h-[340px]"
                  onFocus={() => setIndex(i)}
                  onMouseDown={() => setIndex(i)}
                >
                  <img
                    src={src}
                    alt={data.title}
                    className="h-full w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {data.images.length > 1 && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>

          <button
            type="button"
            aria-label="Favorito"
            onClick={onToggleWishlist}
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur"
          >
            <Heart
              className={cn(
                "h-5 w-5 transition",
                isWishlisted
                  ? "fill-red-500 text-red-500"
                  : "fill-transparent text-white"
              )}
            />
          </button>

          <div className="pointer-events-none absolute inset-x-3 top-3 flex gap-1">
            {data.images.map((_, i) => (
              <Progress
                key={i}
                value={i < index ? 100 : i === index ? 60 : 0}
              />
            ))}
          </div>
        </div>

        <div className="space-y-1 px-1">
          <h2 className="text-base font-semibold text-neutral-900">
            {data.title}
          </h2>
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
            {data.location}
          </p>
          <p className="text-sm text-neutral-600">
            {data.description.length > 120
              ? data.description.slice(0, 120) + "..."
              : data.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between px-1 text-sm">
        <div className="space-y-0.5">
          <p className="font-semibold text-neutral-900">
            {new Intl.NumberFormat("pt-MZ", {
              style: "currency",
              currency: "MZN",
              maximumFractionDigits: 0,
            }).format(data.price)}
            <span className="text-xs font-normal text-neutral-500">
              {" "}
              / dia
            </span>
          </p>
          <p className="text-xs text-neutral-500">
            {data.distance} · {data.dates}
          </p>
        </div>
        <p className="text-xs text-neutral-500">
          Anunciado por{" "}
          <span className="font-medium text-neutral-800">
            {data.host.name}
          </span>
        </p>
      </div>
    </article>
  );
}

