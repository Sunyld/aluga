"use client";

import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { X } from "lucide-react";
import { useToast } from "./ui/toast";
import { Filters } from "../types";
import { cn } from "../lib/utils";

const IMOVEIS_TIPOS = [
  { id: "casa", label: "Casa" },
  { id: "quarto", label: "Quarto" },
  { id: "apartamento", label: "Apartamento" },
  { id: "loja", label: "Loja" },
  { id: "escritorio", label: "Escritório" },
];

const LOGISTICA_TIPOS = [
  { id: "camiões", label: "Camiões" },
  { id: "carga", label: "Carga" },
  { id: "mudanças", label: "Mudanças" },
];

const EVENTOS_TIPOS = [
  { id: "salões", label: "Salões" },
  { id: "quintas", label: "Quintas" },
  { id: "workshops", label: "Workshops" },
];

interface FilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentFilters: Filters;
  onApply: (filters: Filters) => void;
}

export function FilterSheet({
  open,
  onOpenChange,
  currentFilters,
  onApply,
}: FilterSheetProps) {
  const toast = useToast();
  const [types, setTypes] = useState<string[]>([]);
  const [finalidades, setFinalidades] = useState<("aluguer" | "venda")[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  useEffect(() => {
    if (open) {
      const priceMin = currentFilters.priceRange?.min ?? currentFilters.minPrice;
      const priceMax = currentFilters.priceRange?.max ?? currentFilters.maxPrice;
      setMinPrice(priceMin?.toString() || "");
      setMaxPrice(priceMax?.toString() || "");
      if (currentFilters.types?.length) {
        setTypes(currentFilters.types);
      } else if (currentFilters.type) {
        setTypes([currentFilters.type]);
      } else {
        setTypes([]);
      }
      if (currentFilters.finalidades?.length) {
        setFinalidades(currentFilters.finalidades);
      } else if (currentFilters.finalidade) {
        setFinalidades([currentFilters.finalidade]);
      } else {
        setFinalidades([]);
      }
    }
  }, [open, currentFilters]);

  const toggleType = (id: string) => {
    setTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const toggleFinalidade = (f: "aluguer" | "venda") => {
    setFinalidades((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const handleApply = () => {
    const updated: Filters = {
      ...currentFilters,
      types: types.length ? types : undefined,
      type: types.length === 1 ? types[0] : undefined,
      finalidades: finalidades.length ? finalidades : undefined,
      finalidade:
        finalidades.length === 1 ? finalidades[0] : undefined,
      priceRange: {
        min: minPrice ? Number(minPrice) : undefined,
        max: maxPrice ? Number(maxPrice) : undefined,
      },
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    };
    onApply(updated);
    onOpenChange(false);
    toast.info("Filtros aplicados");
  };

  const handleClear = () => {
    setTypes([]);
    setFinalidades([]);
    setMinPrice("");
    setMaxPrice("");
    onApply({
      ...currentFilters,
      types: undefined,
      type: undefined,
      finalidades: undefined,
      finalidade: undefined,
      priceRange: undefined,
      minPrice: undefined,
      maxPrice: undefined,
    });
    onOpenChange(false);
    toast.info("Filtros removidos");
  };

  const TIPOS =
    currentFilters.category === "imoveis"
      ? IMOVEIS_TIPOS
      : currentFilters.category === "logistica"
        ? LOGISTICA_TIPOS
        : currentFilters.category === "eventos"
          ? EVENTOS_TIPOS
          : [...IMOVEIS_TIPOS, ...LOGISTICA_TIPOS, ...EVENTOS_TIPOS];

  const showTipos = true;
  const showFinalidades = true;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90vh]">
        <DrawerHeader className="flex flex-row items-center justify-between border-b pb-4">
          <DrawerTitle className="text-lg font-bold text-[#484848]">
            Filtros
          </DrawerTitle>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="p-2 hover:bg-[#484848]/5 rounded-full transition"
            aria-label="Fechar"
          >
            <X className="h-5 w-5 text-[#484848]" />
          </button>
        </DrawerHeader>

        <div className="overflow-y-auto flex-1 px-4 py-4 space-y-6">
          {showFinalidades && (
            <section>
              <h3 className="text-sm font-semibold text-[#484848] mb-3">
                Finalidade
              </h3>
              <div className="flex flex-wrap gap-2">
                {(["aluguer", "venda"] as const).map((f) => {
                  const sel = finalidades.includes(f);
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleFinalidade(f)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        sel
                          ? "bg-[#FF585D] text-white"
                          : "bg-white border border-[#484848]/20 text-[#484848]"
                      )}
                    >
                      {f === "aluguer" ? "Alugar" : "Comprar"}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {showTipos && (
            <section>
              <h3 className="text-sm font-semibold text-[#484848] mb-3">
                Tipo
              </h3>
              <div className="flex flex-wrap gap-2">
                {TIPOS.map((t) => {
                  const sel = types.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => toggleType(t.id)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        sel
                          ? "bg-[#FF585D] text-white"
                          : "bg-white border border-[#484848]/20 text-[#484848]"
                      )}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          <section>
            <h3 className="text-sm font-semibold text-[#484848] mb-3">
              Faixa de preço (MZN)
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex-1 border border-[#484848]/20 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#FF585D]/40">
                <label className="text-xs text-[#484848]/70 block">Mínimo</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="50"
                  className="w-full outline-none text-sm text-[#484848] bg-transparent"
                />
              </div>
              <span className="text-[#484848]/60">-</span>
              <div className="flex-1 border border-[#484848]/20 rounded-xl px-3 py-2 focus-within:ring-2 focus-within:ring-[#FF585D]/40">
                <label className="text-xs text-[#484848]/70 block">Máximo</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="1000+"
                  className="w-full outline-none text-sm text-[#484848] bg-transparent"
                />
              </div>
            </div>
          </section>
        </div>

        <div className="p-4 border-t flex flex-col gap-2">
          <button
            onClick={handleClear}
            className="text-sm font-medium text-[#484848]/70 hover:text-[#484848]"
          >
            Limpar tudo
          </button>
          <button
            onClick={handleApply}
            className="w-full py-3 rounded-xl bg-[#FF585D] text-white font-semibold hover:bg-[#ff6f72] transition"
          >
            Filtrar resultados
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
