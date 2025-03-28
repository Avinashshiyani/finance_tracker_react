import React from "react";
import { twMerge } from "tailwind-merge";

const CardDashboard = ({ title = "Balance", amt = 10500, color }) => {
  return (
    <div className="grid w-full  rounded-[12px] bg-white border-[1px]  border-gray-300">
      <div className="grid items-center p-[24px]">
        <span className="text-[14px] ">
          <p>{title}</p>
        </span>
        <span className={twMerge("font-semibold text-[36px]")}>
          <p>${amt}</p>
        </span>
      </div>
    </div>
  );
};

export default CardDashboard;
