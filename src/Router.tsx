import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Players } from "./pages/Players";
import { Games } from "./pages/Games/Games";
import { History } from "./pages/History/History";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/games" element={<Games />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
