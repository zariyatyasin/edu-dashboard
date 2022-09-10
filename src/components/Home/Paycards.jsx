import React from "react";

const Paycards = () => {
  return (
    <div className="  ">
      <div className="  shadow-sm">
        <a
          href=""
          className="relative block overflow-hidden bg-center bg-no-repeat bg-cover  rounded-xl h-48  "
          style={{
            backgroundImage:
              "url(https://www.businessinsiderbd.com/media/imgAll/2020October/en/Bank-Asia-logo-2103211307-2104280631.jpg)",
          }}
        >
          <span className="absolute z-10 inline-flex items-center px-4 py-1 text-xs font-bold text-white bg-yellow-300 rounded-md  right-3 top-3">
            DUE
          </span>

          <div className="   w-full h-full text-white  bg-opacity-30">
            <div className=" absolute bottom-1 ml-2 ">
              <h5 className="text-xl font-bold">Last Date</h5>

              <p className="text-sm">23/9/2022</p>
            </div>
            <div className=" absolute bottom-2 py-1 right-3 bg-blue-500 px-2 rounded-xl  ">
              <h5 className=" text-sm font-bold">Pay Now</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Paycards;
