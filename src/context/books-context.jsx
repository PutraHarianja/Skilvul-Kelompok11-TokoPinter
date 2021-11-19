import { createContext, useEffect, useState } from "react";

function createNewBooks(books) {
    return {
        Name: books.Name,
        Author: books.Author,
        Rating: books.Rating,
        Reviews: books.Reviews,
        Price: books.Price,
        Year: books.Year,
        Genre: books.Genre,
        Url: books.Url
    };
}

const defaultValue = [];

export const BooksContext = createContext(defaultValue);


export function BooksProvider({ children }) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "http://localhost:3005/books";
        fetch(url)
            .then((response) => response.json())
            .then((responseBooks) => responseBooks.map(createNewBooks))
            .then((value) => setBooks(value))
            .catch(setError)
            .finally(() => setLoading(false));
    }, []); // componentDidMount

    const contextValue = {
        books: books,
        error: error,
        loading: loading
    };

    return (
        <BooksContext.Provider value={contextValue}>
            {children}
        </BooksContext.Provider>
    );
}