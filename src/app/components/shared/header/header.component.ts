import { Component, OnInit } from '@angular/core';
import { AutencitacaoService } from 'src/app/services/dataServices/autenticacao.service';
import { EventEmitterService } from 'src/app/services/shared/event-emitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private service: AutencitacaoService,
  ) { }

  ngOnInit() {
  }

  public _toggleSidebar() {
    EventEmitterService.get('_toggle-sidebar').emit();
    // this._toggle = !this._toggle;
  }

  logout() {
    this.service.logout();
  }

}
