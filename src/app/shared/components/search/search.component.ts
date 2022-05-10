import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() value = '';
  @Output() test = new EventEmitter<string>();
  searchForm!: FormGroup;
  searchInput!: FormControl;

  constructor(private _formBuilder: FormBuilder) {
    this.searchInput = new FormControl();
    this.searchForm = this._formBuilder.group({search: this.searchInput});
  }

  ngOnInit(): void {
  }

}
