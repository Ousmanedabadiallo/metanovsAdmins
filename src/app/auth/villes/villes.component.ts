import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VilleService } from 'src/app/_services/ville.service';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss']
})
export class VillesComponent {

  villes: any;

  constructor(private villeService: VilleService, private router: Router) {
      this.get_ville();
  }

  get_ville() {
    this.villeService.getVille().subscribe(((villes: any) => {
      // console.log('all villes ', villes);
      this.villes = villes.data;
    }));
  }
}
