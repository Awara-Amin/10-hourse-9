import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image> </Image>
      <Title />
      <Author />
      {/* This is a listCar  */}
    </article>
  );
};

// const Image =() => {
// return <img
//   src='https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg' alt='' />
// }

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg"
    alt=""
  />
);

const Title = () => <h1>I love you to the Moon and Back</h1>;
const Author = () => <h1> Amelia ...</h1>;

ReactDom.render(<BookList />, document.getElementById("root"));
