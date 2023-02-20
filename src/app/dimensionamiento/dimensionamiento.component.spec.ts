import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionamientoComponent } from './dimensionamiento.component';

describe('DimensionamientoComponent', () => {
  let component: DimensionamientoComponent;
  let fixture: ComponentFixture<DimensionamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimensionamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
