import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntesLucharComponent } from './antes-luchar.component';

describe('AntesLucharComponent', () => {
  let component: AntesLucharComponent;
  let fixture: ComponentFixture<AntesLucharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntesLucharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntesLucharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
