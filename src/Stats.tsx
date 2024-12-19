import React, { useState, useEffect } from "react";
import ThemeSwitcher from './component/ThemeSwitcher';
import { useLocation } from "react-router-dom";

export default function Stats() {
    
    const location = useLocation();

    const formatPath = (path: string) => {
        // Supprimer le slash initial
        const cleanedPath = path.replace(/^\//, "");
        // Mettre une majuscule au premier caractère et garder le reste en l'état
        return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
    };

    const formattedPath = formatPath(location.pathname); 
   

    return (
        <div className="min-h-screen  flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
            <ThemeSwitcher title={formattedPath} />
            <h1 className="text-xl" >test test </h1>
            <h1>test test </h1>
            

            <h1 className="text-xl" >test test test</h1>
            <h1 className="text-xl" >test test test</h1>

            {/* Contenu centré */}
            
        </div>
    );
}
