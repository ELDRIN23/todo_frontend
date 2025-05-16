import React, { useEffect, useState } from "react";
import "../styles/fetchTasks.css";
import axiosInstance from "../../axiosInstance";
import EditTodo from "./EditTodo";
import "../styles/task.css";

const FetchTasks = () => {
  // add task
  const [input, setInput] = useState();
  const [task, setTask] = useState([]);
  //edit task
  const [TodoEditModalIsOpen, setTodoEditModalIsOpen] = useState(false);
  const [EdiTtodo, setEditTodo] = useState(null);

  console.log(EdiTtodo);

  useEffect(() => {
    fetchTasks();
  }, []);

  //create task
  const addTask = async (req,res) => {
    try {
      const res = await axiosInstance.post("/create", { task: input });
      // console.log(res);
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
  const deleteTask = async (taskId) => {
    try {
      const res = await axiosInstance.delete(`/deleteTask/${taskId}`);
      fetchTasks();
    } catch (err) {
      console.log("err >>", err);
    }
  };

  //update task
  const updateTask = async (taskId) => {
    try {
      const res = await axiosInstance.post(`/updateTask/${taskId}`);
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
              placeholder="Enter a task..."
              onChange={(event) => setInput(event.target.value)}
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
                  <button onClick={() => openTodoeditModal(item._id)}>
                    edit
                  </button>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </div>
      <EditTodo
        modalIsOpen={TodoEditModalIsOpen}
        closeModal={closeTodoeditModal}
        todoData={EdiTtodo}
        fetchTasks={fetchTasks}
      />
    </>
  );
};

export default FetchTasks;
