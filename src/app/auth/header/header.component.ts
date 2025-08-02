import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TypeuserService } from 'src/app/_services/typeuser.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  currentUser: any;
  typeusers: any;
  boutiques: any;

  constructor(private authService: AuthService, private userService: UserService,
    private typeuserService: TypeuserService, private router: Router) {

    this.authService.refreshToken();

    this.authService.subjectUser.subscribe(data => {
      this.currentUser = data;
      // console.log('UserSubjet ', data);
    });

    this.get_type_user();
  }

  get_type_user() {
    this.typeuserService.getTypeuser().subscribe(((types: any) => {
      // console.log('all types users ', types);
      this.typeusers = types.data;
    }));
  }
}
