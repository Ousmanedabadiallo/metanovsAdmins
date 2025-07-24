import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { CategorieService } from 'src/app/_services/categorie.service';
import { ProduitService } from 'src/app/_services/produit.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-produitsnew',
  templateUrl: './produitsnew.component.html',
  styleUrls: ['./produitsnew.component.scss']
})
export class ProduitsnewComponent {
  ongletActif: number = 1;
  
    produitForm!: FormGroup;
    categories: any;
    boutiques: any;
  
    constructor(private categorieService: CategorieService, private boutiqueService: BoutiqueService,
      private produitService: ProduitService, private router: Router, private formeBuilder: FormBuilder) {
      
    }
  
    ngOnInit(): void {
  
      //Produit Initialiser form
      this.produitForm = this.formeBuilder.group({
        nom: this.formeBuilder.control('', [Validators.required]),
        modele: this.formeBuilder.control(''),
        prix_unitaire: this.formeBuilder.control(''),
        prix_de_vente_unitaire: this.formeBuilder.control(''),
        quantite: this.formeBuilder.control(''),
        description: this.formeBuilder.control(''),
        img1: this.formeBuilder.control(''),
        img2: this.formeBuilder.control(''),
        img3: this.formeBuilder.control(''),
        categorie_produit_id: this.formeBuilder.control(''),
        boutique_id: this.formeBuilder.control(''),
        marque: this.formeBuilder.control(''),
        statut: this.formeBuilder.control('Activé')
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
  
    enregistrer() {
      // console.log('Register ', this.produitForm.value);
  
      if (this.produitForm.valid) {
        this.produitService.postProduit(this.produitForm.value).subscribe((result: any)  => {
          console.log(result);
          this.produitForm.reset();
        });
      } else {
        this.produitForm.markAllAsTouched();
      }
    }

}
