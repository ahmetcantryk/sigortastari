"use client";

import ReactDOM from "react-dom";

export default function PreloadResources() {
  ReactDOM.preload("/images/tss-banners.webp", {
    as: "image",
    fetchPriority: "high",
  });
  ReactDOM.preload("/images/ferdi-banners2.webp", {
    as: "image",
  });
  return null;
}
