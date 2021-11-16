import { Component, OnInit } from '@angular/core';
import { TmdbapiService } from '../services/tmdbapi.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  base:String="https://image.tmdb.org/t/p/w500/";
  movie:any;
  id:number;
  constructor(private tmdbapiservice:TmdbapiService,private Router:ActivatedRoute) { }

  ngOnInit() {
    this.id=    
  }
  
  
}


