import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Transfer } from 'src/app/models/Transfer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TransferService {
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

  insertTransfer(data) {
    if (data.codigoBanco !== undefined || data.codigoBanco !== '' || data.codigoBanco !== null) {
     alert('caiu aqui');
      return this.http.post<Transfer>(`${this.url}/transferencia/ava/`, data, { headers: this.composeHeaders() });
    } else {
      alert('errou')
      return this.http.post<Transfer>(`${this.url}/transferencia/outrosBancos/${data.id}`, data, { headers: this.composeHeaders() });
    }
  }
  // transferencia/outrosBancos/:contaId
}
