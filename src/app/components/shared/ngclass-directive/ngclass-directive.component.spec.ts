import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassDirectiveComponent } from './ngclass-directive.component';

describe('NgclassDirectiveComponent', () => {
  let component: NgclassDirectiveComponent;
  let fixture: ComponentFixture<NgclassDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclassDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclassDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
