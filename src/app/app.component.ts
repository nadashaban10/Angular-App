import { Component, OnInit } from '@angular/core';
import { BooksService } from '../app/books.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../app/search/search.component';
import { BookListComponent } from '../app/book-list/book-list.component';
import { BookFormComponent } from '../app/book-form/book-form.component';
import{HeaderComponent} from '../app/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, FormsModule,SearchComponent, BookListComponent, BookFormComponent, HeaderComponent],
})
export class AppComponent implements OnInit {
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
      this.showMsg = false;
    }, 5000);
    
  }
  

  deleteBook(book: any): void {
  this.books = this.books.filter((b) => b !== book);
  this.filteredBooks = [...this.books];

  const localBooks = this.getLocalBooks().filter(
    (b: any) =>
      b.title !== book.title || b.body !== book.body 
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

