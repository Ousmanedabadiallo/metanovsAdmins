import { Component } from '@angular/core';

@Component({
  selector: 'app-livreursnew',
  templateUrl: './livreursnew.component.html',
  styleUrls: ['./livreursnew.component.scss']
})
export class LivreursnewComponent {
  afficherMessage: boolean = false;

  changerAffichage() {
    this.afficherMessage = !this.afficherMessage;
  }

}
