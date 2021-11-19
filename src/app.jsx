import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookID from "./Pages/book_ID";
import Cart from "./Pages/cart";
import NotFound from "./Pages/notFound";
import Payment from "./Pages/payment";
import Books from "./Pages/books";
import Shipping from "./Pages/shipping";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <a href='/book'>book</a>
        </li>
        <li>
          <a href='/cart'>cart</a>
        </li>
        <li>
          <a href='/payment'>payment</a>
        </li>
        <li>
          <a href='/shipping'>shipping</a>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book/:bookID" element={<BookID />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/book" element={<Books />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
