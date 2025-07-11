import { Component } from '@angular/core';

@Component({
  selector: 'app-clientsnew',
  templateUrl: './clientsnew.component.html',
  styleUrls: ['./clientsnew.component.scss']
})
export class ClientsnewComponent {
  afficherMessage: boolean = false;

  changerAffichage() {
    this.afficherMessage = !this.afficherMessage;
  }

}
