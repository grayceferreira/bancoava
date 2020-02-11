import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTransferComponent } from './type-transfer.component';

describe('TypeTransferComponent', () => {
  let component: TypeTransferComponent;
  let fixture: ComponentFixture<TypeTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
