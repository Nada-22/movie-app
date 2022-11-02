import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor(private _moviesServise:MoviesService) { }

  ngOnInit(): void {
    this.Movies();
  }
  Movies() {
    this._moviesServise.getMovies().subscribe(
      (res: any) => {
        console.log(res);
        
      }, (err: any) => {
        console.log(err);
        
    }
  )
}
}
