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
import { LivreurComponent } from './livreur/livreur.component';
import { LivreursnewComponent } from './livreursnew/livreursnew.component';
import { LivreursvoirComponent } from './livreursvoir/livreursvoir.component';
import { LivreurmodComponent } from './livreurmod/livreurmod.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { LivraisonsmodComponent } from './livraisonsmod/livraisonsmod.component';
import { LivraisonsvoirComponent } from './livraisonsvoir/livraisonsvoir.component';
import { LivraisonsnewComponent } from './livraisonsnew/livraisonsnew.component';
import { CommandesnewComponent } from './commandesnew/commandesnew.component';
import { CommandesComponent } from './commandes/commandes.component';
import { CommandesmodComponent } from './commandesmod/commandesmod.component';
import { CommandesvoirComponent } from './commandesvoir/commandesvoir.component';
import { UsersnewComponent } from './usersnew/usersnew.component';
import { UsersvoirComponent } from './usersvoir/usersvoir.component';
import { UsersmodComponent } from './usersmod/usersmod.component';
import { UsersComponent } from './users/users.component';
import { PasswordComponent } from './password/password.component';
import { LivraisonsgestsComponent } from './livraisonsgests/livraisonsgests.component';
import { AdminsComponent } from './admins/admins.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'accueil'},
    { path: 'accueil', component: AcceuilComponent, data: { title: 'Tableau de bord | Admin • METATNOV' }},
    { path: 'admins', component: AdminsComponent, data: { title: 'Admin tableau de bord  | Admin • METATNOV' }},
    { path: 'profile', component: ProfileComponent, data: { title: 'Profile | Admin • METATNOV' }},
    { path: 'password', component: PasswordComponent, data: { title: 'Modifier mot de passe | Admin • METATNOV' }},
    { path: 'pannier', component: CardComponent, data: { title: 'Pannier | Admin • METATNOV' }},
    { path: 'mode-payement', component: ChekoutComponent, data: { title: 'Mode de payement | Admin • METATNOV' }},
    { path: 'categories', component: CategoriesComponent, data: { title: 'Détail catégaries | Admin • METATNOV' }},
    { path: 'categories-listes', component: CategorieslistesComponent, data: { title: 'Listes des catégaries | Admin • METATNOV' }},
    { path: 'boutiques', component: BoutiksComponent, data: { title: 'Liste des boutiques | Admin • METATNOV' }},
    { path: 'boutiques-new', component: BoutiksNewComponent, data: { title: 'Nouveau boutique | Admin • METATNOV' }},
    { path: 'boutiques-modifier/:id', component: BoutiksmodComponent, data: { title: 'Modifier boutique | Admin • METATNOV' }},
    { path: 'boutiques-voir/:id', component: BoutiksvoirComponent, data: { title: 'Voir boutique | Admin • METATNOV' }},
    { path: 'produits', component: ProduitsComponent, data: { title: 'Liste des produits | Admin • METATNOV' }},
    { path: 'produits-new', component: ProduitsnewComponent, data: { title: 'Nouveau produit | Admin • METATNOV' }},
    { path: 'produits-modifier/:id', component: ProduitsmodComponent, data: { title: 'Modifier produit | Admin • METATNOV' }},
    { path: 'produits-voir/:id', component: ProduitsvoirComponent, data: { title: 'Voir produit | Admin • METATNOV' }},
    { path: 'categories-new', component: CategoriesnewComponent, data: { title: 'Nouveau catégories | Admin • METATNOV' }},
    { path: 'categories-modifier/:id', component: CategoriesmodComponent, data: { title: 'Modifier catégories | Admin • METATNOV' }},
    { path: 'categories-voir/:id', component: CategoriesvoirComponent, data: { title: 'Voir catégories | Admin • METATNOV' }},
    { path: 'clients', component: ClientsComponent, data: { title: 'Liste des clients | Admin • METATNOV' }},
    { path: 'clients-new', component: ClientsnewComponent, data: { title: 'Nouveau client | Admin • METATNOV' }},
    { path: 'clients-modifier', component: ClientsmodComponent, data: { title: 'Modifier client | Admin • METATNOV' }},
    { path: 'clients-voir', component: ClientsvoirComponent, data: { title: 'Voir client | Admin • METATNOV' }},
    { path: 'marques', component: MarquesComponent, data: { title: 'Liste des marques | Admin • METATNOV' }},
    { path: 'marques-new', component: MarquesnewComponent, data: { title: 'Nouveau marque | Admin • METATNOV' }},
    { path: 'marques-modifier', component: MarquesmodComponent, data: { title: 'Modifier marque | Admin • METATNOV' }},
    { path: 'marques-voir', component: MarquesvoirComponent, data: { title: 'Voir marque | Admin • METATNOV' }},
    { path: 'points', component: PointsComponent, data: { title: 'Liste des points | Admin • METATNOV' }},
    { path: 'points-new', component: PointsnewComponent, data: { title: 'Nouveau Sites | Admin • METATNOV' }},
    { path: 'points-modifier', component: PointsmodComponent, data: { title: 'Modifier Sites | Admin • METATNOV' }},
    { path: 'points-voir', component: PointsvoirComponent, data: { title: 'Voir Sites | Admin • METATNOV' }},
    { path: 'villes', component: VillesComponent, data: { title: 'Liste des villes | Admin • METATNOV' }},
    { path: 'villes-new', component: VillesnewComponent, data: { title: 'Nouveau ville | Admin • METATNOV' }},
    { path: 'villes-modifier/:id', component: VillesmodComponent, data: { title: 'Modifier ville | Admin • METATNOV' }},
    { path: 'villes-voir/:id', component: VillesvoirComponent, data: { title: 'Voir ville | Admin • METATNOV' }},
    { path: 'pays', component: PaysComponent, data: { title: 'Liste des pays | Admin • METATNOV' }},
    { path: 'pays-new', component: PaysnewComponent, data: { title: 'Nouveau pays | Admin • METATNOV' }},
    { path: 'pays-modifier/:id', component: PaysmodComponent, data: { title: 'Modifier pays | Admin • METATNOV' }},
    { path: 'pays-voir/:id', component: PaysvoirComponent, data: { title: 'Voir pays | Admin • METATNOV' }},
    { path: 'livreurs', component: LivreurComponent, data: { title: 'Liste des livreurs | Admin • METATNOV' }},
    { path: 'livreurs-new', component: LivreursnewComponent, data: { title: 'Nouveau livreur | Admin • METATNOV' }},
    { path: 'livreurs-modifier', component: LivreurmodComponent, data: { title: 'Modifier livreur | Admin • METATNOV' }},
    { path: 'livreurs-voir', component: LivreursvoirComponent, data: { title: 'Voir livreur | Admin • METATNOV' }},
    { path: 'livraisons', component: LivraisonsComponent, data: { title: 'Liste des livraisons | Admin • METATNOV' }},
    { path: 'livraisons-gest', component: LivraisonsgestsComponent, data: { title: 'Gestions des livraisons | Admin • METATNOV' }},
    { path: 'livraisons-new', component: LivraisonsnewComponent, data: { title: 'Nouveau livraison | Admin • METATNOV' }},
    { path: 'livraisons-modifier', component: LivraisonsmodComponent, data: { title: 'Modifier livraison | Admin • METATNOV' }},
    { path: 'livraisons-voir', component: LivraisonsvoirComponent, data: { title: 'Voir livraison | Admin • METATNOV' }},
    { path: 'commandes', component: CommandesComponent, data: { title: 'Liste des Commandes | Admin • METATNOV' }},
    { path: 'commandes-new', component: CommandesnewComponent, data: { title: 'Nouveau Commande | Admin • METATNOV' }},
    { path: 'commandes-modifier', component: CommandesmodComponent, data: { title: 'Modifier Commande | Admin • METATNOV' }},
    { path: 'commandes-voir', component: CommandesvoirComponent, data: { title: 'Voir Commande | Admin • METATNOV' }},
    { path: 'users', component: UsersComponent, data: { title: 'Liste des users | Admin • METATNOV' }},
    { path: 'users-new', component: UsersnewComponent, data: { title: 'Nouveau user | Admin • METATNOV' }},
    { path: 'users-modifier/:id', component: UsersmodComponent, data: { title: 'Modifier user | Admin • METATNOV' }},
    { path: 'users-voir/:id', component: UsersvoirComponent, data: { title: 'Voir user | Admin • METATNOV' }},
        
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
