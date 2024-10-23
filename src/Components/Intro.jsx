import React from "react";

const Intro = ({ name = "Pardon" }) => {
  return (
    <div className="font-semibold text-[30px] px-10 mt-[28px]">
      <p>Hello {name}!</p>
    </div>
  );
};

export default Intro;
