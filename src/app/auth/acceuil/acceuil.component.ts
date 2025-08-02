import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { CategorieService } from 'src/app/_services/categorie.service';
import { ProduitService } from 'src/app/_services/produit.service';
import { VilleService } from 'src/app/_services/ville.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {

  boutiques: any;
  produits: any;
  categories: any;

  constructor(private boutiqueService: BoutiqueService, private produitService: ProduitService, private router: Router,
    private categorieService: CategorieService, private villeService: VilleService,) {
      this.get_Boutique();
  }

  get_Boutique() {
    this.boutiqueService.getBoutique().subscribe(((boutiques: any) => {
      // console.log('all boutiques ', boutiques);
      this.boutiques = boutiques.data;
      this.get_Produit();
    }));
  }

  get_Produit() {
    this.produitService.getProduit().subscribe(((produits: any) => {
      // console.log('all boutiques ', boutiques);
      this.produits = produits.data;
      this.get_categorie();
    }));
  }
  
  get_categorie() {
    this.categorieService.getCategorie().subscribe(((categories: any) => {
      // console.log('all categories ', categories);
      this.categories = categories.data;
    }));
  }

  // get_Ville() {
  //   this.villeService.getVille().subscribe(((produits: any) => {
  //     // console.log('all boutiques ', boutiques);
  //     this.produits = produits.data;
  //     // this.get_categorie();
  //   }));
  // }
}
