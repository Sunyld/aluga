"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Bell, UserCircle } from 'lucide-react';
import { useToast } from './ui/toast';
import { Filters } from '../types';

interface NavbarProps {
  onSearch: (filters: Filters) => void;
  isScrolled: boolean;
  onSearchStart: () => void;
  onSearchEnd: () => void;
  onProfileClick?: () => void;
  onLogoClick?: () => void;
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

const Navbar: React.FC<NavbarProps> = ({ onSearch, isScrolled, onSearchStart, onSearchEnd, onProfileClick, onLogoClick }) => {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleProfileClick = () => {
    router.push("/perfil");
  };

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
      toast.info(`A pesquisar por "${query.trim().slice(0, 30)}${query.length > 30 ? "…" : ""}"`);
    } catch {
      toast.error("Erro ao pesquisar. Tente novamente.");
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
            <div
              className="cursor-pointer flex items-center"
              onClick={onLogoClick ?? (() => window.location.reload())}
            >
              <Image
                src="/logo.png"
                alt="Aluga+"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
                style={{ width: "auto" }}
              />
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

            {/* Right: notifications + perfil (apenas desktop; no mobile o perfil fica no LumaBar) */}
            <div className="flex flex-row items-center gap-4">
              <button aria-label="Notificações" className="p-2 rounded-full hover:bg-black/5">
                <Bell className="text-muted" />
              </button>
              <button
                type="button"
                aria-label="Perfil"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProfileClick();
                }}
                className="hidden md:flex p-1 rounded-full border border-transparent hover:shadow-sm hover:bg-black/5"
              >
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
