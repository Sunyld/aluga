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
  MapPin,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
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
    <section className="min-h-[calc(100vh-4rem)] pb-28 pt-4">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Perfil card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#484848]/5">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <Avatar className="h-24 w-24 shrink-0 ring-4 ring-[#FF585D]/10">
              {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
              <AvatarFallback className="bg-[#FF585D] text-2xl font-semibold text-white">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center sm:text-left min-w-0">
              <h1 className="text-xl font-semibold text-[#484848]">{user.name}</h1>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-[#484848]/80">
                  <Mail className="h-4 w-4 shrink-0 text-[#484848]/50" />
                  <span className="truncate">{user.email}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-[#484848]/80">
                    <Phone className="h-4 w-4 shrink-0 text-[#484848]/50" />
                    <span>{user.phone}</span>
                  </div>
                )}
                {user.memberSince && (
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#484848]/60">
                    <Calendar className="h-3.5 w-3.5 shrink-0" />
                    <span>Membro desde {user.memberSince}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu opções */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#484848]/5">
          <ProfileItem icon={Package} label="Meus anúncios" onClick={() => {}} />
          <div className="mx-4 border-t border-[#484848]/5" />
          <ProfileItem
            icon={Heart}
            label="Favoritos"
            count={favorites.length}
            onClick={() => {}}
          />
          <div className="mx-4 border-t border-[#484848]/5" />
          <ProfileItem icon={Settings} label="Configurações" onClick={() => {}} />
          <div className="mx-4 border-t border-[#484848]/5" />
          <ProfileItem icon={HelpCircle} label="Ajuda" onClick={() => {}} />
          <div className="mx-4 border-t border-[#484848]/5" />
          <ProfileItem icon={LogOut} label="Sair" danger onClick={() => {}} />
        </div>

        {/* Favoritos */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#484848]">Guardados</h2>
            {favorites.length > 0 && (
              <span className="rounded-full bg-[#FF585D]/10 px-3 py-1 text-sm font-medium text-[#FF585D]">
                {favorites.length}
              </span>
            )}
          </div>

          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#484848]/15 bg-[#484848]/[0.02] py-12 px-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#484848]/5">
                <Heart className="h-7 w-7 text-[#484848]/30" />
              </div>
              <p className="mt-4 text-center text-sm font-medium text-[#484848]">
                Ainda não tens anúncios guardados
              </p>
              <p className="mt-1 text-center text-xs text-[#484848]/60">
                Guarda os que gostares para voltar mais tarde
              </p>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {favorites.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => router.push(`/produto/${item.id}`)}
                  className="group flex items-center gap-4 rounded-xl bg-white p-4 text-left shadow-sm ring-1 ring-[#484848]/5 transition hover:ring-[#FF585D]/30 hover:shadow-md"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[#484848] line-clamp-1">{item.title}</p>
                    <div className="mt-0.5 flex items-center gap-1.5 text-xs text-[#484848]/70">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <Star className="h-3.5 w-3.5 fill-amber-400/80 text-amber-500/80" />
                      <span className="text-xs text-[#484848]/80">{item.rating}</span>
                      <span className="font-semibold text-[#FF585D]">
                        {new Intl.NumberFormat("pt-MZ", {
                          style: "decimal",
                          maximumFractionDigits: 0,
                        }).format(item.price)}{" "}
                        MZN
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 shrink-0 text-[#484848]/30 group-hover:text-[#FF585D]" />
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
      className="flex w-full items-center justify-between px-5 py-4 transition hover:bg-[#484848]/[0.03]"
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            danger ? "bg-red-500/10" : "bg-[#484848]/5"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${danger ? "text-red-600" : "text-[#484848]"}`}
          />
        </div>
        <span
          className={`font-medium ${
            danger ? "text-red-600" : "text-[#484848]"
          }`}
        >
          {label}
        </span>
        {count !== undefined && count > 0 && (
          <span className="rounded-full bg-[#FF585D]/10 px-2.5 py-0.5 text-xs font-semibold text-[#FF585D]">
            {count}
          </span>
        )}
      </div>
      {!danger && (
        <ChevronRight className="h-5 w-5 shrink-0 text-[#484848]/30" />
      )}
    </button>
  );
}
