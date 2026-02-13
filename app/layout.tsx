import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/Providers";

export const metadata: Metadata = {
  title: "Aluga+ · Imóveis, Logística e Eventos em Moçambique",
  description: "Plataforma Aluga+ para aluguer e gestão de imóveis, logística e espaços de eventos em Moçambique.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-50 text-neutral-900" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

