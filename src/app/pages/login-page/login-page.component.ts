import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/UsuarioModel';
import { AutencitacaoService } from 'src/app/services/dataServices/autenticacao.service';
import { ToastService } from 'src/app/services/shared/toast.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy: boolean = false;
  public maskCpf = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: AutencitacaoService,
    private toastService: ToastService
  ) {
    this.form = this.fb.group({
      cpf: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.required,
      ])],
      senha: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,
      ])]
    });
  }

  async enviar() {
    this.busy = true;
    this.form.value.cpf = this.tranformCPF(this.form.value.cpf);
    console.log(this.form.value);
    this.service.autenticar(this.form.value)
      .subscribe((result) => {
        this.busy = false;

        this.setUsuario(result);
        this.router.navigate(['/']);
      }, err => {

        // var ex = 'Falha';

        this.toastService.show('teste', {
          classname: 'bg-danger text-light',
          delay: 5000,
          autohide: true,
          headertext: 'Opps!'
        });

        console.log('Opps');

        this.busy = false;
      });
  }

  async setUsuario(usuario: UsuarioModel) {
    const data = JSON.stringify(usuario);
    localStorage.setItem('bancoava.data', btoa(data));
    localStorage.setItem('userId', data);
  }

  ngOnInit() {
  }

  tranformCPF(cpf) {
    const str = cpf;
    return str.replace(/[^\d]+/g, '');
  }

}
