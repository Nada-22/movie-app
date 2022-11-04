import { MovieEdit } from 'src/app/shared/movieEdit';
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
  updateMovie(id: number, movie: MovieEdit) {
    // movie._method = 'put';
    return this.http.post(`${this.url}/api/movies/${id}`, movie );
  }
  showMovie(id:number) {
    return this.http.get(`${this.url}/api/movies/${id}`);
  }
  deleteMovie(id:number) {
    return this.http.post(`${this.url}/api/movies/${id}`,{_method:"delete"});
    
  }
}
