import React from "react";

const Error404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-900 text-white text-center p-4">
      <h1 className="text-6xl font-bold text-yellow-600">404 - Page introuvable</h1>
      <p className="text-xl  mt-4">
        Oups ! Cette page est hors du jeu 🎯. Il semble que vous visiez une
        cible qui n'existe pas.
      </p>
      <img
        src="https://media.giphy.com/media/20k1punZ5bpmM/giphy.gif"
       
        alt="404 Not Found"
        className="w-64 h-64 mt-6"
      />
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default Error404;
