import Navbar from "../components/Navbar";

export function Games() {
  return (
    <div className="flex flex-col w-full h-screen bg-[#1f1a25]">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <p>Teste</p>
      </main>
    </div>
  );
}
