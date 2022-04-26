import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";
//setup vars
const books = [
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
  },
  {
    author: "Brené Brown",
    title:
      "Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience",
    img: "https://images-na.ssl-images-amazon.com/images/I/81MgglteUFL._AC_UL381_SR381,381_.jpg",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book img={book.img} title={book.title} author={book.author} />;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
    </article>
  );
};

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
