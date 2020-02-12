import { Component, OnInit } from '@angular/core';
import { finalize, take, tap } from 'rxjs/operators';

import { Extrato } from '../../models/Statements';
import { ExtratoService } from '../../services/dataServices/extrato.service';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.scss']
})
export class StatementsComponent implements OnInit {

  extrato: Array<Extrato>;

  constructor(
    private extratoService: ExtratoService,
  ) { }

  ngOnInit() {
    // this.extrato = this.carregarExtrato();
    this.carregarExtrato();
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

    // return this.extrato = this.extratoService.getExtrato();
  }

}
