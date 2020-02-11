import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

  otherBank = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cancelar() {
    this.router.navigate(['transfer']);
  }
}
