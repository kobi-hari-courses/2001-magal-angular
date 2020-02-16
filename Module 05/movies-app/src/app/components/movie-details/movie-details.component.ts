import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
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

  prev() {
    let id = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', id - 1]);
  }

  next() {
    let id = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', id + 1]);    
  }

  edit() {
    let id = Number(this.route.snapshot.params['id']);
    this.router.navigate(['movies', id, 'edit']);    
  }

}
