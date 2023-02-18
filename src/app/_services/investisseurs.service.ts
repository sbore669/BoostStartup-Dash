import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Startups } from '../Model/startups';

const AUTH_API = 'http://localhost:8080/api/invest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InvestisseursService {

  constructor(private http: HttpClient) { }

  //Lister un investisseurs par son ID
  listerInvestisseursparId(idUsers: any): Observable<any>{
    return this.http.get(`${AUTH_API}/${idUsers}`)
  }

  //Liste tout les investisseurs
  listerToutlesunvestisseur(): Observable<any>{
    return this.http.get(`${AUTH_API}/afficher`)
  }

  //Recuperer le nombre total d'investisseurs
  totalInvestisseurs():Observable<any>{
    return this.http.get(`${AUTH_API}/totaux`)
  }
}
