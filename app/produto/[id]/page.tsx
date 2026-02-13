"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { LISTINGS } from "../../../constants";
import type { Listing } from "../../../types";
import { ProductGallery } from "../../../components/product/ProductGallery";
import { BottomSheet } from "../../../components/ui/bottom-sheet";
import { MapView } from "../../../components/product/MapView";
import { FavoriteButton } from "../../../components/product/FavoriteButton";
import { ChevronLeft } from "lucide-react";

const CATEGORY_LABELS: Record<string, string> = {
  imoveis: "Imóveis",
  logistica: "Logística",
  eventos: "Eventos",
};

const TYPE_LABELS: Record<string, string> = {
  casa: "Casa",
  quarto: "Quarto",
  apartamento: "Apartamento",
  loja: "Loja",
  escritorio: "Escritório",
  camiões: "Camiões",
  carga: "Carga",
  mudanças: "Mudanças",
  salões: "Salões",
  quintas: "Quintas",
  workshops: "Workshops",
};

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
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF585D] text-white shadow-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="text-sm text-[#484848]">Produto não encontrado.</p>
      </main>
    );
  }

  const ctaLabel =
    listing.finalidade === "aluguer"
      ? "Arrendar este imóvel"
      : listing.finalidade === "venda"
        ? "Comprar este imóvel"
        : "Reservar";

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-6 md:py-8">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF585D] text-white shadow-sm hover:bg-[#ff6f72] transition"
          aria-label="Voltar"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#FF585D] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ff6f72] transition"
        >
          Entrar em contato
        </button>
      </header>

      <ProductGallery listing={listing} />

      <section className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold text-[#484848] md:text-2xl">
            {listing.title}
          </h1>
          <p className="mt-1 text-sm text-[#484848]/80">{listing.location}</p>
          <p className="mt-2 text-lg font-semibold text-[#FF585D]">
            {new Intl.NumberFormat("pt-MZ", {
              style: "decimal",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(listing.price)}{" "}
            MZN
            {listing.finalidade === "aluguer" && (
              <span className="text-base font-medium text-[#484848]/70"> /mês</span>
            )}
          </p>
        </div>
        <div className="hidden md:block">
          <FavoriteButton listingId={listing.id} />
        </div>
      </section>

      {/* Botões logo abaixo da galeria */}
      <section className="mb-6 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => setMapOpen(true)}
          className="rounded-xl border border-[#484848]/20 px-4 py-3 text-sm font-medium text-[#484848] hover:bg-[#484848]/5 transition sm:flex-1"
        >
          Ver no mapa
        </button>
        <button
          type="button"
          onClick={() =>
            router.push(
              `/checkout/${listing.id}?total=${listing.price}&listingId=${listing.id}`
            )
          }
          className="rounded-xl bg-[#FF585D] px-4 py-3 text-sm font-semibold text-white hover:bg-[#ff6f72] transition w-full sm:flex-1"
        >
          {ctaLabel}
        </button>
      </section>

      {/* Mais informações */}
      <section className="mb-10 border-t border-[#484848]/10 pt-6">
        <h2 className="text-base font-semibold text-[#484848] mb-3">Descrição</h2>
        <p className="text-sm leading-relaxed text-[#484848]/90 mb-6">
          {listing.description}
        </p>

        <h2 className="text-base font-semibold text-[#484848] mb-3">Informações</h2>
        <dl className="grid gap-2 text-sm">
          <div className="flex justify-between py-2 border-b border-[#484848]/5">
            <dt className="font-semibold text-[#484848]">Categoria</dt>
            <dd className="text-[#484848]/80">{CATEGORY_LABELS[listing.category] ?? listing.category}</dd>
          </div>
          {listing.type && (
            <div className="flex justify-between py-2 border-b border-[#484848]/5">
              <dt className="font-semibold text-[#484848]">Tipo</dt>
              <dd className="text-[#484848]/80">{TYPE_LABELS[listing.type] ?? listing.type}</dd>
            </div>
          )}
          {listing.finalidade && (
            <div className="flex justify-between py-2 border-b border-[#484848]/5">
              <dt className="font-semibold text-[#484848]">Finalidade</dt>
              <dd className="text-[#484848]/80">
                {listing.finalidade === "aluguer" ? "Aluguer" : "Venda"}
              </dd>
            </div>
          )}
          <div className="flex justify-between py-2 border-b border-[#484848]/5">
            <dt className="font-semibold text-[#484848]">Localização</dt>
            <dd className="text-[#484848]/80">{listing.location}</dd>
          </div>
          <div className="flex justify-between py-2 border-b border-[#484848]/5">
            <dt className="font-semibold text-[#484848]">Preço</dt>
            <dd className="text-[#FF585D] font-semibold">
              {new Intl.NumberFormat("pt-MZ", { style: "decimal" }).format(listing.price)} MZN
              {listing.finalidade === "aluguer" && " /mês"}
            </dd>
          </div>
          <div className="flex justify-between py-2 border-b border-[#484848]/5">
            <dt className="font-semibold text-[#484848]">Data de publicação</dt>
            <dd className="text-[#484848]/80">{listing.dates}</dd>
          </div>
        </dl>
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
          Coordenadas aproximadas: {listing.lat.toFixed(4)}, {listing.lng.toFixed(4)}
        </p>
      </BottomSheet>
    </main>
  );
}

