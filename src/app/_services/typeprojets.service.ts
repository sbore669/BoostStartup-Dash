import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/typeprojets';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeprojetsService {

  constructor(private http: HttpClient) { }

  listetypeprojets(): Observable<any>{
    return this.http.get(`${AUTH_API}/afficher`);
  }
  listeUnSeultypeprojets(idtype:any): Observable<any>{
    return this.http.get(`${AUTH_API}/typeparid/${idtype}`);
  }
  AjouterTypeprojets(nomtype:any): Observable<any>{
    var typeprojet={
      'nomtype':nomtype
    }
    return this.http.post(
      AUTH_API +'/add', typeprojet
    )
  }
  // ModifiereTypeprojets(Idtypeprojets:number,nomtype:any):Observable<any>{
  //   var typeprojet={
  //     'nomtype':nomtype
  //   }
  //   return this.http.put(
  //     AUTH_API +'/mdf/'+ `${Idtypeprojets}`, typeprojet
  //   )
  // }

  ModifiereTypeprojets(Idtypeprojets:any,nomtype:any):Observable<any>{
    // var typeprojet={
    //   'nomtype':nomtype
    // }
    var data=JSON.stringify(nomtype).slice(1, JSON.stringify(nomtype).lastIndexOf(']'));
    console.log("je suis serv "+data)
    return this.http.put(`http://localhost:8080/api/typeprojets/modf/${Idtypeprojets}`, data,httpOptions )
  }

}
