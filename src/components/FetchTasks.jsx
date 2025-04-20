import React, { useEffect, useState } from "react";
import "../styles/fetchTasks.css"
import axiosInstance from "../../axiosInstance";


const FetchTasks = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/fetch-all");
      console.log(res);
      setTask(res?.data);
    } catch (err) {
      console.log("err >>", err);
    }
  };

  return (
    <>
    <div className="task-container">
      <h1 className="task-heading">My Tasks</h1>
      <ul className="task-list">
        {task.map((item, index) => (
          <li key={index} className="task-item">
            <h2>{item?.task}</h2>
          </li>
        ))}
      </ul>
    </div>
  </>
  
  );
};

export default FetchTasks;
