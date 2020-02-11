import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from 'src/app/interfaces/transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  transfer: Transfer;

  constructor(
    private http: HttpClient
  ) { }

  insertTransfer(form) {
    // this.http.post('https://link.com.br', JSON.stringify(form))
    // .map(res => res)
    // .subscribe(dados => console.log(dados));
  }
}
