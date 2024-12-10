import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulserasComponent } from './pulseras.component';

describe('PulserasComponent', () => {
  let component: PulserasComponent;
  let fixture: ComponentFixture<PulserasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PulserasComponent]
    });
    fixture = TestBed.createComponent(PulserasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
