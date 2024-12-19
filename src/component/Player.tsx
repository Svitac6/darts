import React from "react";
import { GiDart } from "react-icons/gi";
import { FaGripLines } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

// Définition des props pour Player
interface PlayerProps {
  index: number; // Remplace "key" par "index" pour éviter le conflit
  name: string;
}

export default function Player({ index, name }: PlayerProps) {
  return (
    <div className="flex items-center justify-between p-2 border-gray-300 rounded-md">
      {/* Section gauche avec l'icône et le nom */}
      <div className="flex items-center grow space-x-2">
        <GiDart
          className="h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18"
          style={{ color: "var(--icon-color)" }}
        />
        <p className="text-base md:text-lg lg:text-xl">{`${index + 1}. ${name}`}</p>
      </div>

      {/* Section droite avec la checkbox et les lignes */}
      <div className="flex justify-center items-center space-x-4">
        <FaGripLines
          className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9"
          style={{ color: "var(--icon-color)" }}
        />
        <RiDeleteBin6Fill
          className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 cursor-pointer"
          style={{ color: "var(--icon-color)" }}
        />
      </div>
    </div>
  );
}
