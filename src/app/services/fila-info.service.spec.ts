import { TestBed } from '@angular/core/testing';

import { FilaInfoService } from './fila-info.service';

describe('FilaInfoService', () => {
  let service: FilaInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilaInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
