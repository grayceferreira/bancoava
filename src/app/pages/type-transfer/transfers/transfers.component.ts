import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/services/transfer/transfer.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

  typeTransf: string;
  formulario: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tranferService: TransferService
  ) { }

  ngOnInit() {
    this.typeTransf = this.router.url.split('/transfer/')[1];

    /*this.formulario = new FormGroup({
      codigoBanco: new FormControl(null),
      tipoConta: new FormControl(null),
      agencia: new FormControl(null),
      conta: new FormControl(null),
      cpf: new FormControl(null),
      cnpj: new FormControl(null),
      nome: new FormControl(null),
      valor: new FormControl(null),
      tipoTransferencia: new FormControl(null),
      finalidade: new FormControl(null),
      historico: new FormControl(null),
      data: new FormControl(null),
    });*/

    this.formulario = this.formBuilder.group({
      codigoBanco: [null],
      tipoConta: [null],
      agencia: [null],
      conta: [null],
      cpf: [null],
      cnpj: [null],
      nome: [null],
      valor: [null],
      tipoTransferencia: [null],
      finalidade: [null],
      historico: [null],
      data: [null]
    });
  }

  cancelar() {
    this.router.navigate(['transfer']);
  }

  onSubmit() {
    console.log(this.formulario);
    // this.tranferService.insertTransfer(this.formulario.value);
  }
}
