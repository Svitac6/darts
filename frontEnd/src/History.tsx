import React, { useState, useEffect } from "react";
import ThemeSwitcher from './component/ThemeSwitcher';
import { useLocation } from "react-router-dom";
import axios from 'axios';

// Définir un type pour les utilisateurs
interface User {
    id: number;
    name: string;
    email: string;
}

export default function History() {
    const location = useLocation();

    // Fonction pour formater le chemin
    const formatPath = (path: string): string => {
        // Supprimer le slash initial
        const cleanedPath = path.replace(/^\//, "");
        // Mettre une majuscule au premier caractère et garder le reste en l'état
        return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);
    };

    const formattedPath = formatPath(location.pathname);

    // Déclarez un état avec le type `User[]`
    const [users, setUsers] = useState<User[]>([]);

    // Appeler l'API lors du chargement du composant
    useEffect(() => {
        axios.get<User[]>('http://localhost:3000/users') // URL du backend avec un type explicite
            .then((response) => {
                setUsers(response.data); // Mettre les données de l'API dans l'état
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des utilisateurs:', error);
            });
    }, []);

    return (
        <div className="">
            <ThemeSwitcher title={formattedPath} />
            <h1>Liste des utilisateurs</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}
