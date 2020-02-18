import { TestBed } from '@angular/core/testing';

import { PathchangeService } from './pathchange.service';

describe('PathchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PathchangeService = TestBed.get(PathchangeService);
    expect(service).toBeTruthy();
  });
});
