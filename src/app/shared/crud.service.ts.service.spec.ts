import { TestBed } from '@angular/core/testing';

import { Crud.Service.TsService } from './crud.service.ts.service';

describe('Crud.Service.TsService', () => {
  let service: Crud.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
