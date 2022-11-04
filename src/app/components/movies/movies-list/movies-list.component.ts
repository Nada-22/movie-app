import { environment } from './../../../../environments/environment';
import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie.model';
import { CategoryiesService } from 'src/app/services/categoryies.service';
import { Category } from 'src/app/shared/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies!: Movie[];
  URL = environment.API_Domain;
  categories!: Category[];
  dataUploaded = false;
 
  constructor(private _moviesServise:MoviesService,private _categoryiesService:CategoryiesService) { }

  ngOnInit(): void {
    this.Movies();
    this.getCategories();
  }
  Movies() {
    this._moviesServise.getMovies().subscribe(
      (res: any) => {
        this.dataUploaded = true;
        this.movies = res.message;
        //console.log(this.movies);
      }, (err: any) => {
        //console.log(err);
        
    }
  )
  }
  getCategories() {
    this._categoryiesService.getCategories().subscribe(
      (res: any) => {
        this.categories = res.message;
        //console.log(this.categories);
        
      }, (err: any) => {
        //console.log(err);
        
      }
    )
  }
  movieByCategory(e: any) {
    //console.log(e.value);
    
    if (e.value) {
      
      this._categoryiesService.movieByCategories(e.value).subscribe(
        (res: any) => {
          this.movies = res.message;
          //console.log(res);
          
        }, (err: any) => {
          //console.log(err);
          
        }
      )
    }
    else {
      this.Movies();
    }
   
  }
 
}
