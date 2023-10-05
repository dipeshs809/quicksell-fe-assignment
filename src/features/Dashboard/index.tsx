// import { useAppDispatch, useAppSelector } from "app/hooks";
// import {
//   decrementCounter,
//   incrementCounter,
//   resetCounter,
//   selectCounter,
// } from "app/slice/exampleSlice";
import Popover from "components/dropdown";
import { Navigation } from "components/navigation";
import React from "react";
import DashBoardContainer from "./dashboardContainer";
const Dashboard = () => {
  return (
    <div>
      <Navigation>
        <Popover title="Display">Childern</Popover>
      </Navigation>
      <DashBoardContainer />
    </div>
  );
};

export default Dashboard;
