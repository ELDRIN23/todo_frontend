import React from "react";
import "../styles/bottomMarquee.css";

const BottomMarque = () => {

  const message = `🔥 Welcome to EldrinTodo! Stay productive! 💡 Don’t forget to check off your tasks! The latest (version 1.2) is now available.`;

  return (
    <section className="marquee">
      <marquee>
        <h1>{message.repeat(100)}</h1>
      </marquee>
    </section>
  );
};

export default BottomMarque;





