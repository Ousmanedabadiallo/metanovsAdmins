import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/_interfaces/produit';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { CategorieService } from 'src/app/_services/categorie.service';
import { ProduitService } from 'src/app/_services/produit.service';

@Component({
  selector: 'app-produitsmod',
  templateUrl: './produitsmod.component.html',
  styleUrls: ['./produitsmod.component.scss']
})
export class ProduitsmodComponent {

  produit_id!: string | null;
  produitForm!: FormGroup;
  produitSelected!: Produit;
  categories: any;
  boutiques: any;

  constructor(private activatedRouter: ActivatedRoute, private produitService: ProduitService,
    private categorieService: CategorieService, private boutiqueService: BoutiqueService,
    private router: Router, private formeBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.produit_id = this.activatedRouter.snapshot.paramMap.get('id');

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
    
    if(this.produit_id) {
      this.preLoadProduit(this.produit_id);
    }
  }

  preLoadProduit(produit_id: string | null) {

    this.produitService.get_Id_Produit(produit_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.produitSelected = result;

      //Produit initialiser form
      this.produitForm = this.formeBuilder.group({
        nom: this.formeBuilder.control(result.nom, [Validators.required]),
        modele: this.formeBuilder.control(result.modele),
        prix_unitaire: this.formeBuilder.control(result.prix_unitaire),
        prix_de_vente_unitaire: this.formeBuilder.control(result.prix_de_vente_unitaire),
        quantite: this.formeBuilder.control(result.quantite),
        description: this.formeBuilder.control(result.description),
        img1: this.formeBuilder.control(result.img1),
        img2: this.formeBuilder.control(result.img2),
        img3: this.formeBuilder.control(result.img3),
        boutique_id: this.formeBuilder.control(result.boutique_id),
        categorie_produit_id: this.formeBuilder.control(result.categorie_produit_id),
        marque: this.formeBuilder.control(result.marque),
        statut: this.formeBuilder.control(result.statut)
      });
    });
    this.get_categorie();
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
      this.produitService.putProduit(this.produitSelected.boutique_id, this.produitForm.value).subscribe((result: any)  => {
        console.log(result);
        this.produitForm.reset();
      });
    } else {
      this.produitForm.markAllAsTouched();
    }
  }
}
