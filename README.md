# Book Library App - [visit the app](https://angular-app-orpin.vercel.app/)

### Resources 
(https://www.tektutorialshub.com/angular-tutorial/#google_vignette)

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

- **src/app/**: Contains the components for the app.
- **app**: The parent component cotain the whole components
  - **book-list**: Displays the list of books and provides a delete button for each book.
  - **book-form**: A form for adding new books.
  - **search**: A component for searching books by title or author.
  - **header**: Header contain title
  
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

# Angular Basics (Notes For Me)

## Lifecycle Hooks: `ngOnInit`
### What it is:
`ngOnInit` is a lifecycle hook in Angular. It's part of the Angular Component lifecycle, similar to `componentDidMount` in React.

### When it runs:
It's called once the component has been initialized and the bindings (inputs/outputs) are ready.

### Use case:
Use it to initialize data, fetch data from APIs, or set up any logic when the component is loaded.

---

## Modules
### What they are:
Modules in Angular are a way to group components, services, directives, and pipes logically. Think of them like `index.js` where you organize imports and exports.

### Why they're used:
They help manage the application’s structure and lazy loading. The root module is `AppModule`.

---

## Observables
### What they are:
Observables are part of **RxJS**, which Angular uses for handling asynchronous data streams (like fetching data from APIs). They’re similar to Promises in JavaScript but more powerful, as they allow multiple values over time.

### How to use:
Subscribe to an observable to listen for emitted values.

---

## Directives
### What they are:
Directives are Angular features that let you modify the DOM. Think of them like attributes in HTML or JSX in React.

- **Structural directives:** Modify the structure of the DOM (e.g., `*ngIf`, `*ngFor`).
- **Attribute directives:** Modify the appearance/behavior of elements (e.g., `ngClass`, `ngStyle`).

---

## Access Modifiers: `private` in Functions or Methods
### What it is:
Angular uses **TypeScript**, which allows specifying access modifiers (`private`, `public`, `protected`) for properties and methods.

- **`private`:** The property/method can only be accessed within the class.
- **`public`:** The property/method is accessible anywhere (default).
- **`protected`:** The property/method is accessible within the class and its subclasses.

---

## Two-Way Data Binding
### What it is:
Two-way data binding allows automatic synchronization of data between the component (TypeScript) and the view (HTML). Think of it as the combination of `useState` in React with controlled inputs.

### How it works:
Use `[(ngModel)]` for two-way binding. It requires importing the `FormsModule`.

---

## RxJS
### What it is:
RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables. It provides tools for working with asynchronous data streams, such as events, HTTP requests, and more.

### Key Concepts:
1. **Observable:** Represents a stream of data that can emit multiple values over time.
2. **Observer:** A consumer of the data emitted by an Observable.
3. **Operators:** Functions used to transform, filter, or combine data streams (e.g., `map`, `filter`, `merge`).
4. **Subscription:** A mechanism to start listening to an Observable.



# Addtional Notes
--------------------


### A getter is a method that retrieves and returns the value of a property but is accessed like a regular property (without parentheses). This is useful for encapsulating logic to compute or retrieve a value dynamically.

------------------------------------------------------------
# Angular SSR (Server-Side Rendering) with Angular Universal

## How SSR Works in Angular (with Angular Universal)

Angular Universal is used to enable SSR in Angular apps.

- The server (Node.js) generates the static HTML on the server, sends it to the browser, and then bootstraps the Angular app on the client-side.
- When a user requests a page, the server responds with a fully-rendered HTML page.
- The Angular app is then bootstrapped on the client-side to make it dynamic and interactive, a process known as **hydration**.

## When Should You Enable SSR?

You should consider enabling SSR if:

- Your application is **SEO-sensitive**, like a public blog, e-commerce site, or news site.
- Your app needs to **load quickly** for better user experience.
- You want to enhance **performance** on slow devices or networks.

## Things to Consider with SSR in Angular

- **Complexity**: SSR adds complexity to your app. You will need to manage both client-side and server-side rendering logic.
- **Server Hosting**: Since the app needs to run on the server as well, you'll need to host your application on a server that supports Node.js (e.g., AWS, Azure, or Heroku).
- **API Calls**: You need to ensure that your API calls work well in an SSR environment, as they may behave differently when running on the server compared to the client.


# Standalone Components in Angular

## Overview
Standalone components in Angular allow you to build self-contained components without the need for declaring them inside an `NgModule`. This feature was introduced in **Angular 14** to simplify the Angular module system, making development more modular and maintainable.

---

## Key Features
1. **No Module Dependency**:
   Standalone components eliminate the need for `NgModule`. Instead, they use the `standalone: true` property in the component metadata.

2. **Direct Usage**:
   Standalone components can be bootstrapped or used directly without wrapping them in an `AppModule`.

3. **Simplified Structure**:
   They reduce the need for separate module files, making the application structure easier to understand.

4. **Direct Dependency Imports**:
   Required dependencies are imported directly into the component instead of a module.

---

## Example Usage

### Creating a Standalone Component
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello, Standalone Component!</h1>`,
  standalone: true, // Marks this component as standalone
})
export class HelloComponent {}
