import { AfterloginGuard } from './guard/afterlogin.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
      path: '', 
    loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule), canActivate: [AfterloginGuard],
  },
  {
    path: 'account', 
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
