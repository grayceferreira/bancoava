import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [{
  path: 'login',
  component: LoginPageComponent
},{
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
