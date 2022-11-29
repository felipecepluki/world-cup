import countries from "../api/countries.json";

import Navbar from "../components/Navbar";

export function Countries() {
  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-br from-blue-500 to-neutral-400">
      <header className="">
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="flex items-center justify-center">
        <p>Teste</p>
      </main>
    </div>
  );
}
