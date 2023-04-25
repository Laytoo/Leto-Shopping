import { TestBed } from '@angular/core/testing';

import { ProdResolverService } from './prod-resolver.service';

describe('ProdResolverService', () => {
  let service: ProdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
