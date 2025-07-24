import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from 'src/app/_services/pays.service';
import { VilleService } from 'src/app/_services/ville.service';

@Component({
  selector: 'app-villesmod',
  templateUrl: './villesmod.component.html',
  styleUrls: ['./villesmod.component.scss']
})
export class VillesmodComponent {

  ville_id!: string | null;
  villeForm!: FormGroup;
  villeSelected!: any;
  pays: any;

  constructor(private activatedRouter: ActivatedRoute, private villeService: VilleService,
    private payService: PaysService, private router: Router, private formeBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.ville_id = this.activatedRouter.snapshot.paramMap.get('id');

    //Users Initialiser form
    this.villeForm = this.formeBuilder.group({
      designation: this.formeBuilder.control('', [Validators.required]),
      description: this.formeBuilder.control('', [Validators.required]),
      pays_id: this.formeBuilder.control(''),
    });
    
    if(this.ville_id) {
      this.preLoadVille(this.ville_id);
    }
  }

  preLoadVille(ville_id: string | null) {

    this.villeService.get_Id_Ville(ville_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.villeSelected = result;

      //Pays initialiser form
      this.villeForm = this.formeBuilder.group({
        designation: this.formeBuilder.control(result.designation),
        description: this.formeBuilder.control(result.description),
        pays_id: this.formeBuilder.control(result.pays_id)
      });
    });
  }

  get_pays() {
    this.payService.getPays().subscribe(((pays: any) => {
      // console.log('all types pays ', pays);
      this.pays = pays.data;
    }));
  }

  enregistrer() {
    if (this.villeForm.valid) {
      this.villeService.putVille(this.villeSelected.id, this.villeForm.value).subscribe((result: any)  => {
        // console.log(result);
        this.villeForm.reset();
      });
    } else {
      this.villeForm.markAllAsTouched();
    }
  }
}
