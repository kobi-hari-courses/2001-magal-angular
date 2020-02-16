import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;
  private status$ = new BehaviorSubject<boolean>(this.isAuthenticated);

  private nextUrl: string | null = null;

  constructor(private router: Router) { }


  isLoggedIn(): Observable<boolean> {
    return this.status$.asObservable();
  }

  async login(): Promise<void> {
    this.isAuthenticated = true;
    this.status$.next(this.isAuthenticated);

    if (this.nextUrl !== null) {
      this.router.navigateByUrl(this.nextUrl);
      this.nextUrl = null;
    }
  }

  async logout(): Promise<void> {
    this.isAuthenticated = false;
    this.status$.next(this.isAuthenticated);
  }

  setNextUrl(url: string) {
    this.nextUrl = url;
  }

}
