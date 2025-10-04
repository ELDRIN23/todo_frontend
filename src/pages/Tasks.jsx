import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, task: "" });
  const [taskToDelete, setTaskToDelete] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");
    try {
      const headers = {};
      if (token) headers.Authorization = `Bearer ${token}`;

      const res = await axiosInstance.get("tasks/fetch-all", { headers });
      setTasks(res?.data || []);
    } catch (err) {
      console.error("Fetch error >>", err);
    }
  };

  const addTask = async () => {
    if (!input.trim()) return;
    const token = localStorage.getItem("token");
    // console.log(token);
    try {
      const headers = {};
      if (token) headers.Authorization = `Bearer ${token}`;

      await axiosInstance.post(
        "/tasks/create",
        { task: input.trim() },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInput("");
      fetchTasks();
    } catch (err) {
      console.error("Add error >>", err);
    }
  };

  const openEditModal = (id, task) => {
    setCurrentTask({ id, task });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentTask({ id: null, task: "" });
  };

  const updateTask = async () => {
    if (!currentTask.task.trim()) return;
    const token = localStorage.getItem("token");

    try {
      const headers = {};
      if (token) headers.Authorization = `Bearer ${token}`;

      await axiosInstance.post(
        `tasks/updateTask/${currentTask.id}`,
        {
          task: currentTask.task.trim(),
        },
        { headers }
      );
      fetchTasks();
      closeEditModal();
    } catch (err) {
      console.error("Update error >>", err);
    }
  };

  const openDeleteModal = (task) => {
    setTaskToDelete(task);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  };

  const deleteTask = async () => {
    const token = localStorage.getItem("token");

    if (!taskToDelete) return;
    try {
      const headers = {};
      if (token) headers.Authorization = `Bearer ${token}`;

      await axiosInstance.delete(`tasks/deleteTask/${taskToDelete._id}`, {
        headers,
      });
      fetchTasks();
      closeDeleteModal();
    } catch (err) {
      console.error("Delete error >>", err);
    }
  };

  const toggleStatus = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const headers = {};
      if (token) headers.Authorization = `Bearer ${token}`;

      await axiosInstance.post(`tasks/toggleStatus/${id}`, {}, { headers });
      fetchTasks();
    } catch (err) {
      console.error("Toggle status error >>", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-24 px-4 sm:px-6 md:px-8">
      {/* Input */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Enter a task..."
          className="input input-bordered w-full flex-1 text-white placeholder-white text-lg bg-gray-700/50"
        />
        <button className="btn btn-primary w-full sm:w-auto" onClick={addTask}>
          Add
        </button>
      </div>

      {/* Task list */}
      <h1 className="text-2xl font-bold mb-4 text-white">My Tasks</h1>
      <ul className="flex flex-col gap-6 w-full">
        {tasks.map((item) => (
          <li
            key={item._id}
            className="relative flex flex-col justify-start items-start p-6 bg-gray-800/70 rounded-xl break-words border border-gray-700 shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
          >
            {/* Status badge */}
            <div className="absolute top-0 right-0 -mt-2 -mr-2">
              <div
                className={`${
                  item.status === "completed"
                    ? "bg-gradient-to-br from-green-400 via-lime-400 to-green-500"
                    : "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500"
                } text-black font-bold px-3 py-1 rounded-tl-lg rounded-br-lg shadow-lg flex items-center justify-center`}
              >
                {item.status === "completed" ? "Completed" : "Pending"}
              </div>
            </div>

            {/* Task text */}
            <div className="flex-1 min-w-0 w-full mt-2">
              <p
                className={`font-medium text-left break-words whitespace-pre-wrap ${
                  item.status === "completed"
                    ? "line-through text-gray-400"
                    : "text-white"
                }`}
              >
                {item.task}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-4 w-full items-center">
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  className="btn btn-sm btn-error flex-1"
                  onClick={() => openDeleteModal(item)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-sm btn-accent flex-1"
                  onClick={() => openEditModal(item._id, item.task)}
                >
                  Edit
                </button>
              </div>

              <label className="flex items-center gap-2 ml-auto mt-2 sm:mt-0">
                <span className="text-sm font-semibold text-gray-200">
                  Toggle Status
                </span>
                <input
                  type="checkbox"
                  checked={item.status === "completed"}
                  className="toggle toggle-success transition-transform duration-300 ease-in-out"
                  onChange={() => toggleStatus(item._id)}
                />
              </label>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800/20 p-6 sm:p-8 rounded-xl w-full max-w-md shadow-2xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Edit Task
            </h2>
            <input
              type="text"
              value={currentTask.task}
              onChange={(e) =>
                setCurrentTask({ ...currentTask, task: e.target.value })
              }
              className="input input-bordered w-full text-white placeholder-gray-300 mb-4 bg-gray-700/20"
            />
            <div className="flex justify-end gap-2 flex-wrap">
              <button
                className="btn btn-sm btn-secondary flex-1 sm:flex-auto"
                onClick={closeEditModal}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm btn-primary flex-1 sm:flex-auto"
                onClick={updateTask}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800/20 p-6 sm:p-8 rounded-xl w-full max-w-md shadow-2xl text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Delete Task
            </h2>
            <p className="text-gray-200 mb-6">
              Are you sure you want to delete this task?
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                className="btn btn-sm btn-secondary flex-1 sm:flex-auto"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm btn-error flex-1 sm:flex-auto"
                onClick={deleteTask}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
