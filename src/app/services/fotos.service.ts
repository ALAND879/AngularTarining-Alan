import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fotos } from '../Core/domain/fotos';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  url:string = "https://jsonplaceholder.typicode.com/photos"
  
  constructor(private http: HttpClient) {
    
  }

  getImages(): Observable<Fotos[]>{
    return this.http.get<Fotos[]>(this.url);
  }

  getImage(id: number): Observable<Fotos>{
    const url = this.url + "/" + id;
    return this.http.get<Fotos>(url);
  }
}
