import { TestBed } from '@angular/core/testing';

import { AmazonServiceService } from './amazon-service.service';

describe('AmazonServiceService', () => {
  let service: AmazonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
