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
```

## Notes for Me

### Functionalities Implemented:

#### Fetching Data with HttpClient:
- **What?** Used Angular's HttpClient to fetch data from the API.
- **Why?** To load the initial list of books from an external source.
- **React Equivalent:** Similar to using `fetch()` or `axios` in a `useEffect` hook.

#### Component Lifecycle (ngOnInit):
- **What?** Implemented the `ngOnInit` lifecycle hook to fetch books when the component initializes.
- **Why?** To ensure the data is loaded before the component is rendered.
- **React Equivalent:** Similar to using `useEffect(() => {}, [])` for initial API calls.

#### Two-Way Data Binding:
- **What?** Used Angular's `[(ngModel)]` to bind form inputs to the `newBook` object.
- **Why?** To simplify managing form data.
- **React Equivalent:** Similar to managing state for form fields with `useState` and `onChange` handlers.

#### Filtering Books (Getter Function):
- **What?** Created a `filteredBooks` getter to dynamically filter books based on the search query.
- **Why?** To provide a real-time search experience.
- **React Equivalent:** Similar to deriving filtered data in the render method or using a computed state in a functional component.

#### Adding a Book:
- **What?** Created a method to validate and add books locally. It also saves the new book to `localStorage`.
- **Why?** To allow users to add their own books without a backend.
- **React Equivalent:** Similar to updating the state with a new item and persisting it to `localStorage`.

#### Deleting a Book:
- **What?** Implemented a method to remove a book from the list and update `localStorage`.
- **Why?** To let users manage their book list.
- **React Equivalent:** Similar to filtering out an item from an array in state and saving the updated array to `localStorage`.

#### Local Storage Management:
- **What?** Used `localStorage` to persist user-added books.
- **Why?** To ensure the data remains even after a page refresh.
- **React Equivalent:** Same as using `localStorage.setItem` and `localStorage.getItem` in React.

#### Conditional Rendering (showForm and showMsg):
- **What?** Used variables to toggle the visibility of the form and display a success message.
- **Why?** To provide feedback and simplify UI interactions.
- **React Equivalent:** Similar to managing `showForm` or `showMsg` state and conditionally rendering JSX.

### Why Angular Features Over React?
- **Service Layer (BooksService):** Angular's dependency injection makes managing API services easy and modular.
- **Template Syntax:** Angular's built-in directives (e.g., `*ngIf`, `*ngFor`) simplify conditional rendering and iteration.
- **Two-Way Binding:** Angular's `[(ngModel)]` reduces boilerplate for form handling compared to manually managing `onChange` in React.

