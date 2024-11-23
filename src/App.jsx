import React from "react";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import OperationModel from "./Components/OperationModel";

const App = () => {
  return (
    <>
      <div className="grid ">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/registration"
              element={<Registration />}
            ></Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/operations" element={<OperationModel />}></Route> 
            <Route exact path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/registration"
              element={<Registration />}
            ></Route>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
