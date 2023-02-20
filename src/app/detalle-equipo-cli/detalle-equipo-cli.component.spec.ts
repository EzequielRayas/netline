import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEquipoCliComponent } from './detalle-equipo-cli.component';

describe('DetalleEquipoCliComponent', () => {
  let component: DetalleEquipoCliComponent;
  let fixture: ComponentFixture<DetalleEquipoCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleEquipoCliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleEquipoCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
