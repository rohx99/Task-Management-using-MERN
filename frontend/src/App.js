import React from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import "./styles/App.css";

const App = () => {
  return (
    <div className="bg-[#21251f] text-white min-h-screen w-full p-5 sm:py-5 sm:px-10">
      <Navbar />
      <TaskList />
    </div>
  );
};

export default App;
