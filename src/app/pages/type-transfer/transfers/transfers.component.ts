import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransferService } from 'src/app/services/transfer/transfer.service';

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

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private tranferService: TransferService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.typeTransf = this.router.url.split('/transfer/')[1];

    this.formulario = this.formBuilder.group({
      codigoBanco: [null],
      tipoConta: ['', Validators.compose([Validators.required])],
      agencia: ['', Validators.compose([Validators.required])],
      conta: ['', Validators.compose([Validators.required])],
      cpf: ['', Validators.compose([Validators.required])],
      cnpj: [null],
      nome: ['', Validators.compose([Validators.required])],
      valor: ['', Validators.compose([Validators.required])],
      tipoTransferencia: ['', Validators.compose([Validators.required])],
      finalidade: [null],
      historico: [null],
      data: ['', Validators.compose([Validators.required])],
    });
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
      this.tranferService.insertTransfer(this.formulario)
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


  }
}
