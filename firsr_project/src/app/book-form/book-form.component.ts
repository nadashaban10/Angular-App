import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  book = { title: '', body: '', genre: '', year: '' };
  @Output() submit = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  submitForm(): void {
    if (!this.book.title || !this.book.body || !this.book.genre || !this.book.year) {
      alert('Please fill out all the fields');
      return;
    }
    this.submit.emit(this.book);
    this.book = { title: '', body: '', genre: '', year: '' }; 
  }
}
