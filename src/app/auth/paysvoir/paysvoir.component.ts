import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from 'src/app/_services/pays.service';

@Component({
  selector: 'app-paysvoir',
  templateUrl: './paysvoir.component.html',
  styleUrls: ['./paysvoir.component.scss']
})
export class PaysvoirComponent {

  pays_id!: string | null;
  paySelected!: any;

  constructor(private activatedRouter: ActivatedRoute,
    private payService: PaysService, private router: Router) {
    
  }

  ngOnInit(): void {
    this.pays_id = this.activatedRouter.snapshot.paramMap.get('id');
    
    if(this.pays_id) {
      this.preLoadVille(this.pays_id);
    }
  }

  preLoadVille(pays_id: string | null) {

    this.payService.get_Id_Pays(pays_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.paySelected = result;
    });
  }
}
