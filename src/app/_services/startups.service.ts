import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/startup';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StartupsService {

  constructor(private http: HttpClient) { }

  //Methode pour recuperrer tout les projets
  listdesprojets(): Observable<any> {

    return this.http.get(`${AUTH_API}/afficher`);
  }

  listerAllStartups(): Observable<any> {
    return this.http.get(`${AUTH_API}/affall`)
  }
  NombreStartups(): Observable<any>{
    return this.http.get(`${AUTH_API}/totaux`)
  }

  listzeAllStartupsValide(): Observable<any>{
    return this.http.get(`${AUTH_API}/status/VALIDER`)
  }
}
