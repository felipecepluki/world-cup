import Navbar from "../components/Navbar";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";

import Qatar from "../assets/qa.png";
import Ecuador from "../assets/ec.png";
import Senegal from "../assets/sn.png";
import Netherlands from "../assets/nl.png";
import England from "../assets/gb-eng.png";
import Iran from "../assets/ir.png";
import Usa from "../assets/us.png";
import Wales from "../assets/gb-wls.png";
import Argentina from "../assets/ar.png";
import Arabia from "../assets/sa.png";
import Mexico from "../assets/mx.png";
import Poland from "../assets/pl.png";
import France from "../assets/fr.png";
import Australia from "../assets/au.png";
import Denmark from "../assets/dk.png";
import Tunisia from "../assets/tn.png";
import Spain from "../assets/es.png";
import CR from "../assets/cr.png";
import Germany from "../assets/de.png";
import Japan from "../assets/jp.png";
import Belgium from "../assets/be.png";
import Canada from "../assets/ca.png";
import Morroco from "../assets/ma.png";
import Croatia from "../assets/hr.png";
import Brazil from "../assets/br.png";
import Serbia from "../assets/rs.png";
import Switzerland from "../assets/ch.png";
import Cameroon from "../assets/cm.png";
import Portugal from "../assets/pt.png";
import Ghana from "../assets/gh.png";
import Uruguay from "../assets/uy.png";
import Korea from "../assets/kr.png";

export function Countries() {
  return (
    <div className="flex flex-col w-full overflow-hidden h-screen bg-gradient-to-br from-blue-500 to-neutral-400">
      <header className="">
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="h-screen w-full cursor-pointer flex items-center justify-center"
        >
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Qatar} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">QATAR</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Ecuador} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">ECUADOR</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Senegal} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">SENEGAL</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Netherlands} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">NETHERLANDS</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={England} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">ENGLAND</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Iran} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">IRAN</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Usa} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">USA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Wales} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">WALES</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Argentina} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">ARGENTINA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Arabia} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">SAUDI ARABIA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Mexico} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">MEXICO</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Poland} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">POLAND</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={France} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">FRANCE</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Australia} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">AUSTRALIA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Denmark} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">DENMARK</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Tunisia} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">TUNISIA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Spain} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">SPAIN</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={CR} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">COSTA RICA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Germany} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">GERMANY</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Japan} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">JAPAN</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Belgium} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">BELGIUM</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Canada} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">CANADA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Morroco} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">MORROCO</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Croatia} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">CROATIA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Brazil} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">BRAZIL</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Serbia} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">SERBIA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Switzerland} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">SWITZERLAND</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Cameroon} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">CAMEROON</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Portugal} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">PORTUGAL</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Ghana} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">GHANA</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Uruguay} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">URUGUAY</strong>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center">
            <img src={Korea} className="w-1/2 h-2/3" />
            <strong className="text-3xl mt-4 text-white">KOREA REPUBLIC</strong>
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}
