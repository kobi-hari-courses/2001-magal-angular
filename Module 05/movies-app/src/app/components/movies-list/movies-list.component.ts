import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  captions: string[] = [];

  constructor(
    private movies: MoviesService, 
    private router: Router
  ) { }

  async ngOnInit() {
    this.captions = await this.movies.getAllTitles();
  }

  selectMovie(index: number) {
    this.router.navigate(['movies', index]);

  }


}
