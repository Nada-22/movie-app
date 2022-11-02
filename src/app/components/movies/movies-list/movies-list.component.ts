import { environment } from './../../../../environments/environment';
import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies!: Movie[];
  URL = environment.API_Domain;
  constructor(private _moviesServise:MoviesService) { }

  ngOnInit(): void {
    this.Movies();
  }
  Movies() {
    this._moviesServise.getMovies().subscribe(
      (res: any) => {
        this.movies = res.message;
        console.log(this.movies);
      }, (err: any) => {
        console.log(err);
        
    }
  )
}
}
