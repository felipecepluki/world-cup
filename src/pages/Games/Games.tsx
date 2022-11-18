import Brazil from "../../assets/brazil.jpg";
import Servia from "../../assets/servia.png";
import Switzerland from "../../assets/suica.webp";
import Cameroon from "../../assets/camaroes.png";
import GameButton from "../../components/GameButton";
import { Link } from "react-router-dom";

export function Games() {
  return (
    <div className="bg-[#1f1a25] flex sm:flex-col lg:flex-row justify-between pl-2 pr-2 items-center  w-full h-screen">
      <GameButton
        page="/auth"
        TeamOne={Brazil}
        NameTeamOne="Brasil"
        TeamTwo={Servia}
        NameTeamTwo="Sérvia"
        date="24/11"
        hour="16:00"
      />
      <GameButton
        page="/auth"
        TeamOne={Brazil}
        NameTeamOne="Brasil"
        TeamTwo={Switzerland}
        NameTeamTwo="Suíça"
        date="24/11"
        hour="13:00"
      />
      <GameButton
        page="/auth"
        TeamOne={Cameroon}
        NameTeamOne="Camarões"
        TeamTwo={Brazil}
        NameTeamTwo="Brasil"
        date="02/12"
        hour="16:00"
      />
    </div>
  );
}
