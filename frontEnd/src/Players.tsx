import React, { useState, useEffect } from "react";
import ThemeSwitcher from "./component/ThemeSwitcher";
import { useLocation } from "react-router-dom";
import Player from "./component/Player";
import { IoMdContacts } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { PlayerType } from "./component/types";

export default function Players() {
  const API_URL = "http://localhost:3000/api/players"; 
  const location = useLocation();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [name, setName] = useState("");
  const [players, setPlayers] = useState<PlayerType[]>([]);

  const formatPath = (path: string) => {
    const cleanedPath = path.replace(/^\//, "");
    return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
  };

  const formattedPath = formatPath(location.pathname);

  // Récupérer les joueurs depuis l'API
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des joueurs");
        }
        const data = await response.json();
        setPlayers(data); // Charger les joueurs dans l'état
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  // Ajouter un joueur
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPlayer = { name, photo: "default.jpg" };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPlayer),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout du joueur");
      }

      const savedPlayer = await response.json();
      setPlayers([...players, savedPlayer]); // Mettre à jour la liste des joueurs
      setIsOverlayOpen(false); // Fermer l'overlay
      setName(""); // Réinitialiser le champ de saisie
    } catch (error) {
      console.error(error);
    }
  };

  // Supprimer un joueur
  const handleDelete = async (index: number) => {
    const playerToDelete = players[index];

    try {
      const response = await fetch(`${API_URL}/${playerToDelete.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression du joueur");
      }

      setPlayers((prev) => prev.filter((_, i) => i !== index)); // Supprimer le joueur de l'état
    } catch (error) {
      console.error(error);
    }
  };

  // Déplacer un joueur dans la liste
  const handleMove = (index: number, direction: "up" | "down") => {
    const newPlayers = [...players];
    if (direction === "up" && index > 0) {
      [newPlayers[index - 1], newPlayers[index]] = [
        newPlayers[index],
        newPlayers[index - 1],
      ];
    } else if (direction === "down" && index < newPlayers.length - 1) {
      [newPlayers[index], newPlayers[index + 1]] = [
        newPlayers[index + 1],
        newPlayers[index],
      ];
    }
    setPlayers(newPlayers);
  };

  return (
    <div>
      <ThemeSwitcher
        truc={
          <IoMdContacts
            className="h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18"
            style={{ color: "var(--icon-color)" }}
          />
        }
        title={formattedPath}
      />

      {/* Bouton Ajouter */}
      <div
        onClick={() => setIsOverlayOpen(true)}
        className="flex mr-52 ml-52 mb-10 items-center justify-center bg-[var(--icon-color)] gap-2 rounded-md cursor-pointer px-4 py-2 w-fit"
      >
        <IoPersonAddSharp className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9" />
        <h1 className="flex items-center justify-center text-3xl">Ajouter</h1>
      </div>

      {/* Liste des joueurs */}
      <div className="ml-52 mr-52">
            {players.map((player, index) => (
            <Player
                key={player.id}
                playerIndex={index}
                name={player.name}
                onMove={handleMove}
                onDelete={handleDelete}
            />
            ))}
      </div>

      {/* Overlay pour ajouter un joueur */}
      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4 text-center">Ajouter un joueur</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Nom du joueur
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsOverlayOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
