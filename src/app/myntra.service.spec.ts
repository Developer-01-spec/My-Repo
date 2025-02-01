import { TestBed } from '@angular/core/testing';

import { MyntraService } from './myntra.service';

describe('MyntraService', () => {
  let service: MyntraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyntraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
