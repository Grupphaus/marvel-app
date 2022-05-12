import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterData } from 'src/app/core/models';
import { MarvelService } from 'src/app/core/services/marvel.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public character = {} as CharacterData;
  public characterId: string;
  public isFavorite: boolean;
  public imagePath = '';
  public events = [] as CharacterData['events']['items'];
  public categories = ['comics', 'stories', 'series'];
  public details = {};

  constructor(private _marvelService: MarvelService, private _router: ActivatedRoute, private _storage: StorageService) {
    this.characterId = this._router.snapshot.params['id'];
    this.isFavorite = this._storage.getFavorites().includes(+this.characterId);
  }

  ngOnInit(): void {
    this._marvelService.getCharacterData(this.characterId).subscribe(
      character => {
        this.character = character;
        this.mapCharacterInfo();
      }
    );
  }

  public mapCharacterInfo() {
    this.imagePath = `${this.character.thumbnail.path}/portrait_uncanny.${this.character.thumbnail.extension}`;
    this.events = this.character.events.items;

    this.details = Object.fromEntries(
      Object.entries(this.character).map(([key, value]) => this.categories.includes(key) ? [
        key, value.items
      ] : [])
    );
  }

  public toggleFavorite(id: number) {
    const favorites = this._storage.getFavorites();
        
    if (favorites!.indexOf(id) !== -1) {
      this._storage.removeFavorite(id);
    } else {
      this._storage.saveFavorite(id);
    }

    this.isFavorite = !this.isFavorite;
  }
}
