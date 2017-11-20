import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelStateValidationTestComponent } from './model-state-validation-test.component';

describe('ModelStateValidationTestComponent', () => {
  let component: ModelStateValidationTestComponent;
  let fixture: ComponentFixture<ModelStateValidationTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelStateValidationTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelStateValidationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
