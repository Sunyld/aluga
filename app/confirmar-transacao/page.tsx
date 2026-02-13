

"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, Home } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ShoppingBag } from "lucide-react";

interface PendingTransaction {
  id: string;
  title: string;
  description: string;
  amount: number;
  createdAt: string;
}

const MOCK_TRANSACTIONS: PendingTransaction[] = [
  {
    id: "1",
    title: "Aluguer de apartamento T2 - Polana",
    description: "Período de 1 mês",
    amount: 25000,
    createdAt: "Há 5 minutos",
  },
  {
    id: "2",
    title: "Reserva de espaço para evento",
    description: "Sábado, 20 de Abril",
    amount: 15000,
    createdAt: "Há 30 minutos",
  },
];

export default function ConfirmarTransacaoPage() {
  const router = useRouter();

  const [transactions] = useState<PendingTransaction[]>(MOCK_TRANSACTIONS);
  const [selected, setSelected] = useState<PendingTransaction | null>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleOpen = (transaction: PendingTransaction) => {
    setSelected(transaction);
    setPassword("");
    setPasswordError("");
  };

  const handleClose = () => {
    setSelected(null);
    setPassword("");
    setPasswordError("");
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");

    if (!password.trim()) {
      setPasswordError("Por favor, introduza a sua palavra-passe.");
      return;
    }

    // Aqui pode adicionar a lógica de verificação da palavra-passe e confirmação da transação
    console.log("Transação confirmada:", selected?.id);

    handleClose();
    setShowSuccess(true);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[#484848]/10 bg-white px-4 py-4">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF585D] text-white shadow-sm hover:bg-[#ff6f72] transition"
          aria-label="Voltar"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Aluga+"
            width={32}
            height={32}
            className="h-8 w-auto object-contain"
            style={{ width: "auto" }}
          />
        </button>
        <div className="w-10" />
      </header>

      <div className="mx-auto mt-4 max-w-3xl px-4 sm:px-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-neutral-900">
            Confirmar transações
          </h1>
          <p className="mt-1 text-sm text-neutral-600">
            Veja abaixo as transações que precisam da sua confirmação.
          </p>
        </header>

        {transactions.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-white py-12 px-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100">
              <ShoppingBag className="h-7 w-7 text-neutral-400" />
            </div>
            <p className="text-sm font-medium text-neutral-800">
              Não há transações pendentes de confirmação
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Quando tiveres uma transação para confirmar, ela irá aparecer aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {transactions.map((tx) => (
              <button
                key={tx.id}
                type="button"
                onClick={() => handleOpen(tx)}
                className="flex w-full items-center justify-between rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-neutral-200/70 transition hover:ring-[#FF585D]/40 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF585D]/10">
                    <ShoppingBag className="h-5 w-5 text-[#FF585D]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-900">
                      {tx.title}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {tx.description}
                    </p>
                    <p className="mt-1 text-xs text-neutral-400">
                      {tx.createdAt}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-[#FF585D]">
                    {new Intl.NumberFormat("pt-MZ", {
                      style: "decimal",
                      maximumFractionDigits: 0,
                    }).format(tx.amount)}{" "}
                    MZN
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#FF585D]">
                    Confirmar
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Dialog de confirmação */}
        <Dialog open={!!selected} onOpenChange={(open) => (open ? null : handleClose())}>
          <DialogContent>
            <form onSubmit={handleConfirm}>
              <DialogHeader>
                <DialogTitle>Confirmar transação</DialogTitle>
                <DialogDescription>
                  Introduza a sua palavra-passe para confirmar a transação selecionada.
                </DialogDescription>
              </DialogHeader>
              {selected && (
                <div className="mt-3 rounded-xl bg-neutral-50 p-3 text-sm text-neutral-800">
                  <p className="font-medium">{selected.title}</p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {selected.description}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#FF585D]">
                    {new Intl.NumberFormat("pt-MZ", {
                      style: "decimal",
                      maximumFractionDigits: 0,
                    }).format(selected.amount)}{" "}
                    MZN
                  </p>
                </div>
              )}
              <div className="mt-4 space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-neutral-900"
                >
                  Palavra-passe
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Introduza a sua palavra-passe"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  className={passwordError ? "border-red-500" : ""}
                  autoComplete="current-password"
                />
                {passwordError && (
                  <p className="text-sm text-red-600">{passwordError}</p>
                )}
              </div>
              <DialogFooter className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button type="submit">Confirmar transação</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Popup de sucesso */}
        <Dialog
          open={showSuccess}
          onOpenChange={(open) => (!open ? handleCloseSuccess() : undefined)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Transação confirmada</DialogTitle>
              <DialogDescription>
                A sua transação foi confirmada com sucesso.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                <span className="text-2xl text-emerald-600">✓</span>
              </div>
            </div>
            <DialogFooter className="mt-6">
              <Button type="button" onClick={handleCloseSuccess}>
                Fechar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Mobile: botão Home fixo no fundo */}
      <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 px-4 md:hidden">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF585D] py-3 font-semibold text-white shadow-lg transition hover:bg-[#ff6f72]"
        >
          <Home className="h-5 w-5" />
          Voltar ao início
        </button>
      </div>
    </div>
  );
}
