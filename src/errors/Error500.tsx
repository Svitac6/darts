import React from "react";

const Error500: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-4">
      <h1 className="text-6xl font-bold text-purple-600">500 - Erreur serveur</h1>
      <p className="text-xl  mt-4">
        Une fléchette a percé le serveur 🎯 ! Quelque chose s'est mal passé de
        notre côté. Veuillez réessayer plus tard.
      </p>
      <img
        src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
        alt="500 Server Error"
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

export default Error500;
