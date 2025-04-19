import { useState } from "react";
import "../styles/task.css";

function Task() {
  const [input, setInput] = useState();

  const button = () => {
    console.log("pressed");
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
