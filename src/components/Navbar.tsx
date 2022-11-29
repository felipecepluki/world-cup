import { Link } from "react-router-dom";
import { Countries } from "../pages/Countries";

export default function Navbar() {
  return (
    <div className="flex items-center justify-evenly w-full p-2 flex-row">
      <Link to="/">
        <p className="text-white text-lg">Home</p>
      </Link>
      <Link to="/countries">
        <p className="text-white text-lg">Countries</p>
      </Link>
      <Link to="/history">
        <p className="text-white text-lg">History</p>
      </Link>
      <Link to="/games">
        <p className="text-white text-lg">Games</p>
      </Link>
    </div>
  );
}
