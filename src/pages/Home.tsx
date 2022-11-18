import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="bg-home bg-cover flex w-screen h-screen">
      <div className="flex flex-col">
        <Link to="/">
          <p className="text-white">Home</p>
        </Link>
        <Link to="/players">
          <p className="text-white">Players</p>
        </Link>
        <Link to="/history">
          <p className="text-white">History</p>
        </Link>
        <Link to="/games">
          <p className="text-white">Games</p>
        </Link>
      </div>
    </div>
  );
}
