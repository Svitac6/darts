import React from "react";

const Error403: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-gray-900 text-white p-4">
      <h1 className="text-6xl font-bold text-red-600">403 - Accès refusé</h1>
      <p className="text-xl  t-4">
        Vous avez manqué la cible 🎯 ! Il semble que vous n'ayez pas les droits petit chenapan
        pour accéder à cette page.
      </p>
      <img
        src="https://media.giphy.com/media/mXzXhw1jwIDPVGAfQ8/giphy.gif"
        
        alt="403 Access Denied"
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

export default Error403;
