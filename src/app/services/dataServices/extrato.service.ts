import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Extrato } from '../../models/Statements';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {
  public url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public composeHeaders() {
    const headers = new HttpHeaders();
    return headers;
  }


  getExtrato(contaId): Observable<Extrato> {
    let data = JSON.parse(localStorage.getItem('bancoava.data'));

    return this.http.post<Extrato>(`${this.url}/transferencia/`, { contaOrigem: contaId},  { headers: new HttpHeaders({
      'Authorization': `bearer ${data.token}`,
    })});
  }



//   getExtrato(): Extrato[] {
//     const extrato: Extrato[] = [{
//         id: 1,
//         data: '2020-02-04T13:00:24.744Z',
//         lancamento: 'Pagamento de boleto',
//         valor: 205,
//         saldo: 1200,
//     }, {
//         id: 2,
//         data: '2020-02-05T17:30:12.500Z',
//         lancamento: 'Restaurante Pé de Fava',
//         valor: 55,
//         saldo: 1100,
//     }];

//     return extrato;
//   }

}
