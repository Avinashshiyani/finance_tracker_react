import React, { useState } from "react";
import { cardDetailsOne } from "./Info";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

const CardOperation = ({ details = cardDetailsOne }) => {
  return (
    <Link to={"/operations"}>
      <div className="grid w-full  rounded-[12px] bg-white border-[1px]  border-gray-300 cursor-pointer">
        <div className="flex items-center p-[20px]">
          <div className="flex items-center justify-center">
            <div
              className={twMerge(
                "h-[48px] w-[48px] flex justify-center items-center rounded-[8px]",
                details.title == "Add expense" ? "bg-[#FEE4E2]" : "bg-[#DCFAE6]"
              )}
            >
              <img src={details.image} alt="Plus sign" />
            </div>
            <div className="grid pl-[12px]">
              <span className="text-[16px] font-semibold">{details.title}</span>
              <span className="text-[14px] ">{details.info}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardOperation;
