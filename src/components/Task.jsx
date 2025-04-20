import { useState } from "react";
import "../styles/task.css";
import axiosInstance from "../../axiosInstance";


function Task() {
  const [input, setInput] = useState();

  const button = async () => {
    try {
      const res = await axiosInstance.post("/create", { task: input });
      console.log(res);
    } catch (err) {
      console.log("err >>", err);
    }
  };

  
  
  return (
    <>
      <section className="container">
        <center>
          <input
            type="text"
            placeholder="enter a task..."
            onChange={(Event) => {
              setInput(Event.target.value);
            }}
          />
          <button className="btn" onClick={button}>
            add
          </button>
        </center>
      </section>

    </>
  );
}

export default Task;
