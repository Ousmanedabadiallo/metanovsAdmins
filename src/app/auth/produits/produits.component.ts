import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ProduitService } from 'src/app/_services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent {
  currentuser: unknown;
  produits: any;

  constructor( private authService: AuthService, private produitService: ProduitService) {
    
    this.authService.refreshToken();

    this.authService.subjectUser.subscribe(data => {
      this.currentuser = data;
      // console.log('UserSubjet ', data);
      this.getProduit();
    });
  }

  ngOnInit(): void {
  }

  getProduit() {
    this.produitService.getProduit().subscribe((result:any) => {
      console.log('Produit ', result);
      this.produits = result.data;
    });
  }
}
