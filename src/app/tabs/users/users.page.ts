import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users : User[];
  uid : string;
  constructor(public userService: UserService) {
   this.userService.getAllUsers().snapshotChanges().pipe(
      map(changes => changes.map(c => ({
        key : c.payload.key, ...c.payload.val()
      }))
      )).subscribe(users => { this.users = users; console.log(users)})
      this.uid = this.userService.getUID();
  }

  openChat(key: string) {
    alert(key);
  }

  ngOnInit() {
    
  }

}
