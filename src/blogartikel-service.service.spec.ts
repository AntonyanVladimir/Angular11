import { TestBed } from '@angular/core/testing';

import { BlogartikelServiceService } from './blogartikel-service.service';

describe('BlogartikelServiceService', () => {
  let service: BlogartikelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogartikelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
