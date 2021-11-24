import { TestBed } from '@angular/core/testing';

import { SupplierServiceService } from './supplierService.service';

describe('SupplierServiceService', () => {
  let service: SupplierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
