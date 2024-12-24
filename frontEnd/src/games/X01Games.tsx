import React from "react";
import ThemeSwitcher from "../component/ThemeSwitcher";
import { useLocation } from "react-router-dom";
import { GiDart } from "react-icons/gi";
import { PiTargetBold } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";

export default function X01Games() {
    const location = useLocation();

    // Fonction pour formater le chemin
    const formatPath = (path: string): string => {
        const cleanedPath = path.replace(/^\//, "");
        return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
    };

    const formattedPath = formatPath(location.pathname);

    return (
        <div className="relative min-h-screen ">
            {/* Theme Switcher */}
            <ThemeSwitcher title={formattedPath} />

            {/* Central Content */}
            <div className="flex items-center justify-center gap-12 flex-col">
                <h1 className="text-8xl font-bold mt-10">150</h1>
                <h1 className="text-6xl font-medium" style={{ color: "var(--icon-color)" }}>
                    Player
                </h1>

                {/* Dart Buttons */}
                <div className="flex gap-4 text-black">
                    <button>
                        <GiDart
                            className="h-20 rounded-md bg-[#3E3E3E] p-3 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </button>
                    <button>
                        <GiDart
                            className="h-20 rounded-md bg-[#3E3E3E] p-3 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </button>
                    
                    <button>
                        <GiDart
                            className="h-20 rounded-md bg-[#3E3E3E] p-3 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28"
                            style={{ color: "var(--icon-color)" }}
                        />
                    </button>
                </div>

                {/* Score Display */}
                <div className="flex items-center justify-center gap-4">
                    <PiTargetBold
                        className="h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18"
                        style={{ color: "var(--icon-color)" }}
                    />
                    <p className="text-4xl">00.00</p>
                </div>

                {/* Next Button */}
                <button className="text-4xl p-5 rounded-md" style={{ background: "var(--icon-color)" }}>
                    NEXT
                </button>
            </div>

            {/* Historique Section */}
            <div className="mb-10" >
                <div className="absolute top-3/4 left-4 w-1/4 bg-[#3E3E3E] text-white rounded-lg p-4 shadow-md">
                    <h2 className="text-xl font-bold mb-2 " style={{ color: "var(--icon-color)" }}>Historique</h2>
                    <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="bg-gray-700 p-2 rounded">1</div>
                        <div className="bg-gray-700 p-2 rounded">1</div>
                        <div className="bg-gray-700 p-2 rounded">1</div>
                        <div className="font-bold" style={{ color: "var(--icon-color)" }}>3</div>
                        <div className="bg-gray-700 p-2 rounded">1</div>
                        <div className="bg-gray-700 p-2 rounded">1</div>
                        <div className="bg-gray-700 p-2 rounded">1</div>
                        <div className=" font-bold" style={{ color: "var(--icon-color)" }}>3</div>
                        <div className="bg-gray-700 p-2 rounded">1</div>
                        <div className="bg-gray-700 p-2 rounded">D1</div>
                        <div className="bg-gray-700 p-2 rounded">0</div>
                        <div className="font-bold" style={{ color: "var(--icon-color)" }} >3</div>
                    </div>
                </div>

                {/* Scores Section */}
                <div className="absolute top-3/4 right-4 w-1/4 bg-[#3E3E3E] text-white rounded-lg p-4 shadow-md">
                    <IoIosSettings
                        className="absolute top-2 right-2 h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9"
                        style={{ color: "var(--icon-color)" }}
                    />
                    <h2 className="text-xl font-bold mb-5" style={{ color: "var(--icon-color)" }}>Scores</h2>
                    <ul>
                        <li className="flex justify-between">
                            <span style={{ color: "var(--icon-color)" }}>Chipot</span>
                            <span>50</span>
                        </li>
                        <li className="flex justify-between">
                            <span style={{ color: "var(--icon-color)" }}>Louise</span>
                            <span>400</span>
                        </li>
                        <li className="flex justify-between">
                            <span style={{ color: "var(--icon-color)" }}>Joueur4</span>
                            <span>200</span>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
