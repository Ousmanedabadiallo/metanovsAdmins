import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoutiqueService } from 'src/app/_services/boutique.service';

@Component({
  selector: 'app-boutiks-new',
  templateUrl: './boutiks-new.component.html',
  styleUrls: ['./boutiks-new.component.scss']
})
export class BoutiksNewComponent {

  boutiqueForm!: FormGroup;

  constructor(private boutiqueService: BoutiqueService, private router: Router, private formeBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    //Users Initialiser form
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

  }

  enregistrer() {
    // console.log('Register ', this.boutiqueForm.value);

    if (this.boutiqueForm.valid) {
      this.boutiqueService.postBoutique(this.boutiqueForm.value).subscribe((result: any) => {
        // console.log(result);
        this.boutiqueForm.reset();
      });
    } else {
      this.boutiqueForm.markAllAsTouched();
    }
  }

}
