import React from "react";
import CardDashboard from "./CardDashboard";

const Dashboard = () => {
  return (
    <div className="grid items-center">
      <div className="grid items-center gap-3 px-10 mt-[22px] sm:grid-cols-2 md:grid-cols-3">
        <CardDashboard amt={19680} />
        <CardDashboard title="Income" />
        <CardDashboard title="Expences" />
      </div>
      <div className="grid  items-center gap-3 px-10 mt-[22px] sm:grid-cols-3">
        <CardOperation />
        <CardOperation details={cardDetailsTwo} />
      </div>
    </div>
  );
};

export default Dashboard;
