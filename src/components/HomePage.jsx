import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/HomePage.css";
import * as BooksAPI from "../apis/BooksAPI";
import BookShelf from './BookShelf';

const HomePage = () => {
    const [books, setBooks] = useState([]);

    // Update books of the current user.
    useEffect(() => {
      const getAllBooks = async () => {
        const result = await BooksAPI.getAll();
        setBooks(result);
      };

      getAllBooks();
    });

    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <BookShelf title="Currently Reading" books={books.filter(book => book.shelf === "currentlyReading")} />

                <BookShelf title="Want to Read" books={books.filter(book => book.shelf === "wantToRead")} />

                <BookShelf title="Read" books={books.filter(book => book.shelf === "read")} />
            </div>

            <Link to="/search" className="open-search">Add a book</Link>
        </div>
    );
};

export default HomePage;
