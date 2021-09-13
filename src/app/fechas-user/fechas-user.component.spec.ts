import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasUserComponent } from './fechas-user.component';

describe('FechasUserComponent', () => {
  let component: FechasUserComponent;
  let fixture: ComponentFixture<FechasUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechasUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
