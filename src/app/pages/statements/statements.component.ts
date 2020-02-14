import { Component, OnInit } from '@angular/core';
import { finalize, take, tap } from 'rxjs/operators';
import { Conta } from 'src/app/models/Conta';
import { AccountService } from 'src/app/services/dataServices/account.service';

import { Extrato } from '../../models/Statements';
import { ExtratoService } from '../../services/dataServices/extrato.service';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {

  extrato: Array<Extrato>;
  estaCarregando: boolean;
  idUser = 1;
  conta: Conta;
  constructor(
    private extratoService: ExtratoService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    // this.carregarExtrato();
    this.GetAccountByIdUser();
  }

  carregarExtrato() {
    this.extratoService.getExtrato()
      .pipe(
        tap(resposta => console.log(resposta)),
        // delay(2000),
        take(1),
        finalize(() => {
          console.log('finalize');
        }),
      )
      .subscribe(response => {
        this.extrato = response;
      });
  }

  GetAccountByIdUser() {
    this.estaCarregando = true;
    this.accountService.GetAccountByIdUser(this.idUser)
      .pipe(
        take(1),
        // delay(20000),
      )
    .subscribe(response => {
      this.conta = response;
      console.log(this.conta);
    });
  }

}
