import { Component, OnInit } from '@angular/core';
import { TmdbapiService } from '../services/tmdbapi.service';
@Component({
  selector: 'app-tv-movies',
  templateUrl: './tv-movies.component.html',
  styleUrls: ['./tv-movies.component.css']
})
export class TvMoviesComponent implements OnInit {
  base:String="https://image.tmdb.org/t/p/w500/";
  tvmovies:any[];
  constructor(private tmdbapiservice:TmdbapiService) { }

  ngOnInit() {
    this.tmdbapiservice.getTvMovie().subscribe(
      (data:any)=>{
        this.tvmovies=data.results;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
