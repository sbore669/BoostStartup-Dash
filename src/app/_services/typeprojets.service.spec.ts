import { TestBed } from '@angular/core/testing';

import { TypeprojetsService } from './typeprojets.service';

describe('TypeprojetsService', () => {
  let service: TypeprojetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeprojetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
