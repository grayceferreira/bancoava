import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { StatementsComponent } from './pages/statements/statements.component';
import { TransfersComponent } from './pages/transfers/transfers.component';


const routes: Routes = [{
  path: 'login',
  component: LoginPageComponent
}, {    
  path: 'workflow',
  component: FramePageComponent,
  }, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'transfers',
  component: TransfersComponent
}, {
  path: 'statements',
  component: StatementsComponent
}, {
  path: 'not-found',
  component: NotFoundComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: '**',
  redirectTo: 'not-found'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
