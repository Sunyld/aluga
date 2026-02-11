"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "../../lib/utils";

interface FavoriteButtonProps {
  listingId: string;
  size?: number;
  className?: string;
}

const STORAGE_KEY = "wishlist";

export function FavoriteButton({
  listingId,
  size = 22,
  className,
}: FavoriteButtonProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed: string[] = JSON.parse(raw);
      setActive(parsed.includes(listingId));
    } catch {
      // ignora erros de leitura
    }
  }, [listingId]);

  const toggle = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const current: string[] = raw ? JSON.parse(raw) : [];
      let next: string[];
      if (current.includes(listingId)) {
        next = current.filter((id) => id !== listingId);
        setActive(false);
      } else {
        next = [...current, listingId];
        setActive(true);
      }
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={active}
      aria-label={active ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-white/90 p-1.5 shadow-sm hover:scale-105 transition",
        className
      )}
    >
      <Heart
        style={{ width: size, height: size }}
        className={cn(
          "transition",
          active
            ? "fill-[#FF585D] text-[#FF585D]"
            : "fill-transparent text-[#484848]"
        )}
      />
    </button>
  );
}

