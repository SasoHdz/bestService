import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioButtonComponent } from './servicio-button.component';

describe('ServicioButtonComponent', () => {
  let component: ServicioButtonComponent;
  let fixture: ComponentFixture<ServicioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
