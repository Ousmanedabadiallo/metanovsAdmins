import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { TypeuserService } from 'src/app/_services/typeuser.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-usersnew',
  templateUrl: './usersnew.component.html',
  styleUrls: ['./usersnew.component.scss']
})
export class UsersnewComponent {
  afficherMessage: boolean = false;

  userForm!: FormGroup;
  loading = false;
  typeusers: any;
  boutiques: any;

  constructor(private formeBuilder: FormBuilder, private authService: AuthService, 
    private userService: UserService, private typeuserService: TypeuserService, 
    private boutiqueService: BoutiqueService, private router: Router) {

    this.get_type_user();
  }


  ngOnInit(): void {

    //Login Initialiser form
    this.userForm = this.formeBuilder.group({
      nom: this.formeBuilder.control('', [Validators.required]),
      prenom: this.formeBuilder.control('', [Validators.required]),
      profession: this.formeBuilder.control(''),
      login: this.formeBuilder.control('Admin'),
      organisation: this.formeBuilder.control('organisation'),
      telephone: this.formeBuilder.control(''),
      fonction: this.formeBuilder.control(''),
      adresse: this.formeBuilder.control(''),
      statut: this.formeBuilder.control('Activé'),
      typeuser_id: this.formeBuilder.control(''),
      boutique_id: this.formeBuilder.control(''),
      porte: this.formeBuilder.control(''),
      rue: this.formeBuilder.control(''),
      quartier: this.formeBuilder.control(''),
      ville: this.formeBuilder.control(''),
      pays: this.formeBuilder.control(''),
      second_adresse: this.formeBuilder.control(''),
      email: this.formeBuilder.control('', [Validators.required])
    });
  }

  islogin() {
    var login = this.authService.refreshToken()
    if (login) {
      this.router.navigateByUrl('/auth');
    }
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

  //Controller form
  public control(attribut: string) {
    var result: any;
    if (attribut == 'email') {
      return result = this.userForm.get(attribut);
    } else if (attribut == 'password') {
      return result = this.userForm.get(attribut);
    }
    return result;
  }


  enregistrer() {
    this.loading = true;
    // console.log('Register ', this.userForm.value);

    if (this.userForm.valid) {
      this.userService.register(this.userForm.value).subscribe((result: any)  => {
        console.log(result);
        this.userForm.reset();
      });
    } else {
      this.userForm.markAllAsTouched();
      this.loading = false;
    }
  }

  changerAffichage() {
    this.afficherMessage = !this.afficherMessage;
  }

}
