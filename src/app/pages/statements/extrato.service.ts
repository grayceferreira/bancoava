import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Extrato } from './statements.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.apiUrl;

  constructor(

    private http: HttpClient,
  ) { }

  getExtrato(): Observable<Extrato[]> {
    const headers = new HttpHeaders({
      token: '....token de autenticação....',
    });

    return this.http.get<Extrato[]>(this.API_URL + '/statement', {
      headers
    });
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
