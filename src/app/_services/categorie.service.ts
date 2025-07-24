import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  url_ApiRest = this.apiService.url_api;


  public getCategorie() {
    return this.httpClient.get(this.url_ApiRest + 'Categorie_produit');
  }

  public get_Id_Categorie(id: any) {
    return this.httpClient.get(this.url_ApiRest + 'Categorie_produit/' + id);
  }

  deleteCategorie(id: any) {
    return this.httpClient.delete(this.url_ApiRest + 'Categorie_produit/' + id);
  }

  putCategorie(id: any, data: any) {
    return this.httpClient.put(this.url_ApiRest + 'Categorie_produit/' + id, data);
  }

  postCategorie(data: any) {
    return this.httpClient.post(this.url_ApiRest + 'Categorie_produit', data);
  }
}
