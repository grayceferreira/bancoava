import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { StatementsComponent } from './pages/statements/statements.component';
import { TransfersComponent } from './pages/transfers/transfers.component';


const routes: Routes = [{
  path: '',
    component: FramePageComponent,
    // canActivate: [AuthService],
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }, {
  path: 'home',
    component: FramePageComponent,
    // canActivate: [AuthService],
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }, 
  { 
    path: 'login', 
    component: LoginPageComponent 
  },  
  {
    path: 'statement',
      component: FramePageComponent,
      // canActivate: [AuthService],
      children: [
        {
          path: '',
          component: StatementsComponent
        }
      ]
    },
  {
    path: 'transfer',
      component: FramePageComponent,
    // canActivate: [AuthService],
        children: [
        {
          path: '',
          component: TransfersComponent
        }
      ]
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
