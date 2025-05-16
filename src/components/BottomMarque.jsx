const BottomMarque = () => {
  const message = `🔥 Welcome to EldrinTodo! Stay productive! 💡 Don’t forget to check off your tasks! The latest (version 1.2) is now available.`;

  return (
    <section className="marquee">
      <marquee>
        <h1>{message.repeat(50)}</h1>
      </marquee>
    </section>
  );
};

export default BottomMarque;

////////////////////////////////////////////
/////////////////////////////////////////////
// import React from "react";
// import "../styles/bottomMarquee.css";

// const BottomMarque = () => {
//   return (
//     <section className="marquee">
//       <marquee>
//         <h1>
//           🔥 Welcome to EldrinTodo! Stay productive! 💡 Don’t forget to check
//           off your tasks!. the latest (version 1.2) is now available 🔥 Welcome
//           to EldrinTodo! Stay productive! 💡 Don’t forget to check off your
//           tasks!. the latest (version 1.2) is now available 🔥 Welcome to
//           EldrinTodo! Stay productive! 💡 Don’t forget to check off your tasks!.
//           the latest (version 1.2) is now available 🔥 Welcome to EldrinTodo!
//           Stay productive! 💡 Don’t forget to check off your tasks!. 
//         </h1>
//       </marquee>
//     </section>
//   );
// };
// compare which one works better;////
//eldrin todo



