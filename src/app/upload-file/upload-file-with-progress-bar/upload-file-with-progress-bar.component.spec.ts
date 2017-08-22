import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileWithProgressBarComponent } from './upload-file-with-progress-bar.component';

describe('UploadFileWithProgressBarComponent', () => {
  let component: UploadFileWithProgressBarComponent;
  let fixture: ComponentFixture<UploadFileWithProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileWithProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileWithProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
