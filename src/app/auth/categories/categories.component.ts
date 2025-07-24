import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/_services/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories: any;

  constructor(private categorieService: CategorieService, private router: Router) {
      this.get_categorie();
  }

  get_categorie() {
    this.categorieService.getCategorie().subscribe(((categories: any) => {
      // console.log('all categories ', categories);
      this.categories = categories.data;
    }));
  }
}
