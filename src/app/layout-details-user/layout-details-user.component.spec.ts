import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDetailsUserComponent } from './layout-details-user.component';

describe('LayoutDetailsUserComponent', () => {
  let component: LayoutDetailsUserComponent;
  let fixture: ComponentFixture<LayoutDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutDetailsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
