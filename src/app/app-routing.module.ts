import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 1. import the component to which you want to redirect.

import { ApodComponent } from './apod/apod.component';

const routes: Routes = 
[
   //2. redirect an empty route to a given path
  {path:'', redirectTo:'/apod', pathMatch: 'full'},
   // 3. Define the path that will load a given component
  {path: 'apod', component: ApodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
