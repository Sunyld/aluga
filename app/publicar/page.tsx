"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  MapPin,
  Tag,
  FileText,
  Images,
  CheckCircle2,
  ArrowLeft,
  ChevronLeft,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function PublicarPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState<"apartamento" | "casa" | "outro">(
    "apartamento",
  );
  const [finalidade, setFinalidade] = useState<"aluguer" | "venda">("aluguer");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>(["", "", ""]);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImageChange = (index: number, value: string) => {
    setImages((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const canSubmit =
    title.trim().length > 5 &&
    location.trim().length > 3 &&
    description.trim().length > 20 &&
    Number(price) > 0;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);

    // Aqui poderia chamar uma API para guardar o anúncio.
    // Por enquanto apenas simulamos com um timeout.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const formattedPrice =
    price && !Number.isNaN(Number(price))
      ? new Intl.NumberFormat("pt-MZ", {
          style: "currency",
          currency: "MZN",
          maximumFractionDigits: 0,
        }).format(Number(price))
      : undefined;

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-6 md:py-8">
      <button
        type="button"
        onClick={() => router.back()}
         className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF585D] text-white shadow-sm hover:bg-[#ff6f72] transition"
      >
          <ChevronLeft className="h-5 w-5" />
        
      </button>

      <section className="mb-6">
        <h1 className="text-2xl font-semibold text-[#484848] md:text-3xl">
          Publicar imóvel
        </h1>
        <p className="mt-1 text-base text-[#484848]">
          Registe aqui o apartamento, casa ou espaço que pretende anunciar. Os
          campos abaixo foram pensados para garantir que o anúncio fica completo
          e atrativo.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)]">
        {/* Left: formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base text-[#484848]">
                <Home className="h-4 w-4 text-[#FF585D]" />
                Informações principais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-[#484848]">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#484848]">
                  Título do anúncio
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Apartamento T2 moderno na Sommerschield"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-[#484848]">
                  Localização
                </label>
                <Input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Bairro, cidade"
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#484848]">
                    Tipo de imóvel
                  </label>
                  <div className="flex gap-2">
                    {[
                      { value: "apartamento", label: "Apartamento" },
                      { value: "casa", label: "Casa" },
                      { value: "outro", label: "Outro" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setType(
                            option.value as "apartamento" | "casa" | "outro",
                          )
                        }
                        className={`flex-1 rounded-full border px-3 py-2 text-xs font-medium ${
                          type === option.value
                            ? "border-[#FF585D] bg-[#FF585D]/5 text-[#FF585D]"
                            : "border-neutral-200 text-[#484848]"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#484848]">
                    Finalidade
                  </label>
                  <div className="flex gap-2">
                    {[
                      { value: "aluguer", label: "Aluguer" },
                      { value: "venda", label: "Venda" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          setFinalidade(option.value as "aluguer" | "venda")
                        }
                        className={`flex-1 rounded-full border px-3 py-2 text-xs font-medium ${
                          finalidade === option.value
                            ? "border-[#FF585D] bg-[#FF585D]/5 text-[#FF585D]"
                            : "border-neutral-200 text-[#484848]"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-[#484848]">
                    Preço base{" "}
                    {finalidade === "aluguer" ? "por dia" : "do imóvel"} (MZN)
                  </label>
                  <Input
                    value={price}
                    onChange={(e) =>
                      setPrice(e.target.value.replace(/[^\d]/g, ""))
                    }
                    placeholder="Ex: 6500"
                  />
                </div>
                <div className="space-y-1 flex justify-end text-justify  text-sm text-[#8a8a8a]">
                  <p className="text-justify text-xs text-[#8a8a8a]">
                    Indique um valor realista para aumentar as chances de
                    contacto.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base text-[#484848]">
                <FileText className="h-4 w-4 text-[#FF585D]" />
                Descrição detalhada
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2  text-[#484848]">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#484848]">
                  Descreva o imóvel
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="w-full rounded-2xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF585D] focus-visible:ring-offset-2"
                  placeholder="Inclua detalhes como número de quartos, casas de banho, mobiliário, acesso, serviços próximos, regras da casa, etc."
                />
              </div>
              <p className="text-xs text-[#8a8a8a]">
                Quanto mais completa for a descrição, mais confiança o
                interessado terá no seu anúncio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base text-[#484848]">
                <Images className="h-4 w-4 text-[#FF585D]" />
                Fotografias e localização
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-[#484848]">
              <div className="grid gap-3 md:grid-cols-3">
                {images.map((url, index) => (
                  <div key={index} className="space-y-1">
                    <label className="text-sm font-medium text-[#484848]">
                      URL da imagem {index + 1}
                    </label>
                    <Input
                    type="file"
                      value={url}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#8a8a8a]">
                Utilize links de imagens claras do interior e exterior. Se
                preferir, poderá adicionar mais fotos depois.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="flex items-center gap-1 text-sm font-medium text-[#484848]">
                    Coordenadas (opcional)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      value={lat}
                      onChange={(e) => setLat(e.target.value)}
                      placeholder="Latitude"
                    />
                    <Input
                      value={lng}
                      onChange={(e) => setLng(e.target.value)}
                      placeholder="Longitude"
                    />
                  </div>
                  <p className="text-[11px] text-[#8a8a8a]">
                    Ajuda o mapa a localizar melhor o imóvel. Use valores
                    aproximados caso não queira partilhar a morada exata.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              className="rounded-lg"
              onClick={() => router.push("/")}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="rounded-lg bg-[#FF585D] px-5 py-2 text-sm font-semibold text-white hover:bg-[#ff6f72]"
              disabled={!canSubmit || isSubmitting}
            >
              {isSubmitting ? "A publicar..." : "Publicar anúncio"}
            </Button>
          </div>
        </form>

        {/* Right: pré-visualização / estado */}
        <aside className="space-y-3">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle className="text-base text-[#484848]">
                Pré-visualização do anúncio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base  text-[#484848]">
              {isSubmitted ? (
                <div className="space-y-3 rounded-2xl bg-[#f0fdf4] p-3 text-[#166534]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#22c55e]" />
                    <p className="text-base font-semibold">
                      Anúncio guardado (simulação)
                    </p>
                  </div>
                  <p className="text-sm text-justify">
                    O seu anúncio foi registado com sucesso. Numa versão com
                    backend, ele passaria a aparecer na lista de imóveis da
                    plataforma.
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-justify text-[#8a8a8a]">
                    Enquanto preenche o formulário, veja aqui um resumo de como
                    o seu anúncio será apresentado aos utilizadores.
                  </p>

                  <div className="space-y-1 rounded-2xl bg-neutral-50 p-3">
                    <p className="text-xs font-semibold">
                      {title || "Título do anúncio"}
                    </p>
                    <p className="text-[11px] text-[#8a8a8a]">
                      {location || "Localização do imóvel"}
                    </p>
                    <p className="text-[11px] text-[#8a8a8a]">
                      {type === "apartamento"
                        ? "Apartamento"
                        : type === "casa"
                          ? "Casa"
                          : "Imóvel"}{" "}
                      · {finalidade === "venda" ? "Para venda" : "Para aluguer"}
                    </p>
                    {formattedPrice && (
                      <p className="mt-1 text-[11px] font-semibold text-[#484848]">
                        {formattedPrice}{" "}
                        {finalidade === "aluguer" ? "/ dia" : ""}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1 rounded-2xl bg-neutral-50 p-3">
                    <p className="text-[11px] font-semibold text-[#484848]">
                      Principais pontos
                    </p>
                    <p className="line-clamp-4 text-[11px] text-[#8a8a8a]">
                      {description ||
                        "A descrição completa que escrever aqui será exibida nesta área, ajudando potenciais interessados a perceberem melhor as características do imóvel."}
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </aside>
      </section>
    </main>
  );
}
