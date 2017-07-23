import { TestBed, inject } from '@angular/core/testing';

import { JsonDatesService } from './json-dates.service';

describe('JsonDatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonDatesService]
    });
  });

  it('should be created', inject([JsonDatesService], (service: JsonDatesService) => {
    expect(service).toBeTruthy();
  }));
});
