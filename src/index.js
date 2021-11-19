import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BooksProvider } from './context/books-context';
import { CartProvider } from './context/cart-context';

ReactDOM.render(
  <React.StrictMode>
    <BooksProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </BooksProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
