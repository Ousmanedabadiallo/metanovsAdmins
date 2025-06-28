import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  
  public url_server = 'https://apis.metanovs.com';

  url_api = "https://apis.metanovs.com/api/v1/";
  swagger = "https://apis.metanovs.com/api/documentation#/";

  // Get Image
  public postFileUpload(data: any) {
    return this.httpClient.post(this.url_api + 'Upload', data);
  }
  
  public postFileUploadMultiple(data: any) {
    return this.httpClient.post(this.url_api + 'Uploads', data);
  }
}
