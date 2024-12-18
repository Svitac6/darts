import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeSwitcher from "./compoment/ThemeSwitcher";
import { TbTargetArrow } from "react-icons/tb";
import  X01  from "./compoment/X01";
import Cricket from "./compoment/Cricket";  


export default function Game(): JSX.Element {
  const location = useLocation();

  // État pour le bouton sélectionné
  const [selected, setSelected] = useState<string | null>(null);

 

  const handleSelect = (button: string): void => {
    setSelected(button);
  };

  // Fonction pour formater le chemin
  const formatPath = (path: string): string => {
    const cleanedPath = path.replace(/^\//, "");
    return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
  };

  const formattedPath = formatPath(location.pathname);

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Composant ThemeSwitcher avec un icône et un titre basé sur le chemin */}
      <ThemeSwitcher
        truc={
          <TbTargetArrow
            className="h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18"
            style={{ color: "var(--icon-color)" }}
          />
        }
        title={formattedPath}
      />

      {/* Section de contenu centrée */}
      <div className="flex flex-col items-center justify-center">
        {/* Boutons */}
        <div className="flex ">
          <button
            onClick={() => handleSelect("X01")}
            className={`border rounded-l-lg p-10 text-white ${
              selected === "X01"
                ? "bg-[var(--icon-hover-color)] border-none" 
                : ""
            }`}
            style={{
              transition: "background-color 0.3s ease", 
            }}
          >
            X01
          </button>
          <button
            onClick={() => handleSelect("Cricket")}
            className={`border rounded-r-lg p-8   text-white ${
              selected === "Cricket"
                ? "bg-[var(--icon-hover-color)] border-none"
                : ""
            }`}
            style={{
              transition: "background-color 0.3s ease", 
            }}
          >
            Cricket
          </button>
        </div>

        {/* Affichage du composant sélectionné */}
        <div className="mt-10">
          {selected === "X01" && (
            <div className="border p-5">
              <X01/>
            </div>
          )}
          {selected === "Cricket" && (
            <div className="border p-5">
              <Cricket/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
