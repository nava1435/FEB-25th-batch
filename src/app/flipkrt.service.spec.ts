import { TestBed } from '@angular/core/testing';

import { FlipkrtService } from './flipkrt.service';

describe('FlipkrtService', () => {
  let service: FlipkrtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkrtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
