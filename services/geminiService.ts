import type { Filters, Listing } from '../types';

// Pequeno stub utilitário para interpretar prompts de busca.
// Mantém a UX sem depender de integração externa com Gemini.
export async function parseSearchQuery(prompt: string): Promise<Filters | null> {
  const text = (prompt || '').toLowerCase();
  const filters: Filters = { category: 'imoveis' };

  // preços: "under $400", "below 400"
  const priceMatch = text.match(/(?:under|below|less than)\s*\$?(\d{2,6})/i) || text.match(/\$\s?(\d{2,6})/i);
  if (priceMatch) {
    const value = parseInt(priceMatch[1], 10);
    if (!Number.isNaN(value)) {
      filters.priceRange = { ...(filters.priceRange || {}), max: value };
      filters.maxPrice = value; // legado
    }
  }

  // location: "in Maputo", "in mozambique"
  const inMatch = text.match(/in\s+([a-zà-ÿ\s]{2,40})/i);
  if (inMatch) {
    const place = inMatch[1].trim();
    if (place) filters.location = place;
  }

  // categoria principal
  if (/\b(casa|apartamento|quarto|im[oó]vel|aluguer|alugar|venda|vender)\b/.test(text)) {
    filters.category = 'imoveis';
  } else if (/\b(cami[aã]o|carga|mudan[çc]as|log[ií]stica|transporte)\b/.test(text)) {
    filters.category = 'logistica';
  } else if (/\b(evento|casamento|sal[aã]o|quinta|workshop|confer[eê]ncia)\b/.test(text)) {
    filters.category = 'eventos';
  }

  // finalidade (apenas imóveis)
  if (filters.category === 'imoveis') {
    if (/\b(venda|comprar|vender)\b/.test(text)) filters.finalidade = 'venda';
    if (/\b(aluguer|alugar|arrendar)\b/.test(text)) filters.finalidade = 'aluguer';
  }

  // If no meaningful filters parsed, return null to indicate fallback to normal search
  // (como category tem default, verificamos se só existe a category)
  const keys = Object.keys(filters);
  if (keys.length === 1 && keys[0] === 'category') return null;
  return filters;
}

// Stub para responder perguntas sobre um anúncio (used in ListingModal)
export async function askAboutListingLocation(question: string, listing: Listing) {
  const text = `Informações automáticas sobre a vizinhança de "${listing.title}" não estão disponíveis neste ambiente. Consulte o mapa e a descrição do anúncio para mais detalhes.`;
  const mapLinks: { title: string; uri: string }[] = [];
  return { text, mapLinks };
}
