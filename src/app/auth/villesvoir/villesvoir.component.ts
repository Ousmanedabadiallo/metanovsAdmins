import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from 'src/app/_services/pays.service';
import { VilleService } from 'src/app/_services/ville.service';

@Component({
  selector: 'app-villesvoir',
  templateUrl: './villesvoir.component.html',
  styleUrls: ['./villesvoir.component.scss']
})
export class VillesvoirComponent {

  ville_id!: string | null;
  villeSelected!: any;
  pays: any;

  constructor(private activatedRouter: ActivatedRoute, private villeService: VilleService,
    private payService: PaysService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.ville_id = this.activatedRouter.snapshot.paramMap.get('id')
    
    if(this.ville_id) {
      this.preLoadVille(this.ville_id);
    }
  }

  preLoadVille(ville_id: string | null) {

    this.villeService.get_Id_Ville(ville_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      this.villeSelected = resultat.data;
    });
  }

  get_pays() {
    this.payService.getPays().subscribe(((pays: any) => {
      // console.log('all types pays ', pays);
      this.pays = pays.data;
    }));
  }
}
