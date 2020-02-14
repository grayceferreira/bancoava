import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Transfer } from 'src/app/models/Transfer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  public url = environment.apiUrl;
  transfer: Transfer;

  constructor(
    private http: HttpClient
  ) { }

  public composeHeaders() {
    const headers = new HttpHeaders();
    headers.set('timeout', "20000")
    return headers;
  }

  insertTransfer(data) {
    return this.http.post(`${this.url}/transfer`, data, { headers: this.composeHeaders() })
      .pipe(shareReplay(1))
  }
}
