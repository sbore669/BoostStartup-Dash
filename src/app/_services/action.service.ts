import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/action';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) { }

  acquerirUneaction(idprojet: number,id_users: number,nombreaction: any): Observable<any>{

    const formData: FormData = new FormData();
    formData.append('nbreaction', nombreaction);
    console.log(nombreaction)
    return this.http.post(`${AUTH_API}/add/${id_users}/${idprojet}` , formData);
  }

  //Methode pour recuperer l'ensemble des action d'un investisseurs
  listerActionParInvestisseur(id_users: number): Observable<any>{
    return this.http.get(`${AUTH_API}/invest/${id_users}`);
  }
  //Methode pour recuperer l'ensemble des investisseurs par 
  listerlesActionnairedunProjet(idprojet: number): Observable<any>{
    return this.http.get(`${AUTH_API}/Projets/${idprojet}`)
  }
}
