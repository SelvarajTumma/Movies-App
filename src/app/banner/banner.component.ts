import { Component, OnInit } from '@angular/core';
import { TmdbapiService } from '../services/tmdbapi.service';
import { Models } from '../models';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  base:String="https://image.tmdb.org/t/p/w500/";
  banner:any;
  constructor(private tmdbapiservice:TmdbapiService) { }

  ngOnInit() {
    this.tmdbapiservice.getTrending().subscribe(
      (data:any)=>{
        this.banner=data.results[Math. floor(Math. random() * (19+1))];
        console.log(this.banner);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
