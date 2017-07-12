import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2FileUploadTestComponent } from './ng2-file-upload-test.component';

describe('Ng2FileUploadTestComponent', () => {
  let component: Ng2FileUploadTestComponent;
  let fixture: ComponentFixture<Ng2FileUploadTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2FileUploadTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2FileUploadTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
