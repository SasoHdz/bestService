import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutServicioComponent } from './layout-servicio.component';

describe('LayoutServicioComponent', () => {
  let component: LayoutServicioComponent;
  let fixture: ComponentFixture<LayoutServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
