import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMetricsComponent } from './vehicle-metrics.component';

describe('VehicleMetricsComponent', () => {
  let component: VehicleMetricsComponent;
  let fixture: ComponentFixture<VehicleMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleMetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
