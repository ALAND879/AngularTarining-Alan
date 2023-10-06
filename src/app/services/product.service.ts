import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../core/domain/Product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "https://fakestoreapi.com/products"

  constructor(private http:HttpClient ) { 

  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id:number):Observable<Product>{
    const url = this.url+"/"+id;
    return this.http.get<Product>(url);
  }
  
}
