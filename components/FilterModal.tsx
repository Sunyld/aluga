import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Filters } from '../types';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentFilters: Filters;
  onApply: (filters: Filters) => void;
}

const IMOVEIS_TIPOS = ['Casa', 'Quarto', 'Apartamento', 'Loja', 'Escritório', 'Contentor'];
const LOGISTICA_TIPOS = ['Camiões', 'Carga', 'Mudanças'];
const EVENTOS_TIPOS = ['Salões', 'Quintas', 'Workshops'];

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose, currentFilters, onApply }) => {
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [type, setType] = useState<string | undefined>(currentFilters.type);
  const [finalidade, setFinalidade] = useState<'aluguer' | 'venda' | undefined>(currentFilters.finalidade);

  useEffect(() => {
    if (isOpen) {
      const priceMin = currentFilters.priceRange?.min ?? currentFilters.minPrice;
      const priceMax = currentFilters.priceRange?.max ?? currentFilters.maxPrice;
      setMinPrice(priceMin?.toString() || '');
      setMaxPrice(priceMax?.toString() || '');
      setLocation(currentFilters.location || '');
      setType(currentFilters.type);
      setFinalidade(currentFilters.finalidade);
    }
  }, [isOpen, currentFilters]);

  if (!isOpen) return null;

  const handleApply = () => {
    const updated: Filters = {
      ...currentFilters,
      type,
      finalidade,
      priceRange: {
        min: minPrice ? Number(minPrice) : undefined,
        max: maxPrice ? Number(maxPrice) : undefined,
      },
      // manter campos legados em sincronia
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
      location: location || undefined,
    };
    onApply(updated);
    onClose();
  };

  const handleClear = () => {
    setMinPrice('');
    setMaxPrice('');
    setLocation('');
    setType(undefined);
    setFinalidade(undefined);
    onApply({
      ...currentFilters,
      type: undefined,
      finalidade: undefined,
      priceRange: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      location: undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition">
            <X size={16} />
          </button>
          <div className="font-bold text-lg text-[#484848]">Filtros</div>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          {/* Campos específicos por categoria */}
          {currentFilters.category === 'imoveis' && (
            <section className="space-y-4">
              <h3 className="text-sm font-semibold text-[#484848]">Imóveis</h3>

              {/* Finalidade */}
              <div className="flex gap-3">
                {['aluguer', 'venda'].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFinalidade(f as 'aluguer' | 'venda')}
                    className={`px-3 py-2 rounded-full text-xs font-medium border transition ${
                      finalidade === f
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 text-[#484848]'
                    }`}
                  >
                    {f === 'aluguer' ? 'Aluguer' : 'Venda'}
                  </button>
                ))}
              </div>

              {/* Tipo de imóvel */}
              <div className="space-y-2">
                <label className="text-xs text-[#484848] block">Tipo de imóvel</label>
                <select
                  value={type || ''}
                  onChange={(e) => setType(e.target.value || undefined)}
                  className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FF585D]/40"
                >
                  <option value="">Todos</option>
                  {IMOVEIS_TIPOS.map((t) => (
                    <option key={t} value={t.toLowerCase()}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </section>
          )}

          {currentFilters.category === 'logistica' && (
            <section className="space-y-4">
              <h3 className="text-sm font-semibold text-[#484848]">Logística</h3>
              <div className="space-y-2">
                <label className="text-xs text-[#484848] block">Tipo de serviço</label>
                <select
                  value={type || ''}
                  onChange={(e) => setType(e.target.value || undefined)}
                  className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FF585D]/40"
                >
                  <option value="">Todos</option>
                  {LOGISTICA_TIPOS.map((t) => (
                    <option key={t} value={t.toLowerCase()}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </section>
          )}

          {currentFilters.category === 'eventos' && (
            <section className="space-y-4">
              <h3 className="text-sm font-semibold text-[#484848]">Eventos</h3>
              <div className="space-y-2">
                <label className="text-xs text-[#484848] block">Tipo de espaço</label>
                <select
                  value={type || ''}
                  onChange={(e) => setType(e.target.value || undefined)}
                  className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FF585D]/40"
                >
                  <option value="">Todos</option>
                  {EVENTOS_TIPOS.map((t) => (
                    <option key={t} value={t.toLowerCase()}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </section>
          )}

          {/* Faixa de preço */}
          <section>
            <h3 className="text-sm font-semibold mb-2 text-[#484848]">Faixa de preço (MZN)</h3>
            <p className="text-xs mb-4 text-[#484848]">Preços por dia antes de taxas</p>
            
            <div className="flex items-center gap-4">
              <div className="border rounded-xl px-3 py-2 flex-1 focus-within:ring-2 focus-within:ring-[#FF585D]/40">
                <label className="text-xs text-[#484848] block">Mínimo</label>
                <div className="flex items-center">
                  <span className="text-sm mr-1">MZN</span>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full outline-none text-sm"
                    placeholder="50"
                  />
                </div>
              </div>
              <div className="text-[#484848]/60">-</div>
              <div className="border rounded-xl px-3 py-2 flex-1 focus-within:ring-2 focus-within:ring-[#FF585D]/40">
                <label className="text-xs text-[#484848] block">Máximo</label>
                <div className="flex items-center">
                  <span className="text-sm mr-1">MZN</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full outline-none text-sm"
                    placeholder="1000+"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Localização */}
          <section>
            <h3 className="text-sm font-semibold mb-2 text-[#484848]">Localização</h3>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ex: Maputo, Matola, Beira..."
              className="w-full border rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#FF585D]/40"
            />
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex justify-between items-center">
          <button 
            onClick={handleClear}
            className="text-sm font-semibold underline text-[#484848] hover:text-[#484848]/80 px-4 py-2"
          >
            Limpar tudo
          </button>
          <button 
            onClick={handleApply}
            className="bg-[#FF585D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#ff6f72] transition"
          >
            Filtrar resultados
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;