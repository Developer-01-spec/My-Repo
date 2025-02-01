import { TestBed } from '@angular/core/testing';

import { PintrestService } from './pintrest.service';

describe('PintrestService', () => {
  let service: PintrestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PintrestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
