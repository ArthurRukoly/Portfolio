import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProjectYoutube from "./pages/ProjectYoutube";
import GourmetGamble from "./pages/GourmetGamble";
import Reversi from "./pages/Reversi";
import Planner from "./pages/Planner";

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="youtube-section-tracker" element={<ProjectYoutube />} />
        <Route path="gourmet-gamble" element={<GourmetGamble />} />
        <Route path="min-max" element={<Reversi />} />
        <Route path="planning-system" element={<Planner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
