interface Types {
  TeamOne: string;
  NameTeamOne: string;
  TeamTwo: string;
  NameTeamTwo: string;
  date: string;
  hour: string;
  action: () => string;
}

function GameButton({
  TeamOne,
  NameTeamOne,
  TeamTwo,
  NameTeamTwo,
  date,
  hour,
  action,
}: Types) {
  return (
    <button
      onClick={action}
      className="border-white divide-x-2 divide-slate-300 rounded-lg border-2 sm:w-full sm:h-1/4 lg:w-1/4 lg:h-1/4 flex flex-row"
    >
      <div className="flex flex-col h-full w-2/3">
        <div className="h-1/5 pl-6 flex justify-start items-center">
          <p className="text-slate-400">Copa do Mundo • Grupo G</p>
        </div>
        <div className="h-4/5 pl-6 flex flex-col justify-evenly">
          <div className="flex items-center">
            <img src={TeamOne} className="w-14 h-10 border-white border-2" />
            <p className="text-white ml-5">{NameTeamOne}</p>
          </div>
          <div className="flex items-center">
            <img src={TeamTwo} className="w-14 h-10 border-white border-2" />
            <p className="text-white ml-5">{NameTeamTwo}</p>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col items-center justify-center">
        <p className="text-white">{date}</p>
        <p className="text-white">{hour}</p>
      </div>
    </button>
  );
}

export default GameButton;
