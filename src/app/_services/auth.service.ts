import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Investisseur } from '../Model/investisseur';
import { Startups } from '../Model/startups';

const AUTH_API = 'http://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + '/signinn',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  registerInvestisseur(Idtypeprojets: number, file: File, investisseur: Investisseur): Observable<any> {
    
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('donneesInvest', JSON.stringify(investisseur));

    return this.http.post<any>(`${AUTH_API}/InscrInvest/${Idtypeprojets}`, formData);
  }

  registerStartups(file: File, startups: Startups): Observable<any> {
    
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('donneesstartups', JSON.stringify(startups));

    return this.http.post<any>(`${AUTH_API}/inscrpStart`, formData);
  }

  logout(): Observable<any> {
    // return this.http.post(
    //   AUTH_API + 'logout',{},httpOptions
    //   );
    const req = new HttpRequest('POST', AUTH_API + '/signout', {}, httpOptions);
    return this.http.request(req);
  }

  // logout(): Observable<any> {
  //   return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  // }
}
