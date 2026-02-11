"use client";

import { useEffect, useState } from "react";
import { LogOut, Heart, Settings, HelpCircle, Store } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { LISTINGS } from "../../constants";
import type { Listing } from "../../types";

const STORAGE_KEY = "wishlist";

export function UserProfile() {
  const [favorites, setFavorites] = useState<Listing[]>([]);

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
    <section className="flex min-h-[calc(100vh-4.5rem)] flex-col gap-6 pb-20 pt-4">
      <div className="flex items-center gap-4 px-2">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-[#FF585D] text-xl font-bold text-white">
            SA
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-lg font-semibold text-[#484848]">
            Seu Aluga+ Profile
          </h1>
          <p className="text-xs text-[#484848]/70">
            Gerir anúncios, favoritos e conta
          </p>
        </div>
      </div>

      <Card className="mx-2 rounded-2xl p-0">
        <CardContent className="p-0">
          <ProfileItem icon={Store} label="Meus anúncios" />
          <Separator />
          <ProfileItem icon={Heart} label="Favoritos" />
          <Separator />
          <ProfileItem icon={Settings} label="Configurações" />
          <Separator />
          <ProfileItem icon={HelpCircle} label="Ajuda" />
          <Separator />
          <ProfileItem icon={LogOut} label="Sair" danger />
        </CardContent>
      </Card>

      <Card className="mx-2 mt-2 rounded-2xl">
        <CardContent className="p-4">
          <h2 className="mb-3 text-sm font-semibold text-[#484848]">
            Salvos
          </h2>
          {favorites.length === 0 ? (
            <p className="text-xs text-[#484848]/70">
              Ainda não tens alojamentos ou serviços marcados como favoritos.
            </p>
          ) : (
            <ul className="space-y-2 text-xs text-[#484848]">
              {favorites.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between rounded-xl bg-black/5 px-3 py-2"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold line-clamp-1">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#484848]/70">
                      {item.location}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold">
                    {new Intl.NumberFormat("pt-MZ", {
                      style: "currency",
                      currency: "MZN",
                      maximumFractionDigits: 0,
                    }).format(item.price)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </section>
  );
}

interface ProfileItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  danger?: boolean;
}

function ProfileItem({ icon: Icon, label, danger }: ProfileItemProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between px-4 py-3 text-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-[#484848]">
          <Icon className="h-4 w-4" />
        </div>
        <span
          className={`text-left ${
            danger ? "font-semibold text-red-600" : "text-[#484848]"
          }`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}
