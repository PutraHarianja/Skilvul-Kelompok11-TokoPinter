import { React, useContext } from "react";
import BookItemCard from "./component/book-item-card";
import { BooksContext } from "./context/books-context";




function App() {

  const { books, error, loading } = useContext(BooksContext);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Server Error</h1>
  }

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
