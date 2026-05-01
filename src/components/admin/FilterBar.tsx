"use client";

import { ReactNode } from "react";
import Select, { type SelectOption } from "./Select";

export interface FilterChip {
  key: string;
  label: string;
  onClear: () => void;
}

interface FilterBarProps {
  search: string;
  onSearchChange: (v: string) => void;
  searchPlaceholder?: string;
  filters?: ReactNode;
  chips?: FilterChip[];
  onClearAll?: () => void;
  count?: number;
  loading?: boolean;
  countLabel?: string;
}

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function FilterBar({
  search,
  onSearchChange,
  searchPlaceholder = "Ara...",
  filters,
  chips = [],
  onClearAll,
  count,
  loading,
  countLabel = "kayıt",
}: FilterBarProps) {
  const hasActive = search.length > 0 || chips.length > 0;

  return (
    <div className="fb">
      <div className="fb-row">
        <div className="fb-search">
          <span className="fb-search-icon"><SearchIcon /></span>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={searchPlaceholder}
            className="fb-search-input"
          />
          {search && (
            <button
              type="button"
              className="fb-search-clear"
              onClick={() => onSearchChange("")}
              aria-label="Aramayı temizle"
            >
              <XIcon />
            </button>
          )}
        </div>

        {filters && <div className="fb-filters">{filters}</div>}

        <div className="fb-spacer" />

        {!loading && typeof count === "number" && (
          <span className="fb-count">
            <strong>{count}</strong> {countLabel}
          </span>
        )}

        {hasActive && onClearAll && (
          <button type="button" className="fb-clear-all" onClick={onClearAll}>
            Filtreleri temizle
          </button>
        )}
      </div>

      {chips.length > 0 && (
        <div className="fb-chips">
          {chips.map((c) => (
            <span key={c.key} className="fb-chip">
              {c.label}
              <button
                type="button"
                onClick={c.onClear}
                aria-label={`${c.label} kaldır`}
              >
                <XIcon />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

interface FilterSelectProps {
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
  placeholder: string;
  width?: number;
}

export function FilterSelect({
  value,
  onChange,
  options,
  placeholder,
  width,
}: FilterSelectProps) {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      width={width}
      ariaLabel={placeholder}
    />
  );
}
