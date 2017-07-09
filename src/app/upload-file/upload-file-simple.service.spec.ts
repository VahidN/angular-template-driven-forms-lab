import { TestBed, inject } from '@angular/core/testing';

import { UploadFileSimpleService } from './upload-file-simple.service';

describe('UploadFileSimpleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadFileSimpleService]
    });
  });

  it('should be created', inject([UploadFileSimpleService], (service: UploadFileSimpleService) => {
    expect(service).toBeTruthy();
  }));
});
