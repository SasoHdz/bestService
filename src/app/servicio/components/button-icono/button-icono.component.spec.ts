import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconoComponent } from './button-icono.component';

describe('ButtonIconoComponent', () => {
  let component: ButtonIconoComponent;
  let fixture: ComponentFixture<ButtonIconoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIconoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
