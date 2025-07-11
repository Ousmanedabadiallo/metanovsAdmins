import { Component } from '@angular/core';

@Component({
  selector: 'app-usersnew',
  templateUrl: './usersnew.component.html',
  styleUrls: ['./usersnew.component.scss']
})
export class UsersnewComponent {
  afficherMessage: boolean = false;

  changerAffichage() {
    this.afficherMessage = !this.afficherMessage;
  }

}
