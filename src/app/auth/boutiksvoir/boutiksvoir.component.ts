import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoutiqueService } from 'src/app/_services/boutique.service';

@Component({
  selector: 'app-boutiksvoir',
  templateUrl: './boutiksvoir.component.html',
  styleUrls: ['./boutiksvoir.component.scss']
})
export class BoutiksvoirComponent {

  boutique_id!: string | null;
  boutiqueSelected!: any;

  constructor(private activatedRouter: ActivatedRoute,
    private boutiqueService: BoutiqueService, private router: Router) {

  }

  ngOnInit(): void {
    this.boutique_id = this.activatedRouter.snapshot.paramMap.get('id');

    if (this.boutique_id) {
      this.preLoadCateg(this.boutique_id);
    }
  }

  preLoadCateg(boutique_id: string | null) {

    this.boutiqueService.get_Id_Boutique(boutique_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.boutiqueSelected = result;
    });
  }
}
