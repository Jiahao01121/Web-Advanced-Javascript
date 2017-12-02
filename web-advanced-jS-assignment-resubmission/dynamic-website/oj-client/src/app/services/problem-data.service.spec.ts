import { TestBed, inject } from '@angular/core/testing';

import { ProblemDataService } from './problem-data.service';

describe('ProblemDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemDataService]
    });
  });

  it('should be created', inject([ProblemDataService], (service: ProblemDataService) => {
    expect(service).toBeTruthy();
  }));
});
