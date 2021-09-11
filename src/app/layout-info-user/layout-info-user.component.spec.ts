import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInfoUserComponent } from './layout-info-user.component';

describe('LayoutInfoUserComponent', () => {
  let component: LayoutInfoUserComponent;
  let fixture: ComponentFixture<LayoutInfoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutInfoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInfoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
