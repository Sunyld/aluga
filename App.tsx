import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import ListingCard from './components/ListingCard';
import ListingModal from './components/ListingModal';
import FilterModal from './components/FilterModal';
import { LISTINGS } from './constants';
import { Category, Filters, Listing } from './types';
import { BottomNavbar } from './components/mobile/BottomNavbar';
import { UserProfile } from './components/mobile/UserProfile';

type MobileTab = 'home' | 'filter' | 'profile';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('imoveis');
  const [filteredListings, setFilteredListings] = useState<Listing[]>(LISTINGS);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<MobileTab>('home');
  
  // Search & Filter State
  const [filters, setFilters] = useState<Filters>({ category: 'imoveis' });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // Scroll handler for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Failed to parse wishlist from localStorage', error);
      }
    }
  }, []);

  const toggleWishlist = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setWishlist(prev => {
      const newWishlist = prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id];
      localStorage.setItem('wishlist', JSON.stringify(newWishlist));
      return newWishlist;
    });
  };

  // Main Filter Logic
  useEffect(() => {
    let result = LISTINGS;

    // 1. Filter by Main Category (Imóveis / Logística / Eventos)
    if (filters.category) {
      result = result.filter((l) => l.category === filters.category);
    }

    // 2. Filter by type (when definido)
    if (filters.type) {
      result = result.filter((l) => l.type === filters.type);
    }

    // 3. Filter by finalidade (apenas para imóveis)
    if (filters.finalidade) {
      result = result.filter((l) => l.finalidade === filters.finalidade);
    }

    // 4. Filter by price range (novo) ou min/max legados
    const priceMin =
      filters.priceRange?.min ?? filters.minPrice ?? undefined;
    const priceMax =
      filters.priceRange?.max ?? filters.maxPrice ?? undefined;

    if (priceMin !== undefined) {
      result = result.filter((l) => l.price >= priceMin);
    }

    if (priceMax !== undefined) {
      result = result.filter((l) => l.price <= priceMax);
    }

    // 5. Filter by location
    if (filters.location) {
      result = result.filter((l) =>
        l.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    setFilteredListings(result);
  }, [filters]);

  const handleSmartSearch = (newFilters: Filters) => {
    // When smart search happens, we update filters
    setFilters(newFilters);
  };

  const handleManualFilterApply = (manualFilters: Filters) => {
    // Merge manual filters com os existentes (ex: localização vinda da pesquisa)
    setFilters(prev => ({
      ...prev,
      ...manualFilters,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col text-neutral-800 bg-white">
      {/* Header e categorias não aparecem na página de perfil mobile */}
      {activeTab !== 'profile' && (
        <Navbar 
          onSearch={handleSmartSearch} 
          isScrolled={isScrolled} 
          onSearchStart={() => setIsLoading(true)}
          onSearchEnd={() => setIsLoading(false)}
        />
      )}
      
      <main className="flex-1 pb-4 relative">
        {activeTab !== 'profile' && (
          <CategoryBar 
            selected={activeCategory} 
            onSelect={(id) => {
              setActiveCategory(id);
              setFilters(prev => ({
                ...prev,
                category: id,
              }));
            }}
            onFilterClick={() => {
              setIsFilterModalOpen(true);
              setActiveTab('filter');
            }}
          />
        )}

        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-8">
          {activeTab === 'profile' ? (
            <div className="md:hidden">
              <UserProfile />
            </div>
          ) : isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="col-span-1 flex flex-col gap-2 animate-pulse">
                   <div className="aspect-square w-full bg-gray-200 rounded-xl relative overflow-hidden"></div>
                   <div className="flex justify-between mt-2">
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-8"></div>
                   </div>
                   <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                   <div className="h-4 bg-gray-200 rounded w-1/3 mt-1"></div>
                </div>
              ))}
            </div>
          ) : filteredListings.length === 0 ? (
            <div className="min-h-[40vh] flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-bold mb-2">Nenhum resultado encontrado</div>
              <p className="max-w-md text-[#484848]">
                Ajuste os filtros ou a pesquisa para ver mais opções.
              </p>
              <button 
                onClick={() => { 
                  setActiveCategory('imoveis'); 
                  setFilters({ category: 'imoveis' });
                }}
                className="mt-6 px-6 py-3 bg-[#FF585D] text-white rounded-lg hover:bg-[#ff6f72] transition"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
              {filteredListings.map((listing) => (
                <ListingCard 
                  key={listing.id} 
                  data={listing} 
                  isWishlisted={wishlist.includes(listing.id)}
                  onToggleWishlist={(e) => toggleWishlist(e, listing.id)}
                  onClick={() => setSelectedListing(listing)} 
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Floating Map Button removido conforme pedido */}
      </main>

      {/* Footer removido conforme pedido para ganhar mais área útil */}

      {/* Listing Detail Modal */}
      {selectedListing && (
        <ListingModal 
          listing={selectedListing} 
          onClose={() => setSelectedListing(null)} 
        />
      )}

      {/* Filter Modal */}
      <FilterModal 
        isOpen={isFilterModalOpen}
        onClose={() => {
          setIsFilterModalOpen(false);
          setActiveTab('home');
        }}
        currentFilters={filters}
        onApply={handleManualFilterApply}
      />

      {/* Bottom Navbar - mobile only */}
      <BottomNavbar 
        active={activeTab}
        hidden={isFilterModalOpen}
        onChange={(tab) => {
          if (tab === 'filter') {
            setIsFilterModalOpen(true);
            setActiveTab('filter');
            return;
          }
          setActiveTab(tab);
          if (tab !== 'filter') {
            setIsFilterModalOpen(false);
          }
        }}
      />
    </div>
  );
};

export default App;