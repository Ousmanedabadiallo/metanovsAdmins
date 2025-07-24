import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/_interfaces/produit';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { CategorieService } from 'src/app/_services/categorie.service';
import { ProduitService } from 'src/app/_services/produit.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-produitsvoir',
  templateUrl: './produitsvoir.component.html',
  styleUrls: ['./produitsvoir.component.scss']
})
export class ProduitsvoirComponent {

  produit_id!: string | null;
  produitSelected!: Produit;
  categories: any;
  boutiques: any;

  constructor(private activatedRouter: ActivatedRoute, private produitService: ProduitService,
    private categorieService: CategorieService, private boutiqueService: BoutiqueService,
    private userService: UserService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.produit_id = this.activatedRouter.snapshot.paramMap.get('id');
    
    if(this.produit_id) {
      this.preLoadProduit(this.produit_id);
    }
  }

  preLoadProduit(produit_id: string | null) {

    this.produitService.get_Id_Produit(produit_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      this.produitSelected = resultat.data;
  });
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
