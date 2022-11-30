import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import Navbar from "../components/Navbar";

import Uruguay from "../assets/uy.png";
import Italy from "../assets/it.png";
import Germany from "../assets/de.png";
import Brazil from "../assets/br.png";
import England from "../assets/gb-eng.png";
import Argentina from "../assets/ar.png";
import France from "../assets/fr.png";
import Spain from "../assets/es.png";

export function History() {
  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-br from-blue-500 to-gray-500">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="h-full flex items-center justify-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="h-1/2 w-1/4 cursor-pointer"
        >
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Uruguay} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">URUGUAY</strong> - 1930
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Italy} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">ITALY</strong> - 1934
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Italy} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">ITALY</strong> - 1938
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Uruguay} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">URUGUAY</strong> - 1950
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Germany} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">GERMANY</strong> - 1954
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Brazil} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">BRAZIL</strong> - 1958
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Brazil} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">BRAZIL</strong> - 1962
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={England} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">ENGLAND</strong> - 1966
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Brazil} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">BRAZIL</strong> - 1970
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Germany} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">GERMANY</strong> - 1974
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Argentina} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">ARGENTINA</strong> - 1978
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Italy} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">ITALY</strong> - 1982
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Argentina} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">ARGENTINA</strong> - 1986
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Germany} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">GERMANY</strong> - 1990
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Brazil} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">BRAZIL</strong> - 1994
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={France} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">FRANCE</strong> - 1998
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Brazil} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">BRAZIL</strong> - 2002
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Italy} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">ITALY</strong> - 2006
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Spain} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">SPAIN</strong> - 2010
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={Germany} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">GERMANY</strong> - 2014
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col bg-white justify-center items-center shadow-xl border-2 rounded-lg border-white">
            <img src={France} className="w-full h-4/5 rounded-t-lg" />
            <div className="flex flex-row h-full w-full items-center text-center justify-center">
              <p className="text-gray-700 text-center text-2xl">
                <strong className="text-3xl">FRANCE</strong> - 2018
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}
