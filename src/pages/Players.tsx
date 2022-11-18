import players from "../api/players.json";

export function Players() {
  return (
    <div className="flex sm:flex-col lg:flex-row bg-[#1f1a25] sm:w-full lg:w-[500%] sm:h-full lg:h-screen">
      {players.map((player) => (
        <li className="flex w-full items-center justify-evenly" id={player.id}>
          <div className="bg-blue-500 sm:mt-5 gradient-effect w-[80%] flex items-center justify-center flex-col h-2/3">
            <div className="flex w-full justify-between h-1/6">
              <img src={player.symbol} className="pl-1 pt-1 h-24 w-24" />
              <div className="flex pt-1 pr-1 flex-col">
                <div className="flex items-center justify-center h-6 w-24 bg-white">
                  <p className="font-bold text-xl text-[#8B3532]">BRA</p>
                </div>
                <img
                  src={player.country}
                  className="sm:w-24 sm:h-16 lg:w-24 border-white border-2 lg:h-24"
                />
              </div>
            </div>
            <div className="w-full flex-col h-5/6 items-center justify-center flex">
              <img src={player.image} className="w-[70%] h-[85%]" />
              <div className="bg-white flex items-center justify-center w-[82%]">
                <p className="font-bold text-2xl uppercase text-[#8B3532]">
                  {player.name}
                </p>
              </div>
              <div className="bg-[#8B3532] p-1">
                <p className="font-bold text-sm uppercase text-white">
                  {player.data}
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
