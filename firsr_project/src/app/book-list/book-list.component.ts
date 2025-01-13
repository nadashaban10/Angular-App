import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {NgFor} from '@angular/common'; // Import NgFor

@Component({
  selector: 'app-book-list',
  imports: [NgFor, CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  @Input() books: any[] = [];
  @Output() delete = new EventEmitter<any>();
}
