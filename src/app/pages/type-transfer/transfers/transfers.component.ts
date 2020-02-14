import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transfer } from 'src/app/models/Transfer';
import { AccountService } from 'src/app/services/dataServices/account.service';
import { TransferService } from 'src/app/services/dataServices/transfer.service';
import { UserService } from 'src/app/services/dataServices/userService';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {
  closeResult: string;
  typeTransf: string;
  formulario: FormGroup;
  message: string;
  account: Account[];
  public maskCpf = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public maskCnpj = [/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public maskAgency = [/[1-9]/, /\d/, /\d/, /\d/];
  public maskAccount = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];



  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private transferService: TransferService,
    private userService: UserService,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.typeTransf = this.router.url.split('/transfer/')[1];

    this.createFormTransfer();

    this.GetAccountByIdUser();
  }

  cancelar() {
    this.router.navigate(['transfer']);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  open(confirm) {
    this.modalService.open(confirm, {size: 'sm', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSubmit() {
    console.log(this.formulario);
    if (this.formulario.valid){
      this.transferService.insertTransfer(this.formulario)
      .subscribe((data) => {
        alert('suce');

        // this.carregarTitulo();

      }, error => {
        // var ex = Errors.sanitiseError(error);
        // this.toastService.show(ex.message, {
        //   classname: 'bg-danger text-light',
        //   delay: 5000,
        //   autohide: true,
        //   headertext: 'Opps!'
        // });
        // return throwError(error);
      });

    } else {
      this.message = 'Preencha corretamenta todos os campos.';
    }

    // this.tranferService.insertTransfer(this.formulario.value);


    }  // getUserId() {

  // }

  createFormTransfer() {
    this.formulario = this.formBuilder.group({
      codigoBanco: [null, Validators.compose([Validators.required])],
      tipoConta: ['', Validators.compose([Validators.required])],
      agencia: ['', Validators.compose([Validators.required])],
      conta: ['', Validators.compose([Validators.required])],
      tipoDocumento: ['', Validators.compose([Validators.required])],
      cpf: [''],
      nome: [''],
      valor: ['', Validators.compose([Validators.required, Validators.pattern('/^[0-9.]+$/')])],
      tipoTransferencia: ['', Validators.compose([Validators.required])],
      finalidade: ['', Validators.compose([Validators.required])],
      historico: [''],
      data: ['']
    });
  }

  sentData() {
    const dadosFormulario = this.formulario.value;

    const transfer = new Transfer (
      dadosFormulario.codigoBanco,
      dadosFormulario.tipoConta,
      dadosFormulario.agencia,
      dadosFormulario.conta,
      dadosFormulario.cpf,
      dadosFormulario.cnpj,
      dadosFormulario.nome,
      dadosFormulario.valor,
      dadosFormulario.tipoTransferencia,
      dadosFormulario.finalidade,
      dadosFormulario.historico,
      dadosFormulario.data,
      dadosFormulario.id
    );

    this.formulario.reset();
  }

  GetAccountByIdUser() {
    const data = localStorage.getItem('bancoava.data');
    this.accountService.GetAccountByIdUser(data)
    .subscribe(response => {
      this.account = response;
      console.log(this.account);
    });
  }

  GetCpfNameByAgencyAccount() {
    this.accountService.GetCpfNameByAgencyAccount(this.formulario.value.agencia, this.formulario.value.conta);
  }

  verificaValidTouched(campo) {
    // this.formulario.get(campo);
    return !this.formulario.controls[campo].valid && this.formulario.controls[campo].touched;
  }

  apllyCssError(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  get agencia() {
    return this.formulario.get('agencia');
  }

  get tipoConta() {
    return this.formulario.get('tipoConta');
  }

  get conta() {
    return this.formulario.get('conta');
  }

  get valor() {
    return this.formulario.get('valor');
  }

  get tipoTransferencia() {
    return this.formulario.get('tipoTransferencia');
  }

  get finalidade() {
    return this.formulario.get('finalidade');
  }

  get codigoBanco() {
    return this.formulario.get('codigoBanco');
  }
}
