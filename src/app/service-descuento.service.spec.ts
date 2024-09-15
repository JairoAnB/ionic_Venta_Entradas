import { TestBed } from '@angular/core/testing';

import { ServiceDescuentoService } from './service-descuento.service';

describe('ServiceDescuentoService', () => {
  let service: ServiceDescuentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDescuentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
