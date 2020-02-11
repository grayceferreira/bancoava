import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

  typeTransf: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.typeTransf = this.router.url.split('/transfer/')[1];
  }

  cancelar() {
    this.router.navigate(['transfer']);
  }
}
