import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AutencitacaoService {

  public url = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  public composeHeaders() {
    const headers = new HttpHeaders();
    headers.set('timeout', "20000");
    // headers.set('x-api-key', environment.xApiKey);

    return headers;
  }

  autenticar(data) {
    return this.http.post<UsuarioModel>(`${this.url}/usuario/login`, data, { headers: this.composeHeaders() })
  }

  logout() {
    localStorage.removeItem('bancoava.data');
    this.router.navigate(['/login']);
  }
}