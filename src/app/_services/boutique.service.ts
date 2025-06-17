import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  url_ApiRest = this.apiService.url_api;


  public getBoutique() {
    return this.httpClient.get(this.url_ApiRest + 'Boutique');
  }

  public get_Id_Boutique(id: any) {
    return this.httpClient.get(this.url_ApiRest + 'Boutique/' + id);
  }

  deleteUser(id: any) {
    return this.httpClient.delete(this.url_ApiRest + 'Boutique/' + id);
  }

  putUser(id: any, data: any) {
    return this.httpClient.put(this.url_ApiRest + 'Boutique/' + id, data);
  }

  // putstatutUser(id: any, data: any) {
  //   return this.httpClient.put(this.url_ApiRest + 'Userstatut/' + id, data);
  // }

  postBoutique(data: any) {
    return this.httpClient.post(this.url_ApiRest + 'Boutique', data);
  }
}
