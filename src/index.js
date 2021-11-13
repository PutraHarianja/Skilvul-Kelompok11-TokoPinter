import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BooksProvider } from './context/books-context';

ReactDOM.render(
  <React.StrictMode>
    <BooksProvider>
      <App />
    </BooksProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
