import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../users.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Output() userWasSelected = new EventEmitter<any>();
  p:Number=1;
  users: any[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      resp => {this.users = resp.results}
    )
  }

  onUserSelected(user: any) {
   this.userWasSelected.emit(user);
   window.scroll(0,0);
  }

  sortUsers(){
    this.users= _.sortBy(this.users, 'name.first');
  }
}
