import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/_services/categorie.service';

@Component({
  selector: 'app-categoriesmod',
  templateUrl: './categoriesmod.component.html',
  styleUrls: ['./categoriesmod.component.scss']
})
export class CategoriesmodComponent {

  categ_id!: string | null;
  categForm!: FormGroup;
  categSelected!: any;

  constructor(private activatedRouter: ActivatedRoute,
    private categorieService: CategorieService, private router: Router, private formeBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.categ_id = this.activatedRouter.snapshot.paramMap.get('id');

    //Users Initialiser form
    this.categForm = this.formeBuilder.group({
      designation: this.formeBuilder.control('', [Validators.required]),
      description: this.formeBuilder.control('', [Validators.required]),
      statut: this.formeBuilder.control('Activé')
    });
    
    if(this.categ_id) {
      this.preLoadCateg(this.categ_id);
    }
  }

  preLoadCateg(categ_id: string | null) {

    this.categorieService.get_Id_Categorie(categ_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.categSelected = result;

      //Prof initialiser form
      this.categForm = this.formeBuilder.group({
        designation: this.formeBuilder.control(result.designation, [Validators.required]),
        description: this.formeBuilder.control(result.description),
        statut: this.formeBuilder.control(result.statut)
      });
    });
  }

  enregistrer() {
    // console.log('Register ', this.categForm.value);

    if (this.categForm.valid) {
      this.categorieService.putCategorie(this.categSelected.id, this.categForm.value).subscribe((result: any)  => {
        // console.log(result);
        this.categForm.reset();
      });
    } else {
      this.categForm.markAllAsTouched();
    }
  }
}
