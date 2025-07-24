import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/_services/categorie.service';

@Component({
  selector: 'app-categoriesnew',
  templateUrl: './categoriesnew.component.html',
  styleUrls: ['./categoriesnew.component.scss']
})
export class CategoriesnewComponent {

  categForm!: FormGroup;

  constructor(private categorieService: CategorieService, private router: Router, private formeBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    //Users Initialiser form
    this.categForm = this.formeBuilder.group({
      designation: this.formeBuilder.control('', [Validators.required]),
      description: this.formeBuilder.control('', [Validators.required]),
      statut: this.formeBuilder.control('Activé')
    });

  }

  enregistrer() {
    // console.log('Register ', this.categForm.value);

    if (this.categForm.valid) {
      this.categorieService.postCategorie(this.categForm.value).subscribe((result: any) => {
        // console.log(result);
        this.categForm.reset();
      });
    } else {
      this.categForm.markAllAsTouched();
    }
  }
}
