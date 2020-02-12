import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models/UsuarioModel';

@Injectable({
  //O serviço estará disponível em todo o aplicativo como um singleton, sem a necessidade de adicioná-lo à matriz de provedores de um módulo
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    const token = this.hasToken();

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
    
  }
  
  public get(): UsuarioModel {
    const data = localStorage.getItem('bancoava.data');
    if (data)
        return JSON.parse(atob(data));
    else
        return null;
  }

  public hasToken(): boolean {
    const user = this.get();

    if (user && user.token)
        return true;

    return false;
  }
}