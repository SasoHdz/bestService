import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSelectServiceComponent } from './layout-select-service.component';

describe('LayoutSelectServiceComponent', () => {
  let component: LayoutSelectServiceComponent;
  let fixture: ComponentFixture<LayoutSelectServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSelectServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSelectServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
