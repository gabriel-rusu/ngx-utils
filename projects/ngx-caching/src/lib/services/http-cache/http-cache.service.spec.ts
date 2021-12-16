import {TestBed} from '@angular/core/testing';

import {HttpCacheService} from './http-cache.service';
import {HttpClient} from "@angular/common/http";
import {CacheService} from "../cache/cache.service";

describe('HttpCacheService', () => {
  let service: HttpCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CacheService,
        {provide: HttpClient, useValue: {}}
      ]
    });
    TestBed.inject(HttpClient);
    service = TestBed.inject(HttpCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
