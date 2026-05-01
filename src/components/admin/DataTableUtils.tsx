"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

/* ─── Column definition ─── */
export interface Column<T> {
  key: string;
  label: string;
  defaultVisible?: boolean;
  sortable?: boolean;
  sortValue?: (row: T) => string | number | null | undefined;
  render?: (row: T) => ReactNode;
  csvValue?: (row: T) => string | number | null | undefined;
  thStyle?: React.CSSProperties;
  tdStyle?: React.CSSProperties;
}

/* ─── Sort hook ─── */
export type SortDir = "asc" | "desc" | null;

export function useSort<T>(
  rows: T[],
  columns: Column<T>[],
  initial?: { key: string; dir: SortDir }
) {
  const [sortKey, setSortKey] = useState<string | null>(initial?.key ?? null);
  const [sortDir, setSortDir] = useState<SortDir>(initial?.dir ?? null);

  const sorted = (() => {
    if (!sortKey || !sortDir) return rows;
    const col = columns.find((c) => c.key === sortKey);
    if (!col) return rows;
    const valueOf =
      col.sortValue ??
      ((r: T) =>
        (r as unknown as Record<string, unknown>)[col.key] as
          | string
          | number
          | null
          | undefined);
    const dir = sortDir === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const va = valueOf(a);
      const vb = valueOf(b);
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      if (typeof va === "number" && typeof vb === "number") return (va - vb) * dir;
      return String(va).localeCompare(String(vb), "tr") * dir;
    });
  })();

  const onHeaderClick = (key: string) => {
    if (sortKey !== key) {
      setSortKey(key);
      setSortDir("asc");
    } else if (sortDir === "asc") {
      setSortDir("desc");
    } else if (sortDir === "desc") {
      setSortKey(null);
      setSortDir(null);
    } else {
      setSortDir("asc");
    }
  };

  return { sorted, sortKey, sortDir, onHeaderClick };
}

/* ─── Sort icon ─── */
export function SortIcon({ dir }: { dir: SortDir | "off" }) {
  if (dir === "asc") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 4 }}>
        <polyline points="18 15 12 9 6 15" />
      </svg>
    );
  }
  if (dir === "desc") {
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 4 }}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    );
  }
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 4, opacity: 0.35 }}>
      <polyline points="8 7 12 3 16 7" />
      <polyline points="16 17 12 21 8 17" />
    </svg>
  );
}

/* ─── Column visibility menu ─── */
interface ColumnsMenuProps {
  columns: { key: string; label: string }[];
  visible: Record<string, boolean>;
  onChange: (next: Record<string, boolean>) => void;
}

export function ColumnsMenu({ columns, visible, onChange }: ColumnsMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  const toggle = (key: string) => {
    onChange({ ...visible, [key]: !visible[key] });
  };

  const visibleCount = Object.values(visible).filter(Boolean).length;

  return (
    <div className="dt-menu" ref={ref}>
      <button
        type="button"
        className="dt-menu-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="15" y2="12" />
          <line x1="3" y1="18" x2="9" y2="18" />
        </svg>
        Kolonlar
        <span className="dt-menu-count">{visibleCount}/{columns.length}</span>
      </button>
      {open && (
        <div className="dt-menu-pop">
          <div className="dt-menu-head">Görünür Kolonlar</div>
          {columns.map((c) => (
            <label key={c.key} className="dt-menu-item">
              <input
                type="checkbox"
                checked={!!visible[c.key]}
                onChange={() => toggle(c.key)}
              />
              <span>{c.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── CSV export ─── */
export function downloadCsv<T>(
  rows: T[],
  columns: Column<T>[],
  visibleColumns: Record<string, boolean>,
  filename: string
) {
  const cols = columns.filter((c) => visibleColumns[c.key]);
  const header = cols.map((c) => csvCell(c.label)).join(",");
  const lines = rows.map((row) =>
    cols
      .map((c) => {
        const v = c.csvValue
          ? c.csvValue(row)
          : (row as unknown as Record<string, unknown>)[c.key];
        return csvCell(v);
      })
      .join(",")
  );
  const csv = "\uFEFF" + [header, ...lines].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function csvCell(v: unknown): string {
  if (v == null) return "";
  const s = String(v);
  if (/[",\n;]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

/* ─── Export button ─── */
export function ExportCsvButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm dt-export"
      onClick={onClick}
      disabled={disabled}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      CSV İndir
    </button>
  );
}
