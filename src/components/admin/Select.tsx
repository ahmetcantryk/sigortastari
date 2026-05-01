"use client";

import { useState, useEffect, useRef } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
  placeholder?: string;
  width?: number;
  ariaLabel?: string;
}

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Select({
  value,
  onChange,
  options,
  placeholder = "Seçiniz",
  width,
  ariaLabel,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<number>(-1);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlight((h) => Math.min(h + 1, options.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlight((h) => Math.max(h - 1, 0));
      } else if (e.key === "Enter" && highlight >= 0) {
        e.preventDefault();
        onChange(options[highlight].value);
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, highlight, options, onChange]);

  useEffect(() => {
    if (open) {
      const idx = options.findIndex((o) => o.value === value);
      setHighlight(idx);
    }
  }, [open, options, value]);

  const selected = options.find((o) => o.value === value);
  const display = selected ? selected.label : placeholder;
  const isPlaceholder = !selected;

  return (
    <div className="ui-select" ref={ref} style={width ? { width } : undefined}>
      <button
        ref={triggerRef}
        type="button"
        className={`ui-select-trigger ${open ? "open" : ""} ${isPlaceholder ? "placeholder" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
      >
        <span className="ui-select-value">{display}</span>
        {value && (
          <span
            className="ui-select-clear"
            role="button"
            tabIndex={-1}
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
            }}
            aria-label="Temizle"
          >
            <XIcon />
          </span>
        )}
        <span className={`ui-select-chevron ${open ? "rotated" : ""}`}>
          <ChevronIcon />
        </span>
      </button>
      {open && (
        <div className="ui-select-pop" role="listbox">
          {options.length === 0 && (
            <div className="ui-select-empty">Seçenek yok</div>
          )}
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            const isHighlight = i === highlight;
            return (
              <div
                key={opt.value}
                className={`ui-select-option ${isSelected ? "selected" : ""} ${isHighlight ? "highlight" : ""}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                  triggerRef.current?.focus();
                }}
              >
                <span className="ui-select-check">
                  {isSelected && <CheckIcon />}
                </span>
                <span>{opt.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
