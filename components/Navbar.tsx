import React, { useState } from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';
import { Filters } from '../types';

interface NavbarProps {
  onSearch: (filters: Filters) => void;
  isScrolled: boolean;
  onSearchStart: () => void;
  onSearchEnd: () => void;
}

const buildFiltersFromPrompt = (text: string): Filters => {
  const normalized = text.toLowerCase();
  const filters: Filters = { category: 'imoveis' };

  const maxMatch = normalized.match(/\b(?:under|below|less than|max(?:imum)?|<=)\s*\$?\s*(\d+)/);
  if (maxMatch) {
    filters.priceRange = {
      ...(filters.priceRange || {}),
      max: Number(maxMatch[1]),
    };
  }

  const minMatch = normalized.match(/\b(?:over|above|from|min(?:imum)?|>=)\s*\$?\s*(\d+)/);
  if (minMatch) {
    filters.priceRange = {
      ...(filters.priceRange || {}),
      min: Number(minMatch[1]),
    };
  }

  const locationMatch = text.match(
    /\b(?:in|near|around)\s+([a-zA-Z0-9 ,.'-]+?)(?:\b(?:for|under|below|less|over|above|with|and)\b|$)/i
  );
  if (locationMatch) {
    filters.location = locationMatch[1].trim();
  }

  // Deduzir categoria principal pela intenção do texto
  if (/\b(casa|apartamento|quarto|im[oó]vel|alugar|vender)\b/.test(normalized)) {
    filters.category = 'imoveis';
  } else if (/\b(cami[aã]o|carga|mudan[çc]as|log[ií]stica|transporte)\b/.test(normalized)) {
    filters.category = 'logistica';
  } else if (/\b(evento|casamento|sal[aã]o|quinta|workshop|confer[eê]ncia)\b/.test(normalized)) {
    filters.category = 'eventos';
  }

  return filters;
};

const Navbar: React.FC<NavbarProps> = ({ onSearch, isScrolled, onSearchStart, onSearchEnd }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    onSearchStart();
    try {
      const filters = buildFiltersFromPrompt(query.trim());
      onSearch(filters);
      setQuery('');
      setSearchOpen(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      onSearchEnd();
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 bg-white ${isScrolled ? 'shadow-sm py-4' : 'py-5'}`}>
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
              <div className="cursor-pointer" onClick={() => window.location.reload()}>
              <div className="flex items-center gap-1 text-brand">
                 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '32px', width: '32px', fill: 'currentcolor'}}><path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 3.162.723 4.691-.237 1.944-1.295 3.644-2.98 4.79-1.488 1.011-3.268 1.536-5.172 1.536-2.848 0-5.44-1.178-7.1-3.218-1.66 2.04-4.252 3.218-7.1 3.218-1.904 0-3.684-.525-5.172-1.536C.167 28.847-.89 27.147-1.128 25.203c-.187-1.529.056-3.1.723-4.691l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C8.537 1.963 9.992 1 16 1zm0 2c-1.239 0-2.053.539-2.987 2.211-.07.124-3.606 6.99-6.953 13.902l-.147.31c-.53 1.272-.716 2.502-.572 3.684.15 1.228.835 2.296 1.928 3.038.971.66 2.115 1.006 3.33 1.006 2.094 0 4.026-.951 5.4-2.658l.412-.533.412.533c1.374 1.707 3.306 2.658 5.4 2.658 1.215 0 2.36-.346 3.33-1.006 1.093-.742 1.778-1.81 1.928-3.038.144-1.182-.042-2.412-.572-3.684l-.147-.31c-3.347-6.912-6.883-13.778-6.953-13.902C18.053 3.539 17.24 3 16 3zm0 20c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path></svg>
                 <span className="font-bold text-xl hidden lg:block text-brand">Aluga+</span>
              </div>
            </div>

            {/* Center: simple search input */}
            <div className="flex-1 px-4 md:px-6">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <div className="relative w-full">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Pesquisar (ex: Casa T3 Maputo)"
                    className="w-full rounded-full border border-neutral-200 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF585D]/40"
                  />
                  <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-brand text-white">
                    <Search size={16} />
                  </button>
                </div>
              </form>
            </div>

            {/* Right: notifications + profile */}
            <div className="flex flex-row items-center gap-4">
              <button aria-label="Notificações" className="p-2 rounded-full hover:bg-black/5">
                <Bell className="text-muted" />
              </button>
              <button aria-label="Perfil" className="p-1 rounded-full border border-transparent hover:shadow-sm">
                <UserCircle size={28} className="text-muted" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Smart Search Overlay */}
      {/* search overlay removed — header search is inline */}
    </>
  );
};

export default Navbar;
