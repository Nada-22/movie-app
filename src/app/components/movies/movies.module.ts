import { MaxlengthPipe } from './../../pipes/maxlength.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDdEditComponent } from './movie-dd-edit/movie-dd-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDdEditComponent,
    DeleteMovieComponent,
    MaxlengthPipe,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class MoviesModule { }
