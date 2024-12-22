import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  imports: [CommonModule, FormsModule]
})
export class BooksComponent implements OnInit {
  books: any[] = []; // Array to store books
  newBook: any = { title: '', body: '', genre: '', year: '' };
  searchQuery: string = ''; // Variable to hold search input
  showForm = false; // Object to store form data
  showmsg = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    // Fetch books from API and local storage on component initialization
    this.booksService.getBooks().subscribe(apiBooks => {
      const localBooks = this.getLocalBooks(); // Get books from local storage
      this.books = [...apiBooks, ...localBooks]; // Merge API books with local books
    });
  }

  get filteredBooks(): any[] {
    // Dynamically filter books based on the search query
    if (!this.searchQuery) return this.books;

    const lowerCaseQuery = this.searchQuery.toLowerCase();
    return this.books.filter(
      book =>
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        (book.body && book.body.toLowerCase().includes(lowerCaseQuery))
    );
  }

  addBook(): void {
    // Check if all fields are filled
    if (
      !this.newBook.title ||
      !this.newBook.body ||
      !this.newBook.year
    ) {
      alert('All fields are required. Please fill out the form completely.');
      return; // Stop the method execution if validation fails
    }

    const bookToAdd = { ...this.newBook };
    this.books.push(bookToAdd); // Add the new book to the local array
    this.saveToLocalBooks(bookToAdd); // Save the new book to local storage

    // Reset the form fields
    this.newBook = { title: '', body: '', genre: '', year: '' };
    this.showForm = false;
    this.showmsg = true;

    setTimeout(() => {
      this.showmsg = false;
    }, 3000);
  }

  deleteBook(index: number): void {
    const bookToDelete = this.books[index];

    // Remove book from the books array
    this.books.splice(index, 1);

    // Check if the book is locally added and update local storage
    const localBooks = this.getLocalBooks();
    const updatedLocalBooks = localBooks.filter(
      book => book.title !== bookToDelete.title || book.body !== bookToDelete.body
    );
    localStorage.setItem('localBooks', JSON.stringify(updatedLocalBooks));
  }

  private getLocalBooks(): any[] {
    // Retrieve books from local storage
    const localBooks = localStorage.getItem('localBooks');
    return localBooks ? JSON.parse(localBooks) : [];
  }

  private saveToLocalBooks(book: any): void {
    // Save the new book to local storage
    const localBooks = this.getLocalBooks();
    localBooks.push(book);
    localStorage.setItem('localBooks', JSON.stringify(localBooks));
  }
}
