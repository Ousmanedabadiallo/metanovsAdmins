import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { CategorieService } from 'src/app/_services/categorie.service';
import { ProduitService } from 'src/app/_services/produit.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent {

  produits: any;
  currentUser: any;
  categories: any;
  boutiques: any;

  constructor(private authService: AuthService, private categorieService: CategorieService, private boutiqueService: BoutiqueService,
    private produitService: ProduitService, private router: Router) {

    this.authService.refreshToken();

    this.authService.subjectUser.subscribe(data => {
      this.currentUser = data;
      // console.log('UserSubjet ', data);
      this.get_Produit(this.currentUser.boutique_id);
    });
  }

  get_Produit(boutique_id: any) {
    this.produitService.get_ProduitByBoutiqueId(boutique_id).subscribe(((produits: any) => {
      // console.log('all users ', users);
      this.produits = produits.data;
      this.get_categorie();
    }));
  }
  
  get_categorie() {
    this.categorieService.getCategorie().subscribe(((categories: any) => {
      // console.log('all categories ', categories);
      this.categories = categories.data;
    }));
    this.get_boutique();
  }

  get_boutique() {
    this.boutiqueService.getBoutique().subscribe(((boutiques: any) => {
      // console.log('all boutiques ', boutiques);
      this.boutiques = boutiques.data;
    }));
  }
}
