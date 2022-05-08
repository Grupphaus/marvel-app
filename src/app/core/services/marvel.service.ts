import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharactersResponse, QueryOptions, CharacterCard } from '../models';
import { environment } from './../../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private _http: HttpClient, private _storage: StorageService) {}

  getAllCharacters(options?: QueryOptions): Observable<CharactersResponse['data']['results']> {
    let url = `${environment.apiUrl}/characters?apikey=${environment.key}`;
    let favorites = this._storage.getFavorites();

    if (options) {
      Object.entries(options).forEach(
        ([key, value]) => (url += `&${key}=${value}`)
      );
    }

    return this._http.get<CharactersResponse>(url).pipe(
      map((response) => {
        if (response.status === 'Ok' && response.data.results) {
          return response.data.results.map(
            (character) =>
              new CharacterCard(
                character.id,
                character.name,
                character.thumbnail,
                favorites!.includes(character.id)
              )
          );
        } else {
          throw new Error('Server response failed');
        }
      })
    );
  }
}
