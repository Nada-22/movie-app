import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDdEditComponent } from './movie-dd-edit/movie-dd-edit.component';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDdEditComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
