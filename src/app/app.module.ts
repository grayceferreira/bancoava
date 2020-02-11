import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { StatementsComponent } from './pages/statements/statements.component';
import { TransfersComponent } from './pages/type-transfer/transfers/transfers.component';
import { TypeTransferComponent } from './pages/type-transfer/type-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    TransfersComponent,
    StatementsComponent,
    HomeComponent,
    FramePageComponent,
    SidebarComponent,
    TypeTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
