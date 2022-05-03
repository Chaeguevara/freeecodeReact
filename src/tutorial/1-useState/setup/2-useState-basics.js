import React, { useState } from "react";

const UseStateBasics = () => {
  //console.log(useState("hello world"));
  //const value = useState(1)[0];
  //const handler = useState(1)[1];
  //console.log(value, handler);
  const [text, setText] = useState("hello world");
  const handleClick = () => {
    if (text === "This is else statement") {
      setText("This is wonderful");
    } else {
      setText("This is else statement");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
