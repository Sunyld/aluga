"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, Home } from "lucide-react";
import { UserProfile } from "../../components/mobile/UserProfile";

export default function PerfilPage() {
  const router = useRouter();

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
      <UserProfile />

      {/* Mobile: botão Home fixo no fundo */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-lg px-4 md:hidden">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF585D] py-3 text-white font-semibold shadow-lg hover:bg-[#ff6f72] transition"
        >
          <Home className="h-5 w-5" />
          Voltar ao início
        </button>
      </div>
    </div>
  );
}
