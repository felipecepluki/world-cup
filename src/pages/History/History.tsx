import Brazil1958 from "../../assets/brazil_1958.jpg";
import Brazil1962 from "../../assets/brazil_1962.jpg";
import Brazil1970 from "../../assets/brazil_1970.jpg";
import Brazil1994 from "../../assets/brazil_1994.jpg";
import Brazil2002 from "../../assets/brazil_2002.jpg";

export function History() {
  return (
    <div className="bg-[#1f1a25] flex sm:flex-col lg:flex-row h-screen sm:w-full lg:w-[150%] items-center">
      <div className="flex flex-col items-center">
        <p className="text-white text-lg uppercase">Brazil - 1958</p>
        <img src={Brazil1958} className="w-96 h-52" />
      </div>
      <p className="text-white sm:mt-16 sm:rotate-90">
        --------------------------
      </p>
      <div className="flex flex-col items-center">
        <p className="text-white text-lg uppercase">Brazil - 1962</p>
        <img src={Brazil1962} className="w-96 h-52" />
      </div>
      <p className="text-white">--------------------------</p>
      <div className="flex flex-col items-center">
        <p className="text-white text-lg uppercase">Brazil - 1970</p>
        <img src={Brazil1970} className="w-96 h-52" />
      </div>
      <p className="text-white">--------------------------</p>
      <div className="flex flex-col items-center">
        <p className="text-white text-lg uppercase">Brazil - 1994</p>
        <img src={Brazil1994} className="w-96 h-52" />
      </div>
      <p className="text-white">--------------------------</p>
      <div className="flex flex-col items-center">
        <p className="text-white text-lg uppercase">Brazil - 2002</p>
        <img src={Brazil2002} className="w-96 h-52" />
      </div>
    </div>
  );
}
