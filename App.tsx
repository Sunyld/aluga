"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CategoryBar, { type CategoryId } from "./components/CategoryBar";
import ListingCard, { ActiveCardProvider } from "./components/ListingCard";
import ListingModal from "./components/ListingModal";
import { FilterSheet } from "./components/FilterSheet";
import { LISTINGS } from "./constants";
import { Category, Filters, Listing } from "./types";
import { BottomNavbar } from "./components/mobile/BottomNavbar";
import { UserProfile } from "./components/mobile/UserProfile";

type MobileTab = "home" | "filter" | "profile";

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [filteredListings, setFilteredListings] = useState<Listing[]>(LISTINGS);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<MobileTab>("home");
  const [filters, setFilters] = useState<Filters>({ category: "all" });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  const toggleWishlist = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setWishlist((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      localStorage.setItem("wishlist", JSON.stringify(next));
      return next;
    });
  };

  useEffect(() => {
    let result = LISTINGS;

    if (filters.category && filters.category !== "all") {
      result = result.filter((l) => l.category === filters.category);
    }

    const selTypes = filters.types?.length ? filters.types : filters.type ? [filters.type] : [];
    if (selTypes.length) {
      result = result.filter((l) => l.type && selTypes.includes(l.type));
    }

    const selFinalidades = filters.finalidades?.length
      ? filters.finalidades
      : filters.finalidade
        ? [filters.finalidade]
        : [];
    if (selFinalidades.length) {
      result = result.filter(
        (l) => l.finalidade && selFinalidades.includes(l.finalidade)
      );
    }

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

    setFilteredListings(result);
  }, [filters]);

  const handleSmartSearch = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleFilterApply = (newFilters: Filters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const openFilter = () => {
    setIsFilterOpen(true);
    setActiveTab("filter");
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
    setActiveTab("home");
  };

  return (
    <div className="min-h-screen flex flex-col text-[#484848] bg-white">
      <Navbar
        onSearch={handleSmartSearch}
        isScrolled={isScrolled}
        onSearchStart={() => setIsLoading(true)}
        onSearchEnd={() => setIsLoading(false)}
        onProfileClick={() => setActiveTab("profile")}
        onLogoClick={() => setActiveTab("home")}
      />

      <main className="flex-1 pb-28 md:pb-4 relative">
        {activeTab !== "profile" ? (
          <>
            <CategoryBar
              selected={activeCategory}
              onSelect={(id) => {
                setActiveCategory(id);
                setFilters((prev) => ({ ...prev, category: id }));
              }}
              onFilterClick={openFilter}
            />

            <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-12 pt-2">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="col-span-1 flex flex-col gap-2 animate-pulse"
                    >
                      <div className="aspect-square w-full bg-[#484848]/10 rounded-xl" />
                      <div className="h-4 bg-[#484848]/10 rounded w-2/3" />
                      <div className="h-4 bg-[#484848]/10 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : filteredListings.length === 0 ? (
                <div className="min-h-[40vh] flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold mb-2 text-[#484848]">
                    Nenhum resultado encontrado
                  </div>
                  <p className="max-w-md text-[#484848]/70">
                    Ajuste os filtros para ver mais opções.
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setFilters({ category: "all" });
                    }}
                    className="mt-6 px-6 py-3 bg-[#FF585D] text-white rounded-lg hover:bg-[#ff6f72] transition"
                  >
                    Limpar filtros
                  </button>
                </div>
              ) : (
                <ActiveCardProvider>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2">
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
                </ActiveCardProvider>
              )}
            </div>
          </>
        ) : (
          <div className="w-full">
            <UserProfile />
          </div>
        )}
      </main>

      {selectedListing && (
        <ListingModal
          listing={selectedListing}
          onClose={() => setSelectedListing(null)}
        />
      )}

      <FilterSheet
        open={isFilterOpen}
        onOpenChange={(open) => {
          setIsFilterOpen(open);
          if (!open) setActiveTab("home");
        }}
        currentFilters={filters}
        onApply={(f) => {
          handleFilterApply(f);
          setIsFilterOpen(false);
          setActiveTab("home");
        }}
      />

      <BottomNavbar
        active={activeTab}
        hidden={isFilterOpen}
        onChange={(tab) => {
          if (tab === "filter") {
            openFilter();
            return;
          }
          setActiveTab(tab);
          if (tab !== "filter") closeFilter();
        }}
      />
    </div>
  );
};

export default App;
