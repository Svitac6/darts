import React, { useState } from "react";
import ThemeSwitcher from './component/ThemeSwitcher';
import { useLocation } from "react-router-dom";
import Player from "./component/Player";
import { IoMdContacts } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";

export default function Players() {

    const location = useLocation();
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [name, setName] = useState("");

    const formatPath = (path: string) => {
        const cleanedPath = path.replace(/^\//, "");
        return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
    };

    const formattedPath = formatPath(location.pathname);

    const handleAddClick = () => {
        setIsOverlayOpen(true);
    };

    const handleOverlayClose = () => {
        setIsOverlayOpen(false);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Nom ajouté :", name);
        setIsOverlayOpen(false); // Fermer l'overlay après soumission
    };

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
            <ThemeSwitcher
                truc={
                    <IoMdContacts
                        className="h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18"
                        style={{ color: "var(--icon-color)" }}
                    />
                }
                title={formattedPath} />

            <div
                onClick={handleAddClick}
                className="flex mr-52 ml-52 mb-10 items-center justify-center bg-[var(--icon-color)] gap-2 rounded-md cursor-pointer px-4 py-2 w-fit"
            >
                <IoPersonAddSharp className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9" />
                <h1 className="flex items-center justify-center text-3xl">Ajouter</h1>
            </div>

            <div className="ml-52 mr-52">
                <Player key="1" index={1} name="test" />
                <Player key="2" index={2} name="test" />
                <Player key="3" index={3} name="test" />
                <Player key="4" index={4} name="test" />
                <Player key="5" index={5} name="test" />
                <Player key="6" index={6} name="test" />
            </div>

            {/* Overlay */}
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
                                    onClick={handleOverlayClose}
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
