import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { TypeuserService } from 'src/app/_services/typeuser.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-usersmod',
  templateUrl: './usersmod.component.html',
  styleUrls: ['./usersmod.component.scss']
})
export class UsersmodComponent {

  user_id!: string | null;
  userForm!: FormGroup;
  userSelected!: User;
  typeusers: any;
  boutiques: any;

  afficherMessage: boolean = false;

  changerAffichage() {
    this.afficherMessage = !this.afficherMessage;
  }
  constructor(private activatedRouter: ActivatedRoute,
    private typeuserService: TypeuserService, private boutiqueService: BoutiqueService,
    private userService: UserService, private router: Router, private formeBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.user_id = this.activatedRouter.snapshot.paramMap.get('id');

    //Users Initialiser form
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
    
    if(this.user_id) {
      this.preLoadUser(this.user_id);
    }
  }

  preLoadUser(user_id: string | null) {

    this.userService.get_Id_User(user_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.userSelected = result;

      //Prof initialiser form
      this.userForm = this.formeBuilder.group({
        nom: this.formeBuilder.control(result.nom, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        prenom: this.formeBuilder.control(result.prenom, [Validators.required]),
        profession: this.formeBuilder.control(result.profession),
        login: this.formeBuilder.control(result.login),
        organisation: this.formeBuilder.control(result.organisation),
        telephone: this.formeBuilder.control(result.telephone),
        fonction: this.formeBuilder.control(result.fonction),
        adresse: this.formeBuilder.control(result.adresse),
        // genre: this.formeBuilder.control(result.genre),
        statut: this.formeBuilder.control(result.statut),
        boutique_id: this.formeBuilder.control(result.boutique_id),
        email: this.formeBuilder.control(result.email, [Validators.required]),
        typeuser_id: this.formeBuilder.control(result.typeuser_id),
        porte: this.formeBuilder.control(result.porte),
        rue: this.formeBuilder.control(result.rue),
        quartier: this.formeBuilder.control(result.quartier),
        ville: this.formeBuilder.control(result.ville),
        pays: this.formeBuilder.control(result.pays),
        second_adresse: this.formeBuilder.control(result.second_adresse)
      });
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

  enregistrer() {
    // console.log('Register ', this.userForm.value);

    if (this.userForm.valid) {
      this.userService.putUser(this.userSelected.id, this.userForm.value).subscribe((result: any)  => {
        // console.log(result);
        this.userForm.reset();
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
