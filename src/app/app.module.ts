import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component'; // Import BooksComponent
import { BookFormComponent } from './book-form/book-form.component';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [

    AppComponent,
    BooksComponent,
    BookFormComponent,
    SearchComponent,
    BookListComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
