import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public composeHeaders() {
    const headers = new HttpHeaders();
    headers.set('timeout', '20000');
    // headers.set('x-api-key', environment.xApiKey);

    return headers;
  }

  getUserById(id) {
    return this.http.get<UsuarioModel>(`${this.url}/usuario/${id}`, { headers: this.composeHeaders() });
  }
}
