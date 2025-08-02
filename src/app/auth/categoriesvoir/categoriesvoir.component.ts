import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/_services/categorie.service';

@Component({
  selector: 'app-categoriesvoir',
  templateUrl: './categoriesvoir.component.html',
  styleUrls: ['./categoriesvoir.component.scss']
})
export class CategoriesvoirComponent {

  categ_id!: string | null;
  categSelected: any;

  constructor(private activatedRouter: ActivatedRoute,
    private categorieService: CategorieService, private router: Router) {

  }

  ngOnInit(): void {
    this.categ_id = this.activatedRouter.snapshot.paramMap.get('id');

    if (this.categ_id) {
      this.preLoadCateg(this.categ_id);
    }
  }

  preLoadCateg(categ_id: string | null) {

    this.categorieService.get_Id_Categorie(categ_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.categSelected = result;
    });
  }
}
