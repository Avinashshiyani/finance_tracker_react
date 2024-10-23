import React from "react";
import CardDashboard from "./CardDashboard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 items-center gap-3 px-10 mt-[22px]">
      <CardDashboard amt={19680} />
      <CardDashboard title="Income" />
      <CardDashboard title="Expences" />
    </div>
  );
};

export default Dashboard;
