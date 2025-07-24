import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from 'src/app/_services/boutique.service';

@Component({
  selector: 'app-boutiksmod',
  templateUrl: './boutiksmod.component.html',
  styleUrls: ['./boutiksmod.component.scss']
})
export class BoutiksmodComponent {

  boutique_id!: string | null;
  boutiqueForm!: FormGroup;
  boutiqueSelected!: any;

  constructor(private activatedRouter: ActivatedRoute,
    private boutiqueService: BoutiqueService, private router: Router, private formeBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.boutique_id = this.activatedRouter.snapshot.paramMap.get('id');

    //Initialiser form
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
      statut: this.formeBuilder.control('Activé')
    });

    if (this.boutique_id) {
      this.preLoadCateg(this.boutique_id);
    }
  }

  preLoadCateg(boutique_id: string | null) {

    this.boutiqueService.get_Id_Boutique(boutique_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.boutiqueSelected = result;

      //initialiser form
      this.boutiqueForm = this.formeBuilder.group({
        statut: this.formeBuilder.control(result.statut),
        nom: this.formeBuilder.control(result.nom, [Validators.required]),
        adresse: this.formeBuilder.control(result.adresse, [Validators.required]),
        telephone: this.formeBuilder.control(result.telephone),
        email: this.formeBuilder.control(result.email),
        pays: this.formeBuilder.control(result.pays),
        region: this.formeBuilder.control(result.region),
        ville: this.formeBuilder.control(result.ville),
        quartier: this.formeBuilder.control(result.quartier),
        rue: this.formeBuilder.control(result.rue),
        porte: this.formeBuilder.control(result.porte),
        logo: this.formeBuilder.control(result.logo),
        baderole: this.formeBuilder.control(result.baderole)
      });
    });
  }

  enregistrer() {
    // console.log('Register ', this.boutiqueForm.value);

    if (this.boutiqueForm.valid) {
      this.boutiqueService.putBoutique(this.boutiqueSelected.id, this.boutiqueForm.value).subscribe((result: any) => {
        // console.log(result);
        this.boutiqueForm.reset();
      });
    } else {
      this.boutiqueForm.markAllAsTouched();
    }
  }
}
