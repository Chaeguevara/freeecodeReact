import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  //useEffect(() => {
  //console.log("call useEffect");
  //if (value > 0) {
  //document.title = `New Messsages(${value})`;
  //} // hook can not be conditional
  //});
  console.log("render comp");
  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New Messsages(${value})`;
    }
  }, [value]);
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        {" "}
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
