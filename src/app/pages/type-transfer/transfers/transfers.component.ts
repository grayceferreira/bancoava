import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Conta } from 'src/app/models/Conta';
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

  account: Conta[];
  estaCarregando = false;
  conta: Conta;
  idUser: 1;


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

    this.formulario = this.formBuilder.group({
      codigoBanco: [null],

      tipoConta: [null, Validators.required],
      agencia: [null, Validators.required],
      conta: [null, Validators.required],
      tipoDocumento: [null, Validators.required],
      cpf: [null, [Validators.required, Validators.min(11), Validators.maxLength(13)]],
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
    if (this.formulario.valid){
      this.transferService.insertTransfer(this.formulario)
      .subscribe((data) => {
        alert('suce')

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
      })

    } else{
      this.message = 'Preencha corretamenta todos os campos.'
    }

    // this.tranferService.insertTransfer(this.formulario.value);


    }  // getUserId() {

  // }

  GetAccountByIdUser() {

    const data = localStorage.getItem('bancoava.data');
    this.accountService.GetAccountByIdUser(data)
    .subscribe(response => {
      this.conta = response;
    });
  }
  GetCpfNameByAgencyAccount() {
    this.accountService.GetCpfNameByAgencyAccount(this.formulario.value.agencia, this.formulario.value.conta);
  }
}
