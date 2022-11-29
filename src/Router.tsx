import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Countries } from "./pages/Countries";
import { Games } from "./pages/Games";
import { History } from "./pages/History";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/games" element={<Games />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
