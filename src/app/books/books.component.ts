import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BookFormComponent } from '../book-form/book-form.component';
import{HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  imports: [CommonModule, FormsModule,SearchComponent, BookListComponent, BookFormComponent, HeaderComponent],
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  showForm = false;
  showMsg = false;
  
  searchQuery: string = '';
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((apiBooks) => {
      const localBooks = this.getLocalBooks();
      this.books = [...apiBooks.slice(0, 3), ...localBooks];
      this.filteredBooks = this.books;
    });
  }

 
  filterBooks(query: string): void {
    this.searchQuery = query.trim(); // Update the search query in BooksComponent
  
    if (this.searchQuery === '') {
      // Show all books when the query is empty
      this.filteredBooks = this.books;
    } else {
      // Filter books based on title or body
      this.filteredBooks = this.books.filter((book) =>
        (book.title?.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
         book.body?.toLowerCase().includes(this.searchQuery.toLowerCase()))
      );
    }
  }
  
  

  addBook(book: any): void {
    if (!book.title || !book.body || !book.year) {
      return;
    }
    this.books.push(book);
    this.filteredBooks = [...this.books];
    this.saveToLocalBooks(book);
    this.showForm = false; // Hide the form after submission
    this.showMsg = true; // Show the success message
    setTimeout(() => {
      this.showMsg = false; // Hide the success message after 2 seconds
    }, 5000);
    
  }
  

  deleteBook(book: any): void {
  // Remove the book from the books array
  this.books = this.books.filter((b) => b !== book);
  this.filteredBooks = [...this.books];

  // Update the localBooks array in localStorage
  const localBooks = this.getLocalBooks().filter(
    (b: any) =>
      b.title !== book.title || b.body !== book.body // Compare by unique attributes
  );
  localStorage.setItem('localBooks', JSON.stringify(localBooks));
}


  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  private getLocalBooks(): any[] {
    const localBooks = localStorage.getItem('localBooks');
    return localBooks ? JSON.parse(localBooks) : [];
  }

  private saveToLocalBooks(book: any): void {
    const localBooks = this.getLocalBooks();
    if (book) localBooks.push(book);
    localStorage.setItem('localBooks', JSON.stringify(localBooks));
  }
}

