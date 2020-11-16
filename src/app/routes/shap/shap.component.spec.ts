import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapComponent } from './shap.component';

describe('ShapComponent', () => {
  let component: ShapComponent;
  let fixture: ComponentFixture<ShapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
