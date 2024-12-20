import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ThemeSwitcher from "./component/ThemeSwitcher";
import { TbTargetArrow } from "react-icons/tb";
import X01 from "./component/X01";
import Cricket from "./component/Cricket";
import Player from "./component/Player";
import { IoPersonAddSharp } from "react-icons/io5";

const API_URL = "http://localhost:3000/api/players"; // URL de votre API backend

export default function Game(): JSX.Element {
  const location = useLocation();

  const [selected, setSelected] = useState<string>("X01"); // Par défaut, X01 est sélectionné
  const [players, setPlayers] = useState<any[]>([]); // Liste des joueurs récupérés de la base de données
  const [selectedPlayers, setSelectedPlayers] = useState<any[]>([]); // Joueurs sélectionnés pour la partie
  const [isRandomOrder, setIsRandomOrder] = useState<boolean>(false);

  const [isPlayerOverlayOpen, setIsPlayerOverlayOpen] = useState<boolean>(false);
  const [isNewPlayerOverlayOpen, setIsNewPlayerOverlayOpen] = useState<boolean>(false);
  const [newPlayerName, setNewPlayerName] = useState<string>("");

  const handleSelect = (button: string): void => {
    setSelected(button);
  };

  const formatPath = (path: string): string => {
    const cleanedPath = path.replace(/^\//, "");
    return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
  };

  // Récupérer les joueurs depuis la base de données
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des joueurs.");
        }
        const data = await response.json();
        setPlayers(data); // Charger les joueurs dans l'état
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchPlayers();
  }, []);

  const handleTogglePlayer = (player: any) => {
    if (selectedPlayers.find((p) => p.id === player.id)) {
      setSelectedPlayers((prev) => prev.filter((p) => p.id !== player.id));
    } else {
      setSelectedPlayers((prev) => [...prev, player]);
    }
  };

  // Ajouter un nouveau joueur dans la base de données
  const handleAddNewPlayer = async () => {
    if (newPlayerName.trim()) {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: newPlayerName, photo: "default.jpg" }),
        });

        if (!response.ok) {
          throw new Error("Erreur lors de l'ajout du joueur.");
        }

        const newPlayer = await response.json();
        setPlayers((prev) => [...prev, newPlayer]); // Ajouter le nouveau joueur à la liste
        setNewPlayerName("");
        setIsNewPlayerOverlayOpen(false);
      } catch (error) {
        console.error("Erreur :", error);
      }
    }
  };

  // Supprimer un joueur de la liste des joueurs sélectionnés
  const handleDelete = (index: number) => {
    setSelectedPlayers((prev) => prev.filter((_, i) => i !== index));
  };

  // Déplacer un joueur dans la liste des joueurs sélectionnés
  const handleMove = (index: number, direction: "up" | "down") => {
    const newPlayers = [...selectedPlayers];
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
    setSelectedPlayers(newPlayers);
  };

  const formattedPath = formatPath(location.pathname);

  return (
    <div className="relative">
      <ThemeSwitcher
        truc={
          <TbTargetArrow
            className="h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18"
            style={{ color: "var(--icon-color)" }}
          />
        }
        title={formattedPath}
      />

      <div className="flex flex-col items-center justify-center">
        <div className="flex text-3xl ">
          <button
            onClick={() => handleSelect("X01")}
            className={`border border-[var(--icon-color)] rounded-l-lg p-8 pr-12 pl-12 ${selected === "X01" ? "bg-[var(--icon-color)] border-none" : ""
              }`}
            style={{
              transition: "background-color 0.3s ease",
            }}
          >
            X01
          </button>
          <button
            onClick={() => handleSelect("Cricket")}
            className={`border border-[var(--icon-color)] rounded-r-lg p-8 ${selected === "Cricket" ? "bg-[var(--icon-color)] border-none" : ""
              }`}
            style={{
              transition: "background-color 0.3s ease",
            }}
          >
            Cricket
          </button>
        </div>
      </div>

      <div>
        {selected === "X01" && (
          <div className="flex mt-10 flex-col">
            <div className="flex items-center justify-center">
              <X01 />
            </div>
            <div className="ml-52 mr-52 mt-10">
              <div className="flex gap-5">
                <div className="flex items-center gap-2 justify-center">
                  <div className="checkbox-wrapper-10 justify-center items-center">
                    <input
                      className="tgl tgl-flip"
                      id="cb5"
                      type="checkbox"
                      checked={isRandomOrder}
                      onChange={() => setIsRandomOrder((prev) => !prev)}
                    />
                    <label
                      className="tgl-btn"
                      data-tg-off="Nope"
                      data-tg-on="Yeah!"
                      htmlFor="cb5"
                    ></label>
                  </div>
                  <h1 className="text-xl">Ordre aléatoire</h1>
                </div>

                <div
                  className="flex mt-10 bg-[var(--icon-color)] gap-2 p-2 mb-10 rounded-md cursor-pointer"
                  onClick={() => setIsPlayerOverlayOpen(true)}
                >
                  <IoPersonAddSharp className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9" />
                  <h1 className="text-3xl">Ajouter</h1>
                </div>
              </div>

              {/* Liste des joueurs sélectionnés */}
              <div
                className="grid grid-cols-2 gap-4"
                style={{
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                }}
              >
                {selectedPlayers.map((player, index) => (
                  <Player
                    key={player.id}
                    playerIndex={index}
                    name={player.name}
                    onMove={handleMove}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {selected === "Cricket" && (
          <div>
            <Cricket />

            <div className="ml-52 mr-52 mt-10">
              <div className="flex gap-5">
                <div className="flex items-center gap-2 justify-center">
                  <div className="checkbox-wrapper-10 justify-center items-center">
                    <input
                      className="tgl tgl-flip"
                      id="cb5"
                      type="checkbox"
                      checked={isRandomOrder}
                      onChange={() => setIsRandomOrder((prev) => !prev)}
                    />
                    <label
                      className="tgl-btn"
                      data-tg-off="Nope"
                      data-tg-on="Yeah!"
                      htmlFor="cb5"
                    ></label>
                  </div>
                  <h1 className="text-xl">Ordre aléatoire</h1>
                </div>

                <div
                  className="flex mt-10 bg-[var(--icon-color)] gap-2 p-2 mb-10 rounded-md cursor-pointer"
                  onClick={() => setIsPlayerOverlayOpen(true)}
                >
                  <IoPersonAddSharp className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9" />
                  <h1 className="text-3xl">Ajouter</h1>
                </div>
              </div>

              {/* Liste des joueurs sélectionnés */}
              <div
                className="grid grid-cols-2 gap-4"
                style={{
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                }}
              >
                {selectedPlayers.map((player, index) => (
                  <Player
                    key={player.id}
                    playerIndex={index}
                    name={player.name}
                    onMove={handleMove}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay pour sélectionner des joueurs */}
      {isPlayerOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4 text-center">Sélectionner les joueurs</h2>
            <div className="mb-4">
              {players.map((player) => (
                <div key={player.id} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    id={`player-${player.id}`}
                    checked={selectedPlayers.some((p) => p.id === player.id)}
                    onChange={() => handleTogglePlayer(player)}
                  />
                  <label htmlFor={`player-${player.id}`}>{player.name}</label>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={() => setIsNewPlayerOverlayOpen(true)}
              >
                Ajouter un nouveau joueur
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
                onClick={() => setIsPlayerOverlayOpen(false)}
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay pour ajouter un nouveau joueur */}
      {isNewPlayerOverlayOpen && (
        <div className="mb-4">
          {players.map((player) => (
            <div
              key={player.id}
              className="flex items-center gap-4 mb-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
            >
              <input
                type="checkbox"
                id={`player-${player.id}`}
                className="hidden peer" // Masque l'input d'origine
                checked={selectedPlayers.some((p) => p.id === player.id)}
                onChange={() => handleTogglePlayer(player)}
              />
              <label
                htmlFor={`player-${player.id}`}
                className="w-6 h-6 rounded-full cursor-pointer relative border-2 border-gray-400 flex justify-center items-center peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all"
              >
                {/* Effet de paillettes */}
                <span className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 transition-opacity peer-checked:animate-sparkle peer-checked:opacity-100"></span>

                <svg
                  className="w-4 h-4 text-white hidden peer-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </label>
              <span className="text-lg text-gray-700">{player.name}</span>
            </div>
          ))}
        </div>


      )}
    </div>
  );
}
