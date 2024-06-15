import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieData, MoviesDetails } from '../movieDetails';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  url = '/movies';
  constructor(private http: HttpClient) { }
  fetchData() {
    return this.http.get<MoviesDetails[]>(this.url);
  }

  fetchDataById(id: string){
    return this.http.get<MovieData>(`${this.url}/${id}`);
  }
}
