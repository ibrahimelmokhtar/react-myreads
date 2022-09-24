import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "../css/SearchPage.css";
import * as BooksAPI from "../apis/BooksAPI";
import BooksGrid from './BooksGrid';

const SearchPage = () => {
    const [userInput, setUserInput] = useState("");
    const [searchBooks, setSearchBooks] = useState([]);
    const [homeBooks, setHomeBooks] = useState([]);

    // Update displayed books based on user input.
    useEffect(() => {
        const getSearchBooks = async () => {
            const result = await BooksAPI.search(userInput);
            // Handle empty results.
            if (result.error === "empty query") {
                setSearchBooks([]);
            } else {
                setSearchBooks(result);
                // updateShelves();
            };
        };

        const getHomeBooks = async () => {
            const result = await BooksAPI.getAll();
            // Handle empty results.
            if (result.error !== "empty query") {
                setHomeBooks(result);
            }
        };

        const updateShelves = () => {
            const updatedSearchBooks = searchBooks.map(searchBook => {
                searchBook.shelf = "none";
                homeBooks.forEach(homeBook => {
                    if (homeBook.id === searchBook.id) {
                        searchBook.shelf = homeBook.shelf;
                    }
                });

                return searchBook;
            });

            setSearchBooks(updatedSearchBooks);
        };

        // Query is NOT empty.
        if (userInput !== "") {
            getHomeBooks();
            getSearchBooks();
            updateShelves();
        }
        // eslint-disable-next-line
    }, [userInput]);

    const handleUserInputChange = (event) => {
        setUserInput(event.target.value);
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search" >Close</Link>

                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title"
                        autoFocus
                        value={userInput}
                        onChange={handleUserInputChange}
                    />
                </div>
            </div>

            <div className="search-books-results">
                <ol className="books-grid">
                    <BooksGrid books={searchBooks} />
                </ol>
            </div>
        </div>
    );
};

export default SearchPage;
