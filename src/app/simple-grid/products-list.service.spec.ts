import { TestBed, inject } from '@angular/core/testing';

import { ProductsListService } from './products-list.service';

describe('ProductsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsListService]
    });
  });

  it('should be created', inject([ProductsListService], (service: ProductsListService) => {
    expect(service).toBeTruthy();
  }));
});
