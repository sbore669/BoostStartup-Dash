import { TestBed } from '@angular/core/testing';

import { InvestisseursService } from './investisseurs.service';

describe('InvestisseursService', () => {
  let service: InvestisseursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestisseursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
