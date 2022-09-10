import "./App.css";

import { BsChatLeftText } from "react-icons/bs";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { useContext, useState } from "react";
import { StateContext } from "./context/ContextProvider";
import Home from "./components/Home/Home";
import Attendance from "./components/Attendance";
import Payment from "./components/Payment";

function App() {
  const { activeMenu, setActiveMenu } = useContext(StateContext);
  return (
    <div className="">
      <BrowserRouter>
        <div className=" flex ">
          <div className=" fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <IconButton>
              <div
                className="text-white p-4 rounded-full "
                style={{ background: "#610621" }}
              >
                <BsChatLeftText></BsChatLeftText>
              </div>
            </IconButton>
          </div>

          <div
            className={`${
              activeMenu ? "block fixed md:relative z-50" : "hidden"
            } sm:block`}
          >
            <Sidebar></Sidebar>
          </div>
          <div className="w-full">
            <Navbar></Navbar>

            <div>
              <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/attendance" element={<Attendance></Attendance>} />
                <Route path="/payment" element={<Payment></Payment>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
