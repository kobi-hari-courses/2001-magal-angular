import { AuthenticationService } from './core/services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router
    ){}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> 
{
      console.log('Guard .... thinking....')

      let pr = this.auth.isLoggedIn().pipe(
        first()
      ).toPromise();
      let res = await pr;

      if (res) return true;

      console.log(state);

      this.auth.setNextUrl(state.url);
      const tree: UrlTree = this.router.parseUrl('account');
      console.log(tree);
      return tree;
  }
  
}
