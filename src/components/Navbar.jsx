import React, { useContext } from "react";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";

import gogo from "../image/gg.jpg";
import { StateContext } from "../context/ContextProvider";
const Navbar = () => {
  const { activeMenu, setActiveMenu } = useContext(StateContext);

  return (
    <div className="   z-40 bg-white h-[70px] border-b border-gray-200 shadow-md w-full flex items-center justify-between">
      <div
        className="ml-3 text-2xl md:text-3xl cursor-pointer"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <AiOutlineMenu></AiOutlineMenu>
      </div>

      <div className="flex items-center ">
        <div className=" text-xl md:text-2xl mr-4 md:mr-8 cursor-pointer hover:text-[#610621]">
          <MdOutlinePayments></MdOutlinePayments>
        </div>
        <div className=" text-xl md:text-2xl mr-4 md:mr-8 cursor-pointer hover:text-[#610621]">
          <RiNotification3Line></RiNotification3Line>
        </div>
        <div className=" text-xl md:text-2xl mr-4 md:mr-8 cursor-pointer hover:text-[#610621]">
          <BsChatLeft></BsChatLeft>
        </div>
        <div className="flex mr-2 md:mr-8 items-center md:border border-gray-200 rounded-3xl shadow-sm md:pr-3 md:pl-3 p-1 cursor-pointer">
          <div className=" text-2xl h-10 w-10 overflow-hidden">
            <img
              src={gogo}
              className="h-full w-full rounded-full border border-gray-200"
            ></img>
          </div>
          <span className=" ml-4 hidden md:block text-gray-500 font-semibold">
            Hi,Md Yasin
          </span>
          <div className="text-xl hidden md:block ml-1 mt-1 text-gray-500">
            <AiOutlineDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
