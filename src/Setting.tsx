import React, { useState, useEffect } from "react";
import ThemeSwitcher from './component/ThemeSwitcher';
import { useLocation } from "react-router-dom";

export default function Setting() {
    
    const location = useLocation();

    const formatPath = (path: string) => {
        // Supprimer le slash initial
        const cleanedPath = path.replace(/^\//, "");
        // Mettre une majuscule au premier caractère et garder le reste en l'état
        return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
    };

    const formattedPath = formatPath(location.pathname); 
   

    return (
        <div className="h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
            <ThemeSwitcher title={formattedPath} />

            {/* Contenu centré */}
            
        </div>
    );
}
