import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AuthRoutingModule } from './auth-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieslistesComponent } from './categorieslistes/categorieslistes.component';
import { HeaderComponent } from './header/header.component';
import { BoutiksComponent } from './boutiks/boutiks.component';
import { BoutiksNewComponent } from './boutiks-new/boutiks-new.component';
import { BoutiksmodComponent } from './boutiksmod/boutiksmod.component';
import { BoutiksvoirComponent } from './boutiksvoir/boutiksvoir.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitsnewComponent } from './produitsnew/produitsnew.component';
import { ProduitsmodComponent } from './produitsmod/produitsmod.component';
import { ProduitsvoirComponent } from './produitsvoir/produitsvoir.component';
import { CategoriesnewComponent } from './categoriesnew/categoriesnew.component';
import { CategoriesmodComponent } from './categoriesmod/categoriesmod.component';
import { CategoriesvoirComponent } from './categoriesvoir/categoriesvoir.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsnewComponent } from './clientsnew/clientsnew.component';
import { ClientsmodComponent } from './clientsmod/clientsmod.component';
import { ClientsvoirComponent } from './clientsvoir/clientsvoir.component';
import { MarquesComponent } from './marques/marques.component';
import { MarquesnewComponent } from './marquesnew/marquesnew.component';
import { MarquesmodComponent } from './marquesmod/marquesmod.component';
import { MarquesvoirComponent } from './marquesvoir/marquesvoir.component';
import { PointsComponent } from './points/points.component';
import { PointsnewComponent } from './pointsnew/pointsnew.component';
import { PointsmodComponent } from './pointsmod/pointsmod.component';
import { PointsvoirComponent } from './pointsvoir/pointsvoir.component';
import { VillesComponent } from './villes/villes.component';
import { VillesnewComponent } from './villesnew/villesnew.component';
import { VillesmodComponent } from './villesmod/villesmod.component';
import { VillesvoirComponent } from './villesvoir/villesvoir.component';
import { PaysComponent } from './pays/pays.component';
import { PaysnewComponent } from './paysnew/paysnew.component';
import { PaysmodComponent } from './paysmod/paysmod.component';
import { PaysvoirComponent } from './paysvoir/paysvoir.component';

@NgModule({
    declarations: [
      AcceuilComponent,
      NavComponent,
      FooterComponent,
      ProfileComponent,
      CardComponent,
      ChekoutComponent,
      CategoriesComponent,
      CategorieslistesComponent,
      HeaderComponent,
      BoutiksComponent,
      BoutiksNewComponent,
      BoutiksmodComponent,
      BoutiksvoirComponent,
      ProduitsComponent,
      ProduitsnewComponent,
      ProduitsmodComponent,
      ProduitsvoirComponent,
      CategoriesnewComponent,
      CategoriesmodComponent,
      CategoriesvoirComponent,
      ClientsComponent,
      ClientsnewComponent,
      ClientsmodComponent,
      ClientsvoirComponent,
      MarquesComponent,
      MarquesnewComponent,
      MarquesmodComponent,
      MarquesvoirComponent,
      PointsComponent,
      PointsnewComponent,
      PointsmodComponent,
      PointsvoirComponent,
      VillesComponent,
      VillesnewComponent,
      VillesmodComponent,
      VillesvoirComponent,
      PaysComponent,
      PaysnewComponent,
      PaysmodComponent,
      PaysvoirComponent
    ],
    imports: [
      CommonModule,
      AuthRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ]
  })
  export class AuthModule { }