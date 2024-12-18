import React, { useState, useEffect } from "react";
import { useTheme } from "./contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";

export default function Home() {
    const { theme, setTheme } = useTheme();
    const [darkMode, setDarkMode] = useState(false);

    // Restaurer le mode sombre/clair depuis localStorage
    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode");
        if (savedDarkMode === "true") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", newMode.toString());
        if (newMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    // Palette de couleurs
    const colors = [
        { name: "themeRed", color: "#ff6347" },
        { name: "themeBlue", color: "#4682b4" },
        { name: "themeGreen", color: "#32cd32" },
    ];

    return (
        <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
            {/* En-tête */}
            <div className="flex items-center justify-between p-6 md:p-8 lg:p-10">
                <div className="ml-4">
                    <FiTarget
                        className="h-16 w-auto md:h-20 lg:h-24"
                        style={{ color: "var(--icon-color)" }}
                    />
                </div>

                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold flex-grow">
                    Player
                </h1>

                {/* Bouton pour changer le mode */}
                <button
                    onClick={toggleDarkMode}
                    className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-3 md:p-4 lg:p-5 rounded-full shadow-md"
                >
                    {darkMode ? (
                        <FaSun
                            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
                            style={{ color: "var(--icon-color)" }}
                        />
                    ) : (
                        <FaMoon
                            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
                            style={{ color: "var(--icon-color)" }}
                        />
                    )}
                </button>
            </div>

            {/* Palette de couleurs */}
            <div className="p-6 flex justify-center items-center gap-4">
                {colors.map((color) => (
                    <div
                        key={color.name}
                        onClick={() => setTheme(color.name)}
                        className="w-10 h-10 rounded-full cursor-pointer"
                        style={{
                            backgroundColor: color.color,
                            border: theme === color.name ? "2px solid black" : "none",
                        }}
                    ></div>
                ))}
            </div>

            {/* Contenu centré */}
            
        </div>
    );
}
