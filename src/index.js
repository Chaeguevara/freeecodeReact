import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//traditional JS syntax
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg" alt="" />
);

const Title = () => <h1>Atomic Habits</h1>;
const Author = () => <h1>James Clear</h1>;
//const Greeting = () => {
//return React.createElement("h1", {}, "hello world");
//};

ReactDOM.render(<BookList />, document.getElementById("root"));
