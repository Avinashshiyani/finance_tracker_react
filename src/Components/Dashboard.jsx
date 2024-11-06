import React, { useState } from "react";
import CardDashboard from "./CardDashboard";
import CardOperation from "./CardOperation";
import { cardDetailsTwo } from "./Info";
import Transaction from "./Transaction";
import Intro from "./Intro";

const Dashboard = () => {
  const getLocaleStorageData = () => {
    const localData = localStorage.getItem("addExpence");
    return localData ? JSON.parse(localData) : [];
  };

  const [expence, setExpence] = useState(getLocaleStorageData);
  const totalAmt = expence
    .map((item) => item.amount)
    .reduce((pre, arv) => pre + arv, 0);

  console.log(totalAmt);

  return (
    <div className="grid items-center">
      <Intro name="Avinash" />
      <div className="grid items-center gap-3 px-10 mt-[22px] sm:grid-cols-2 md:grid-cols-3">
        <CardDashboard amt={19680} />
        <CardDashboard title="Income" color="text-green-600" />
        <CardDashboard amt={totalAmt} title="Expences" color="text-red-600" />
      </div>
      <div className="grid items-center gap-3 px-10 mt-[22px] sm:grid-cols-3">
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
