import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) { }

  ngOnInit() {
    this.typeTransf = this.router.url.split('/transfer/')[1];

    this.formulario = this.formBuilder.group({
      codigoBanco: [null],
      tipoConta: [null, Validators.required],
      agencia: [null, Validators.required],
      conta: [null, Validators.required],
      tipoDocumento: [null, Validators.required],
      documento: [null, [Validators.required, Validators.min(11), Validators.maxLength(13)]],
      nome: [null, [Validators.required, Validators.min(3), Validators.maxLength(25)]],
      valor: [null, Validators.required],
      tipoTransferencia: [null, Validators.required],
      finalidade: [null, Validators.required],
      historico: [null, Validators.required],
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
