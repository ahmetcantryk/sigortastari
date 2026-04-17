"use client";

import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

interface Props {
  value: string;
  onChange: (html: string) => void;
}

export default function QuillEditor({ value, onChange }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!containerRef.current || isInitialized.current) return;
    isInitialized.current = true;

    const quill = new Quill(containerRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote"],
          ["link", "image"],
          ["clean"],
        ],
      },
      placeholder: "Blog içeriğini buraya yazın...",
    });

    quill.root.innerHTML = value;
    quillRef.current = quill;

    quill.on("text-change", () => {
      onChange(quill.root.innerHTML);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dışarıdan value değişirse (örneğin sayfa yüklendiğinde) güncelle
  useEffect(() => {
    if (quillRef.current && quillRef.current.root.innerHTML !== value) {
      const selection = quillRef.current.getSelection();
      quillRef.current.root.innerHTML = value;
      if (selection) {
        try { quillRef.current.setSelection(selection); } catch { /* noop */ }
      }
    }
  }, [value]);

  return (
    <div className="quill-wrapper">
      <div ref={containerRef} />
    </div>
  );
}
