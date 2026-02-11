import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "./drawer";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface BottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function BottomSheet({
  open,
  onOpenChange,
  title,
  footer,
  children,
  className,
}: BottomSheetProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className={cn("pb-4", className)}>
        <DrawerHeader className="mb-3 flex items-center justify-between">
          {title ? (
            <DrawerTitle className="text-sm font-semibold text-[#484848]">
              {title}
            </DrawerTitle>
          ) : (
            <span />
          )}
          <DrawerClose asChild>
            <button
              type="button"
              aria-label="Fechar"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-[#484848] hover:bg-black/10"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <div className="max-h-[60vh] overflow-y-auto pb-2">{children}</div>

        {footer && (
          <DrawerFooter className="border-t pt-2">
            {footer}
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}

