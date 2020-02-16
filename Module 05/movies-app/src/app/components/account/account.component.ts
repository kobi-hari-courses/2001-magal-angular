import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  async login() {
    await this.auth.login();
  }

  async logout() {
    await this.auth.logout();
  }

}
