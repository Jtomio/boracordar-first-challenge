import React from "react";
import Logo from "../assets/logo.svg";
import { BsDiscord } from "react-icons/bs";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20 max-w-[990px] mx-auto px-8 bg-[#0f0d13] border-b border-gray-400 ">
        <a
          href="https://www.rocketseat.com.br/"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={Logo} alt="Logo Rockeseat" />
        </a>
        <h1 className="hidden lg:flex text-2xl font-bold">
          <span>
            <a
              href="https://boracodar.dev/"
              className="hover:text-[#8257e5] ease-in-out duration-500"
              target={"_blank"}
              rel="noreferrer"
            >
              #BoraCodar
            </a>
          </span>{" "}
          - First Challenge
        </h1>
        <a
          href="https://discord.com/oauth2/authorize?client_id=949331074079662180&redirect_uri=https%3A%2F%2Fdiscord-service.rocketseat.dev%2Fsignin%2Fdynamic-callback&response_type=code&scope=identify+email+guilds.join&state=bora-codar"
          target={"_blank"}
          rel="noreferrer"
        >
          <button className="flex items-center md:font-bold p-2 sm:bg-[#29292E] hover:bg-[#8257e5]  ease-in-out duration-500 rounded uppercase">
            <BsDiscord className="mr-2 " size={20} />
            <span className="hidden sm:flex ">comunidade</span>
          </button>
        </a>
      </div>
    </>
  );
};
