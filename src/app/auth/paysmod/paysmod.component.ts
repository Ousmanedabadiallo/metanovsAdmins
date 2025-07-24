import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from 'src/app/_services/pays.service';

@Component({
  selector: 'app-paysmod',
  templateUrl: './paysmod.component.html',
  styleUrls: ['./paysmod.component.scss']
})
export class PaysmodComponent {

  pays_id!: string | null;
  paysForm!: FormGroup;
  paySelected!: any;

  constructor(private activatedRouter: ActivatedRoute,
    private payService: PaysService, private router: Router, private formeBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.pays_id = this.activatedRouter.snapshot.paramMap.get('id');

    //Users Initialiser form
    this.paysForm = this.formeBuilder.group({
      designation: this.formeBuilder.control('', [Validators.required]),
      description: this.formeBuilder.control('', [Validators.required]),
      indicatif: this.formeBuilder.control(''),
    });
    
    if(this.pays_id) {
      this.preLoadVille(this.pays_id);
    }
  }

  preLoadVille(pays_id: string | null) {

    this.payService.get_Id_Pays(pays_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.paySelected = result;

      //Pays initialiser form
      this.paysForm = this.formeBuilder.group({
        designation: this.formeBuilder.control(result.designation),
        description: this.formeBuilder.control(result.description),
        indicatif: this.formeBuilder.control(result.indicatif)
      });
    });
  }

  enregistrer() {
    if (this.paysForm.valid) {
      this.payService.putPays(this.paySelected.id, this.paysForm.value).subscribe((result: any)  => {
        // console.log(result);
        this.paysForm.reset();
      });
    } else {
      this.paysForm.markAllAsTouched();
    }
  }
}
