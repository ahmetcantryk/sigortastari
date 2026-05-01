"use client";

import { useEffect, useState, ReactNode } from "react";

export interface ExportFilterToggle {
  key: string;
  label: string;
  description?: string;
  active: boolean;
}

export interface ExportColumn {
  key: string;
  label: string;
  visible: boolean;
}

interface ExportDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (settings: {
    activeFilters: Record<string, boolean>;
    activeColumns: Record<string, boolean>;
  }) => void;
  filters: ExportFilterToggle[];
  columns: ExportColumn[];
  totalAll: number;
  totalFiltered: number;
  extra?: ReactNode;
}

export default function ExportDialog({
  open,
  onClose,
  onConfirm,
  filters,
  columns,
  totalAll,
  totalFiltered,
  extra,
}: ExportDialogProps) {
  const [filterState, setFilterState] = useState<Record<string, boolean>>({});
  const [columnState, setColumnState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (open) {
      setFilterState(Object.fromEntries(filters.map((f) => [f.key, f.active])));
      setColumnState(Object.fromEntries(columns.map((c) => [c.key, c.visible])));
    }
  }, [open, filters, columns]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const anyFilterActive = Object.values(filterState).some(Boolean);
  const expectedCount = anyFilterActive ? totalFiltered : totalAll;
  const visibleColCount = Object.values(columnState).filter(Boolean).length;

  const allColsOn = () =>
    setColumnState(Object.fromEntries(columns.map((c) => [c.key, true])));
  const allColsOff = () =>
    setColumnState(Object.fromEntries(columns.map((c) => [c.key, false])));

  return (
    <div className="quote-modal-bg" onClick={onClose}>
      <div
        className="quote-modal export-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: 560 }}
      >
        <button className="quote-modal-close" onClick={onClose}>×</button>
        <h2>CSV Olarak Dışa Aktar</h2>

        <div className="export-section">
          <div className="export-section-head">
            <span>Filtreler</span>
            <span className="export-section-hint">
              {anyFilterActive ? "Filtreli" : "Tüm kayıtlar"}
            </span>
          </div>
          {filters.length === 0 ? (
            <p className="export-empty">Aktif filtre yok.</p>
          ) : (
            <div className="export-filter-list">
              {filters.map((f) => (
                <label key={f.key} className="export-filter">
                  <input
                    type="checkbox"
                    checked={!!filterState[f.key]}
                    onChange={(e) =>
                      setFilterState((s) => ({ ...s, [f.key]: e.target.checked }))
                    }
                  />
                  <div>
                    <div className="export-filter-label">{f.label}</div>
                    {f.description && (
                      <div className="export-filter-desc">{f.description}</div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="export-section">
          <div className="export-section-head">
            <span>Kolonlar ({visibleColCount}/{columns.length})</span>
            <span className="export-section-actions">
              <button type="button" onClick={allColsOn}>Tümü</button>
              <button type="button" onClick={allColsOff}>Hiçbiri</button>
            </span>
          </div>
          <div className="export-cols-grid">
            {columns.map((c) => (
              <label key={c.key} className="export-col">
                <input
                  type="checkbox"
                  checked={!!columnState[c.key]}
                  onChange={(e) =>
                    setColumnState((s) => ({ ...s, [c.key]: e.target.checked }))
                  }
                />
                <span>{c.label}</span>
              </label>
            ))}
          </div>
        </div>

        {extra}

        <div className="export-footer">
          <div className="export-summary">
            <strong>{expectedCount}</strong> kayıt · <strong>{visibleColCount}</strong> kolon
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              İptal
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                onConfirm({
                  activeFilters: filterState,
                  activeColumns: columnState,
                })
              }
              disabled={visibleColCount === 0 || expectedCount === 0}
            >
              CSV İndir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
