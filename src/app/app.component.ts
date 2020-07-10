import { Component, OnInit } from "@angular/core";
import { HeroService } from "../services/HeroService";
import { MoviesService } from "../services/MoviesService";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  //title = "CodeSandbox";

  movies: any = [];

  constructor(
    private HeroService: HeroService, 
    private moviesServ: MoviesService
  ) {
    console.log(this.HeroService.getHeroes());
  }

  ngOnInit() {
    this.moviesServ.getPopular().subscribe(({ results }) => {
      console.log('requestMovie', results);
      this.movies = results;
    });
  }
}
