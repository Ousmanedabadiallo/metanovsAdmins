import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaysService } from 'src/app/_services/pays.service';

@Component({
  selector: 'app-paysnew',
  templateUrl: './paysnew.component.html',
  styleUrls: ['./paysnew.component.scss']
})
export class PaysnewComponent {

  pays_id!: string | null;
  paysForm!: FormGroup;
  pays: any;

  constructor(private payService: PaysService, private router: Router, private formeBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    //Users Initialiser form
    this.paysForm = this.formeBuilder.group({
      designation: this.formeBuilder.control('', [Validators.required]),
      description: this.formeBuilder.control('', [Validators.required]),
      indicatif: this.formeBuilder.control(''),
    });
  }

  enregistrer() {
    if (this.paysForm.valid) {
      this.payService.postPays(this.paysForm.value).subscribe((result: any)  => {
        // console.log(result);
        this.paysForm.reset();
      });
    } else {
      this.paysForm.markAllAsTouched();
    }
  }
}
