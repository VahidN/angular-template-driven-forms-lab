import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedShaComponent } from './typed-sha.component';

describe('TypedShaComponent', () => {
  let component: TypedShaComponent;
  let fixture: ComponentFixture<TypedShaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypedShaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypedShaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
