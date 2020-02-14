import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
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

  GetAccountByIdUser(id): Observable<Account[]> {
    const headers = new HttpHeaders({
      token: '....token de autenticação....',
    });

    return this.http.get<Account[]>(`${this.url}/conta/${id}`, { headers });
  }

  GetCpfNameByAgencyAccount(agency, account) {
    const headers = new HttpHeaders({
      token: '....token de autenticação....',
    });

    return this.http.get<Account[]>(`${this.url}/conta/`, {
      headers,
      params: {
        _agency: agency,
        _account: account
      }
    });
  }
}
