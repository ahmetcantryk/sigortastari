"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";

interface KvkkCheckboxProps {
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const KvkkCheckbox = forwardRef<HTMLInputElement, KvkkCheckboxProps>(
  ({ id, name, onChange, onBlur, error }, ref) => {
    const [checked, setChecked] = useState(false);

    const containerStyle: React.CSSProperties = {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      flexWrap: "wrap",
      padding: "8px 0",
    };

    const checkboxStyle: React.CSSProperties = {
      appearance: "none",
      WebkitAppearance: "none",
      width: "24px",
      height: "24px",
      minWidth: "24px",
      minHeight: "24px",
      border: "2px solid " + (checked ? "#e7462c" : "#cbcbcb"),
      borderRadius: "4px",
      background: checked ? "#e7462c" : "#fff",
      cursor: "pointer",
      position: "relative",
      flexShrink: 0,
      transition: "border-color 0.2s, background-color 0.2s",
      margin: 0,
      padding: 0,
    };

    const checkmarkStyle: React.CSSProperties = {
      content: '""',
      position: "absolute",
      left: "7px",
      top: "3px",
      width: "6px",
      height: "12px",
      borderRight: "2.5px solid #fff",
      borderBottom: "2.5px solid #fff",
      transform: "rotate(45deg)",
      display: checked ? "block" : "none",
    };

    const labelStyle: React.CSSProperties = {
      flex: 1,
      lineHeight: 1.5,
      cursor: "pointer",
      fontSize: "14px",
      color: "#6A747B",
    };

    const linkStyle: React.CSSProperties = {
      textDecoration: "underline",
      color: "inherit",
    };

    const errorStyle: React.CSSProperties = {
      width: "100%",
      marginTop: "4px",
      color: "#dc3545",
      fontSize: "12px",
    };

    return (
      <div style={containerStyle}>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <input
            type="checkbox"
            id={id}
            name={name}
            className="kvkkCheck"
            ref={ref}
            onChange={(e) => {
              setChecked(e.target.checked);
              onChange(e);
            }}
            onBlur={onBlur}
            style={checkboxStyle}
          />
          <span style={checkmarkStyle} />
        </div>
        <label htmlFor={id} style={labelStyle}>
          <Link href="/kvkk" style={linkStyle} target="_blank" onClick={(e) => e.stopPropagation()}>
            <strong>KVKK Aydınlatma Metni</strong>
          </Link>
          &apos;ni ve{" "}
          <Link href="/gizlilik-ve-web-kullanim-sartlari" style={linkStyle} target="_blank" onClick={(e) => e.stopPropagation()}>
            <strong>Gizlilik ve Web Kullanım Şartları</strong>
          </Link>
          &apos;nı okudum, onaylıyorum
        </label>
        {error && <span style={errorStyle}>{error}</span>}
      </div>
    );
  }
);

KvkkCheckbox.displayName = "KvkkCheckbox";

export default KvkkCheckbox;
