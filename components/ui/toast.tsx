"use client";

import React, { createContext, useCallback, useContext, useState } from "react";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  show: (message: string, type?: ToastType) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback((message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => removeToast(id), 4000);
  }, [removeToast]);

  const success = useCallback((m: string) => show(m, "success"), [show]);
  const error = useCallback((m: string) => show(m, "error"), [show]);
  const info = useCallback((m: string) => show(m, "info"), [show]);

  return (
    <ToastContext.Provider value={{ show, success, error, info }}>
      {children}
      <div className="fixed bottom-20 left-4 right-4 z-[100] flex flex-col gap-2 md:bottom-6 md:left-auto md:right-6 md:max-w-sm">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => removeToast(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-white shrink-0" />,
    error: <AlertCircle className="h-5 w-5 text-white shrink-0" />,
    info: <Info className="h-5 w-5 text-white shrink-0" />,
  };
  const bg = {
    success: "bg-[#16a34a]",
    error: "bg-[#dc2626]",
    info: "bg-[#484848]",
  };

  return (
    <div
      role="alert"
      className={`flex items-center gap-3 rounded-xl px-4 py-3 shadow-lg ${bg[toast.type]} text-white text-sm`}
    >
      {icons[toast.type]}
      <p className="flex-1">{toast.message}</p>
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    return {
      show: (m: string) => {},
      success: (m: string) => {},
      error: (m: string) => {},
      info: (m: string) => {},
    };
  }
  return ctx;
}
