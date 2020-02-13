import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/dataServices/account.service';
import { TransferService } from 'src/app/services/dataServices/transfer.service';
import { UserService } from 'src/app/services/dataServices/userService';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

  typeTransf: string;
  formulario: FormGroup;
  account: Account[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private transferService: TransferService,
    private userService: UserService,
    private accountService: AccountService
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

    this.GetAccountByIdUser();
  }

  cancelar() {
    this.router.navigate(['transfer']);
  }

  // getUserId() {

  // }

  GetAccountByIdUser() {
    const data = localStorage.getItem('userId');
    const id = JSON.parse(data);
    this.accountService.GetAccountByIdUser(id._id)
    .subscribe(response => {
      this.account = response;
      console.log(this.account);
    });
  }

  GetCpfNameByAgencyAccount() {
    this.accountService.GetCpfNameByAgencyAccount(this.formulario.value.agencia, this.formulario.value.conta);
  }

  onSubmit() {
    console.log(this.formulario);
    // this.transferService.insertTransfer(this.formulario.value);
  }
}
