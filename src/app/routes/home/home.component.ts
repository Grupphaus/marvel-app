import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CharacterCard } from 'src/app/core/models';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters$: Observable<CharacterCard[]|undefined>;

  constructor(private _marvelService: MarvelService,
              private _storage: StorageService) {
    this.characters$ = this._marvelService.getAllCharacters();
  }

  ngOnInit(): void {
  }
}
