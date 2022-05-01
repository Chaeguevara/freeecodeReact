import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book";
//CSS
import "./index.css";

import { books } from "./books";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

//other syntax.
const Book1 = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
//const Greeting = () => {
//return React.createElement("h1", {}, "hello world");
//};

ReactDOM.render(<BookList />, document.getElementById("root"));
