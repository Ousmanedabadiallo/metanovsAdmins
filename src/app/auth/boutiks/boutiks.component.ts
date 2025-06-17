import { Component } from '@angular/core';
import { Boutique } from 'src/app/_interfaces/boutique';
import { AuthService } from 'src/app/_services/auth.service';
import { BoutiqueService } from 'src/app/_services/boutique.service';

@Component({
  selector: 'app-boutiks',
  templateUrl: './boutiks.component.html',
  styleUrls: ['./boutiks.component.scss']
})
export class BoutiksComponent {
  currentuser: unknown;
  boutiques: any;

  constructor( private authService: AuthService, private boutiqueService: BoutiqueService) {
    
    this.authService.refreshToken();

    this.authService.subjectUser.subscribe(data => {
      this.currentuser = data;
      // console.log('UserSubjet ', data);
      this.getBoutique();
    });
  }

  ngOnInit(): void {
  }

  getBoutique() {
    this.boutiqueService.getBoutique().subscribe((result:any) => {
      console.log('Boutique ', result);
      this.boutiques = result.data;
    });
  }
}
