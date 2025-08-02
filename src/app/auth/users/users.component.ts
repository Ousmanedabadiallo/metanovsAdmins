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
  allUsers: any;

  constructor(private authService: AuthService,
    private userService: UserService, private router: Router) {

    this.authService.refreshToken();

    this.authService.subjectUser.subscribe(data => {
      this.currentUser = data;
      // console.log('UserSubjet ', data);
      this.get_user();
    });
  }

  get_user() {
    //Admin Connecter
    if (this.currentUser?.typeuser_id == 1) {
      this.userService.getUser().subscribe(((users: any) => {
        // console.log('all users ', users.data);
        this.allUsers = users.data;
      }));
    }
    //Responsable boutique connecter
    if (this.currentUser?.typeuser_id == 2) {
      this.userService.getBoutiqueUser().subscribe(((users: any) => {
        // console.log('all users ', users);
        this.allUsers = users.data;
      }));
    }

  }
}
