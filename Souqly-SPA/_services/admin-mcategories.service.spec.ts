import { TestBed } from '@angular/core/testing';

import { AdminMCategoriesService } from './admin-mcategories.service';

describe('AdminMCategoriesService', () => {
  let service: AdminMCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
