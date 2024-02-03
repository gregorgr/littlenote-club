import { TestBed } from '@angular/core/testing';

import { CompositionServiceService } from './composition-service.service';

describe('CompositionServiceService', () => {
  let service: CompositionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompositionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});