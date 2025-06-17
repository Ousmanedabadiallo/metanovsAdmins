import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  
  public url_server = 'https://testapi.legipen.net';

  url_api = "http://127.0.0.1:8000/api/v1/";
  swagger = "https://testapi.legipen.net/api/documentation#/";

  // Get Image
  public postFileUpload(data: any) {
    return this.httpClient.post(this.url_api + 'Upload', data);
  }
  
  public postFileUploadMultiple(data: any) {
    return this.httpClient.post(this.url_api + 'Uploads', data);
  }
}
