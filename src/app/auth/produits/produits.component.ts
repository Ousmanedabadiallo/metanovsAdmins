import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { ProduitService } from 'src/app/_services/produit.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent {

  produits: any;

  constructor(private authService: AuthService, 
    private userService: UserService, private produitService: ProduitService, private router: Router) {
      this.get_Produit();
  }

  get_Produit() {
    this.produitService.getProduit().subscribe(((produits: any) => {
      // console.log('all users ', users);
      this.produits = produits.data;
    }));
  }
}
