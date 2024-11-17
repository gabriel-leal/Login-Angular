import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://suaApi.com.br'

  constructor(private http: HttpClient) { }

  enviarDados(dados: any): Observable<any> {
    return this.http.post(`${this.url}/login`, dados);
  }
}