import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojesComponent } from './relojes.component';

describe('RelojesComponent', () => {
  let component: RelojesComponent;
  let fixture: ComponentFixture<RelojesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelojesComponent]
    });
    fixture = TestBed.createComponent(RelojesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
