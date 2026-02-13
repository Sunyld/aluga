"use client";

import React from "react";

export function LoaderOverlay({ message = "A carregar..." }: { message?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#484848]/20 border-t-[#FF585D]" />
      <p className="mt-3 text-sm font-medium text-[#484848]">{message}</p>
    </div>
  );
}

export function LoaderInline({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-5 w-5 animate-spin rounded-full border-2 border-[#484848]/20 border-t-[#FF585D] ${className}`}
      aria-hidden
    />
  );
}
