import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full py-[10px] px-10 bg-white">
      <div className="flex items-center space-x-2 ">
        <div>
          <img src={Logo} alt="" className="bg-white" />
        </div>
        <div className="">
          <p className="text-[18px] font-bold">financy</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-[30px] w-[30px] rounded-full bg-green-300"></div>
      </div>
    </div>
  );
};

export default Navbar;
