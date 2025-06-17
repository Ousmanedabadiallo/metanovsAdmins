import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login', data: { title: 'Se connecter | MB • METATNOVA' }},
  { path: 'login', component: LoginComponent, data: { title: 'Se connecter | MB • METATNOVA' }},
  { path: 'register', component: RegisterComponent, data: { title: 'S\'incrire | MB • METATNOVA' }},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
