import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesMobileComponent } from './features-mobile.component';

describe('FeaturesMobileComponent', () => {
  let component: FeaturesMobileComponent;
  let fixture: ComponentFixture<FeaturesMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
