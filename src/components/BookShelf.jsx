import "../css/BookShelf.css";
import BooksGrid from "./BooksGrid";

const BookShelf = ({ title, books }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <BooksGrid books={books} />
                </ol>
            </div>
        </div>
    );
};

export default BookShelf;
