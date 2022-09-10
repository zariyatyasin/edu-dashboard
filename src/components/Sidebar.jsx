import React, { useContext } from "react";
import gogo from "../image/EDUlogo.png";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { LinkData } from "../data/Link";
import { StateContext } from "../context/ContextProvider";
const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useContext(StateContext);

  return (
    <div>
      <div
        className={` ${
          activeMenu ? "w-72" : "w-20"
        }   duration-300 h-screen relative border-r bg-white `}
      >
        <div
          className={`text-white bg-[#610621] rounded-full absolute right-[-20px] text-3xl top-[57px] z-50 md:hidden  cursor-pointer ${
            !activeMenu && "rotate-180"
          }`}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <IoIosArrowBack></IoIosArrowBack>
        </div>

        <div className={` ${activeMenu ? "w-72" : "w-20"}`}>
          <div className=" h-[70px] border-b border-gray-200">
            {activeMenu ? (
              <div
                className={`text-[#610621] text-3xl font-bold  p-2 flex items-center  ${
                  !activeMenu && "scale-0"
                }  `}
              >
                <img src={gogo} alt="EDU Logo" className="h-14 mr-3 "></img>
                East Delta
              </div>
            ) : (
              <div
                className={`text-[#610621] text-3xl font-bold text-center p-4 `}
              >
                EDU
              </div>
            )}
          </div>
          {/* <div>
            {" "}
            <div className="mt-10">
              {LinkData.map((item) => (
                <div
                  key={item.title}
                  className=" text-gray-400 m-3 mt-4 uppercase"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div> */}{" "}
          <ul className="pt-6">
            {LinkData.map((Menu, index) => (
              <li
                key={index}
                className={` w-full duration-100 text-gray-900  mt-4 uppercase flex items-center gap-x-4 p-4 cursor-pointer hover:bg-[#610621] hover:text-white font-semibold 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <div
                  className={` text-2xl ${
                    !activeMenu && " w-full flex items-center justify-center"
                  }`}
                >
                  <div className="">{Menu.icon}</div>
                </div>
                <span className={`${!activeMenu && "hidden"} `}>
                  {Menu.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
