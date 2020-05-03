import { TestBed } from '@angular/core/testing';

import { ListeServersService } from './liste-servers.service';

describe('ListeServersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeServersService = TestBed.get(ListeServersService);
    expect(service).toBeTruthy();
  });
});
