import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { CategorieService } from 'src/app/_services/categorie.service';
import { PaysService } from 'src/app/_services/pays.service';
import { ProduitService } from 'src/app/_services/produit.service';
import { UserService } from 'src/app/_services/user.service';
import { VilleService } from 'src/app/_services/ville.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent {

  boutiques: any;
  produits: any;
  categories: any;
  villes: any;
  clients: any;
  users: any;
  pays: any;

  constructor(private boutiqueService: BoutiqueService, private produitService: ProduitService, private router: Router,
    private categorieService: CategorieService, private villeService: VilleService, private userService: UserService,
   private payService: PaysService,) {
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
      this.get_Ville();
    }));
  }

  get_Ville() {
    this.villeService.getVille().subscribe(((villes: any) => {
      // console.log('all villes ', villes);
      this.villes = villes.data;
      this.get_Pays();
    }));
  }

  get_Pays() {
    this.payService.getPays().subscribe(((pays: any) => {
      // console.log('all pays ', pays);
      this.pays = pays.data;
      this.get_Client();
    }));
  }

  get_Client() {
    this.userService.getClientUser().subscribe(((clients: any) => {
      // console.log('all clients ', clients);
      this.clients = clients.data;
      this.get_User();
    }));
  }

  get_User() {
    this.userService.getUser().subscribe(((users: any) => {
      // console.log('all users ', users);
      this.users = users.data;
      // this.get_categorie();
    }));
  }
}
