import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { TypeuserService } from 'src/app/_services/typeuser.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  currentUser: any;
  typeusers: any;
  boutiques: any;

  constructor(private authService: AuthService, private userService: UserService,
    private typeuserService: TypeuserService, private boutiqueService: BoutiqueService,
    private router: Router) {

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
    this.get_boutique();
  }

  get_boutique() {
    this.boutiqueService.getBoutique().subscribe(((boutiques: any) => {
      // console.log('all boutiques ', boutiques);
      this.boutiques = boutiques.data;
    }));
  }
}
