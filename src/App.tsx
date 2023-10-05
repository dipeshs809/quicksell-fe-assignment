// import Popover from "components/dropdown";
import "./App.css";

import React from "react";
// import { SelectBox } from "components/selectBox";
// import { optionProps } from "components/selectBox/index.interface";
import Dashboard from "features/Dashboard";

// const options: optionProps[] = [
//   {
//     label: "Sass",
//     value: "Shashwat"
//   },
//   {
//     label: "Dipsy",
//     value: "Dipesh"
//   },
//   {
//     label: "Gandu",
//     value: "Ashutosh"
//   },
// ]

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
