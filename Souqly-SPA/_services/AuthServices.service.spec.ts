/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthServicesService } from './AuthServices.service';

describe('Service: AuthServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServicesService]
    });
  });

  it('should ...', inject([AuthServicesService], (service: AuthServicesService) => {
    expect(service).toBeTruthy();
  }));
});
