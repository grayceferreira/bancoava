import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/services/shared/event-emitter.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public _toggle = false;
  isActive: boolean;
  collapsed: boolean;
  showMenu: string;

  constructor() {
    EventEmitterService.get('_toggle-sidebar').subscribe(data => {
      this._toggle = !this._toggle
    });
   }

  ngOnInit() {
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  

}
