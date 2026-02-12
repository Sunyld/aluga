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
 * Filtros principais usados na pesquisa e no modal.
 * Mantém compatibilidade com os campos antigos (minPrice/maxPrice).
 */
export interface Filters {
  category: Category | "all";
  types?: string[];
  finalidades?: ("aluguer" | "venda")[];
  type?: string;
  finalidade?: "aluguer" | "venda";
  priceRange?: {
    min?: number;
    max?: number;
  };
  minPrice?: number;
  maxPrice?: number;
}

// Alias para manter compatibilidade com componentes existentes
export type SearchFilters = Filters;

/** Dados do utilizador para a página de perfil */
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  memberSince?: string;
}