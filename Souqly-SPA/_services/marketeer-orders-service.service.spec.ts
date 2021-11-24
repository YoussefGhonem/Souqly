import { TestBed } from '@angular/core/testing';

import { MarketeerOrdersServiceService } from './marketeer-orders-service.service';

describe('MarketeerOrdersServiceService', () => {
  let service: MarketeerOrdersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketeerOrdersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
