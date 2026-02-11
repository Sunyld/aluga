"use client";

import { Bell, UserCircle2 } from "lucide-react";
import { SearchBar } from "../ui/search-bar";
import { Badge } from "../ui/badge";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 md:px-6 lg:px-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="flex items-center gap-2">
                <Badge variant="subtle" className="rounded-full">
                  <span className="font-semibold tracking-wide">Aluga</span>
                </Badge>
                <span className="text-xl font-extrabold text-neutral-900">
                  +
                </span>
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden flex-1 justify-center md:flex">
              <div className="w-full max-w-md">
                <SearchBar
                  placeholder="Procure por casa, camião, espaço de eventos..."
                  onSearch={onSearch}
                />
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem className="ml-auto flex items-center gap-2 md:gap-3">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-100"
                aria-label="Notificações"
              >
                <Bell className="h-4 w-4" />
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2 py-1 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-100"
                    aria-label="Perfil do utilizador"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <UserCircle2 className="hidden h-5 w-5 text-neutral-500 md:block" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Meu perfil</DropdownMenuItem>
                  <DropdownMenuItem>Meus anúncios</DropdownMenuItem>
                  <DropdownMenuItem>Favoritos</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    Terminar sessão
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <SearchBar
          placeholder="Pesquisar em Aluga+"
          onSearch={onSearch}
        />
      </div>
    </header>
  );
}

