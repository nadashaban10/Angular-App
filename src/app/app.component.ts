import { Component } from '@angular/core';
import { BooksComponent } from './books/books.component';


@Component({
  selector: 'app-root',
  imports: [BooksComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'Book library';
}
