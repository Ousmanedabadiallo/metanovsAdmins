import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  url_ApiRest = this.apiService.url_api;


  public getProduit() {
    return this.httpClient.get(this.url_ApiRest + 'Produit');
  }

  public get_Id_Produit(id: any) {
    return this.httpClient.get(this.url_ApiRest + 'Produit/' + id);
  }

  deleteUser(id: any) {
    return this.httpClient.delete(this.url_ApiRest + 'Produit/' + id);
  }

  putUser(id: any, data: any) {
    return this.httpClient.put(this.url_ApiRest + 'Produit/' + id, data);
  }

  // putstatutUser(id: any, data: any) {
  //   return this.httpClient.put(this.url_ApiRest + 'Userstatut/' + id, data);
  // }

  postProduit(data: any) {
    return this.httpClient.post(this.url_ApiRest + 'Produit', data);
  }
}
