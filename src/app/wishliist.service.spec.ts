import { TestBed } from '@angular/core/testing';

import { WishliistService } from './wishliist.service';

describe('WishliistService', () => {
  let service: WishliistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishliistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
