import { React, useContext } from 'react';
import BookItemCard from './component/book-item-card';
import { BooksList } from './component/styled/book-item-card-styled';
import { BooksContext } from './context/books-context';

function App() {
  const { books, error, loading } = useContext(BooksContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Mobile Legend Time</h1>;
  }

  return (
    <div>
      <BooksList>
        {books.map((book) => (
          <BookItemCard
            book={book}
            onDescription={() => {
              console.log('Description');
            }}
            onAddToCart={() => {
              console.log('Added');
            }}
          />
        ))}
      </BooksList>
    </div>
  );
}

export default App;