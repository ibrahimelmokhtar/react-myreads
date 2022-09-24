import Book from "./Book";
import "../css/BooksGrid.css";

const BooksGrid = ({ books }) => {
    return (
        books.map(book => {
            return <Book key={book.id} book={book} />
        })
    );
};

export default BooksGrid;
