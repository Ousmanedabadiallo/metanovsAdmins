import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  currentUser: any;

  constructor(private authService: AuthService, 
    private userService: UserService, private router: Router) {
      this.get_user();
  }

  get_user() {
    this.userService.getUser().subscribe(((users: any) => {
      // console.log('all users ', users);
      this.currentUser = users.data;
    }));
  }
}
