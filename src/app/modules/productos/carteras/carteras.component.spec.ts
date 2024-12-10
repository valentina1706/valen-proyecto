import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarterasComponent } from './carteras.component';

describe('CarterasComponent', () => {
  let component: CarterasComponent;
  let fixture: ComponentFixture<CarterasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarterasComponent]
    });
    fixture = TestBed.createComponent(CarterasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
