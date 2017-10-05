import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHtmlComponent } from './show-html.component';

describe('ShowHtmlComponent', () => {
  let component: ShowHtmlComponent;
  let fixture: ComponentFixture<ShowHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
