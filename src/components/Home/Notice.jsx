import React from "react";
import "./home.css";
const Notice = () => {
  return (
    <div>
      <div className="flex flex-col notification  w-full h-48 rounded-lg notification-scroll overflow-scroll scroll mx-auto bg-white shadow-md border border-gray-200">
        <header className="px-5 py-2 border-b border-gray-100">
          <div className="font-semibold text-gray-800">Notice board</div>
        </header>
        <div className="w-full notification-scroll overflow-scroll scroll mx-auto bg-white ">
          <div className="overflow-x-auto p-3">
            <div className="flex items-center px-5 py-2">
              <div className="h-3 w-3 bg-purple-500 rounded-full mr-2"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Text of the printing and typesetting{" "}
              </p>
            </div>
            <div className="flex items-center px-5 py-2">
              <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <div className="flex items-center px-5 py-2">
              <div className="h-3 w-3 bg-purple-500 rounded-full mr-2"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry text of typesetting{" "}
              </p>
            </div>
            <div className="flex items-center px-5 py-2">
              <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <input
              type="hidden"
              className="border border-black bg-gray-50"
              x-model="selected"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
