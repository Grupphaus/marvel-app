import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterCard, QueryOptions } from 'src/app/core/models';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public characters$!: Observable<CharacterCard[] | undefined>;
  public paginationTotal = 0;
  public hasApiLoaded = false;
  public options: QueryOptions = {
    limit: 50,
    offset: 0,
  }

  constructor(private _marvelService: MarvelService) {
    this._marvelService.totalResults$.subscribe(total => this.paginationTotal = total);
    this.getCharacters(this.options);
  }

  ngOnInit(): void { }

  handleSearch(term: string) {
    term === '' ? delete this.options.nameStartsWith : this.options.nameStartsWith = term;
    this.getCharacters(this.options);
  }

  handlePagination(options: QueryOptions) {
    this.hasApiLoaded = false;
    this.options = Object.assign(this.options, options);
    this.getCharacters(this.options);
  }

  getCharacters(options: QueryOptions) {
    this.characters$ = this._marvelService.getAllCharacters(options);
    this.characters$.subscribe({
      complete: () => this.hasApiLoaded = true,
      error: (err) => console.log(err) // TODO: Error handling.
    }).unsubscribe;
  }
}