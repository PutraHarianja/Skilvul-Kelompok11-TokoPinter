import { React, useContext } from "react";
import BookItemCard from "./component/book-item-card";
import { BooksContext } from "./context/books-context";




function App() {

  const { books } = useContext(BooksContext);


  return (
    <div>
      {books.map((book) => (
        <BookItemCard book={book} onDescription={() => { console.log("Description") }} onAddToCart={() => { console.log("Added") }} />
      ))
      }
    </div >
  )
}

export default App;
