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
  showForm = false; // Object to store form data


  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    // Fetch books from API and local storage on component initialization
    this.booksService.getBooks().subscribe(apiBooks => {
      const localBooks = this.getLocalBooks(); // Get books from local storage
      this.books = [...apiBooks, ...localBooks]; // Merge API books with local books
    });
  }

  addBook(): void {
    const bookToAdd = { ...this.newBook };
    this.books.push(bookToAdd); // Add the new book to the local array
    this.saveToLocalBooks(bookToAdd); // Save the new book to local storage

    // Reset the form fields
    this.newBook = { title: '', body: '', genre: '', year: '' };
    this.showForm = false;
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
