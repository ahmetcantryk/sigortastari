"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
  slug: string;
}

export default function ProductFaq({ items, slug }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const toggle = (idx: number) =>
    setOpenIdx((prev) => (prev === idx ? null : idx));

  return (
    <>
      <style>{`
        .faq-collapse {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.3s ease;
        }
        .faq-collapse.open {
          grid-template-rows: 1fr;
        }
        .faq-collapse-inner {
          overflow: hidden;
          min-height: 0;
        }
        .faq-collapse .card-body {
          padding-top: 24px !important;
        }
      `}</style>
      <div id="accordion" className="accordion-style">
        {items.map((faq, index) => {
          const collapseId = `collapse-${slug}-${index}`;
          const headingId = `heading-${slug}-${index}`;
          const isOpen = openIdx === index;
          return (
            <div className="card mb-3" key={index}>
              <div className="card-header" id={headingId}>
                <h3 className="mb-0">
                  <button
                    type="button"
                    className={`btn btn-link${isOpen ? "" : " collapsed"}`}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={collapseId}
                  >
                    {faq.question}
                  </button>
                </h3>
              </div>
              <div
                id={collapseId}
                className={`faq-collapse${isOpen ? " open" : ""}`}
                aria-labelledby={headingId}
                role="region"
              >
                <div className="faq-collapse-inner">
                  <div className="card-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
