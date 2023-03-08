import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  apiURL = 'http://localhost:3000/api/v1/products';
  constructor(private http: HttpClient) { }

  getProducts():Observable<Item[]>{
    return this.http.get<Item[]>(this.apiURL);
  }
  
}
