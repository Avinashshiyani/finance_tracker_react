import React, { useState } from "react";
import CardDashboard from "./CardDashboard";
import CardOperation from "./CardOperation";
import { cardDetailsTwo } from "./Info";
import Transaction from "./Transaction";
import Intro from "./Intro";
import ShowExpence from "./ShowExpence";

const Dashboard = () => {
  return (
    <div className="grid items-center">
      <Intro name="Avinash" />
      <div className="grid items-center gap-3 px-10 mt-[22px] sm:grid-cols-2 md:grid-cols-3">
        <CardDashboard amt={19680} />
        <CardDashboard title="Income" />
        <CardDashboard title="Expences" amt={<ShowExpence />} />
      </div>
      <div className="grid  items-center gap-3 px-10 mt-[22px] sm:grid-cols-3">
        <CardOperation />
        <CardOperation details={cardDetailsTwo} />
      </div>
      <div className="">
        <Transaction />
      </div>
    </div>
  );
};

export default Dashboard;
