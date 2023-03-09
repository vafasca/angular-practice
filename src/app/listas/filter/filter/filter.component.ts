import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch() {
    this.search.emit(this.searchTerm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
