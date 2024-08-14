import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

{
  /* Pages */
}
import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import Leaderboard from "./pages/Leaderboard";
import Play from "./pages/Play";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
