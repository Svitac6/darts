import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Games from "./Games";
import Setting from "./Setting";
import Player from "./Player";
import Stats from "./Stats";
import History from "./History";
import Error403 from "./errors/Error403";
import Error404 from "./errors/Error404";
import Error500 from "./errors/Error500";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/player" element={<Player />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/history" element={<History />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="/500" element={<Error500 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
