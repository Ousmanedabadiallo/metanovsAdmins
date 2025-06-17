import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './card/card.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategorieslistesComponent } from './categorieslistes/categorieslistes.component';
import { BoutiksComponent } from './boutiks/boutiks.component';
import { BoutiksNewComponent } from './boutiks-new/boutiks-new.component';
import { BoutiksmodComponent } from './boutiksmod/boutiksmod.component';
import { BoutiksvoirComponent } from './boutiksvoir/boutiksvoir.component';
import { ProduitsmodComponent } from './produitsmod/produitsmod.component';
import { ProduitsvoirComponent } from './produitsvoir/produitsvoir.component';
import { ProduitsnewComponent } from './produitsnew/produitsnew.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategoriesnewComponent } from './categoriesnew/categoriesnew.component';
import { CategoriesmodComponent } from './categoriesmod/categoriesmod.component';
import { CategoriesvoirComponent } from './categoriesvoir/categoriesvoir.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsnewComponent } from './clientsnew/clientsnew.component';
import { ClientsmodComponent } from './clientsmod/clientsmod.component';
import { ClientsvoirComponent } from './clientsvoir/clientsvoir.component';
import { MarquesComponent } from './marques/marques.component';
import { MarquesvoirComponent } from './marquesvoir/marquesvoir.component';
import { MarquesmodComponent } from './marquesmod/marquesmod.component';
import { MarquesnewComponent } from './marquesnew/marquesnew.component';
import { PointsComponent } from './points/points.component';
import { PointsnewComponent } from './pointsnew/pointsnew.component';
import { PointsvoirComponent } from './pointsvoir/pointsvoir.component';
import { PointsmodComponent } from './pointsmod/pointsmod.component';
import { VillesComponent } from './villes/villes.component';
import { VillesnewComponent } from './villesnew/villesnew.component';
import { VillesmodComponent } from './villesmod/villesmod.component';
import { VillesvoirComponent } from './villesvoir/villesvoir.component';
import { PaysComponent } from './pays/pays.component';
import { PaysvoirComponent } from './paysvoir/paysvoir.component';
import { PaysmodComponent } from './paysmod/paysmod.component';
import { PaysnewComponent } from './paysnew/paysnew.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'accueil'},
    { path: 'accueil', component: AcceuilComponent, data: { title: 'Tableau de bord | Admin - MB • METATNOVA' }},
    { path: 'profile', component: ProfileComponent, data: { title: 'Profile | Admin - MB • METATNOVA' }},
    { path: 'pannier', component: CardComponent, data: { title: 'Pannier | Admin - MB • METATNOVA' }},
    { path: 'mode-payement', component: ChekoutComponent, data: { title: 'Mode de payement | Admin - MB • METATNOVA' }},
    { path: 'categories', component: CategoriesComponent, data: { title: 'Détail catégaries | Admin - MB • METATNOVA' }},
    { path: 'categories-listes', component: CategorieslistesComponent, data: { title: 'Listes des catégaries | Admin - MB • METATNOVA' }},
    { path: 'boutiques', component: BoutiksComponent, data: { title: 'Liste des boutiques | Admin - MB • METATNOVA' }},
    { path: 'boutiques-new', component: BoutiksNewComponent, data: { title: 'Nouveau boutique | Admin - MB • METATNOVA' }},
    { path: 'boutiques-modifier', component: BoutiksmodComponent, data: { title: 'Modifier boutique | Admin - MB • METATNOVA' }},
    { path: 'boutiques-voir', component: BoutiksvoirComponent, data: { title: 'Voir boutique | Admin - MB • METATNOVA' }},
    { path: 'produits', component: ProduitsComponent, data: { title: 'Liste des produits | Admin - MB • METATNOVA' }},
    { path: 'produits-new', component: ProduitsnewComponent, data: { title: 'Nouveau produit | Admin - MB • METATNOVA' }},
    { path: 'produits-modifier', component: ProduitsmodComponent, data: { title: 'Modifier produit | Admin - MB • METATNOVA' }},
    { path: 'produits-voir', component: ProduitsvoirComponent, data: { title: 'Voir produit | Admin - MB • METATNOVA' }},
    { path: 'categories-new', component: CategoriesnewComponent, data: { title: 'Nouveau catégories | Admin - MB • METATNOVA' }},
    { path: 'categories-modifier', component: CategoriesmodComponent, data: { title: 'Modifier catégories | Admin - MB • METATNOVA' }},
    { path: 'categories-voir', component: CategoriesvoirComponent, data: { title: 'Voir catégories | Admin - MB • METATNOVA' }},
    { path: 'clients', component: ClientsComponent, data: { title: 'Liste des clients | Admin - MB • METATNOVA' }},
    { path: 'clients-new', component: ClientsnewComponent, data: { title: 'Nouveau client | Admin - MB • METATNOVA' }},
    { path: 'clients-modifier', component: ClientsmodComponent, data: { title: 'Modifier client | Admin - MB • METATNOVA' }},
    { path: 'clients-voir', component: ClientsvoirComponent, data: { title: 'Voir client | Admin - MB • METATNOVA' }},
    { path: 'marques', component: MarquesComponent, data: { title: 'Liste des marques | Admin - MB • METATNOVA' }},
    { path: 'marques-new', component: MarquesnewComponent, data: { title: 'Nouveau marque | Admin - MB • METATNOVA' }},
    { path: 'marques-modifier', component: MarquesmodComponent, data: { title: 'Modifier marque | Admin - MB • METATNOVA' }},
    { path: 'marques-voir', component: MarquesvoirComponent, data: { title: 'Voir marque | Admin - MB • METATNOVA' }},
    { path: 'points', component: PointsComponent, data: { title: 'Liste des points | Admin - MB • METATNOVA' }},
    { path: 'points-new', component: PointsnewComponent, data: { title: 'Nouveau Sites | Admin - MB • METATNOVA' }},
    { path: 'points-modifier', component: PointsmodComponent, data: { title: 'Modifier Sites | Admin - MB • METATNOVA' }},
    { path: 'points-voir', component: PointsvoirComponent, data: { title: 'Voir Sites | Admin - MB • METATNOVA' }},
    { path: 'villes', component: VillesComponent, data: { title: 'Liste des villes | Admin - MB • METATNOVA' }},
    { path: 'villes-new', component: VillesnewComponent, data: { title: 'Nouveau ville | Admin - MB • METATNOVA' }},
    { path: 'villes-modifier', component: VillesmodComponent, data: { title: 'Modifier ville | Admin - MB • METATNOVA' }},
    { path: 'villes-voir', component: VillesvoirComponent, data: { title: 'Voir ville | Admin - MB • METATNOVA' }},
    { path: 'pays', component: PaysComponent, data: { title: 'Liste des pays | Admin - MB • METATNOVA' }},
    { path: 'pays-new', component: PaysnewComponent, data: { title: 'Nouveau pay | Admin - MB • METATNOVA' }},
    { path: 'pays-modifier', component: PaysmodComponent, data: { title: 'Modifier pay | Admin - MB • METATNOVA' }},
    { path: 'pays-voir', component: PaysvoirComponent, data: { title: 'Voir pay | Admin - MB • METATNOVA' }},
        
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
