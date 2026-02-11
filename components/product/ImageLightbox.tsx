"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface ImageLightboxProps {
  open: boolean;
  images: string[];
  activeIndex: number;
  onChangeIndex: (index: number) => void;
  onClose: () => void;
}

export function ImageLightbox({
  open,
  images,
  activeIndex,
  onChangeIndex,
  onClose,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight")
        onChangeIndex((activeIndex + 1) % images.length);
      if (event.key === "ArrowLeft")
        onChangeIndex(
          activeIndex === 0 ? images.length - 1 : activeIndex - 1
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, activeIndex, images.length, onChangeIndex, onClose]);

  if (!open) return null;

  const goNext = () =>
    onChangeIndex((activeIndex + 1) % Math.max(images.length, 1));
  const goPrev = () =>
    onChangeIndex(
      activeIndex === 0 ? Math.max(images.length - 1, 0) : activeIndex - 1
    );

  const current = images[activeIndex] ?? images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-6">
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute left-4 top-4 inline-flex h-9 items-center gap-2 rounded-full bg-black/70 px-3 text-xs font-medium text-white hover:bg-black/90"
      >
        <X className="h-4 w-4" />
        Fechar
      </button>

      <div className="pointer-events-none absolute right-4 top-4">
        <Button
          type="button"
          className="pointer-events-auto rounded-full bg-[#FF585D] px-4 py-2 text-xs font-semibold text-white hover:bg-[#ff6f72]"
        >
          Entrar em conta
        </Button>
      </div>

      <div className="relative flex h-full w-full max-w-5xl items-center justify-center">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Imagem anterior"
          className={cn(
            "absolute left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80",
            images.length <= 1 && "hidden"
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="max-h-full w-full rounded-2xl bg-black/40">
          <img
            src={current}
            alt=""
            className="mx-auto max-h-[80vh] w-full rounded-2xl object-contain"
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Próxima imagem"
          className={cn(
            "absolute right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80",
            images.length <= 1 && "hidden"
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

