import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Games from "./Games";
import Setting from "./Setting";
import Players from "./Players";
import Stats from "./Stats";
import History from "./History";
import Error403 from "./errors/Error403";
import Error404 from "./errors/Error404";
import Error500 from "./errors/Error500";
import Layout from "./component/Layout";
import X01Games from "./games/X01Games";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/player" element={<Players />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/history" element={<History />} />
          <Route path="/X01Games" element={<X01Games />} />
          <Route path="/403" element={<Error403 />} />
          <Route path="/500" element={<Error500 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
