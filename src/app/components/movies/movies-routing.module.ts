import { MoviesListComponent } from './movies-list/movies-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDdEditComponent } from './movie-dd-edit/movie-dd-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list'},
  { path: 'list', component: MoviesListComponent },
  { path: 'add', component: MovieDdEditComponent },
  { path: 'edit/:id', component: MovieDdEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
