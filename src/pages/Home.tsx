import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export function Home() {
  return (
    <div className="bg-home bg-cover flex flex-col w-full h-screen">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <strong className="text-6xl text-white font-poppins">
          World Cup Qatar 2022
        </strong>
      </main>
    </div>
  );
}
