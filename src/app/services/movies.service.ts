import { Movie } from 'src/app/shared/movie.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url = environment.API_Domain;
  constructor(private http: HttpClient) {}

  getMovies(){
    return this.http.get(`${this.url}/api/movies`);
  }
  addMovie(movie:any) {
    return this.http.post(`${this.url}/api/movies`,movie);
    
  }
}
