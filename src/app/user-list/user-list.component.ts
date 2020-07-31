import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  public users: string[];
  private userServiceSub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.users = [];
      this.userServiceSub = this.userService.users.subscribe(
          (x: string[])   => { this.users = x; },
          (error: Error)  => { console.log(error); }
        );
  }

  ngOnDestroy(): void {
    this.userServiceSub.unsubscribe();
  }

}
