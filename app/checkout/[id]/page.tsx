"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { ChevronLeft, CheckCircle2, AlertCircle, CreditCard, User, Home } from "lucide-react";

import { LISTINGS } from "../../../constants";
import type { Listing } from "../../../types";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { LoaderOverlay } from "../../../components/ui/loader";
import { useToast } from "../../../components/ui/toast";

type Step = 1 | 2 | 3 | 4;

type PaymentStatus = "idle" | "success" | "error";

export default function ConfirmPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();

  const [step, setStep] = useState<Step>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerDocument, setCustomerDocument] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<"card" | "mpesa" | "transfer">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [paymentReference, setPaymentReference] = useState("");

  const params = useParams<{ id: string }>();
  const listingId = searchParams.get("listingId") || searchParams.get("id") || params?.id;
  const totalParam = searchParams.get("total");
  const nightsParam = searchParams.get("nights");
  const guestsParam = searchParams.get("guests");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  const listing: Listing | undefined = useMemo(
    () => (listingId ? LISTINGS.find((l) => l.id === listingId) : undefined),
    [listingId]
  );

  const nights = nightsParam ? Number(nightsParam) || 0 : 0;

  const baseTotal =
    typeof totalParam === "string" && !Number.isNaN(Number(totalParam))
      ? Number(totalParam)
      : listing
      ? listing.price * (nights > 0 ? nights : 1)
      : 0;

  const formattedTotal = new Intl.NumberFormat("pt-MZ", {
    style: "currency",
    currency: "MZN",
    maximumFractionDigits: 0,
  }).format(baseTotal);

  const formattedPricePerNight =
    listing &&
    new Intl.NumberFormat("pt-MZ", {
      style: "currency",
      currency: "MZN",
      maximumFractionDigits: 0,
    }).format(listing.price);

  const canGoToStep2 =
    !!listing && baseTotal > 0;

  const canGoToStep3 =
    customerName.trim().length > 2 &&
    customerEmail.includes("@") &&
    customerPhone.trim().length >= 7 &&
    customerDocument.trim().length >= 5;

  const isPaymentFormValid =
    paymentMethod === "card"
      ? cardNumber.replace(/\s/g, "").length >= 12 &&
        cardExpiry.trim().length >= 4 &&
        cardCvv.trim().length >= 3
      : paymentReference.trim().length >= 4;

  const goNext = () => {
    if (step === 1 && canGoToStep2) setStep(2);
    if (step === 2 && canGoToStep3) setStep(3);
  };

  const goBack = () => {
    if (step === 1) {
      if (listingId) {
        router.push(`/produto/${listingId}`);
      } else {
        router.back();
      }
      return;
    }
    if (step > 1 && step < 4) {
      setStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev));
      setPaymentStatus("idle");
    }
  };

  const handleConfirmPayment = () => {
    if (!isPaymentFormValid || isProcessing) return;
    setIsProcessing(true);
    setPaymentStatus("idle");

    // Simulação de comunicação com gateway de pagamento
    setTimeout(() => {
      const ok = Math.random() > 0.15; // ~85% de sucesso
      if (ok) {
        setPaymentStatus("success");
        setStep(4);
        toast.success("Pagamento confirmado com sucesso!");
      } else {
        setPaymentStatus("error");
        toast.error("Não foi possível concluir o pagamento. Tente novamente.");
      }
      setIsProcessing(false);
    }, 1500);
  };

  const resetAndGoHome = () => {
    router.push("/");
  };

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-6 md:py-8 relative">
      {isProcessing && <LoaderOverlay message="A processar pagamento..." />}
      <header className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={goBack}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF585D] text-white shadow-sm hover:bg-[#ff6f72] transition"
          aria-label="Voltar"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </header>

      <section className="mb-6">
        <h1 className="text-2xl font-semibold text-[#484848] md:text-3xl">
          Confirmar reserva
        </h1>
        <p className="mt-1 text-sm text-[#484848]">
          Revise os detalhes do imóvel, preencha os seus dados e conclua o pagamento em poucos passos.
        </p>
      </section>

      {/* Step indicator */}
      <section className="mb-8">
        <div className="flex items-center gap-3 text-xs font-medium text-[#8a8a8a]">
          <StepItem
            label="Resumo"
            number={1}
            current={step}
          />
          <StepSeparator />
          <StepItem
            label="Dados do cliente"
            number={2}
            current={step}
          />
          <StepSeparator />
          <StepItem
            label="Pagamento"
            number={3}
            current={step}
          />
          <StepSeparator />
          <StepItem
            label="Confirmação"
            number={4}
            current={step}
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        {/* Left: steps content */}
        <div className="space-y-4">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-[#484848]">
                  <Home className="h-4 w-4 text-[#FF585D]" />
                  Resumo do imóvel e valor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[#484848]">
                {!listing && (
                  <p className="text-sm text-[#8a8a8a]">
                    Não encontramos o imóvel associado a esta confirmação. Volte e selecione novamente um anúncio.
                  </p>
                )}
                {listing && (
                  <>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold">{listing.title}</p>
                      <p className="text-xs text-[#8a8a8a]">{listing.location}</p>
                      <p className="text-xs text-[#8a8a8a]">
                        {listing.type === "apartamento"
                          ? "Apartamento"
                          : listing.type === "casa"
                          ? "Casa"
                          : "Imóvel"}{" "}
                        · {listing.finalidade === "venda" ? "Venda" : "Aluguer"}
                      </p>
                    </div>

                    <div className="grid gap-3 rounded-2xl bg-neutral-50 p-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8a8a8a]">Preço base</span>
                        <span className="font-medium text-[#484848]">
                          {formattedPricePerNight} / dia
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8a8a8a]">Duração estimada</span>
                        <span className="font-medium text-[#484848]">
                          {nights > 0 ? `${nights} noite(s)` : "A definir"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-t border-dashed border-black/5 pt-3 text-xs">
                        <span className="font-semibold text-[#484848]">Total a pagar</span>
                        <span className="text-base font-semibold text-[#FF585D]">
                          {formattedTotal}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs text-[#8a8a8a]">
                      {(checkIn || checkOut) && (
                        <p>
                          Datas:{" "}
                          <span className="font-medium text-[#484848]">
                            {checkIn ?? "..."} {" → "} {checkOut ?? "..."}
                          </span>
                          {guestsParam && (
                            <>
                              {" · "}
                              <span className="font-medium text-[#484848]">
                                {guestsParam} hóspede(s)
                              </span>
                            </>
                          )}
                        </p>
                      )}
                      <p>
                        Antes de avançar confirme se o valor, as datas e o imóvel
                        correspondem ao que combinou com o anunciante.
                      </p>
                    </div>
                  </>
                )}

                <div className="mt-4 flex justify-end gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => router.back()}
                    
                    className="rounded-lg "
                  >
                    Alterar seleção
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    className="bg-[#FF585D] text-white rounded-lg hover:bg-[#ff6f72]"
                    onClick={goNext}
                    disabled={!canGoToStep2}
                  >
                    Continuar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-[#484848]">
                  <User className="h-4 w-4 text-[#FF585D]" />
                  Dados do cliente
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-[#484848]">
                      Nome completo
                    </label>
                    <Input
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Ex: João Manuel"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-[#484848]">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-[#484848]">
                      Telefone
                    </label>
                    <Input
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+258 ..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-[#484848]">
                      Documento de identificação
                    </label>
                    <Input
                      value={customerDocument}
                      onChange={(e) => setCustomerDocument(e.target.value)}
                      placeholder="BI / Passaporte / NUIT"
                    />
                  </div>
                </div>

                <p className="text-xs text-[#8a8a8a]">
                  Os seus dados serão partilhados apenas com o anunciante para gestão da reserva,
                  de acordo com as boas práticas de proteção de dados.
                </p>

                <div className="mt-4 flex justify-between gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={goBack}
                  >
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    className="bg-[#FF585D] text-white hover:bg-[#ff6f72]"
                    onClick={goNext}
                    disabled={!canGoToStep3}
                  >
                    Ir para pagamento
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-[#484848]">
                  <CreditCard className="h-4 w-4 text-[#FF585D]" />
                  Dados de pagamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex-1 rounded-full border px-3 py-2 text-xs font-medium ${
                      paymentMethod === "card"
                        ? "border-[#FF585D] bg-[#FF585D]/5 text-[#FF585D]"
                        : "border-neutral-200 text-[#484848]"
                    }`}
                  >
                    Cartão
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mpesa")}
                    className={`flex-1 rounded-full border px-3 py-2 text-xs font-medium ${
                      paymentMethod === "mpesa"
                        ? "border-[#FF585D] bg-[#FF585D]/5 text-[#FF585D]"
                        : "border-neutral-200 text-[#484848]"
                    }`}
                  >
                    M-Pesa
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("transfer")}
                    className={`flex-1 rounded-full border px-3 py-2 text-xs font-medium ${
                      paymentMethod === "transfer"
                        ? "border-[#FF585D] bg-[#FF585D]/5 text-[#FF585D]"
                        : "border-neutral-200 text-[#484848]"
                    }`}
                  >
                    E-mola
                  </button>
                </div>

                {paymentMethod === "card" && (
                  <div className="grid gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-medium text-[#484848]">
                        Número do cartão
                      </label>
                      <Input
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#484848]">
                          Validade (MM/AA)
                        </label>
                        <Input
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="08/28"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-medium text-[#484848]">
                          CVV
                        </label>
                        <Input
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod !== "card" && (
                  <div className="grid gap-3">
                    <div>
                      <label className="mb-1 block  font-medium text-[#484848]">
                        
                        {
                          paymentMethod === "mpesa"
                            ? "Número M-Pesa"
                            : "Número E-Mola"
                        }
                      </label>
                      <Input
                        value={paymentReference}
                        onChange={(e) => setPaymentReference(e.target.value)}
                        placeholder={
                          paymentMethod === "mpesa"
                            ? "84/85 000 0000"
                            : "86/87 000 0000"
                        }
                      />
                    </div>
                  </div>
                )}

                {paymentStatus === "error" && (
                  <div className="flex items-start gap-2 rounded-2xl bg-red-50 px-3 py-2 text-xs text-red-700">
                    <AlertCircle className="mt-0.5 h-4 w-4" />
                    <p>
                      Não foi possível concluir o pagamento neste momento. Verifique os dados
                      introduzidos ou tente novamente dentro de alguns instantes.
                    </p>
                  </div>
                )}

                <p className="text-xs text-[#8a8a8a]">
                  Ao continuar, concorda com os termos da reserva e autoriza a cobrança do valor
                  total. Os detalhes completos serão enviados para o seu email.
                </p>

                <div className="mt-4 flex justify-between gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={goBack}
                    disabled={isProcessing}
                  >
                    Voltar
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    className="bg-[#FF585D] text-white hover:bg-[#ff6f72]"
                    onClick={handleConfirmPayment}
                    disabled={!isPaymentFormValid || isProcessing}
                  >
                    {isProcessing ? "Processando..." : `Pagar ${formattedTotal}`}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card className="border-[#16a34a33] bg-[#f0fdf4]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base text-[#166534]">
                  <CheckCircle2 className="h-5 w-5 text-[#22c55e]" />
                  Pagamento confirmado
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[#166534]">
                <p>
                  Recebemos o seu pagamento com sucesso. Enviámos um resumo da reserva e os dados
                  do contacto do anunciante para o seu email{" "}
                  <span className="font-semibold">{customerEmail || "informado"}</span>.
                </p>

                {listing && (
                  <div className="rounded-2xl bg-white/80 p-3 text-xs text-[#166534]">
                    <p className="font-semibold">{listing.title}</p>
                    <p className="text-[11px] text-[#15803d]">{listing.location}</p>
                    <p className="mt-1 text-[11px]">
                      Total pago:{" "}
                      <span className="font-semibold">{formattedTotal}</span>
                    </p>
                    {(checkIn || checkOut) && (
                      <p className="text-[11px]">
                        Datas: {checkIn ?? "..."} → {checkOut ?? "..."}
                      </p>
                    )}
                  </div>
                )}

                <p className="text-xs text-[#15803d]">
                  Guarde este comprovativo. Em caso de dúvida ou necessidade de alteração da
                  reserva, utilize o contacto partilhado no email de confirmação.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {listing && (
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="border-[#16a34a66] text-[#166534]"
                      onClick={() => router.push(`/produto/${listing.id}`)}
                    >
                      Ver imóvel novamente
                    </Button>
                  )}
                  <Button
                    type="button"
                    size="sm"
                    className="bg-[#166534] text-white hover:bg-[#15803d]"
                    onClick={resetAndGoHome}
                  >
                    Voltar ao início
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right: summary panel */}
        <aside className="space-y-3">
          <Card className="sticky top-20 hidden md:block">
            <CardHeader>
              <CardTitle className="text-sm text-[#484848]">
                Resumo da reserva
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-[#484848]">
              {listing ? (
                <>
                  <div className="flex gap-3">
                    <div className="h-16 w-16 overflow-hidden rounded-xl">
                      <img
                        src={listing.images[0]}
                        alt={listing.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="line-clamp-2 text-xs font-semibold">
                        {listing.title}
                      </p>
                      <p className="text-[11px] text-[#8a8a8a]">
                        {listing.location}
                      </p>
                      <p className="mt-1 text-[11px] text-[#8a8a8a]">
                        {formattedPricePerNight} / dia
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 rounded-2xl bg-neutral-50 p-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#8a8a8a]">Total estimado</span>
                      <span className="font-semibold text-[#484848]">
                        {formattedTotal}
                      </span>
                    </div>
                    {nights > 0 && (
                      <p className="text-[11px] text-[#8a8a8a]">
                        {nights} noite(s) · {guestsParam ?? 1} hóspede(s)
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-xs text-[#8a8a8a]">
                  Os detalhes do imóvel serão exibidos aqui assim que a reserva for iniciada a
                  partir de um anúncio válido.
                </p>
              )}

              <div className="mt-2 space-y-1 text-[11px] text-[#8a8a8a]">
                <p className="font-semibold text-[#484848]">Boas práticas</p>
                <p>
                  Confirme sempre os dados antes de pagar. Não partilhe códigos de confirmação ou
                  senhas com terceiros.
                </p>
                <p>
                  Em caso de dúvida, contacte diretamente o anunciante ou o suporte da plataforma
                  antes de efetuar pagamentos adicionais.
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    </main>
  );
}

interface StepItemProps {
  label: string;
  number: Step;
  current: Step;
}

function StepItem({ label, number, current }: StepItemProps) {
  const isActive = current === number;
  const isCompleted = current > number;

  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
          isCompleted
            ? "bg-[#FF585D] text-white"
            : isActive
            ? "border border-[#FF585D] bg-white text-[#FF585D]"
            : "border border-neutral-300 bg-white text-[#8a8a8a]"
        }`}
      >
        {number}
      </div>
      <span
        className={`hidden text-[11px] font-medium md:inline ${
          isActive || isCompleted ? "text-[#484848]" : "text-[#8a8a8a]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function StepSeparator() {
  return <div className="h-px flex-1 rounded-full bg-neutral-200" />;
}

