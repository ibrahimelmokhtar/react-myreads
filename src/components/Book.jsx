import "../css/Book.css";
import BookShelfChanger from './BookShelfChanger';
import * as BooksAPI from "../apis/BooksAPI";
import defaultBookCover from "../assets/images/default-book-cover.png";

const Book = ({ book }) => {
    const handleShelfChange = (shelf) => {
        BooksAPI.update(book, shelf);
    }

    return (
        <li className="book">
            <div className="book-top">
                <img className="book-cover" src={ book.imageLinks ? book.imageLinks.thumbnail : defaultBookCover } alt="Book Cover" />
                <BookShelfChanger shelf={book.shelf} changeShelf={handleShelfChange} />
            </div>

            <h3 className="book-title">{book.title}</h3>
            {book.authors && <h4 className="book-authors">{book.authors.join(", ")}</h4>}
        </li>
    );
};

export default Book;
