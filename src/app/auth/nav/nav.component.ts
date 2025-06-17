import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  currentuser: any;

  constructor(private authService: AuthService) {

    this.authService.refreshToken();

    this.authService.subjectUser.subscribe(data => {
      this.currentuser = data;
      // console.log('UserSubjet ', data);
    });
  }

  logout() {
    this.authService.logout();
  }
}
