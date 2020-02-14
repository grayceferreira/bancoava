import { Component, OnInit } from '@angular/core';
import { finalize, take, tap } from 'rxjs/operators';
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
  estaCarregando: boolean;
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
    console.log('conta:', contaId )
    this.extratoService.getExtrato(contaId)
      .pipe(
        tap(resposta => console.log(resposta)),
        // delay(2000),
        take(1),
        finalize(() => {
          console.log('finalize');
        }),
      )
      .subscribe(response => {
        console.log('response: ', response);
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
    });
  }

}
