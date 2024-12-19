import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Interface pour le contexte
interface ThemeContextType {
    theme: string; // Thème actuel
    setTheme: (theme: string) => void; // Fonction pour changer le thème
}

// Création du contexte
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Props pour le ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

// Implémentation du ThemeProvider
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>("themeRed"); // Thème par défaut

    // Récupérer le thème à partir de localStorage lors du premier rendu
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);

    // Sauvegarder le thème dans localStorage à chaque changement
    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
