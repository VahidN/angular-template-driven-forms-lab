import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserStorageSampleTestComponent } from './browser-storage-sample-test.component';

describe('BrowserStorageSampleTestComponent', () => {
  let component: BrowserStorageSampleTestComponent;
  let fixture: ComponentFixture<BrowserStorageSampleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserStorageSampleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserStorageSampleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
