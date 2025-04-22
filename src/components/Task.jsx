import { useContext, useState } from "react";
import "../styles/task.css";
import axiosInstance from "../../axiosInstance";



function Task() {
  const [input, setInput] = useState();


  const button = async () => {
    try {
      const res = await axiosInstance.post("/create", { task: input });
      console.log(res);
      FetchTasks()
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
      <button className="btn" onClick={button}>
        add
      </button>
    </div>
  </center>
</section>
    </>
  );
}

export default Task;
