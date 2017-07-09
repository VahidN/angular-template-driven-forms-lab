import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileSimpleComponent } from './upload-file-simple.component';

describe('UploadFileSimpleComponent', () => {
  let component: UploadFileSimpleComponent;
  let fixture: ComponentFixture<UploadFileSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
