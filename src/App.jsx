import React, { useState } from 'react';
import Spinner from './Components/Spinner';
import Table from './Components/Table';
import Alert from './Components/Alert';
import './App.css';
import { compareValues } from './utils';

function App() {
  const [search, updateSearchText] = useState('');
  const [loading, updateLoading] = useState(false);
  const [books, updateBooks] = useState([]);
  const [error, updateErrorState] = useState(false);

  const updateSearch = async () => {
    try {
      updateLoading(true);
      const res = await fetch(
        `http://openlibrary.org/search.json?title=${search}`
      );
      const books = await res.json();
      updateBooks(books.docs.sort(compareValues('title')).slice(0, 20));
      updateErrorState(false);
    } catch (err) {
      console.error(error);
      updateErrorState(true);
      updateBooks([]);
    } finally {
      updateLoading(false);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand">Book Search</a>
      </nav>
      <div className="container mt-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title of the book (Ex: The lord of rings)"
            disabled={loading}
            onChange={(event) => updateSearchText(event.target.value)}
            aria-label="Amount (to the nearest dollar)"
          />
          <div className="input-group-append">
            <span
              className="input-group-text cursor-pointer"
              disabled={loading}
              onClick={updateSearch}
            >
              Search
            </span>
          </div>
        </div>
        {loading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        <div className="mt-5">{!loading && !error && <Table books={books} />}</div>
        <div className="mt-5">{!loading && error && <Alert />}</div>
      </div>
    </div>
  );
}

export default App;
