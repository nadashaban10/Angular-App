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
  books: any[] = []; // Combined list of API and local books
  localBooks: any[] = []; // Local books only (for only recent books)
  newBook: any = { title: '', body: '', genre: '', year: '' };
  filteredBooks: any[] = [];
  searchQuery: string = '';
  showForm = false;
  showmsg = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(apiBooks => {
      // Get local books from localStorage and combine them with API books
      this.localBooks = this.getLocalBooks(); // Local books only
      this.books = [...apiBooks, ...this.localBooks].slice(0, 5); 
      this.filteredBooks = this.books; 
    });
  }

  addBook(): void {
    if (!this.newBook.title || !this.newBook.body || !this.newBook.year) {
      alert('All fields are required. Please fill out the form completely.');
      return;
    }

    const bookToAdd = { ...this.newBook };
    this.books.push(bookToAdd); // Add to combined list (API + Local)
    this.localBooks.push(bookToAdd); // Add to local books only
    this.saveToLocalBooks(bookToAdd); // Save to localStorage
    this.newBook = { title: '', body: '', genre: '', year: '' };
    this.showForm = false;
    this.showmsg = true;

    setTimeout(() => {
      this.showmsg = false;
    }, 3000);
  }

  deleteBook(index: number): void {
    const bookToDelete = this.books[index];
    this.books.splice(index, 1);
    this.localBooks.splice(index, 1);
    this.localBooks = this.localBooks.filter(book => book.title !== bookToDelete.title || book.body !== bookToDelete.body); // Remove only from local books
    this.saveToLocalBooks(null); 
  }

  filterBooks(): void {
    this.filteredBooks = this.books.filter(book =>
      book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      book.body.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  private getLocalBooks(): any[] {
    const localBooks = localStorage.getItem('localBooks');
    return localBooks ? JSON.parse(localBooks) : [];
  }

  private saveToLocalBooks(book: any): void {
    if (book) {
      const localBooks = this.getLocalBooks();
      localBooks.push(book);
      localStorage.setItem('localBooks', JSON.stringify(localBooks));
    } else {
      localStorage.setItem('localBooks', JSON.stringify(this.localBooks)); // Update local storage after deletion
    }
  }
}

