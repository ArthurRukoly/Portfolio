import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectYoutube from "./pages/ProjectYoutube";
import GourmetGamble from "./pages/GourmetGamble";
import Reversi from "./pages/Reversi";
import Planner from "./pages/Planner";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="youtube-section-tracker" element={<ProjectYoutube />} />
        <Route path="gourmet-gamble" element={<GourmetGamble />} />
        <Route path="min-max" element={<Reversi />} />
        <Route path="planning-system" element={<Planner />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
