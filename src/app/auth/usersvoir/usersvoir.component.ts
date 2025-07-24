import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { TypeuserService } from 'src/app/_services/typeuser.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-usersvoir',
  templateUrl: './usersvoir.component.html',
  styleUrls: ['./usersvoir.component.scss']
})
export class UsersvoirComponent {

  user_id!: string | null;
  userSelected!: User;
  typeusers: any;
  boutiques: any;

  constructor(private activatedRouter: ActivatedRoute, private typeuserService: TypeuserService,
    private boutiqueService: BoutiqueService,private userService: UserService,
    private router: Router) {
    
  }

  ngOnInit(): void {
    this.user_id = this.activatedRouter.snapshot.paramMap.get('id');
    
    if(this.user_id) {
      this.preLoadUser(this.user_id);
    }
  }

  preLoadUser(user_id: string | null) {

    this.userService.get_Id_User(user_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.userSelected = result;
    });
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
