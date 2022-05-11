import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public inputString = new Observable<string>();
  @Output() query = new EventEmitter<string>();
  public searchForm!: FormGroup;
  public searchInput!: FormControl;

  constructor(private _formBuilder: FormBuilder) {
    this.searchInput = new FormControl('', { initialValueIsDefault: true });
    this.searchForm = this._formBuilder.group({ search: this.searchInput });
    this.searchInput.valueChanges.pipe(
      debounceTime(400),
      (event) => this.inputString = event);
    this.inputString.subscribe(input => this.query.emit(input));
  }

  ngOnInit(): void { }

  clear() {
    this.searchForm.reset();
  }
}
