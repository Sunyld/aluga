"use client";

import React from "react";
import { Category } from "../types";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "../lib/utils";

export type CategoryId = Category | "all";

const MAIN_CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "all", label: "Tudo" },
  { id: "imoveis", label: "Imóveis" },
  { id: "logistica", label: "Logística" },
  { id: "eventos", label: "Eventos" },
];

interface CategoryBarProps {
  selected: CategoryId;
  onSelect: (id: CategoryId) => void;
  onFilterClick: () => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  selected,
  onSelect,
  onFilterClick,
}) => {
  return (
    <div className="pt-4 pb-3 px-4 md:px-10 lg:px-20 border-b border-[#484848]/10 bg-white sticky top-16 z-30 w-full transition-all">
      <div className="flex flex-row items-center gap-4">
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex flex-row items-center justify-between sm:justify-start sm:gap-4 md:gap-6 min-w-max">
            {MAIN_CATEGORIES.map((cat) => {
              const isSelected = selected === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelect(cat.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors shrink-0",
                    isSelected
                      ? "bg-[#FF585D] text-white border border-transparent"
                      : "bg-[#FFFFFF] text-[#484848] border border-[#484848]/20"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={onFilterClick}
          className="hidden md:flex flex-row items-center gap-2 border border-[#484848]/20 rounded-xl px-4 py-2 hover:border-[#484848]/40 transition text-xs font-semibold h-[48px] shrink-0 text-[#484848]"
        >
          <SlidersHorizontal size={16} />
          Filtros
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
