import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http : HttpClient) { }

  searchCountryByAlphaCode(term:string): Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( error => {
          console.log(error);
          return of(null)
        } )
      );
  }

  search(term:string, sub: string): Observable<Country[]>{
    const url = `${this.apiUrl}/${sub}/${term}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( error => {
          console.log(error);
          return of([])
        } )
      );
  }

}