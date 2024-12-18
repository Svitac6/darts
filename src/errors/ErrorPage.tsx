import React from "react";

interface ErrorPageProps {
  code: number;
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ code, message }) => {
  // GIF ou mème de Britney Spears pour chaque type d'erreur
  const gifUrl = (() => {
    switch (code) {
      case 403:
      case 404:
      case 500:
      default:
        return "https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif";
    }
  })();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-6xl font-bold text-pink-600">{code} - Oops!</h1>
      <p className="text-xl  mt-4">{message}</p>
      <img
        src={gifUrl}
        alt="Oops Britney Spears"
        className="w-64 h-64 mt-6 rounded-md shadow-lg"
      />
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 px-6 py-2 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-500 transition"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default ErrorPage;
