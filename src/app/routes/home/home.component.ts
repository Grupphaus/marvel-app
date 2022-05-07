import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CharacterData } from 'src/app/core/models/response.model';
import { MarvelService } from 'src/app/core/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters$: Observable<CharacterData[]>;

  constructor(private _marvelService: MarvelService) {
    this.characters$ = this._marvelService.getAllCharacters();
  }

  ngOnInit(): void {
  }

}
