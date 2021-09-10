import { TestBed } from '@angular/core/testing';

import { ServicioDeDatosService } from './servicio-de-datos.service';

describe('ServicioDeDatosService', () => {
  let service: ServicioDeDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
