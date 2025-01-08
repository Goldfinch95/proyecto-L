import { TestBed } from '@angular/core/testing';

import { UrlTrackingService } from './url-tracking.service';

describe('UrlTrackingService', () => {
  let service: UrlTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
