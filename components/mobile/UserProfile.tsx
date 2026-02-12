"use client";

import { useEffect, useState } from "react";
import {
  LogOut,
  Heart,
  Settings,
  HelpCircle,
  Package,
  ChevronRight,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { LISTINGS } from "../../constants";
import type { Listing, User } from "../../types";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "wishlist";
const USER_STORAGE_KEY = "aluga_user";

const DEFAULT_USER: User = {
  id: "1",
  name: "Utilizador Aluga+",
  email: "utilizador@aluga.co.mz",
  phone: "+258 84 123 4567",
  memberSince: "2024",
};

function getUser(): User {
  if (typeof window === "undefined") return DEFAULT_USER;
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    if (raw) {
      return { ...DEFAULT_USER, ...JSON.parse(raw) };
    }
  } catch {
    // ignore
  }
  return DEFAULT_USER;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function UserProfile() {
  const [favorites, setFavorites] = useState<Listing[]>([]);
  const [user, setUser] = useState<User>(DEFAULT_USER);
  const router = useRouter();

  useEffect(() => {
    setUser(getUser());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const ids: string[] = JSON.parse(raw);
      const items = LISTINGS.filter((l) => ids.includes(l.id));
      setFavorites(items);
    } catch {
      // ignore
    }
  }, []);

  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col pb-24 pt-6">
      <div className="px-4 md:px-6">
        {/* Cabeçalho com dados do utilizador */}
        <div className="rounded-2xl border border-[#484848]/10 bg-white p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <Avatar className="h-20 w-20 shrink-0 border-2 border-[#FF585D]/20">
              {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
              <AvatarFallback className="bg-[#FF585D] text-2xl font-bold text-white">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-semibold text-[#484848]">
                {user.name}
              </h1>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center gap-2 text-sm text-[#484848]/80">
                  <Mail className="h-4 w-4 shrink-0 text-[#484848]/60" />
                  <span className="truncate">{user.email}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center gap-2 text-sm text-[#484848]/80">
                    <Phone className="h-4 w-4 shrink-0 text-[#484848]/60" />
                    <span>{user.phone}</span>
                  </div>
                )}
                {user.memberSince && (
                  <div className="flex items-center gap-2 text-xs text-[#484848]/60">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>Membro desde {user.memberSince}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu de opções */}
        <div className="mt-6 rounded-2xl border border-[#484848]/10 bg-white overflow-hidden">
          <ProfileItem
            icon={Package}
            label="Meus anúncios"
            onClick={() => {}}
          />
          <Separator className="bg-[#484848]/5" />
          <ProfileItem
            icon={Heart}
            label="Favoritos"
            count={favorites.length}
            onClick={() => {}}
          />
          <Separator className="bg-[#484848]/5" />
          <ProfileItem
            icon={Settings}
            label="Configurações"
            onClick={() => {}}
          />
          <Separator className="bg-[#484848]/5" />
          <ProfileItem
            icon={HelpCircle}
            label="Ajuda"
            onClick={() => {}}
          />
          <Separator className="bg-[#484848]/5" />
          <ProfileItem
            icon={LogOut}
            label="Sair"
            danger
            onClick={() => {}}
          />
        </div>

        {/* Secção Favoritos */}
        <div className="mt-6">
          <h2 className="mb-3 text-base font-semibold text-[#484848]">
            Guardados ({favorites.length})
          </h2>
          {favorites.length === 0 ? (
            <div className="rounded-2xl border border-[#484848]/10 bg-white p-6 text-center">
              <Heart className="mx-auto h-12 w-12 text-[#484848]/30" />
              <p className="mt-2 text-sm text-[#484848]/70">
                Ainda não tens anúncios guardados.
              </p>
              <p className="mt-1 text-xs text-[#484848]/50">
                Guarda os que gostares para voltar mais tarde.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {favorites.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => router.push(`/produto/${item.id}`)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl border border-[#484848]/10 bg-white p-4 text-left transition hover:border-[#FF585D]/30"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[#484848] line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-[#484848]/70">{item.location}</p>
                  </div>
                  <span className="shrink-0 font-semibold text-[#FF585D]">
                    {new Intl.NumberFormat("pt-MZ", {
                      style: "decimal",
                      maximumFractionDigits: 0,
                    }).format(item.price)}{" "}
                    MZN
                  </span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#484848]/40" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface ProfileItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  count?: number;
  danger?: boolean;
  onClick: () => void;
}

function ProfileItem({
  icon: Icon,
  label,
  count,
  danger,
  onClick,
}: ProfileItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between px-4 py-3 text-left transition hover:bg-[#484848]/5"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            danger ? "bg-red-500/10" : "bg-[#484848]/5"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${
              danger ? "text-red-600" : "text-[#484848]"
            }`}
          />
        </div>
        <span
          className={
            danger ? "font-semibold text-red-600" : "font-medium text-[#484848]"
          }
        >
          {label}
        </span>
        {count !== undefined && count > 0 && (
          <span className="rounded-full bg-[#FF585D]/10 px-2 py-0.5 text-xs font-medium text-[#FF585D]">
            {count}
          </span>
        )}
      </div>
      {!danger && (
        <ChevronRight className="h-4 w-4 text-[#484848]/40" />
      )}
    </button>
  );
}
