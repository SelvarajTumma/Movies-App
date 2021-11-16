import { Component, OnInit } from '@angular/core';
import { TmdbapiService } from '../services/tmdbapi.service';
import { DetailsComponent } from '../details/details.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  base:String="https://image.tmdb.org/t/p/w500/";
  movies:any[];
  click=false;
  constructor(private tmdbapiservice:TmdbapiService) { }

  ngOnInit() {
    this.tmdbapiservice.getTrending().subscribe(
        (data:any)=>{
          this.movies=data.results;
          console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
    
  }
  details=new DetailsComponent(this.tmdbapiservice);
  senddetails(value:any){
    this.details.showDeatails(value);
    console.log(value);
  }
}


