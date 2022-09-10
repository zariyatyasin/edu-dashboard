import React from "react";

import Notice from "./Notice";
import Paycards from "./Paycards";

const Home = () => {
  return (
    <div className=" p-7  ">
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className=" flex-1  ">
          <Paycards></Paycards>
        </div>
        <div className="flex-1 lg:flex-[2]">
          <Notice></Notice>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className=" text-red-600">Hello</div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
