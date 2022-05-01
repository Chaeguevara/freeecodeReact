import React from "react";

const Book = (props) => {
  console.log(props);

  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(props.author);
      }}
    >
      <img src={props.img} alt="" />
      <h1 onClick={() => console.log(props.title)}>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
    </article>
  );
};

export default Book;
