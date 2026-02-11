"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { LISTINGS } from "../../../constants";
import type { Listing } from "../../../types";
import { ProductGallery } from "../../../components/product/ProductGallery";
import { BottomSheet } from "../../../components/ui/bottom-sheet";
import { MapView } from "../../../components/product/MapView";
import { FavoriteButton } from "../../../components/product/FavoriteButton";
import { Button } from "../../../components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProdutoPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [mapOpen, setMapOpen] = useState(false);

  const listing: Listing | undefined = useMemo(
    () => LISTINGS.find((l) => l.id === params.id),
    [params.id]
  );

  if (!listing) {
    return (
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-4 px-4 py-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#484848]"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>
        <p className="text-sm text-[#484848]">
          Produto não encontrado.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-6 md:py-8">
      <button
        type="button"
        onClick={() => router.back()}
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-[#484848]"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar
      </button>

      <ProductGallery listing={listing} />

      <section className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-[#484848] md:text-2xl">
            {listing.title}
          </h1>
          <p className="mt-1 text-sm text-[#484848]">
            {listing.location}
          </p>
        </div>
        <div className="hidden md:block">
          <FavoriteButton listingId={listing.id} />
        </div>
      </section>

      <section className="mb-6 border-t border-black/5 pt-4">
        <p className="text-sm leading-relaxed text-[#484848]">
          {listing.description}
        </p>
      </section>

      <section className="mb-10">
        <Button
          type="button"
          onClick={() => setMapOpen(true)}
          className="rounded-full bg-[#FF585D] px-5 py-2 text-sm font-semibold text-white hover:bg-[#ff6f72]"
        >
          Ver no mapa
        </Button>
      </section>

      <BottomSheet
        open={mapOpen}
        onOpenChange={setMapOpen}
        title="Localização"
      >
        <MapView
          lat={listing.lat}
          lng={listing.lng}
          title={listing.title}
        />
        <p className="mt-2 text-xs text-[#484848]">
          Coordenadas aproximadas: {listing.lat.toFixed(4)},{" "}
          {listing.lng.toFixed(4)}
        </p>
      </BottomSheet>
    </main>
  );
}

