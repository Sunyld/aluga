"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export type MainCategoryId = "imoveis" | "logistica" | "eventos";

interface CommonFilterState {
  tipo?: string;
  subTipo?: string;
  precoMin?: number;
  precoMax?: number;
  localizacao?: string;
}

interface FilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: MainCategoryId;
  value: CommonFilterState;
  onChange: (value: CommonFilterState) => void;
  onApply: () => void;
}

export function FilterSheet({
  open,
  onOpenChange,
  category,
  value,
  onChange,
  onApply,
}: FilterSheetProps) {
  const handleField = (field: keyof CommonFilterState, v: string) => {
    onChange({
      ...value,
      [field]:
        field === "precoMin" || field === "precoMax"
          ? v
            ? Number(v)
            : undefined
          : v || undefined,
    });
  };

  const clearAll = () =>
    onChange({
      tipo: undefined,
      subTipo: undefined,
      precoMin: undefined,
      precoMax: undefined,
      localizacao: undefined,
    });

  const applyAndClose = () => {
    onApply();
    onOpenChange(false);
  };

  const renderCategoryOptions = () => {
    if (category === "imoveis") {
      return (
        <>
          <FieldGroup label="Finalidade">
            <OptionPill
              label="Aluguer"
              active={value.tipo === "aluguer"}
              onClick={() => handleField("tipo", "aluguer")}
            />
            <OptionPill
              label="Venda"
              active={value.tipo === "venda"}
              onClick={() => handleField("tipo", "venda")}
            />
          </FieldGroup>

          <FieldGroup label="Tipo de imóvel">
            {["Casa", "Quarto", "Apartamento", "Loja", "Escritório", "Contentor"].map(
              (t) => (
                <OptionPill
                  key={t}
                  label={t}
                  active={value.subTipo === t.toLowerCase()}
                  onClick={() => handleField("subTipo", t.toLowerCase())}
                />
              )
            )}
          </FieldGroup>
        </>
      );
    }

    if (category === "logistica") {
      return (
        <FieldGroup label="Serviço de logística">
          {["Camiões", "Carga", "Mudanças"].map((t) => (
            <OptionPill
              key={t}
              label={t}
              active={value.subTipo === t.toLowerCase()}
              onClick={() => handleField("subTipo", t.toLowerCase())}
            />
          ))}
        </FieldGroup>
      );
    }

    return (
      <FieldGroup label="Tipo de espaço para eventos">
        {["Salões", "Quintas", "Workshops"].map((t) => (
          <OptionPill
            key={t}
            label={t}
            active={value.subTipo === t.toLowerCase()}
            onClick={() => handleField("subTipo", t.toLowerCase())}
          />
        ))}
      </FieldGroup>
    );
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="mb-4">
          <DrawerTitle>Filtrar resultados</DrawerTitle>
        </DrawerHeader>

        <div className="space-y-5 overflow-y-auto pb-3">
          {renderCategoryOptions()}

          <FieldGroup label="Preço (MZN)">
            <div className="flex gap-3">
              <Input
                label="Mínimo"
                type="number"
                value={value.precoMin ?? ""}
                onChange={(e) => handleField("precoMin", e.target.value)}
              />
              <Input
                label="Máximo"
                type="number"
                value={value.precoMax ?? ""}
                onChange={(e) => handleField("precoMax", e.target.value)}
              />
            </div>
          </FieldGroup>

          <FieldGroup label="Localização">
            <Input
              placeholder="Ex: Maputo, Matola, Beira..."
              value={value.localizacao ?? ""}
              onChange={(e) => handleField("localizacao", e.target.value)}
            />
          </FieldGroup>
        </div>

        <DrawerFooter className="border-t pt-3">
          <button
            type="button"
            onClick={clearAll}
            className="text-xs font-semibold text-neutral-500 underline"
          >
            Limpar tudo
          </button>
          <Button
            type="button"
            className="flex-1 rounded-full text-sm font-semibold"
            onClick={applyAndClose}
          >
            Filtrar resultados
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function FieldGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </section>
  );
}

function OptionPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium transition",
        active
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900"
      )}
    >
      {label}
    </button>
  );
}

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({ label, className, ...props }: InputProps) {
  return (
    <label className="flex flex-1 flex-col gap-1 text-xs font-medium text-neutral-600">
      {label && <span>{label}</span>}
      <input
        className={cn(
          "h-9 rounded-full border border-neutral-200 px-3 text-xs font-normal text-neutral-800 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/5",
          className
        )}
        {...props}
      />
    </label>
  );
}

