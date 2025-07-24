import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  url_ApiRest = this.apiService.url_api;


  public getVille() {
    return this.httpClient.get(this.url_ApiRest + 'Ville');
  }

  public get_Id_Ville(id: any) {
    return this.httpClient.get(this.url_ApiRest + 'Ville/' + id);
  }

  deleteVille(id: any) {
    return this.httpClient.delete(this.url_ApiRest + 'Ville/' + id);
  }

  putVille(id: any, data: any) {
    return this.httpClient.put(this.url_ApiRest + 'Ville/' + id, data);
  }

  postVille(data: any) {
    return this.httpClient.post(this.url_ApiRest + 'Ville', data);
  }
}
