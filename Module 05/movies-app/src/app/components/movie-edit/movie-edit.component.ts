import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie$: Observable<Movie>;

  constructor(
    private movies: MoviesService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  async ngOnInit() {
    this.movie$ = this.route.params.pipe(
      map(prm => Number(prm['id'])), 
      switchMap(id => this.movies.getMovieByIndex(id))
    )
  }

}
