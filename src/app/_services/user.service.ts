import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  url_ApiRest = this.apiService.url_api;

  postLogin(data: any) {
    return this.httpClient.post(this.url_ApiRest + 'Login', data);
  }

  public getUser() {
    return this.httpClient.get(this.url_ApiRest + 'Users');
  }

  public get_Id_User(id: any) {
    return this.httpClient.get(this.url_ApiRest + 'User/' + id);
  }

  public getUserByType(id: any) {
    return this.httpClient.get(this.url_ApiRest + 'ByTypeuser/' + id);
  }

  deleteUser(id: any) {
    return this.httpClient.delete(this.url_ApiRest + 'User/' + id);
  }

  putUser(id: any, data: any) {
    return this.httpClient.put(this.url_ApiRest + 'User/' + id, data);
  }

  putstatutUser(id: any, data: any) {
    return this.httpClient.put(this.url_ApiRest + 'Userstatut/' + id, data);
  }

  postUser(data: any) {
    return this.httpClient.post(this.url_ApiRest + 'Register', data);
  }
}
