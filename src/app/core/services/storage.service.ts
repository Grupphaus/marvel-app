import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public favoriteCount$ = new Subject<number>();

  constructor() {}

  public emitTotal() {
    const listLength = this.getFavorites().length;
    
    this.favoriteCount$.next(listLength);
  }

  public setItem(list: string) {
    localStorage.setItem('favorites', list);

    this.emitTotal();
  }

  public saveFavorite(id: number) {
    const updatedFavorites = this.getFavorites();
    updatedFavorites.push(id);

    this.setItem(JSON.stringify(updatedFavorites));
  }

  public removeFavorite(id: number) {    
    const updatedFavorites = this.getFavorites();
    updatedFavorites.splice(updatedFavorites.indexOf(id), 1);

    this.setItem(JSON.stringify(updatedFavorites));
  }

  public getFavorites(): number[] {
    if (localStorage.getItem('favorites')) {
      return JSON.parse(localStorage.getItem('favorites')!);
    } else {
      return [] as number[];
    }
  }
}
