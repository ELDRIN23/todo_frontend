import React, { useEffect, useState } from "react";
import "../styles/fetchTasks.css";
import axiosInstance from "../../axiosInstance";
import "../styles/task.css";

const FetchTasks = () => {
  // add task
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  //edit task

  useEffect(() => {
    fetchTasks();
  }, []);


  //add task
  const addTask = async (req, res) => {
    try {
      const res = await axiosInstance.post("/create", { task: input });
      // console.log(res);
      setInput("");
      fetchTasks();
    } catch (err) {
      console.log("err >>", err);
    }
  };


  //fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/fetch-all");
      // console.log(res);
      setTask(res?.data);
    } catch (err) {
      console.log("err >>", err);
    }
  };


  //get single task
  const getTaskId = async (id) => {
    try {
      const res = await axiosInstance.get(`/task/${id}`);

      setEditTodo(res.data);
    } catch (err) {
      console.log("err >>", err);
    }
  };

  const openTodoeditModal = async (id) => {
    await getTaskId(id);
    setTodoEditModalIsOpen(true);
  };

  const closeTodoeditModal = () => {
    setTodoEditModalIsOpen(false);
    setEditTodo(null); // clear selcted data
  };


  //delete task
  const deleteTask = async (id) => {
    try {
      const res = await axiosInstance.delete(`/deleteTask/${id}`);
      fetchTasks();
      alert("delete task, are you sure!");
    } catch (err) {
      console.log("err >>", err);
    }
  };


  //update task
  const updateTask = async (id) => {
    try {
      const res = await axiosInstance.post(`/updateTask/${id}`);
    } catch (err) {
      console.log("err >>", err);
    }
  };


  return (
    <>
      <section className="container">
        <center>
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Enter a task..."
            />
            <button className="btn" onClick={addTask}>
              add
            </button>
          </div>
        </center>
      </section>
      <div className="task-container">
        <h1 className="task-heading">My Tasks</h1>
        <ul className="task-list">
          {task.map((item, index) => (
            <li key={index} className="task-item">
              <h2>{item?.task}</h2>
              <section className="buttons">
                <div className="deleteButton">
                  <button
                    onClick={() => {
                      deleteTask(item._id);
                    }}
                  >
                    delete
                  </button>
                </div>
                <div className="editButton">
                  <button onClick={() => updateTask(item._id)}>edit</button>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FetchTasks;
