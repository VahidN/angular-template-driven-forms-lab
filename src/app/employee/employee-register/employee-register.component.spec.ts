import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegisterComponent } from './employee-register.component';

describe('EmployeeRegisterComponent', () => {
  let component: EmployeeRegisterComponent;
  let fixture: ComponentFixture<EmployeeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
