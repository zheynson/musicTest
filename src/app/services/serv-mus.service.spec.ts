import { TestBed } from '@angular/core/testing';

import { ServMusService } from './serv-mus.service';

describe('ServMusService', () => {
  let service: ServMusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServMusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
