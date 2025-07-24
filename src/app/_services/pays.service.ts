import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  url_ApiRest = this.apiService.url_api;


  public getPays() {
    return this.httpClient.get(this.url_ApiRest + 'Pays');
  }

  public get_Id_Pays(id: any) {
    return this.httpClient.get(this.url_ApiRest + 'Pays/' + id);
  }

  deletePays(id: any) {
    return this.httpClient.delete(this.url_ApiRest + 'Pays/' + id);
  }

  putPays(id: any, data: any) {
    return this.httpClient.put(this.url_ApiRest + 'Pays/' + id, data);
  }

  postPays(data: any) {
    return this.httpClient.post(this.url_ApiRest + 'Pays', data);
  }
}
