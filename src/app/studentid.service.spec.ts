import { TestBed } from '@angular/core/testing';

import { StudentidService } from './studentid.service';

describe('StudentidService', () => {
  let service: StudentidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
