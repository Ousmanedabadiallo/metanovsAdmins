import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  allClients: any;

  constructor(private authService: AuthService,
    private userService: UserService, private router: Router) {
      this.get_user();
  }

  get_user() {
      this.userService.getClientUser().subscribe(((users: any) => {
        // console.log('all Clients ', users.data);
        this.allClients = users.data;
      }));

  }
}
