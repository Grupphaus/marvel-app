import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger, stagger, query} from '@angular/animations';
import { Observable } from 'rxjs';
import { CharacterCard, QueryOptions } from 'src/app/core/models';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public characters$!: Observable<CharacterCard[]|undefined>;
  public paginationTotal$ = 0;
  public hasApiLoaded = false;
  public options: QueryOptions = {
    limit: 50,
    offset: 0,
  }

  constructor(private _marvelService: MarvelService,
              private _storage: StorageService) {
    this._marvelService.totalResults$.subscribe(total => this.paginationTotal$ = total);
    this.getCharacters(this.options);
  }

  ngOnInit(): void { }

  handlePagination(options: QueryOptions) {
    this.hasApiLoaded = false;
    this.options = options;
    this.getCharacters(options);
  }

  getCharacters(options: QueryOptions) {
    this.characters$ = this._marvelService.getAllCharacters(options);
    this.characters$.subscribe({
      next: () => this.hasApiLoaded = true
    });
  }
}