import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  delay(millis: number): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, millis));
  }

  async verifyUserName(username: string): Promise<boolean> {
    let un = username.toLowerCase();

    let known = [
      'john', 
      'jim', 
      'jerry', 
      'samantha', 
      'paul', 
      'arik'
    ]

    await this.delay(2000);
    return !known.includes(username);
  }

  constructor() { }
}
