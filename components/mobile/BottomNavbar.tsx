"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, SlidersHorizontal, User } from "lucide-react";
import { cn } from "../../lib/utils";

type TabId = "home" | "filter" | "profile";

const ITEMS: { id: TabId; icon: React.ElementType; label: string }[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "filter", icon: SlidersHorizontal, label: "Filtro" },
  { id: "profile", icon: User, label: "Perfil" },
];

interface BottomNavbarProps {
  active: TabId;
  onChange: (tab: TabId) => void;
  hidden?: boolean;
}

export function BottomNavbar({ active, onChange, hidden }: BottomNavbarProps) {
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = ITEMS.findIndex((item) => item.id === active);

  useEffect(() => {
    const updateIndicator = () => {
      const btn = btnRefs.current[activeIndex];
      const container = containerRef.current;
      if (btn && container) {
        const btnRect = btn.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setIndicatorStyle({
          width: btnRect.width,
          left: btnRect.left - containerRect.left,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeIndex]);

  if (hidden) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 md:hidden">
      <div
        ref={containerRef}
        className="relative flex items-center justify-between bg-white shadow-xl rounded-full px-1 py-2 border border-[#484848]/10"
      >
        {ITEMS.map((item, index) => {
          const Icon = item.icon;
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                btnRefs.current[index] = el;
              }}
              type="button"
              onClick={() => onChange(item.id)}
              className={cn(
                "relative flex flex-col items-center justify-center flex-1 px-3 py-2 text-sm font-medium z-10",
                isActive ? "text-[#FF585D]" : "text-[#484848] opacity-60"
              )}
              aria-current={isActive ? "page" : undefined}
              aria-label={item.label}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-0.5">{item.label}</span>
            </button>
          );
        })}

        <motion.div
          animate={indicatorStyle}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute top-2 bottom-2 rounded-full bg-[#FF585D]/10 -z-0"
        />
      </div>
    </div>
  );
}
