"use client";

import * as Icons from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { Slider } from "../ui/slider";
import type { MainCategoryId } from "../../app/page";

interface FilterState {
  precoMin?: number;
  precoMax?: number;
}

interface CategoryTabsProps {
  value: MainCategoryId;
  onChange: (value: MainCategoryId) => void;
  filter: FilterState;
  onFilterChange: (value: FilterState) => void;
}

const priceMin = 0;
const priceMax = 20000;

export function CategoryTabs({
  value,
  onChange,
  filter,
  onFilterChange,
}: CategoryTabsProps) {
  const sliderValue: number[] = [
    filter.precoMin ?? priceMin,
    filter.precoMax ?? priceMax,
  ];

  return (
    <div className="sticky top-[4.25rem] z-30 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 md:px-6 lg:px-8">
        <Tabs
          value={value}
          onValueChange={(val) => onChange(val as MainCategoryId)}
          className="flex-1"
        >
          <TabsList className="no-scrollbar flex w-full justify-start gap-1 overflow-x-auto bg-transparent p-0">
            <TabWithIcon value="imoveis" label="Imóveis" icon={Icons.Home} />
            <TabWithIcon
              value="logistica"
              label="Logística"
              icon={Icons.Truck}
            />
            <TabWithIcon
              value="eventos"
              label="Eventos"
              icon={Icons.CalendarDays}
            />
          </TabsList>
        </Tabs>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="hidden items-center gap-2 rounded-full border-neutral-300 text-xs font-semibold text-neutral-800 md:inline-flex"
            >
              <Icons.SlidersHorizontal className="h-4 w-4" />
              Filtros
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-72 text-xs">
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                  Tipo
                </p>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="primario">Principal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="font-semibold uppercase tracking-wide">
                    Preço (MZN)
                  </span>
                  <span>
                    {sliderValue[0]} - {sliderValue[1]}
                  </span>
                </div>
                <Slider
                  min={priceMin}
                  max={priceMax}
                  step={500}
                  value={sliderValue}
                  onValueChange={([min, max]) =>
                    onFilterChange({ precoMin: min, precoMax: max })
                  }
                />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function TabWithIcon({
  value,
  label,
  icon: Icon,
}: {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <TabsTrigger
      value={value}
      className="flex min-w-[96px] flex-col items-center gap-1 rounded-none border-b-2 border-transparent px-1 pb-2 text-[11px] text-neutral-500 data-[state=active]:border-neutral-900 data-[state=active]:bg-transparent data-[state=active]:text-neutral-900"
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </TabsTrigger>
  );
}
