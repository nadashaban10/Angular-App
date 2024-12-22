# Book Library App

## Project Description

This is a simple Angular application that allows users to manage a list of books. The app fetches books from an API and provides the ability to add, delete, and search books.

## Features

1. **Fetch and Display Books**: Fetches a list of books from a provided API endpoint and displays them.
2. **Add a New Book**: Provides a form to add a new book with fields for title, author, genre, and published year.
3. **Delete a Book**: Allows users to delete a book from the list.
4. **Search Functionality**: Includes a search bar to filter the book list by title or author.

## Installation

Follow these steps to run the project locally:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    ng serve
    ```

4. Open the application in your browser:
    ```bash
    http://localhost:4200
    ```

## File Structure

The project structure is as follows:

- **src/app/components**: Contains the components for the app.
  - **book-list**: Displays the list of books and provides a delete button for each book.
  - **book-form**: A form for adding new books.
  - **search-bar**: A component for searching books by title or author.
  
- **src/app/services**:
  - **book.service.ts**: Service for fetching books from the API and managing book data.

- **src/app/app.module.ts**: The root module of the application, where all the components and services are imported.

- **assets**: Stores any static assets such as images, fonts, etc.
- 
- **angular.json**: Angular configuration file.

- **package.json**: Contains the project dependencies and scripts.

- **README.md**: This file with project details.

## API Endpoints

### 1. Fetch All Books
- **GET** `https://jsonplaceholder.typicode.com/posts`

Example Response:
```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "Book Title Example",
    "body": "Author Name Example"
  }
]
