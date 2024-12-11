import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosesionComponent } from './inicio-sesion.component';

describe('InicioSesionComponent', () => {
  let component: IniciosesionComponent;
  let fixture: ComponentFixture<IniciosesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IniciosesionComponent]
    });
    fixture = TestBed.createComponent(IniciosesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
