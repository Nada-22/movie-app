import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryiesService {

  url = environment.API_Domain;
  constructor(private http: HttpClient) { }
  getCategories() {
    return this.http.get(`${this.url}/api/category`);
    
  }
}
