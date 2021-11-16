import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material';
import { TvMoviesComponent } from './tv-movies/tv-movies.component';
import { BannerComponent } from './banner/banner.component';
import { DetailsComponent } from './details/details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DummyComponent } from './dummy/dummy.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvMoviesComponent,
    BannerComponent,
    DetailsComponent,
    NavBarComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
