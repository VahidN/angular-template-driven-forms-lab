import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAppConfigTestComponent } from './read-app-config-test.component';

describe('ReadAppConfigTestComponent', () => {
  let component: ReadAppConfigTestComponent;
  let fixture: ComponentFixture<ReadAppConfigTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAppConfigTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAppConfigTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
