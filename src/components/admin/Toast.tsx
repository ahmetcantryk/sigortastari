"use client";

import { useState, useEffect, useCallback, createContext, useContext } from "react";

type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  success: (msg: string) => void;
  error: (msg: string) => void;
  info: (msg: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const noop = () => {};
const fallback: ToastContextValue = { success: noop, error: noop, info: noop };

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  return ctx || fallback;
}

let nextId = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const add = useCallback((message: string, type: ToastType) => {
    const id = ++nextId;
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const success = useCallback((msg: string) => add(msg, "success"), [add]);
  const error = useCallback((msg: string) => add(msg, "error"), [add]);
  const info = useCallback((msg: string) => add(msg, "info"), [add]);

  return (
    <ToastContext.Provider value={{ success, error, info }}>
      {children}
      <div style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: 8,
        maxWidth: 400,
      }}>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => remove(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onClose }: { toast: ToastItem; onClose: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExiting(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(onClose, 300);
      return () => clearTimeout(timer);
    }
  }, [exiting, onClose]);

  const colors: Record<ToastType, { bg: string; border: string; icon: string }> = {
    success: { bg: "#f0fdf4", border: "#22c55e", icon: "\u2713" },
    error:   { bg: "#fef2f2", border: "#ef4444", icon: "\u2717" },
    info:    { bg: "#eff6ff", border: "#3b82f6", icon: "\u2139" },
  };

  const c = colors[toast.type];

  return (
    <div
      style={{
        background: c.bg,
        borderLeft: `4px solid ${c.border}`,
        padding: "12px 16px",
        borderRadius: 6,
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 14,
        color: "#1e293b",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "translateX(100%)" : "translateX(0)",
        transition: "opacity 0.3s, transform 0.3s",
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <span style={{ fontWeight: 700, fontSize: 16, color: c.border }}>{c.icon}</span>
      <span style={{ flex: 1 }}>{toast.message}</span>
      <button
        onClick={() => setExiting(true)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 18,
          color: "#94a3b8",
          padding: 0,
          lineHeight: 1,
        }}
      >
        &times;
      </button>
      <style>{`@keyframes slideIn { from { opacity:0; transform:translateX(100%); } to { opacity:1; transform:translateX(0); } }`}</style>
    </div>
  );
}
