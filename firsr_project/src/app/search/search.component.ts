import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  imports: [CommonModule, FormsModule],

})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchQuery: string = '';

  filterBooks(): void {
    this.search.emit(this.searchQuery);
  }
}
