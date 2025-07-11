import { Component } from '@angular/core';

@Component({
  selector: 'app-pointsnew',
  templateUrl: './pointsnew.component.html',
  styleUrls: ['./pointsnew.component.scss']
})
export class PointsnewComponent {
  afficherMessage: boolean = false;

  changerAffichage() {
    this.afficherMessage = !this.afficherMessage;
  }

}
