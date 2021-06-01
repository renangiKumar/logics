import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    loadChildren : ()=>import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path : 'home-page',
    loadChildren : ()=>import('./home-page/home-page.module').then(mod =>mod.HomePageModule)
  },
  {
    path : '**', redirectTo : ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
