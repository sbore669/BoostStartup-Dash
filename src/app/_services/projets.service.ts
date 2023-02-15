import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projets } from '../Model/projets';
import { Startups } from '../Model/startups';

const AUTH_API = 'http://localhost:8080/api/projets';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http: HttpClient) { }

// methode pour creer un projets par startups id et par type de projets

  creerprojets(id_users: number,Idtypeprojets: number, file: File, projets: Projets): Observable<any> {
    
    const formData: FormData = new FormData();
    formData.append('file', file);
    console.log(projets)
    let donne = [
      projets
    ]
    formData.append('donneprojet', JSON.stringify(donne).slice(1, JSON.stringify(donne).lastIndexOf(']')));

    return this.http.post<any>(`${AUTH_API}/add/${id_users}/${Idtypeprojets}`, formData);
  }

  //Methode pour recuperrer tout les projets
  listdesprojets(): Observable<any> {

    return this.http.get(`${AUTH_API}/afficher`);
  }
  //Methode pour recuperrer tout les projets
  TotalObtenusurToutprojets(): Observable<any> {

    return this.http.get(`${AUTH_API}/totaux`);
  }

  //Methode pour recuperer un projets par id
  recupererProjetsparId(idprojet: any): Observable<any> {
    return this.http.get(`${AUTH_API}/aff/${idprojet}`);
  }

  //Methode pour recuperer les projets d'une startups
  recupererProjetsStartups(id_users: number): Observable<any>{
    return this.http.get(`${AUTH_API}/startups/${id_users}`)
  }

  //Methode pour recuperrer le nombre total de projets
  nombretotaldeprojets(): Observable<any>{
    return this.http.get(`${AUTH_API}/nbretotalprojet`)
  } 

  //Methode pour determiner la somme Collecter par l'ensemble de Projets
  lasommedesprojetsStartups(id_users:number): Observable<any>{
    return this.http.get(`${AUTH_API}/totalObtenu/${id_users}`)
  }

  //Methode pour compte le nombre de projets cree pour une Startups
  nombredeprojetsparStartups(id_users:number): Observable<any>{
    return this.http.get(`${AUTH_API}/nbProjets/${id_users}`)
  }
  //Methode pour recuperer le total des Prets Collecter
  montantTotaldespret(): Observable<any>{
    return this.http.get(`${AUTH_API}/totauxpret`)
  }
  //Methode pour recuperer le total des Donation Collecter
  montantTotalDonation(): Observable<any>{
    return this.http.get(`${AUTH_API}/totauxdon`)
  }

}
