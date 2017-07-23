import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentJalaaliTestComponent } from './moment-jalaali-test.component';

describe('MomentJalaaliTestComponent', () => {
  let component: MomentJalaaliTestComponent;
  let fixture: ComponentFixture<MomentJalaaliTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentJalaaliTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentJalaaliTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
