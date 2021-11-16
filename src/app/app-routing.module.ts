import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TvMoviesComponent } from './tv-movies/tv-movies.component';
import { DetailsComponent } from './details/details.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {path:'',component:DummyComponent},
  {path:'details',component:DetailsComponent},
  {path:"trending",component:MoviesComponent},
  {path:"tvmovies",component:TvMoviesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
