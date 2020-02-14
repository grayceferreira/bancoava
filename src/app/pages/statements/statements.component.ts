import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Conta } from 'src/app/models/Conta';
import { AccountService } from 'src/app/services/dataServices/account.service';
import { ExtratoService } from 'src/app/services/dataServices/extrato.service';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {

  extrato: any;
  estaCarregando = false;
  idUser = 1;
  conta: Conta;
  constructor(
    private extratoService: ExtratoService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.GetAccountByIdUser();
    
  }

  carregarExtrato(contaId) {
    this.extratoService.getExtrato(contaId)
      .pipe(
        take(1),
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
      this.carregarExtrato(this.conta._id);
      this.estaCarregando = false;
    });
  }

}
