import { ReactElement, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

interface ThemeSwitcherProps {
    truc?: React.ReactNode;
    title: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ truc, title }) => {
    const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useTheme();

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
        <div className="">
            {/* En-tête */}
            <div className="flex items-center justify-between p-6 md:p-8 lg:p-10">
                <div className="ml-4 ">
                    <Link to="/">
                        <FiTarget
                            className="h-16 w-auto md:h-20 lg:h-24"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </Link>
                </div>
                <div className=" pl-36 text-center items-center justify-center flex-grow text-3xl gap-4 md:text-4xl lg:text-5xl font-bold flex ">
                    {truc && (
                        <div>{truc}</div>
                    )}

                    <h1 className="">
                        {title}
                    </h1>
                </div>

                <div className="flex">
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
            </div>
        </div>
    );
};

export default ThemeSwitcher;
