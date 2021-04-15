import { TestBed } from '@angular/core/testing';

import { LuchadorResolveService } from './luchador-resolve.service';

describe('LuchadorResolveService', () => {
  let service: LuchadorResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuchadorResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
