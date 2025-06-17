import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { CategorieService } from 'src/app/_services/categorie.service';
import { ProduitService } from 'src/app/_services/produit.service';

@Component({
  selector: 'app-produitsnew',
  templateUrl: './produitsnew.component.html',
  styleUrls: ['./produitsnew.component.scss']
})
export class ProduitsnewComponent {
  currentuser: any;
  categories: any;
  produitForm!: FormGroup;

  constructor(private formeBuilder: FormBuilder, private authService: AuthService, private produitService: ProduitService, private categorieService: CategorieService) {

    this.authService.refreshToken();

    this.authService.subjectUser.subscribe(data => {
      this.currentuser = data;
      // console.log('UserSubjet ', data);
      this.getCategorie();
    });
  }
  ngOnInit(): void {

    //Login Initialiser form
    this.produitForm = this.formeBuilder.group({
      nom: this.formeBuilder.control(''),
      modele: this.formeBuilder.control(''),
      prix_unitaire: this.formeBuilder.control(''),
      prix_de_vente_unitaire: this.formeBuilder.control(''),
      quantite: this.formeBuilder.control(''),
      description: this.formeBuilder.control(''),
      img1: this.formeBuilder.control(''),
      img2: this.formeBuilder.control(''),
      img3: this.formeBuilder.control(''),
      categorie_produit_id: this.formeBuilder.control(''),
      boutique_id: this.formeBuilder.control(1),
      marque: this.formeBuilder.control(''),
      statut: this.formeBuilder.control('Activé')
    });
  }

  getCategorie() {
    this.categorieService.getCategorie().subscribe((result:any) => {
      console.log('Categorie Produit ', result);
      this.categories = result.data;
    });
  }

  //Controller form
  // public control(attribut: string) {
  //   var result: any;
  //   if (attribut == 'nom') {
  //     return result = this.boutiqueForm.get(attribut);
  //   } else if (attribut == 'adresse') {
  //     return result = this.boutiqueForm.get(attribut);
  //   }
  //   return result;
  // }


  valide() {
    console.log('Post ', this.produitForm.value);

    if (this.produitForm.valid) {
      this.produitService.postProduit(this.produitForm.value).subscribe((result:any) =>{
        console.log('Resultat POST', result);
        alert(result?.message);
        this.produitForm.reset();
      });
    } else {
      this.produitForm.markAllAsTouched();
    }
  }
}
