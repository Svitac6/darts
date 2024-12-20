import React from "react";
import { PlayerProps } from "./types";
import { GiDart } from "react-icons/gi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function Player({ playerIndex, name, onMove, onDelete }: PlayerProps) {
  return (
    <div className="flex items-center justify-between p-2 border-gray-300 rounded-md">
      {/* Section gauche avec l'icône et le nom */}
      <div className="flex items-center grow space-x-2">
        <GiDart
          className="h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18"
          style={{ color: "var(--icon-color)" }}
        />
        <p className="text-base md:text-lg lg:text-xl">{`${playerIndex + 1}. ${name}`}</p>
      </div>

      {/* Section droite avec les boutons */}
      <div className="flex items-center space-x-4">
        {/* Bouton pour déplacer vers le haut */}
        <button
          onClick={() => onMove(playerIndex, "up")}
          disabled={playerIndex === 0} // Désactiver pour le premier joueur
          className="cursor-pointer disabled:opacity-50"
        >
          <FaArrowUp className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9" />
        </button>

        {/* Bouton pour déplacer vers le bas */}
        <button
          onClick={() => onMove(playerIndex, "down")}
          className="cursor-pointer"
        >
          <FaArrowDown className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9" />
        </button>

        {/* Bouton pour supprimer */}
        <button onClick={() => onDelete(playerIndex)} className="cursor-pointer">
          <RiDeleteBin6Fill
            className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9"
            style={{ color: "var(--icon-color)" }}
          />
        </button>
      </div>
    </div>
  );
}
