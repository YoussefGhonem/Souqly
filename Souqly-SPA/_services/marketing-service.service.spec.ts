import { TestBed } from '@angular/core/testing';

import { MarketingService } from './marketing-service.service';

describe('MarketingServiceService', () => {
  let service: MarketingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
