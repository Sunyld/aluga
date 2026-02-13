"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Listing } from "../types";
import { useRouter } from "next/navigation";
import { FavoriteButton } from "./product/FavoriteButton";
import { Badge } from "./ui/badge";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "../lib/utils";

const PROGRESS_DURATION_MS = 3000;

const ActiveCardContext = createContext<{
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}>({ activeId: null, setActiveId: () => {} });

export function ActiveCardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  return (
    <ActiveCardContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveCardContext.Provider>
  );
}

function formatPrice(price: number, finalidade?: "aluguer" | "venda") {
  const formatted = new Intl.NumberFormat("pt-MZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
  const suffix = finalidade === "aluguer" ? "/mês" : "";
  return `${formatted} MZN${suffix ? ` ${suffix}` : ""}`;
}

interface ListingCardProps {
  data: Listing;
  onClick: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (e: React.MouseEvent) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onClick,
  isWishlisted,
  onToggleWishlist,
}) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const { activeId, setActiveId } = useContext(ActiveCardContext);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    dragFree: false,
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const progressRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedProgressRef = useRef(0);

  const isMobileActive = activeId === data.id;

  const scrollToIndex = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      setSelectedIndex(index);
      setProgress(0);
      pausedProgressRef.current = 0;
      startTimeRef.current = performance.now();
    },
    [emblaApi]
  );

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const max = data.images.length - 1;
    if (selectedIndex < max) {
      scrollToIndex(selectedIndex + 1);
    }
  }, [emblaApi, selectedIndex, data.images.length, scrollToIndex]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setProgress(0);
    pausedProgressRef.current = 0;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      void emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Desktop: hover progress animation
  useEffect(() => {
    if (!isHovering || data.images.length <= 1) return;

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min(100, (elapsed / PROGRESS_DURATION_MS) * 100);
      setProgress(pct);

      if (pct >= 100) {
        emblaApi?.scrollNext();
        setProgress(0);
        startTimeRef.current = performance.now();
        progressRef.current = requestAnimationFrame(animate);
      } else if (isHovering) {
        progressRef.current = requestAnimationFrame(animate);
      }
    };

    startTimeRef.current = performance.now();
    progressRef.current = requestAnimationFrame(animate);
    return () => {
      if (progressRef.current) {
        cancelAnimationFrame(progressRef.current);
      }
      pausedProgressRef.current = progress;
    };
  }, [isHovering, data.images.length, emblaApi]);

  // Mobile: Intersection Observer
  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          if (ratio >= 0.7) {
            setActiveId(data.id);
          } else if (activeId === data.id) {
            setActiveId(null);
          }
        });
      },
      { threshold: [0, 0.7] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [data.id, activeId, setActiveId]);

  // Mobile: auto-play when active
  useEffect(() => {
    if (!isMobileActive || data.images.length <= 1) return;
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) return;

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min(100, (elapsed / PROGRESS_DURATION_MS) * 100);
      setProgress(pct);

      if (pct >= 100) {
        emblaApi?.scrollNext();
        setProgress(0);
        startTimeRef.current = performance.now();
        progressRef.current = requestAnimationFrame(animate);
      } else if (activeId === data.id) {
        progressRef.current = requestAnimationFrame(animate);
      }
    };

    startTimeRef.current = performance.now();
    setProgress(0);
    progressRef.current = requestAnimationFrame(animate);
    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [isMobileActive, data.images.length, data.id, activeId, emblaApi]);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
      setIsHovering(true);
      setProgress(0);
      startTimeRef.current = performance.now();
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
      setIsHovering(false);
      setProgress(0);
    }
  };

  const handleClick = () => {
    onClick();
    router.push(`/produto/${data.id}`);
  };

  const showBadge = (data.category === "imoveis" || data.category === "eventos") && data.finalidade;
  const shouldShowProgress =
    data.images.length > 1 &&
    (isHovering || isMobileActive);

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "col-span-1 cursor-pointer group flex flex-col overflow-hidden",
        "rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
      )}
    >
      <div className="flex flex-col gap-3 p-3 sm:p-4">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <div ref={emblaRef} className="h-full w-full overflow-hidden">
            <div className="flex h-full -ml-0">
              {data.images.map((src) => (
                <div
                  key={src}
                  className="min-w-0 flex-[0_0_100%] pl-0 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={data.title}
                    className="object-cover h-full w-full group-hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Single progress bar - estilo status WhatsApp */}
          {shouldShowProgress && (
            <div className="absolute inset-x-0 top-0 h-0.5 bg-[#484848]/20 z-10">
              <div
                className="h-full bg-[#FF585D] transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Arrows - desktop only */}
          {data.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  emblaApi?.scrollPrev();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 hidden md:flex items-center justify-center rounded-full bg-white/90 text-[#484848] shadow-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  emblaApi?.scrollNext();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 hidden md:flex items-center justify-center rounded-full bg-white/90 text-[#484848] shadow-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Próximo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Badge VENDA/ALUGUER */}
          {showBadge && (
            <div className="absolute top-2 left-2 z-10">
              <Badge
                className="bg-[#FF585D] text-white border-0 text-[10px] px-2 py-0 h-5 font-semibold"
                variant="default"
              >
                {data.finalidade === "venda" ? "VENDA" : "ALUGUER"}
              </Badge>
            </div>
          )}

          <div
            className="absolute top-2 right-2 z-10 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(e);
            }}
          >
            <FavoriteButton listingId={data.id} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-[#484848] line-clamp-1">
            {data.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-[#484848]/70 flex-wrap">
            <span>{data.location}</span>
            <Star size={12} className="fill-amber-400/80 text-amber-500/80 shrink-0" />
            <span className="text-[#484848]/80">{data.rating}</span>
          </div>
          <p className="text-sm text-[#484848]/60 line-clamp-1 overflow-hidden">
            {data.description}
          </p>
          <p className="font-semibold text-base text-[#FF585D] mt-1">
            {formatPrice(data.price, data.finalidade)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
