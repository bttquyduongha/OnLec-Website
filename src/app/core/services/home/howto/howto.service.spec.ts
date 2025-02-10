import { TestBed } from '@angular/core/testing';

import { HowtoService } from './howto.service';

describe('HowtoService', () => {
  let service: HowtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
