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
  books: any[] = []; 
  newBook: any = { title: '', body: '', genre: '', year: '' };
  searchQuery: string = ''; 
  showForm = false; 
  showmsg = false;
  constructor(private booksService: BooksService) { }
  
  ngOnInit(): void {
    this.booksService.getBooks().subscribe(apiBooks => {
      const localBooks = this.getLocalBooks();
      this.books = [...apiBooks, ...localBooks];
    });
  }

  get filteredBooks(): any[] {
    if (!this.searchQuery) return this.books;

    const lowerCaseQuery = this.searchQuery.toLowerCase();
    return this.books.filter(
      book =>
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        (book.body && book.body.toLowerCase().includes(lowerCaseQuery))
    );
  }

  addBook(): void {

    if (
      !this.newBook.title ||
      !this.newBook.body ||
      !this.newBook.year
    ) {
      alert('All fields are required. Please fill out the form completely.');
      return; 
    }

    const bookToAdd = { ...this.newBook };
    this.books.push(bookToAdd); 
    this.saveToLocalBooks(bookToAdd); 
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
    const localBooks = this.getLocalBooks();
    const updatedLocalBooks = localBooks.filter(
      book => book.title !== bookToDelete.title || book.body !== bookToDelete.body
    );
    localStorage.setItem('localBooks', JSON.stringify(updatedLocalBooks));
  }

  private getLocalBooks(): any[] {
    const localBooks = localStorage.getItem('localBooks');
    return localBooks ? JSON.parse(localBooks) : [];
  }

  private saveToLocalBooks(book: any): void {
    const localBooks = this.getLocalBooks();
    localBooks.push(book);
    localStorage.setItem('localBooks', JSON.stringify(localBooks));
  }
}
