import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTerminosUserComponent } from './layout-terminos-user.component';

describe('LayoutTerminosUserComponent', () => {
  let component: LayoutTerminosUserComponent;
  let fixture: ComponentFixture<LayoutTerminosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTerminosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTerminosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
