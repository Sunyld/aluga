export type Category = "imoveis" | "logistica" | "eventos";

export interface Listing {
  id: string;
  title: string;
  location: string;
  distance: string;
  dates: string;
  price: number;
  rating: number;
  images: string[];
  /**
   * Categoria principal do domínio (Imóveis / Logística / Eventos)
   */
  category: Category;
  lat: number;
  lng: number;
  description: string;
  host: {
    name: string;
    image: string;
    superhost: boolean;
  };
  /**
   * Tipo específico dentro da categoria (ex: casa, camião, salão, etc.)
   */
  type?: string;
  /**
   * Finalidade para imóveis (ex: aluguer, venda)
   */
  finalidade?: "aluguer" | "venda";
}

/**
 * Faixa de preço (valores numéricos em MZN).
 */
export interface PriceRange {
  min?: number;
  max?: number;
}

/**
 * Finalidade: aluguer ou venda.
 */
export type Finalidade = "aluguer" | "venda";

/**
 * Filtros principais usados na pesquisa, FilterSheet, FilterModal e Navbar.
 * Mantém compatibilidade com priceRange e campos legados (minPrice/maxPrice).
 */
export interface Filters {
  /** Categoria principal ou "all" para todas */
  category: Category | "all";
  /** Tipos específicos (multi-seleção, ex: ["casa", "apartamento"]) */
  types?: string[];
  /** Tipo único (quando apenas um selecionado) */
  type?: string;
  /** Finalidades (multi-seleção: aluguer e/ou venda) */
  finalidades?: Finalidade[];
  /** Finalidade única */
  finalidade?: Finalidade;
  /** Faixa de preço preferida */
  priceRange?: PriceRange;
  /** Preço mínimo (legado, sincronizado com priceRange.min) */
  minPrice?: number;
  /** Preço máximo (legado, sincronizado com priceRange.max) */
  maxPrice?: number;
  /** Localização ou área de busca (ex: "Maputo", "Beira") */
  location?: string;
}

// Alias para manter compatibilidade com componentes existentes
export type SearchFilters = Filters;

/** Link de mapa retornado pelo serviço de perguntas sobre anúncio */
export interface MapLink {
  title: string;
  uri: string;
}

/** Dados do utilizador para a página de perfil */
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  memberSince?: string;
}