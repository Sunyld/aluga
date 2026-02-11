"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Input } from "./input";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}

export function SearchBar({ placeholder, onSearch, className }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-center gap-2",
        className
      )}
    >
      <Search className="h-4 w-4 text-neutral-500" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="h-8 flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-neutral-400"
      />
      <Button
        type="submit"
        size="sm"
        className="hidden rounded-full px-3 text-xs font-semibold md:inline-flex"
      >
        Pesquisar
      </Button>
    </form>
  );
}

