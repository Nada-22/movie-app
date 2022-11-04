import { AfterloginGuard } from './../../guard/afterlogin.guard';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: '', pathMatch: 'full', redirectTo: 'movies' },
  {
    path: '', 
    component: MainComponent,
    children: [
      {
        path: 'movies', 
        loadChildren: () => import('../movies/movies.module').then(m => m.MoviesModule),canActivate:[AfterloginGuard]
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
