import React from "react";
import Task from "./Task";
import Header from "./Header";
import BottomMarque from "../components/BottomMarque";
import FetchTasks from "./FetchTasks";


function App() {
  return (
    <>
      <Header />
      <Task />
      <FetchTasks />
      <BottomMarque />
    </>
  );
}

export default App; 
