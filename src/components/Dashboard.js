import React from "react";
import ModuleToggle from "./ModuleToggle";
import Tracker from "./Tracker";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Fitness Dashboard</h1>
      <ModuleToggle />
      <Tracker />
    </div>
  );
};

export default Dashboard;