import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-store';
import { default as config } from './../../config';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = config.API_URL;
  constructor(private http: HttpClient, public localstorageservice: LocalStorageService) { }

  Register(data) {
    let headers = new HttpHeaders();
    return this.http.post(`${this.API_URL}/register`, data, { headers: headers });
  }
  Login(data) {
    let headers = new HttpHeaders();
    return this.http.post(`${this.API_URL}/login`, data, { headers: headers });
  }
  getFoodTypes(){
    let headers = new HttpHeaders();
    return this.http.get(`${this.API_URL}/food/type`, { headers: headers });
  }
  addFood(data){
    let headers = new HttpHeaders({ 'authorization': this.localstorageservice.get('token') });
    return this.http.post(`${this.API_URL}/food`, data, { headers: headers });
  }
  getFood(){
    let headers = new HttpHeaders({ 'authorization': this.localstorageservice.get('token') }); 
    return this.http.get(`${this.API_URL}/food`, { headers: headers });
  }
}
