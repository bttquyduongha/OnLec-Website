import { TestBed } from '@angular/core/testing';

import { FooterNavlinkService } from './footer-navlink.service';

describe('FooterNavlinkService', () => {
  let service: FooterNavlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterNavlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
