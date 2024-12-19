import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher"; // Assurez-vous que le chemin est correct
import { useLocation } from "react-router-dom";

export default function X01() {
  const [activeButton, setActiveButton] = useState("301");

  return (
    <div>
      {/* Contenu centré */}
      <div className="flex">
        <button
          onClick={() => setActiveButton("301")}
          className={`border border-[var(--icon-color)] rounded-l-lg p-10 ${activeButton === "301"
              ? "bg-[var(--icon-color)] border-none"
              : "bg-transparent"
            }`}
          style={{
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          301
        </button>
        <button
          onClick={() => setActiveButton("501")}
          className={`border border-[var(--icon-color)] p-10 ${activeButton === "501"
              ? "bg-[var(--icon-color)] border-none"
              : "bg-transparent"
            }`}
          style={{
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          501
        </button>
        <button
          onClick={() => setActiveButton("701")}
          className={`border border-[var(--icon-color)] rounded-r-lg p-10 ${activeButton === "701"
              ? "bg-[var(--icon-color)] border-none"
              : "bg-transparent"
            }`}
          style={{
            transition: "background-color 0.3s ease, border-color 0.3s ease",
          }}
        >
          701
        </button>
      </div>
    </div>

  );
}
