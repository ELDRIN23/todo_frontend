// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

// eslint-disable-next-line react/prop-types
const EditTodo = ({ modalIsOpen, closeModal, fetchTasks, todoData }) => {
  const [title, setTitle] = useState("");

  console.log(title);
  useEffect(() => {
    if (todoData) {
      console.log(todoData);
      // eslint-disable-next-line react/prop-types
      setTitle(todoData.tasks.title);
      console.log(todoData.tasks.title, "title");
    }
  }, [todoData]);

  const handleEditTodo = async (id) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/task/${id}`, {
        title,
      });

      console.log(response);
      closeModal();
      fetchTasks();
      toast.success("Task Update successfully !");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Edit task. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          width: "90%",
          maxWidth: "400px",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px",
          inset: "50% auto auto 50%",
          transform: "translate(-50%, -50%)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 1000,
        },
      }}
    >
      <h2 className="text-center text-lg sm:text-xl font-semibold mb-4 text-gray-800">
        Edit Todo Title
      </h2>
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={closeModal}
          className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:ring-2 focus:ring-gray-400"
        >
          Close
        </button>
        <button
          // eslint-disable-next-line react/prop-types
          onClick={() => handleEditTodo(todoData.tasks.id)}
          className="p-2 bg-purple-500 text-white rounded hover:bg-purple-600 focus:ring-2 focus:ring-purple-400"
        >
          Edit
        </button>
      </div>
    </Modal>
  );
};

export default EditTodo;
