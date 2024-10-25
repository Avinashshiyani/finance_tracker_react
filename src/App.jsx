import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

const App = () => {
  return (
    <>
      <div className="grid ">
        <BrowserRouter>
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
