import { React, useContext } from "react";
import BookItemCard from "./component/book-item-card";
import { BooksList } from "./component/styled/book-item-card-styled";
import { BooksContext } from "./context/books-context";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Book_ID from "./Pages/book_ID";
import Cart from "./Pages/cart";
import Not_Found from "./Pages/notFound";
import Payment from "./Pages/payment";
import Books from "./Pages/books";
import Shipping from "./Pages/shipping";

function App() {

  const { books, error, loading } = useContext(BooksContext);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Mobile Legend Time</h1>
  }

  return (
    <div>
      <BooksList>
        {books.map((book) => (
          <BookItemCard book={book} onDescription={() => { console.log("Description") }} onAddToCart={() => { console.log("Added") }} />
        ))}
      </BooksList>
    </div >
  )
}

export default function App2() {
  return (
    <Router>

      <Routes>
        <Route exact path="/app" element={<App />} />
        <Route exact path="/book/book_ID" element={<Book_ID />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/404" element={<Not_Found />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/book" element={<Books />} />
      </Routes>
    </Router>
  );
}
