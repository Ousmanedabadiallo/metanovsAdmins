import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/_services/categorie.service';

@Component({
  selector: 'app-categorieslistes',
  templateUrl: './categorieslistes.component.html',
  styleUrls: ['./categorieslistes.component.scss']
})
export class CategorieslistesComponent {

  categories: any;

  constructor(private categorieService: CategorieService, private router: Router) {
      this.get_Produit();
  }

  get_Produit() {
    this.categorieService.getCategorie().subscribe(((categories: any) => {
      // console.log('all categories ', categories);
      this.categories = categories.data;
    }));
  }
}
