import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllShows(): Promise<Show[]> {
    let url = 'http://api.tvmaze.com/shows';  
    let res = this.http.get<Show[]>(url).toPromise();
    return res;
  }

  getShow(id: string): Promise<Show> {
    if (!id) return Promise.resolve<Show>(null);
    
    let url = 'http://api.tvmaze.com/shows/' + id;  
    let res = this.http.get<Show>(url).toPromise();
    return res;
  }
}
