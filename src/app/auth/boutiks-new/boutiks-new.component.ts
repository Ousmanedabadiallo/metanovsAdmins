import { Component } from '@angular/core';

@Component({
  selector: 'app-boutiks-new',
  templateUrl: './boutiks-new.component.html',
  styleUrls: ['./boutiks-new.component.scss']
})
export class BoutiksNewComponent {
  afficherMessage: boolean = false;

  changerAffichage() {
    this.afficherMessage = !this.afficherMessage;
  }

}
