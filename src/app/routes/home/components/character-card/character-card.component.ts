import { Component, OnInit, Input } from '@angular/core';
import { CharacterCard } from 'src/app/core/models';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character!: CharacterCard;

  constructor(private _storage: StorageService) { }

  ngOnInit(): void {
    this._storage.emitTotal();
  }

  toggleFavorite(id: number) {
    let favorites = this._storage.getFavorites();
        
    if (favorites!.indexOf(id) !== -1) {
      this._storage.removeFavorite(id);
    } else {
      this._storage.saveFavorite(id);
    }

    this.character.isFavorite = !this.character.isFavorite;
  }

}
