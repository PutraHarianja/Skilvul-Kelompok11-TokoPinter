import { React, useContext } from "react";
import { Link } from "react-router-dom"
import BookItemCard from "../component/book-item-card";
import { BooksList } from "../component/styled/book-item-card-styled";
import { BooksContext } from "../context/books-context";
import { CartContext } from "../context/cart-context";




export function Home() {

    const { books, error, loading } = useContext(BooksContext);
    const { items, onAddToCart } = useContext(CartContext);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Server not found</h1>
    }

    return (
        <div>
            <h1>HOME</h1>
            <Link to="/cart">Cart</Link>
            <BooksList>
                {books.map((book) => (
                    <BookItemCard key={book.Id} book={book} onDescription={() => { console.log("Description") }} onAddToCart={() => onAddToCart(book)} />
                ))}
            </BooksList>
        </div >
    )
}
