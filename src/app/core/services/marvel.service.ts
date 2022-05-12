import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, Subject } from 'rxjs';
import { CharactersResponse, QueryOptions, CharacterCard, CharacterData } from '../models';
import { SingleCharacterResponse } from '../models/response.model';
import { environment } from './../../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {

  public totalResults$ = new Subject<number>();

  constructor(private _http: HttpClient, private _storage: StorageService) { }

  getAllCharacters(options?: QueryOptions): Observable<CharactersResponse['data']['results']> {
    let url = `${environment.apiUrl}/characters?apikey=${environment.key}`;

    if (options) {
      Object.entries(options).forEach(
        ([key, value]) => (url += `&${key}=${value}`)
      );
    }

    return this._http.get<CharactersResponse>(url).pipe(
      map((response) => {
        if (response.status === 'Ok' && response.data.results) {
          this.totalResults$.next(response.data.total);
          const favorites = this._storage.getFavorites();

          return response.data.results.map(
            (character) =>
              new CharacterCard(
                character.id,
                character.name,
                character.thumbnail,
                favorites.includes(character.id)
              )
          );
        } else {
          throw new Error('Server response failed');
        }
      })
    );
  }

  getCharacterData(id: string): Observable<CharacterData> {
    let url = `${environment.apiUrl}/characters/${id}?apikey=${environment.key}`;

    return this._http.get<SingleCharacterResponse>(url).pipe(
      map((response) => {
        if (response.status === 'Ok' && response.data.results) {
          return response.data.results[0]
        } else {
          throw new Error('Server response failed');
        }
      })
    );
  }
}
