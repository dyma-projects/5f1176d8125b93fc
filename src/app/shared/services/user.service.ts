import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  public users: BehaviorSubject<string[]>;

  constructor() {
    this.users = new BehaviorSubject<string[]>([]);
  }

  public addUser(aUser: string): void {
    this.users.value.push(aUser);
    this.users.next(this.users.value);
  }

}
