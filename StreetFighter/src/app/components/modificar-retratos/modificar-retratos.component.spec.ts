import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarRetratosComponent } from './modificar-retratos.component';

describe('ModificarRetratosComponent', () => {
  let component: ModificarRetratosComponent;
  let fixture: ComponentFixture<ModificarRetratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarRetratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarRetratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
