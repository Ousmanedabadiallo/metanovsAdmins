import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaysService } from 'src/app/_services/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss']
})
export class PaysComponent {

  pays: any;

  constructor( private payService: PaysService, private router: Router) {
      this.get_user();
  }

  get_user() {
    this.payService.getPays().subscribe(((pays: any) => {
      // console.log('all pays ', pays);
      this.pays = pays.data;
    }));
  }
}
