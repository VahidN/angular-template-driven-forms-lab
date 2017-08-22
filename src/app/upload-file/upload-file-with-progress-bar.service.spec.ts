import { TestBed, inject } from '@angular/core/testing';

import { UploadFileWithProgressBarService } from './upload-file-with-progress-bar.service';

describe('UploadFileWithProgressBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadFileWithProgressBarService]
    });
  });

  it('should be created', inject([UploadFileWithProgressBarService], (service: UploadFileWithProgressBarService) => {
    expect(service).toBeTruthy();
  }));
});
