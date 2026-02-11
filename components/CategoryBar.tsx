import React from 'react';
import * as Icons from 'lucide-react';
import { Category } from '../types';
import { SlidersHorizontal } from 'lucide-react';

const MAIN_CATEGORIES: { id: Category; label: string; icon: keyof typeof Icons }[] = [
  { id: 'imoveis', label: 'Imóveis', icon: 'Home' },
  { id: 'logistica', label: 'Logística', icon: 'Truck' },
  { id: 'eventos', label: 'Eventos', icon: 'PartyPopper' },
];

interface CategoryBarProps {
  selected: Category;
  onSelect: (id: Category) => void;
  onFilterClick: () => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ selected, onSelect, onFilterClick }) => {
  return (
    <div className="pt-4 pb-3 px-4 md:px-10 lg:px-20 border-b bg-white sticky top-16 z-30 w-full transition-all">
      <div className="flex flex-row items-center gap-4">
        {/* Categories List */}
        <div className="flex-1 overflow-x-auto no-scrollbar">
          <div className="flex flex-row items-center justify-between sm:justify-start sm:gap-8 min-w-max">
            {MAIN_CATEGORIES.map((cat) => {
              // Dynamic Icon Component
              const IconComponent = (Icons as any)[cat.icon];
              const isSelected = selected === cat.id;

              return (
                <div
                  key={cat.id}
                  onClick={() => onSelect(cat.id)}
                  className={`
                    flex flex-col items-center justify-center gap-2 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer min-w-[64px]
                    ${isSelected ? 'border-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}
                  `}
                >
                  <IconComponent size={24} strokeWidth={isSelected ? 2 : 1.5} />
                  <div className={`text-xs ${isSelected ? 'font-medium' : 'font-medium'}`}>
                    {cat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Button */}
        <button 
          onClick={onFilterClick}
          className="hidden md:flex flex-row items-center gap-2 border border-black/20 rounded-xl px-4 py-2 hover:border-black/40 transition text-xs font-semibold h-[48px] shrink-0 text-[#484848]"
        >
          <SlidersHorizontal size={16} />
          Filtros
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;