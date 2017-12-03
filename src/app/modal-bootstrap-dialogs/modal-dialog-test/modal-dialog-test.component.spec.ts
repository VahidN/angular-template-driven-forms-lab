import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogTestComponent } from './modal-dialog-test.component';

describe('ModalDialogTestComponent', () => {
  let component: ModalDialogTestComponent;
  let fixture: ComponentFixture<ModalDialogTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDialogTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
