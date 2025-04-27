import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleControlsComponent } from './vehicle-controls.component';

describe('VehicleControlsComponent', () => {
  let component: VehicleControlsComponent;
  let fixture: ComponentFixture<VehicleControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
