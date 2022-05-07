import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { QueryOptions } from '../models/query.model';
import { CharactersResponse } from '../models/response.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private _http: HttpClient) { }

  getAllCharacters(options?: QueryOptions): Observable<CharactersResponse['data']['results']> {
    let url = `${environment.apiUrl}/characters?apikey=${environment.key}`;

    if (options) {
      Object.entries(options).forEach(([key, value]) => url += `&${key}=${value}`);
    }

    return this._http.get<CharactersResponse>(url)
      .pipe(map((response) => response.data.results));
  }
}
