import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, Subject } from 'rxjs';
import { CharactersResponse, QueryOptions, CharacterCard } from '../models';
import { environment } from './../../../environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  
  public totalResults$ = new Subject<number>();
  private favorites = this._storage.getFavorites();
  
  constructor(private _http: HttpClient, private _storage: StorageService) {}

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

          return response.data.results.map(
            (character) =>
              new CharacterCard(
                character.id,
                character.name,
                character.thumbnail,
                this.favorites!.includes(character.id)
              )
          );
        } else {
          throw new Error('Server response failed');
        }
      })
    );
  }
}
