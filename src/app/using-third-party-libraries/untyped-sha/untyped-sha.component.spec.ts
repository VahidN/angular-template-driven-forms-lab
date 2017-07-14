import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntypedShaComponent } from './untyped-sha.component';

describe('UntypedShaComponent', () => {
  let component: UntypedShaComponent;
  let fixture: ComponentFixture<UntypedShaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntypedShaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntypedShaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
