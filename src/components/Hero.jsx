import React from "react";
import Picture from "../assets/picture.svg";
import Play from "../assets/play.svg";
import Reverse from "../assets/reverse.svg";
import Forward from "../assets/forward.svg";
import Time from "../assets/time.svg";

export const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center mx-auto mt-7">
        <div className="w-[15rem] md:w-[32rem] sm:w-[25rem] bg-[#2a2141] rounded-md">
          <div className="lg:flex lg:justify-around py-5">
            <img
              src={Picture}
              alt="/"
              className="mx-auto w-[10rem] md:w-[10rem] sm:w-[15rem] rounded-md"
            />
            <h1 className="flex justify-center lg:inline lg:items-center md:font-bold">
              Acorda Devinho
            </h1>
            <p className="flex justify-center lg:inset-y-full lg:items-center mt-2 text-[#e1e1e6]">
              Rocketseat Band
            </p>
          </div>
          <div className="flex justify-around items-center p-4">
            <img
              src={Reverse}
              alt=""
              className="hover:rounded-full cursor-pointer"
            />
            <img
              src={Play}
              alt=""
              className="hover:rounded-full cursor-pointer"
            />
            <img
              src={Forward}
              alt=""
              className="hover:rounded-full cursor-pointer"
            />
          </div>
          <div className="flex justify-center mt-3">
            <img src={Time} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
