import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaysService } from 'src/app/_services/pays.service';
import { VilleService } from 'src/app/_services/ville.service';

@Component({
  selector: 'app-villesnew',
  templateUrl: './villesnew.component.html',
  styleUrls: ['./villesnew.component.scss']
})
export class VillesnewComponent {

  villeForm!: FormGroup;
  pays: any;

  constructor(private payService: PaysService, private router: Router, private formeBuilder: FormBuilder,
    private villeService: VilleService) {
    this.get_pays();
  }

  ngOnInit(): void {

    //Users Initialiser form
    this.villeForm = this.formeBuilder.group({
      designation: this.formeBuilder.control('', [Validators.required]),
      description: this.formeBuilder.control('', [Validators.required]),
      pays_id: this.formeBuilder.control(''),
    });
  }

  get_pays() {
    this.payService.getPays().subscribe(((pays: any) => {
      // console.log('all types users ', types);
      this.pays = pays.data;
    }));
  }

  enregistrer() {
    if (this.villeForm.valid) {
      this.villeService.postVille(this.villeForm.value).subscribe((result: any) => {
        // console.log(result);
        this.villeForm.reset();
      });
    } else {
      this.villeForm.markAllAsTouched();
    }
  }
}
