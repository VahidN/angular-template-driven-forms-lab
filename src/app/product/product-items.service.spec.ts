import { TestBed, inject } from '@angular/core/testing';

import { ProductItemsService } from './product-items.service';

describe('ProductItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductItemsService]
    });
  });

  it('should be created', inject([ProductItemsService], (service: ProductItemsService) => {
    expect(service).toBeTruthy();
  }));
});
