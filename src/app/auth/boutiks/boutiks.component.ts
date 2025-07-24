import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueService } from 'src/app/_services/boutique.service';

@Component({
  selector: 'app-boutiks',
  templateUrl: './boutiks.component.html',
  styleUrls: ['./boutiks.component.scss']
})
export class BoutiksComponent {

  boutiques: any;

  constructor(private boutiqueService: BoutiqueService, private router: Router) {
      this.get_Boutique();
  }

  get_Boutique() {
    this.boutiqueService.getBoutique().subscribe(((boutiques: any) => {
      // console.log('all boutiques ', boutiques);
      this.boutiques = boutiques.data;
    }));
  }
}
