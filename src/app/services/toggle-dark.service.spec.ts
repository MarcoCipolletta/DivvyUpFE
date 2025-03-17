import { TestBed } from '@angular/core/testing';

import { ToggleDarkService } from './toggle-dark.service';

describe('ToggleDarkService', () => {
  let service: ToggleDarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleDarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
