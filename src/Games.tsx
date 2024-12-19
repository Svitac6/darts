import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ThemeSwitcher from "./component/ThemeSwitcher";
import { TbTargetArrow } from "react-icons/tb";
import X01 from "./component/X01";
import Cricket from "./component/Cricket";
import Player from "./component/Player";
import { IoPersonAddSharp } from "react-icons/io5";

export default function Game(): JSX.Element {
  const location = useLocation();

  const [selected, setSelected] = useState<string | null>(null);
  const [players, setPlayers] = useState<string[]>(["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"]);
  const [isRandomOrder, setIsRandomOrder] = useState<boolean>(false);

  const handleSelect = (button: string): void => {
    setSelected(button);
  };

  const formatPath = (path: string): string => {
    const cleanedPath = path.replace(/^\//, "");
    return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
  };

  const formattedPath = formatPath(location.pathname);

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
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
        <div className="flex">
          <button
            onClick={() => handleSelect("X01")}
            className={`border border-[var(--icon-color)] rounded-l-lg p-10 ${selected === "X01" ? "bg-[var(--icon-color)] border-none" : ""
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
                    <label className="tgl-btn" data-tg-off="Nope" data-tg-on="Yeah!" htmlFor="cb5"></label>
                  </div>
                  <h1 className="text-3xl">Ordre aléatoire</h1>
                </div>

                <div
                  className="flex mt-10 bg-[var(--icon-color)] gap-2 p-2 mb-10 rounded-md cursor-pointer"
                  onClick={() =>
                    setPlayers((prev) => [...prev, `Player ${prev.length + 1}`])
                  }
                >
                  <IoPersonAddSharp className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9" />
                  <h1 className="text-3xl">Ajouter</h1>
                </div>
              </div>

              {/* Liste des joueurs en deux colonnes */}
              <div
                className="grid grid-cols-2 gap-4"
                style={{
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                }}
              >
                {players.map((player, index) => (
                  <Player key={index} index={index} name={player} />
                ))}
              </div>
            </div>
          </div>
        )}
        {selected === "Cricket" && (
          <div>
            <Cricket />
          </div>
        )}
      </div>
    </div >
  );
}
