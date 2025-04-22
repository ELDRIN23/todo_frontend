import React, { useEffect, useState } from "react";
import "../styles/fetchTasks.css";
import axiosInstance from "../../axiosInstance";
import EditTodo from "./EditTodo";

// fetch and delete task
////////////////////////
const FetchTasks = () => {
  const [task, setTask] = useState([]);
  const [TodoEditModalIsOpen, setTodoEditModalIsOpen] = useState(false);
  const [EdiTtodo, setEditTodo] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  //fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axiosInstance.get("/fetch-all");
      console.log(res);
      setTask(res?.data);
    } catch (err) {
      console.log("err >>", err);
    }
  };

  //get single task
  const getTaskId = async (taskId) => {
    try {
      const res = await axiosInstance.get(`"/task/${taskId}`);
      
      setEditTodo(res.data);
      
    } catch (err) {
      console.log("err >>", err);
    }
  };
  
  const openTodoeditModal = async (taskId) => {
    await getTaskId(taskId);
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
                  <button
                    onClick={() => openTodoeditModal(item._id)}
                  >
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
