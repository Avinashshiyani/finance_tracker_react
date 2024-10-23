import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <>
      <div className="grid ">
        <Navbar />
        <Intro name="Avinash"/>
        <Dashboard />
      </div>
    </>
  );
};

export default App;
