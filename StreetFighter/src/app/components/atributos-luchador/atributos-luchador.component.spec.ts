import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosLuchadorComponent } from './atributos-luchador.component';

describe('AtributosLuchadorComponent', () => {
  let component: AtributosLuchadorComponent;
  let fixture: ComponentFixture<AtributosLuchadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosLuchadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosLuchadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
