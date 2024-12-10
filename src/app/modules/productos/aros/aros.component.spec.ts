import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArosComponent } from './aros.component';

describe('ArosComponent', () => {
  let component: ArosComponent;
  let fixture: ComponentFixture<ArosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArosComponent]
    });
    fixture = TestBed.createComponent(ArosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
