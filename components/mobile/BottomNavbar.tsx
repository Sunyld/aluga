"use client";

import { Home, SlidersHorizontal, User2 } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { cn } from "../../lib/utils";

type TabId = "home" | "filter" | "profile";

interface BottomNavbarProps {
  active: TabId;
  onChange: (tab: TabId) => void;
  hidden?: boolean;
}

export function BottomNavbar({ active, onChange, hidden }: BottomNavbarProps) {
  if (hidden) return null;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-6 pb-5 pt-2 shadow-[0_-6px_18px_rgba(15,23,42,0.05)] md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-center text-xs font-medium">
        <ToggleGroup
          type="single"
          value={active}
          onValueChange={(val) => val && onChange(val as TabId)}
          className="w-full justify-between"
        >
          <NavItem value="home" icon={Home} label="Home" />
          <NavItem value="filter" icon={SlidersHorizontal} label="Filtro" />
          <NavItem value="profile" icon={User2} label="Perfil" />
        </ToggleGroup>
      </div>
    </nav>
  );
}

interface NavItemProps {
  value: TabId;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

function NavItem({ value, icon: Icon, label }: NavItemProps) {
  return (
    <ToggleGroupItem value={value} className="flex flex-1 flex-col items-center gap-1">
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border text-sm data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white",
          "border-transparent bg-neutral-100 text-neutral-500"
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="data-[state=on]:text-neutral-900">{label}</span>
    </ToggleGroupItem>
  );
}
