# Udacity MyReads Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the project's dependencies to start working with the code.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Routes

### `Home` Page

Displays the available books within the user's app shelves.

### `Search` Page

Displays a form that accepts a book title, then shows the available books within the database under the passed title.

### `Error 404` Page

Handles unwanted urls that the user requests.

## Backend Server

[BooksAPI.js](src/apis/BooksAPI.js) file is provided by Udacity within the starter code. It contains the required methods to perform some CRUD operations as listed below:

### `Get User's Books`

- Get user's books that are on app shelves.
- Method Signature:

  ```JavaScript
  getAll();
  ```

- Arguments: `void`
- Returns: an array of `book` objects which represents the books currently on the app shelves.

### `Update Book Shelf`

- Update specific `Book` Object to move it onto other shelf.
- Method Signature:

  ```JavaScript
  update(book, shelf);
  ```

- Arguments:

  - `book`: `Object` that contains at least an (id) attribute.
  - `shelf`: `String` The desired shelf title.

- Returns: `void`

### `Search for Specific Books`

- Search for specific book title.\
  **NOTE:** [SEARCH_TERMS.md](./SEARCH_TERMS.md) file contains the available book titles via this limited API.
- Method Signature:

  ```JavaScript
  search(query);
  ```

- Arguments:

  - `query`: `String` The desired book title to search for

- Returns: an array of `book` objects which represents the available books within the database under the passed title.
