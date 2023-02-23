import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarOrdComponent } from './eliminar-ord.component';

describe('EliminarOrdComponent', () => {
  let component: EliminarOrdComponent;
  let fixture: ComponentFixture<EliminarOrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarOrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarOrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
