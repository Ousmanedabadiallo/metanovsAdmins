import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TypeuserService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  url_ApiRest = this.apiService.url_api;


  public getTypeuser() {
    return this.httpClient.get(this.url_ApiRest + 'Typeuser');
  }

  public get_Id_Typeuser(id: any) {
    return this.httpClient.get(this.url_ApiRest + 'Typeuser/' + id);
  }

  deleteTypeuser(id: any) {
    return this.httpClient.delete(this.url_ApiRest + 'Typeuser/' + id);
  }

  putTypeuser(id: any, data: any) {
    return this.httpClient.put(this.url_ApiRest + 'Typeuser/' + id, data);
  }

  postTypeuser(data: any) {
    return this.httpClient.post(this.url_ApiRest + 'Typeuser', data);
  }
}
