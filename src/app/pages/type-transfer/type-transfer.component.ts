import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-transfer',
  templateUrl: './type-transfer.component.html',
  styleUrls: ['./type-transfer.component.scss']
})
export class TypeTransferComponent implements OnInit {

  otherBank: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  irParaTranferencia(otherBank) {
    otherBank ? this.router.navigate(['transfer/otherBank']) : this.router.navigate(['transfer/sameBank']);
  }

}
