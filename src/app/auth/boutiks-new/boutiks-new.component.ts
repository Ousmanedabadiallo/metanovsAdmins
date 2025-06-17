import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { BoutiqueService } from 'src/app/_services/boutique.service';

@Component({
  selector: 'app-boutiks-new',
  templateUrl: './boutiks-new.component.html',
  styleUrls: ['./boutiks-new.component.scss']
})
export class BoutiksNewComponent {
  currentuser: any;
  boutiqueForm!: FormGroup;

  constructor(private formeBuilder: FormBuilder, private authService: AuthService, private boutiqueService: BoutiqueService, private router: Router) {

    this.authService.refreshToken();

    this.authService.subjectUser.subscribe(data => {
      this.currentuser = data;
      // console.log('UserSubjet ', data);
    });
  }
  ngOnInit(): void {

    //Login Initialiser form
    this.boutiqueForm = this.formeBuilder.group({
      nom: this.formeBuilder.control('', [Validators.required]),
      adresse: this.formeBuilder.control('', [Validators.required]),
      telephone: this.formeBuilder.control(''),
      email: this.formeBuilder.control(''),
      pays: this.formeBuilder.control(''),
      region: this.formeBuilder.control(''),
      ville: this.formeBuilder.control(''),
      quartier: this.formeBuilder.control(''),
      rue: this.formeBuilder.control(''),
      porte: this.formeBuilder.control(''),
      logo: this.formeBuilder.control(''),
      baderole: this.formeBuilder.control(''),
      statut: this.formeBuilder.control('')
    });
  }

  //Controller form
  public control(attribut: string) {
    var result: any;
    if (attribut == 'nom') {
      return result = this.boutiqueForm.get(attribut);
    } else if (attribut == 'adresse') {
      return result = this.boutiqueForm.get(attribut);
    }
    return result;
  }


  valide() {
    console.log('Post ', this.boutiqueForm.value);

    if (this.boutiqueForm.valid) {
      this.boutiqueService.postBoutique(this.boutiqueForm.value).subscribe((result:any) =>{
        console.log('Resultat POST', result);
        alert(result?.message);
        this.boutiqueForm.reset();
      });
    } else {
      this.boutiqueForm.markAllAsTouched();
    }
  }
}
