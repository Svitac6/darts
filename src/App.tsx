import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Games from "./Games";
import Setting  from "./Setting";
import Player from "./Player";
import Stats from "./Stats";
import History from "./History";



export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games/>} />
        <Route path="/settings" element={<Setting/>}/>
        <Route path="/player" element={<Player/>}/>
        <Route path="/stats" element={<Stats/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
      
    
    </BrowserRouter>
  );
}