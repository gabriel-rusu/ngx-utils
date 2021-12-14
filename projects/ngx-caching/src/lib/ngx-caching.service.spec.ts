import { TestBed } from '@angular/core/testing';

import { NgxCachingService } from './ngx-caching.service';

describe('NgxCachingService', () => {
  let service: NgxCachingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCachingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
