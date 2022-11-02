import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  {
    path: '', 
    component: HeaderComponent,
    children: [
      {
        path: 'movies', 
        loadChildren: () => import('../movies/movies.module').then(m => m.MoviesModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
