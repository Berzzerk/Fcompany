import { TestBed, inject } from '@angular/core/testing';

import { GamingService } from './gaming.service';

describe('GamingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamingService]
    });
  });

  it('should ...', inject([GamingService], (service: GamingService) => {
    expect(service).toBeTruthy();
  }));
});
