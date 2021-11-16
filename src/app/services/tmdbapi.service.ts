import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const trending="https://api.themoviedb.org/3/trending/all/day?api_key=f4d87bb7fd8501d04b936a791ac39eca";
const movie="https://api.themoviedb.org/3/trending/tv/week?api_key=f4d87bb7fd8501d04b936a791ac39eca";
const id="https://api.themoviedb.org/3/movie/";
const url="?api_key=f4d87bb7fd8501d04b936a791ac39eca&language=en-US";
const movie_detilas="https://api.themoviedb.org/3/movie/?api_key=f4d87bb7fd8501d04b936a791ac39eca";
@Injectable({
  providedIn: 'root'
})
export class TmdbapiService {

  constructor(private http:HttpClient) { }
  getTrending(){
    return this.http.get(trending);
  }
  getTvMovie(){
    return this.http.get(movie);
  }
  getMoviebyid(movieid){
    return this.http.get(`${id}+${movieid}+${url}`);
  }
}
