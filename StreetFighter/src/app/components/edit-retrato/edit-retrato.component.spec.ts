import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRetratoComponent } from './edit-retrato.component';

describe('EditRetratoComponent', () => {
  let component: EditRetratoComponent;
  let fixture: ComponentFixture<EditRetratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRetratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRetratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
